<script lang="ts">
	const {
		title,
		excerpt,
		images,
		description = '',
		url = ''
	} = $props<{
		title: string
		excerpt: string
		images: string[]
		description?: string
		url?: string
	}>()

	import ProjectModal from './ProjectModal.svelte'

	let isModalOpen = $state(false)

	function openModal() {
		isModalOpen = true
	}

	function closeModal() {
		isModalOpen = false
	}
</script>

<div
	class="group flex flex-col overflow-hidden rounded-xl bg-white ring-1 ring-ink/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/10"
>
	<div class="h-48 w-full cursor-pointer overflow-hidden" on:click={openModal}>
		<img
			src={images[0]}
			alt={title}
			class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
		/>
	</div>
	<div class="flex flex-grow flex-col p-6">
		<h3 class="mb-2 text-xl font-bold">{title}</h3>
		<p class="mb-5 text-gray-600">{excerpt}</p>
		<button
			class="mt-auto self-start rounded-full bg-ink px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-accent"
			on:click={openModal}
		>
			View more
		</button>
	</div>
</div>

<ProjectModal
	isOpen={isModalOpen}
	{title}
	{images}
	{description}
	{url}
	onClose={closeModal}
/>
