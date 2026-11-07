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
			border: 'border-blue-400/20',
			background: 'bg-blue-400/5',
			text: 'text-blue-300',
			bullet: 'text-blue-400'
		},
		purple: {
			border: 'border-purple-400/20',
			background: 'bg-purple-400/5',
			text: 'text-purple-300',
			bullet: 'text-purple-400'
		},
		green: {
			border: 'border-green-400/20',
			background: 'bg-green-400/5',
			text: 'text-green-300',
			bullet: 'text-green-400'
		},
		yellow: {
			border: 'border-yellow-400/20',
			background: 'bg-yellow-400/5',
			text: 'text-yellow-300',
			bullet: 'text-yellow-400'
		},
		amber: {
			border: 'border-amber-400/20',
			background: 'bg-amber-400/5',
			text: 'text-amber-300',
			bullet: 'text-amber-400'
		},
		red: {
			border: 'border-red-400/20',
			background: 'bg-red-400/5',
			text: 'text-red-300',
			bullet: 'text-red-400'
		},
		sky: {
			border: 'border-sky-400/20',
			background: 'bg-sky-400/5',
			text: 'text-sky-300',
			bullet: 'text-sky-400'
		},
		indigo: {
			border: 'border-indigo-400/20',
			background: 'bg-indigo-400/5',
			text: 'text-indigo-300',
			bullet: 'text-indigo-400'
		},
		orange: {
			border: 'border-orange-400/20',
			background: 'bg-orange-400/5',
			text: 'text-orange-300',
			bullet: 'text-orange-400'
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

<div class="container mx-auto max-w-6xl px-5 py-12">
	<h1 class="mb-8 text-3xl font-bold md:text-4xl">My Personal Values</h1>

	<p class="text-muted mb-12 max-w-3xl text-lg">
		These values guide my decisions and actions in life. They represent what I
		believe in and what I aspire to be.
	</p>

	<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
		{#each categories as category, categoryIndex}
			<div
				class="flex flex-col rounded-lg border {classesMap[category.color]
					.border} {classesMap[category.color]
					.background} p-6 transition-colors"
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
