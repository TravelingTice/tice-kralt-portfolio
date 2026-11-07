const UA =
	'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130 Safari/537.36'

// ponytail: scrapes public pages, falls back to these when a platform blocks us. Bump them now and then.
export const FALLBACK_COUNTS = {
	x: 136,
	youtube: 4980,
	instagram: 750,
	podcast: 54
}

export type Episode = {
	id: string
	number: string
	title: string
	published: string
	thumbnail: string
}

export function parseCompact(text: string): number {
	const match = text.replace(/,/g, '').match(/([\d.]+)\s*([KkMm])?/)
	if (!match) return NaN
	const multiplier = { k: 1e3, m: 1e6 }[match[2]?.toLowerCase() ?? ''] ?? 1
	return Math.round(parseFloat(match[1]) * multiplier)
}

async function get(url: string, headers: Record<string, string> = {}) {
	const res = await fetch(url, {
		headers: { 'user-agent': UA, 'accept-language': 'en', ...headers },
		signal: AbortSignal.timeout(4000)
	})
	if (!res.ok) throw new Error(`${res.status} ${url}`)
	return res.text()
}

function count(text: string, pattern: RegExp) {
	const value = parseCompact(text.match(pattern)?.[1] ?? '')
	if (Number.isNaN(value)) throw new Error(`No count for ${pattern}`)
	return value
}

const youtube = async (handle: string) =>
	count(
		await get(`https://www.youtube.com/@${handle}`),
		/"content":"([\d.,]+[KM]?) subscribers"/
	)

const instagram = async () =>
	count(
		await get('https://www.instagram.com/travelingtice/', {
			'user-agent': 'facebookexternalhit/1.1'
		}),
		/content="([\d.,]+[KkMm]?) Followers/
	)

const x = async () =>
	JSON.parse(await get('https://api.fxtwitter.com/travelingtice')).user
		.followers as number

export async function getFollowerCounts() {
	const [xCount, youtubeCount, instagramCount, podcastCount] =
		await Promise.allSettled([
			x(),
			youtube('travelingtice'),
			instagram(),
			youtube('TicesTechTrek')
		])
	const pick = (r: PromiseSettledResult<number>, fallback: number) =>
		r.status === 'fulfilled' ? r.value : fallback

	return {
		x: pick(xCount, FALLBACK_COUNTS.x),
		youtube: pick(youtubeCount, FALLBACK_COUNTS.youtube),
		instagram: pick(instagramCount, FALLBACK_COUNTS.instagram),
		podcast: pick(podcastCount, FALLBACK_COUNTS.podcast)
	}
}

const PODCAST_FEED =
	'https://www.youtube.com/feeds/videos.xml?channel_id=UCOmdvAVR8auuEh2e7Xtefpg'

export function parseFeed(xml: string): Episode[] {
	return [...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)].map(([, entry]) => {
		const id = entry.match(/<yt:videoId>([^<]+)/)?.[1] ?? ''
		const rawTitle = (entry.match(/<title>([^<]+)/)?.[1] ?? '')
			.replace(/&quot;/g, '"')
			.replace(/&amp;/g, '&')
			.replace(/&#39;/g, "'")
		return {
			id,
			number: rawTitle.match(/#(\d+)\s*$/)?.[1] ?? '',
			title: rawTitle.replace(/\s*-\s*Tice's Tech Trek.*$/, ''),
			published: entry.match(/<published>([^<]+)/)?.[1] ?? '',
			thumbnail: `https://i.ytimg.com/vi/${id}/mqdefault.jpg`
		}
	})
}

export async function getEpisodes(): Promise<Episode[]> {
	try {
		return parseFeed(await get(PODCAST_FEED))
	} catch {
		return []
	}
}
