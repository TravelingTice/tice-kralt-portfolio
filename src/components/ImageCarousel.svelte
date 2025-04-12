<script lang="ts">
	import { ChevronLeftIcon, ChevronRightIcon } from 'svelte-feather-icons'
	import { fade } from 'svelte/transition'

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
		<div
			class="flex h-[300px] items-center justify-center overflow-hidden rounded-lg bg-gray-50 sm:h-[400px]"
		>
			{#key currentIndex}
				<img
					src={images[currentIndex]}
					alt="Project image"
					class="max-h-[300px] w-auto object-contain sm:max-h-[400px]"
					in:fade={{ duration: 250 }}
				/>
			{/key}
		</div>

		{#if images.length > 1}
			<!-- Navigation buttons -->
			<button
				class="absolute top-1/2 left-2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-gray-800 shadow-md transition-colors duration-200 hover:bg-white"
				on:click={prevImage}
				aria-label="Previous image"
			>
				<ChevronLeftIcon size="20" />
			</button>

			<button
				class="absolute top-1/2 right-2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-gray-800 shadow-md transition-colors duration-200 hover:bg-white"
				on:click={nextImage}
				aria-label="Next image"
			>
				<ChevronRightIcon size="20" />
			</button>

			<!-- Dot indicators -->
			<div class="mt-2 flex justify-center gap-2">
				{#each images as _, index}
					<button
						class="h-2 w-2 rounded-full transition-all duration-200 {currentIndex ===
						index
							? 'scale-110 bg-black'
							: 'bg-gray-300 hover:bg-gray-400'}"
						on:click={() => goToImage(index)}
						aria-label={`Go to image ${index + 1}`}
					></button>
				{/each}
			</div>
		{/if}
	{/if}
</div>
