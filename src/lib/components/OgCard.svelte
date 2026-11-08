<script lang="ts">
	import type { Project } from '$lib/projects'
	import type { Mrr } from '$lib/server/stripe'

	// Inline styles only: this also renders through Satori for /og-image.png
	const {
		projects,
		total,
		mrr,
		avatar
	}: {
		projects: Project[]
		total: number
		mrr: Mrr | null
		avatar: string
	} = $props()

	const money = (amount: number, currency = 'usd') =>
		new Intl.NumberFormat('en', {
			style: 'currency',
			currency,
			minimumFractionDigits: Number.isInteger(amount) ? 0 : 2
		}).format(amount)

	const revenueLabel = (p: Project) =>
		p.stripeMrr && mrr
			? `${money(mrr.amount, mrr.currency)}/mo`
			: p.allTimeRevenue
				? money(p.allTimeRevenue)
				: '$0'
</script>

<div
	style="display: flex; width: 1200px; height: 630px; background: #0a0a0a; background-image: radial-gradient(circle at 18% 0%, rgba(108, 180, 238, 0.16), rgba(10, 10, 10, 0) 55%); color: #ededed; font-family: Inter; padding: 64px 72px;"
>
	<div
		style="display: flex; flex-direction: column; justify-content: space-between; width: 470px;"
	>
		<div style="display: flex; flex-direction: column;">
			<div style="display: flex; align-items: flex-end;">
				<div
					style="display: flex; font-family: 'Inter Tight'; font-weight: 700; font-size: 168px; line-height: 1; letter-spacing: -2px; color: #f5f5f5;"
				>
					Tice
				</div>
				<img
					src={avatar}
					alt=""
					width="88"
					height="88"
					style="width: 88px; height: 88px; border-radius: 44px; margin-left: 22px; margin-bottom: 26px; border: 2px solid #232323;"
				/>
			</div>
			<div
				style="display: flex; font-size: 28px; color: #a1a1a1; margin-top: 18px;"
			>
				Solo founder and online builder
			</div>
		</div>
		<div style="display: flex; font-size: 24px; color: #6b6b6b;">
			ticekralt.com
		</div>
	</div>

	<div
		style="display: flex; flex-direction: column; width: 482px; margin-left: 56px; padding-left: 48px; border-left: 1px solid #232323;"
	>
		<div
			style="display: flex; justify-content: space-between; font-size: 17px; letter-spacing: 3px; color: #6b6b6b; padding-bottom: 14px; border-bottom: 1px solid #232323; margin-bottom: 8px;"
		>
			<span>MY STARTUPS</span>
			<span>{total}</span>
		</div>
		{#each projects as project (project.title)}
			<div style="display: flex; align-items: center; padding: 11px 0;">
				<img
					src={project.logo}
					alt=""
					width="46"
					height="46"
					style="width: 46px; height: 46px; border-radius: 11px; border: 1px solid #232323; object-fit: cover;"
				/>
				<div
					style="display: flex; flex: 1; min-width: 0; font-size: 25px; font-weight: 500; margin: 0 20px 0 18px; color: #ededed; overflow: hidden; white-space: nowrap; text-overflow: ellipsis;"
				>
					{project.title}
				</div>
				<div
					style="display: flex; font-size: 23px; color: {revenueLabel(
						project
					) === '$0'
						? '#6b6b6b'
						: '#6ee7b7'};"
				>
					{revenueLabel(project)}
				</div>
			</div>
		{/each}
	</div>
</div>
