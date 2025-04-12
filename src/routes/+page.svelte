<script lang="ts">
	import breakpoint, { Breakpoints } from '$lib/helpers/breakpoint'
	import ProjectsGrid from '../components/ProjectsGrid.svelte'
	import 'simple-line-icons/css/simple-line-icons.css'
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
					Seeking ventures to build and grow
				</p>
			</div>
		</div>
	</div>
</section>

<section>
	<div class="container mx-auto px-4 py-12">
		<h1 class="pb-8 text-center text-3xl font-bold">My projects</h1>
		<ProjectsGrid />
	</div>
</section>

<!-- Podcast Section -->
<section class="bg-black py-12 text-white">
	<div class="container mx-auto px-4">
		<h2 class="mb-6 text-center text-2xl font-bold md:mb-10 md:text-3xl">
			Follow my personal podcast! Tice's Tech Trek
		</h2>
		<div class="flex flex-col items-center md:flex-row">
			<div class="mb-6 flex justify-center md:mb-0 md:w-1/3">
				<img
					src="/podcast/avatar.png"
					alt="Tice's Tech Trek Podcast"
					class="h-40 w-40 rounded-full lg:h-64 lg:w-64"
				/>
			</div>
			<div class="md:w-2/3">
				<p class="mb-6 text-center md:text-left">
					Join me on Tice's Tech Trek where I document my indie hacker journey
					toward financial independence through building online businesses. From
					tech and development to business strategies and life lessons, I share
					insights and experiences gained while carving my path in the digital
					entrepreneurship world.
				</p>
				<div class="flex justify-center space-x-4 md:justify-start">
					<a
						href="https://www.youtube.com/@TicesTechTrek"
						target="_blank"
						rel="noopener noreferrer"
						class="flex h-12 w-12 items-center justify-center rounded-full bg-white text-black transition-transform hover:scale-110 md:h-14 md:w-14"
					>
						<i class="icon-social-youtube text-xl md:text-2xl"></i>
					</a>
					<a
						href="https://open.spotify.com/show/1XNO8yjHVI8NXfywgEnMMy"
						target="_blank"
						rel="noopener noreferrer"
						class="flex h-12 w-12 items-center justify-center rounded-full bg-white text-black transition-transform hover:scale-110 md:h-14 md:w-14"
					>
						<i class="icon-social-spotify text-xl md:text-2xl"></i>
					</a>
				</div>
			</div>
		</div>
	</div>
</section>
