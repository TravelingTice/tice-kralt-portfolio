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

<div class="overflow-hidden rounded-lg bg-white shadow-lg">
	<div class="h-48 w-full cursor-pointer" on:click={openModal}>
		<img src={images[0]} alt={title} class="h-full w-full object-cover" />
	</div>
	<div class="p-6">
		<h3 class="mb-2 text-xl font-bold">{title}</h3>
		<p class="mb-4 text-gray-600">{excerpt}</p>
		<button
			class="rounded-lg bg-black px-4 py-2 text-sm text-white transition-colors hover:bg-gray-800"
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
