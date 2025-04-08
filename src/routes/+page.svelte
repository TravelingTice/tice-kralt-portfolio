<script lang="ts">
	import breakpoint, { Breakpoints } from '$lib/helpers/breakpoint'
</script>

<section class="w-full">
	<div class="relative">
		{#if $breakpoint < Breakpoints.md}
			<img
				src="/header_image_smaller.webp"
				alt="Tice Kralt exploring the Canton Fair in China"
				class="h-[50vh] w-full object-cover md:hidden"
			/>
		{:else}
			<img
				src="/header_image.webp"
				alt="Tice Kralt exploring the Canton Fair in China"
				class="hidden h-[60vh] w-full object-cover md:block"
			/>
		{/if}

		<div class="absolute inset-0 flex items-end bg-black/20">
			<div class="p-6 text-white md:p-10">
				<h1 class="mb-2 text-3xl font-bold md:text-5xl">Tice Kralt</h1>
				<p class="max-w-lg text-lg md:text-xl">
					Exploring global business opportunities
				</p>
			</div>
		</div>
	</div>
</section>

<section></section>
