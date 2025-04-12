<script lang="ts">
	import { ExternalLinkIcon } from 'svelte-feather-icons'
	import ImageCarousel from './ImageCarousel.svelte'
	import Modal from './Modal.svelte'

	const {
		isOpen = false,
		title = '',
		images = [],
		description = '',
		url = '',
		onClose = () => {}
	} = $props<{
		isOpen: boolean
		title: string
		images: string[]
		description: string
		url?: string
		onClose: () => void
	}>()

	$effect(() => {
		if (isOpen) {
			document.body.classList.add('no-scroll')
		} else {
			document.body.classList.remove('no-scroll')
		}
	})
</script>

<Modal {isOpen} {title} {onClose}>
	<div class="mb-8">
		<ImageCarousel {images} />
	</div>

	<div class="prose mb-6 max-w-none">
		<p>{description}</p>
	</div>

	{#if url}
		<div class="mt-6 flex justify-center">
			<a
				href={url}
				target="_blank"
				rel="noopener noreferrer"
				class="inline-flex items-center gap-2 rounded-lg bg-black px-6 py-3 text-white transition-colors hover:bg-gray-800"
			>
				Visit Website <ExternalLinkIcon size="18" />
			</a>
		</div>
	{/if}
</Modal>
