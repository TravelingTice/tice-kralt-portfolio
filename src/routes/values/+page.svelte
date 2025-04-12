<script lang="ts">
	import SEO from '$lib/components/SEO.svelte'
	import { categories } from './values'

	const classesMap = {
		blue: {
			border: 'border-blue-100',
			background: 'bg-blue-50/10',
			text: 'text-blue-800',
			bullet: 'text-blue-500'
		},
		purple: {
			border: 'border-purple-100',
			background: 'bg-purple-50/10',
			text: 'text-purple-800',
			bullet: 'text-purple-500'
		},
		green: {
			border: 'border-green-100',
			background: 'bg-green-50/10',
			text: 'text-green-800',
			bullet: 'text-green-500'
		},
		yellow: {
			border: 'border-yellow-100',
			background: 'bg-yellow-50/10',
			text: 'text-yellow-800',
			bullet: 'text-yellow-500'
		},
		amber: {
			border: 'border-amber-100',
			background: 'bg-amber-50/10',
			text: 'text-amber-800',
			bullet: 'text-amber-500'
		},
		red: {
			border: 'border-red-100',
			background: 'bg-red-50/10',
			text: 'text-red-800',
			bullet: 'text-red-500'
		},
		sky: {
			border: 'border-sky-100',
			background: 'bg-sky-50/10',
			text: 'text-sky-800',
			bullet: 'text-sky-500'
		},
		indigo: {
			border: 'border-indigo-100',
			background: 'bg-indigo-50/10',
			text: 'text-indigo-800',
			bullet: 'text-indigo-500'
		},
		orange: {
			border: 'border-orange-100',
			background: 'bg-orange-50/10',
			text: 'text-orange-800',
			bullet: 'text-orange-500'
		}
	} as const
</script>

<SEO
	title="My Values"
	description="Personal values that guide Tice Kralt's life and decision making"
/>

<div class="container mx-auto max-w-6xl px-4 py-12">
	<h1 class="mb-8 text-3xl font-bold md:text-4xl">My Personal Values</h1>

	<p class="mb-12 max-w-3xl text-lg">
		These values guide my decisions and actions in life. They represent what I
		believe in and what I aspire to be.
	</p>

	<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
		{#each categories as category}
			<div
				class="flex flex-col rounded-lg border {classesMap[category.color]
					.border} {classesMap[category.color]
					.background} p-6 shadow-sm transition-all hover:shadow-md"
			>
				<h2 class="mb-4 text-xl font-bold {classesMap[category.color].text}">
					{category.name}
				</h2>
				<ul class="flex-grow space-y-3">
					{#each category.values as value}
						<li class="flex items-start">
							<span class="mr-2 {classesMap[category.color].bullet}">•</span>
							<span>{value.text}</span>
						</li>
					{/each}
				</ul>
			</div>
		{/each}
	</div>
</div>
