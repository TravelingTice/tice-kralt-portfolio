import { Resvg } from '@resvg/resvg-js'
import satori from 'satori'
import { html } from 'satori-html'
import { render } from 'svelte/server'
import OgCard from '$lib/components/OgCard.svelte'
import { projects, sortProjects } from '$lib/projects'
import { getMapMyTravelsMrr } from './stripe'

export async function getOgCardProps() {
	const mrr = await getMapMyTravelsMrr()
	return {
		projects: sortProjects(projects, mrr?.amount ?? null).slice(0, 6),
		total: projects.length,
		mrr,
		avatar: '/avatar.png'
	}
}

// Satori won't fetch from localhost, so images go in as data URIs
async function dataUri(fetch: typeof globalThis.fetch, path: string) {
	const res = await fetch(path)
	const bytes = new Uint8Array(await res.arrayBuffer())
	const binary = bytes.reduce(
		(str, byte) => str + String.fromCharCode(byte),
		''
	)
	return `data:${res.headers.get('content-type') ?? 'image/png'};base64,${btoa(binary)}`
}

// Without a browser user agent Google Fonts serves TTF, which Satori needs
async function googleFont(family: string, weight: 400 | 500 | 700) {
	const css = await (
		await fetch(
			`https://fonts.googleapis.com/css2?family=${family.replace(/ /g, '+')}:wght@${weight}`
		)
	).text()
	const url = css.match(/src: url\((.+?)\)/)?.[1]
	if (!url) throw new Error(`No font file for ${family} ${weight}`)
	return { name: family, weight, data: await (await fetch(url)).arrayBuffer() }
}

let fonts: ReturnType<typeof loadFonts> | undefined
const loadFonts = () =>
	Promise.all([
		googleFont('Inter Tight', 700),
		googleFont('Inter', 400),
		googleFont('Inter', 500)
	] as const)

export async function renderOgPng(fetch: typeof globalThis.fetch) {
	fonts ??= loadFonts().catch((error) => {
		fonts = undefined
		throw error
	})
	const props = await getOgCardProps()
	const paths = [props.avatar, ...props.projects.map((p) => p.logo)]
	const uris = new Map(
		await Promise.all(
			paths.map(async (path) => [path, await dataUri(fetch, path)] as const)
		)
	)
	// satori-html is slow on large attributes, so images are swapped in after parsing
	const tree = html(render(OgCard, { props }).body.replace(/<!--.*?-->/g, ''))
	const inlineImages = (node: unknown) => {
		if (!node || typeof node !== 'object') return
		const { type, props } = node as {
			type?: string
			props?: { src?: string; children?: unknown }
		}
		if (type === 'img' && props?.src)
			props.src = uris.get(props.src) ?? props.src
		const children = props?.children
		if (Array.isArray(children)) children.forEach(inlineImages)
		else inlineImages(children)
	}
	inlineImages(tree)
	const svg = await satori(tree, {
		width: 1200,
		height: 630,
		fonts: [...(await fonts)]
	})
	return new Resvg(svg).render().asPng()
}
