<script lang="ts">
	import SEO from '$lib/components/SEO.svelte'
	import ValueModal from './ValueModal.svelte'
	import { categories, type Category, type Value } from './values'
	import { page } from '$app/state'
	import { goto } from '$app/navigation'
	import { onMount } from 'svelte'

	// State for the modal
	let isModalOpen = $state(false)
	let selectedCategory = $state<Category | null>(null)
	let selectedValue = $state<Value | null>(null)

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

	// Function to open a value modal
	const openValueModal = (categoryIndex: number, valueIndex: number) => {
		selectedCategory = categories[categoryIndex]
		selectedValue = selectedCategory?.values[valueIndex] || null
		isModalOpen = true

		// Update URL
		const categoryName = selectedCategory?.name
			.toLowerCase()
			.replace(/\W+/g, '-')

		goto(`/values?value=${categoryName}-${valueIndex}`, {
			keepFocus: true,
			noScroll: true
		})
	}

	// Function to close the modal
	const closeModal = () => {
		isModalOpen = false
		selectedCategory = null
		selectedValue = null
		goto('/values', { keepFocus: true, noScroll: true })
	}

	// Check URL for initial modal opening
	onMount(() => {
		const urlValue = page.url.searchParams.get('value')
		if (urlValue) {
			const [categoryName, valueIndexStr] = urlValue.split('-')
			const valueIndex = parseInt(valueIndexStr)

			if (!isNaN(valueIndex)) {
				const categoryIndex = categories.findIndex(
					(c) => c.name.toLowerCase().replace(/\W+/g, '-') === categoryName
				)

				if (categoryIndex !== -1) {
					openValueModal(categoryIndex, valueIndex)
				}
			}
		}
	})
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
		{#each categories as category, categoryIndex}
			<div
				class="flex flex-col rounded-lg border {classesMap[category.color]
					.border} {classesMap[category.color]
					.background} p-6 shadow-sm transition-all hover:shadow-md"
			>
				<h2 class="mb-4 text-xl font-bold {classesMap[category.color].text}">
					{category.name}
				</h2>
				<ul class="flex-grow space-y-3">
					{#each category.values as value, valueIndex}
						<li class="flex items-start">
							<button
								class="flex items-start text-left hover:opacity-80"
								onclick={() => openValueModal(categoryIndex, valueIndex)}
							>
								<span class="mr-2 {classesMap[category.color].bullet}">•</span>
								<span>{value.text}</span>
							</button>
						</li>
					{/each}
				</ul>
			</div>
		{/each}
	</div>
</div>

<ValueModal
	isOpen={isModalOpen}
	category={selectedCategory}
	value={selectedValue}
	onClose={closeModal}
/>
