<script lang="ts">
	import type { Snippet } from 'svelte'
	import { XIcon } from 'svelte-feather-icons'

	const {
		isOpen = false,
		title = '',
		onClose = () => {},
		children
	} = $props<{
		isOpen: boolean
		title: string
		onClose: () => void
		children: Snippet
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
		class="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
		on:click={onClose}
		on:keydown={(e) => e.key === 'Escape' && onClose()}
		tabindex="0"
		role="dialog"
		aria-modal="true"
		aria-labelledby="modal-title"
	>
		<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
		<div
			class="border-line bg-surface relative max-h-[90vh] w-full max-w-3xl overflow-auto rounded-2xl border p-6 shadow-2xl"
			on:click|stopPropagation={() => {}}
			on:keydown|stopPropagation={() => {}}
			tabindex="-1"
			role="document"
		>
			<button
				aria-label="Close"
				class="text-faint hover:bg-line hover:text-ink absolute top-4 right-4 rounded-full p-1 transition-colors"
				on:click={onClose}
			>
				<XIcon size="24" />
			</button>

			<h2 id="modal-title" class="mb-6 text-2xl font-bold">{title}</h2>

			{@render children()}
		</div>
	</div>
{/if}
