import { getEpisodes, getFollowerCounts } from '$lib/server/socials'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ setHeaders }) => {
	setHeaders({
		'cache-control':
			'public, max-age=0, s-maxage=21600, stale-while-revalidate=86400'
	})

	const [counts, episodes] = await Promise.all([
		getFollowerCounts(),
		getEpisodes()
	])

	return { counts, episodes }
}
