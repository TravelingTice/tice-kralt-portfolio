import { renderOgPng } from '$lib/server/og'
import type { RequestHandler } from './$types'

export const GET: RequestHandler = async ({ fetch }) =>
	new Response(new Uint8Array(await renderOgPng(fetch)), {
		headers: {
			'content-type': 'image/png',
			'cache-control':
				'public, max-age=3600, s-maxage=21600, stale-while-revalidate=86400'
		}
	})
