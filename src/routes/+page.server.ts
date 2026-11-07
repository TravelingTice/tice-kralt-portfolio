import { getEpisodes, getFollowerCounts } from '$lib/server/socials'
import { getMapMyTravelsMrr } from '$lib/server/stripe'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ setHeaders }) => {
	setHeaders({
		'cache-control':
			'public, max-age=0, s-maxage=21600, stale-while-revalidate=86400'
	})

	const [counts, episodes, mrr] = await Promise.all([
		getFollowerCounts(),
		getEpisodes(),
		getMapMyTravelsMrr()
	])

	return { counts, episodes, mrr }
}
