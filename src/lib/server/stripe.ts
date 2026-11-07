import { env } from '$env/dynamic/private'

type Price = {
	unit_amount: number | null
	currency: string
	recurring: {
		interval: 'day' | 'week' | 'month' | 'year'
		interval_count: number
	}
}

type Subscription = {
	id: string
	items: { data: { price: Price; quantity?: number }[] }
	discount: {
		coupon: { percent_off: number | null; amount_off: number | null }
	} | null
}

export type Mrr = { amount: number; currency: string }

const MONTHS_PER_INTERVAL = { day: 12 / 365, week: 12 / 52, month: 1, year: 12 }

export function subscriptionMrr(sub: Subscription): number {
	let cents = 0
	for (const { price, quantity = 1 } of sub.items.data) {
		const months =
			MONTHS_PER_INTERVAL[price.recurring.interval] *
			price.recurring.interval_count
		cents += ((price.unit_amount ?? 0) * quantity) / months
	}
	const coupon = sub.discount?.coupon
	if (coupon?.percent_off) cents *= 1 - coupon.percent_off / 100
	// ponytail: treats amount_off as monthly, fine for the simple coupons in use
	if (coupon?.amount_off) cents = Math.max(0, cents - coupon.amount_off)
	return cents
}

// Restricted key with "Subscriptions: Read", like TrustMRR asks for
export async function getMapMyTravelsMrr(): Promise<Mrr | null> {
	const key = env.STRIPE_MAPMYTRAVELS_KEY
	if (!key) return null

	try {
		let cents = 0
		let currency = 'usd'
		let startingAfter = ''
		for (;;) {
			const res = await fetch(
				`https://api.stripe.com/v1/subscriptions?status=active&limit=100${startingAfter && `&starting_after=${startingAfter}`}`,
				{
					headers: {
						authorization: `Bearer ${key}`,
						'stripe-version': '2024-06-20'
					},
					signal: AbortSignal.timeout(5000)
				}
			)
			if (!res.ok) throw new Error(`Stripe ${res.status}`)
			const page: { data: Subscription[]; has_more: boolean } = await res.json()
			for (const sub of page.data) {
				cents += subscriptionMrr(sub)
				currency = sub.items.data[0]?.price.currency ?? currency
			}
			if (!page.has_more || !page.data.length) break
			startingAfter = page.data[page.data.length - 1].id
		}
		return { amount: Math.round(cents) / 100, currency }
	} catch {
		return null
	}
}
