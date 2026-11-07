<script lang="ts">
	import type { Project } from '$lib/projects'
	import type { Mrr } from '$lib/server/stripe'
	import ProjectModal from './ProjectModal.svelte'

	const {
		title,
		excerpt,
		logo,
		images,
		description,
		url,
		allTimeRevenue = 0,
		stripeMrr,
		mrr = null
	}: Project & { mrr?: Mrr | null } = $props()

	const money = (amount: number, currency = 'usd') =>
		new Intl.NumberFormat('en', {
			style: 'currency',
			currency,
			minimumFractionDigits: Number.isInteger(amount) ? 0 : 2
		}).format(amount)

	let isModalOpen = $state(false)
</script>

<button
	onclick={() => (isModalOpen = true)}
	class="group hover:bg-surface -mx-3 flex w-[calc(100%+1.5rem)] items-center gap-4 rounded-xl px-3 py-3 text-left transition-colors"
>
	<img
		src={logo}
		alt=""
		width="44"
		height="44"
		loading="lazy"
		class="bg-surface ring-line h-11 w-11 shrink-0 rounded-[11px] object-cover ring-1"
	/>
	<span class="min-w-0 flex-1">
		<span class="text-ink block font-medium">{title}</span>
		<span class="text-muted block truncate text-sm">{excerpt}</span>
	</span>
	<span class="shrink-0 text-right tabular-nums">
		{#if stripeMrr && mrr}
			<span class="block text-sm text-emerald-300"
				>{money(mrr.amount, mrr.currency)}<span class="text-emerald-300/60"
					>/mo</span
				></span
			>
			<span class="text-faint block text-[11px]">MRR</span>
		{:else if allTimeRevenue}
			<span class="block text-sm text-emerald-300">{money(allTimeRevenue)}</span
			>
			<span class="text-faint block text-[11px]">all-time</span>
		{:else}
			<span class="text-faint text-sm">$0</span>
		{/if}
	</span>
</button>

<ProjectModal
	isOpen={isModalOpen}
	{title}
	{images}
	{description}
	{url}
	onClose={() => (isModalOpen = false)}
/>
