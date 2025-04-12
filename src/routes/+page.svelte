<script lang="ts">
	import breakpoint, { Breakpoints } from '$lib/helpers/breakpoint'
	import { ExternalLinkIcon } from 'svelte-feather-icons'
	import ProjectsGrid from '$lib/components/ProjectsGrid.svelte'
	import 'simple-line-icons/css/simple-line-icons.css'
	import SEO from '$lib/components/SEO.svelte'
</script>

<SEO image="/header_image_smaller.webp" />

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
<section class="bg-black py-12 text-white md:py-16 lg:py-24">
	<div class="container mx-auto px-4">
		<h2 class="mb-6 text-center text-2xl font-bold md:mb-10 md:text-3xl">
			Follow my personal podcast! Tice's Tech Trek
		</h2>
		<div class="mx-auto flex max-w-4xl flex-col items-center md:flex-row">
			<div class="mb-6 flex justify-center md:mb-0 md:w-1/3">
				<img
					src="/podcast/avatar.webp"
					alt="Tice's Tech Trek Podcast"
					class="h-30 w-30 rounded-full lg:h-52 lg:w-52"
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
						aria-label="YouTube"
						class="flex h-12 w-12 items-center justify-center rounded-full bg-white text-black transition-transform hover:scale-110 md:h-14 md:w-14"
					>
						<i class="icon-social-youtube text-xl md:text-2xl"></i>
					</a>
					<a
						href="https://open.spotify.com/show/1XNO8yjHVI8NXfywgEnMMy"
						target="_blank"
						aria-label="Spotify"
						class="flex h-12 w-12 items-center justify-center rounded-full bg-white text-black transition-transform hover:scale-110 md:h-14 md:w-14"
					>
						<i class="icon-social-spotify text-xl md:text-2xl"></i>
					</a>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- WebinarGeek Section -->
<section class="relative py-12 text-white md:py-16 lg:py-24">
	<div class="absolute inset-0">
		<img
			src="/webinargeek/webinargeek_banner.jpg"
			alt="WebinarGeek Banner"
			class="h-full w-full object-cover"
		/>
		<div class="absolute inset-0 bg-sky-900/70"></div>
	</div>
	<div class="relative container mx-auto px-4">
		<h2
			class="mx-auto mb-6 max-w-xl text-center text-2xl font-bold md:mb-10 md:text-3xl"
		>
			My current position: Full stack developer at WebinarGeek.
		</h2>
		<div class="mx-auto flex max-w-4xl flex-col items-center md:flex-row">
			<div class="mb-6 flex justify-center md:mb-0 md:w-1/3">
				<div class="rounded-full bg-white">
					<img
						src="/webinargeek/logo.png"
						alt="WebinarGeek Logo"
						class="h-20 w-20 lg:h-28 lg:w-28"
					/>
				</div>
			</div>
			<div class="md:w-2/3">
				<p class="mb-6 text-center md:text-left">
					WebinarGeek is a dominating player in the webinar software market.
					I've been working here since 2020 and still really like working here.
					I learnt so much while being here. From working in a team, to
					interpreting customer requests and much much more.
				</p>
				<div class="flex justify-center md:justify-start">
					<a
						href="https://webinargeek.com"
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex items-center gap-2 rounded-lg bg-sky-800 px-6 py-3 text-white transition-all hover:bg-sky-900"
					>
						Visit WebinarGeek
						<ExternalLinkIcon size="18" />
					</a>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- TravelingTice Section -->
<section class="relative py-12 text-white md:py-16 lg:py-24">
	<div class="absolute inset-0">
		<img
			src="/travelingtice/banner.jpeg"
			alt="TravelingTice Banner"
			class="h-full w-full object-cover"
		/>
		<div class="bg-travelingtice/50 absolute inset-0"></div>
	</div>
	<div class="relative container mx-auto px-4">
		<h2
			class="mx-auto mb-6 max-w-xl text-center text-2xl font-bold md:mb-10 md:text-3xl"
		>
			Another passion of mine: Traveling. I was known as "TravelingTice"
		</h2>
		<div class="mx-auto flex max-w-4xl flex-col items-center md:flex-row">
			<div class="mb-6 flex justify-center md:mb-0 md:w-1/3">
				<div class="rounded-full">
					<img
						src="/travelingtice/logo.png"
						alt="TravelingTice Logo"
						class="h-20 w-20 lg:h-32 lg:w-32"
					/>
				</div>
			</div>
			<div class="md:w-2/3">
				<p class="mb-6 text-center md:text-left">
					After high school I didn't really feel like studying. Instead I felt
					like packing all of my belongings in 4 bike bags and set off on a
					bicycle touring journey! It was a scary thing to do but it has brought
					me so much taught me so many life lessons. I created a "daily vlog" of
					my trip, all of which you can still find on YouTube!
				</p>
				<div class="flex flex-wrap justify-center gap-4 md:justify-start">
					<a
						href="https://www.youtube.com/@TravelingTice"
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex items-center gap-2 rounded-lg bg-red-600 px-6 py-3 text-white transition-all hover:bg-red-700"
					>
						<i class="icon-social-youtube"></i>
						YouTube
					</a>
					<a
						href="https://travelingtice.com"
						target="_blank"
						rel="noopener noreferrer"
						class="bg-travelingtice inline-flex items-center gap-2 rounded-lg px-6 py-3 text-white transition-all hover:opacity-90"
					>
						Website
						<ExternalLinkIcon size="18" />
					</a>
				</div>
			</div>
		</div>
	</div>
</section>
