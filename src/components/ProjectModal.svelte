<script lang="ts">
	import { XIcon, ExternalLinkIcon } from 'svelte-feather-icons'

	export let isOpen: boolean = false
	export let title: string = ''
	export let imageUrl: string = ''
	export let description: string = ''
	export let url: string = ''
	export let onClose: () => void = () => {}
</script>

{#if isOpen}
	<div
		class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
		on:click={onClose}
	>
		<div
			class="relative max-h-[90vh] w-full max-w-3xl overflow-auto rounded-lg bg-white p-6 shadow-xl"
			on:click|stopPropagation={() => {}}
		>
			<button
				class="absolute top-4 right-4 rounded-full p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
				on:click={onClose}
			>
				<XIcon size="24" />
			</button>

			<div class="mb-6 h-64 w-full">
				<img
					src={imageUrl}
					alt={title}
					class="h-full w-full rounded-lg object-cover"
				/>
			</div>

			<h2 class="mb-4 text-2xl font-bold">{title}</h2>

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
