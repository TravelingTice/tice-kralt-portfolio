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
	{#if images.length}
		<div class="mb-8">
			<ImageCarousel {images} />
		</div>
	{/if}

	<p class="text-muted mb-6 leading-relaxed">{description}</p>

	{#if url}
		<div class="mt-6 flex justify-center">
			<a
				href={url}
				target="_blank"
				rel="noopener noreferrer"
				class="bg-ink text-paper inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors hover:bg-white"
			>
				Visit website <ExternalLinkIcon size="16" />
			</a>
		</div>
	{/if}
</Modal>
