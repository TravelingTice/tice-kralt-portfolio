<script lang="ts">
	import { ChevronLeftIcon, ChevronRightIcon } from 'svelte-feather-icons'

	const { images = [] } = $props<{ images: string[] }>()

	let currentIndex = $state(0)

	const nextImage = () => {
		currentIndex = (currentIndex + 1) % images.length
	}

	const prevImage = () => {
		currentIndex = (currentIndex - 1 + images.length) % images.length
	}

	const goToImage = (index: number) => {
		currentIndex = index
	}
</script>

<div class="relative w-full">
	{#if images.length > 0}
		<div class="flex h-auto justify-center overflow-hidden rounded-lg">
			<img
				src={images[currentIndex]}
				alt="Project image"
				class="max-h-[400px] w-auto object-contain"
			/>
		</div>

		{#if images.length > 1}
			<!-- Navigation buttons -->
			<button
				class="absolute top-1/2 left-2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-gray-800 shadow-md hover:bg-white"
				on:click={prevImage}
				aria-label="Previous image"
			>
				<ChevronLeftIcon size="20" />
			</button>

			<button
				class="absolute top-1/2 right-2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-gray-800 shadow-md hover:bg-white"
				on:click={nextImage}
				aria-label="Next image"
			>
				<ChevronRightIcon size="20" />
			</button>

			<!-- Dot indicators -->
			<div class="mt-2 flex justify-center gap-2">
				{#each images as _, index}
					<button
						class="h-2 w-2 rounded-full {currentIndex === index
							? 'bg-black'
							: 'bg-gray-300'}"
						on:click={() => goToImage(index)}
						aria-label={`Go to image ${index + 1}`}
					></button>
				{/each}
			</div>
		{/if}
	{/if}
</div>
