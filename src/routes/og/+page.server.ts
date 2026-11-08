import { getOgCardProps } from '$lib/server/og'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = () => getOgCardProps()
