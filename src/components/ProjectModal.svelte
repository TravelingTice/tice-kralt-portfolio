<script lang="ts">
	import { XIcon, ExternalLinkIcon } from 'svelte-feather-icons'
	import ImageCarousel from './ImageCarousel.svelte'

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

{#if isOpen}
	<div
		class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
		on:click={onClose}
		on:keydown={(e) => e.key === 'Escape' && onClose()}
		tabindex="0"
		role="dialog"
		aria-modal="true"
		aria-labelledby="modal-title"
	>
		<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
		<div
			class="relative max-h-[90vh] w-full max-w-3xl overflow-auto rounded-lg bg-white p-6 shadow-xl"
			on:click|stopPropagation={() => {}}
			on:keydown|stopPropagation={() => {}}
			tabindex="-1"
			role="document"
		>
			<button
				class="absolute top-4 right-4 rounded-full p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
				on:click={onClose}
			>
				<XIcon size="24" />
			</button>

			<h2 id="modal-title" class="mb-6 text-2xl font-bold">{title}</h2>

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
		</div>
	</div>
{/if}
