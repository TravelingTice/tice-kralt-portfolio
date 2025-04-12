<script lang="ts">
	import ProjectCard from './ProjectCard.svelte'
	import breakpoint, { Breakpoints } from '$lib/helpers/breakpoint'

	type Project = {
		title: string
		excerpt: string
		images: string[]
		description: string
		url?: string
	}

	const projects: Project[] = [
		{
			title: 'Map My Travels',
			excerpt: 'An interactive map builder to create awesome travel maps with!',
			images: [
				'/projects/mapmytravels/mapmytravels1.webp',
				'/projects/mapmytravels/mapmytours2.webp',
				'/projects/mapmytravels/mapmytours3.webp',
				'/projects/mapmytravels/mapmytours4.webp',
				'/projects/mapmytravels/mapmytours5.webp'
			],
			description:
				'An interactive map builder to create awesome travel maps with! This project goes way back to 2019, when I built it for a good friend who runs the "JaYoe Nation" website. After that this project grew out to be much bigger and in 2021 I made it into an interactive map editor where everyone can create visually appealing travel maps. As of 2025 it\'s still gaining quite some users every month.',
			url: 'https://mapmytravels.com?utm_source=ticekralt-portfolio'
		},
		{
			title: 'PDQE (Product Database Quote Engine)',
			excerpt:
				'PDQE is a powerful product database and quoting app designed to provide easy to use tools for suppliers and vendor to communicate with and quote to interested buyers.',
			images: [
				'/projects/pdqe/pdqe1.webp',
				'/projects/pdqe/pdqe2.webp',
				'/projects/pdqe/pdqe3.webp',
				'/projects/pdqe/pdqe4.webp',
				'/projects/pdqe/pdqe5.webp',
				'/projects/pdqe/pdqe6.webp',
				'/projects/pdqe/pdqe7.webp',
				'/projects/pdqe/pdqe8.webp'
			],
			description:
				"PDQE is a powerful product database and quoting app designed to provide easy to use tools for suppliers and vendor to communicate with and quote to interested buyers. The biggest solo project I ever worked on. Months of development went into an interactive quote creator that was designed for Chinese factory owners. Create instant beautiful quotes of your projects, customized to the customers' needs. Have information like MOQ, SKU, container load etc all right there handled in the quote engine. A powerful tool with a lot of potential!",
			url: 'https://pdqe.net'
		},
		{
			title: 'Amsterdam Surfers',
			excerpt:
				'Race through the streets of Amsterdam in a Dutch "sloep" on king\'s day.',
			images: ['/projects/amsterdamsurfers/amsterdamsurfers1.webp'],
			description:
				'Race through the streets of Amsterdam in a Dutch "sloep" on king\'s day. Avoid party boats, bicycles and drunk students/tourists, who you typically find in the Amsterdam canals during king\'s day! In March 2025 "vibe coding" became a huge trend and on Twitter people started to vibe code games (instead of useful stuff lol). When Pieter Levels organised a "vibe jam" I decided to join in and vibe code my own little game. It was a lot of fun and taught me a lot about prompt engineering and working with AI powered editors such as Cursor.',
			url: 'https://adamsurfers.ticekralt.com'
		},
		{
			title: 'Graduation Photoshoot Now',
			excerpt: 'No need to leave your dorm for your graduation photoshoot!',
			images: [
				'/projects/graduationphotoshootnow/graduationphotoshootnow1.webp',
				'/projects/graduationphotoshootnow/graduationphotoshootnow2.webp'
			],
			description:
				'No need to leave your dorm for your graduation photoshoot! With the help of our AI photographer receive beautiful graduation photos within 2 days. My stab at an "AI startup". Using Flux + LoRA to create personal pictures, but this one specifically for graduation photos! I discovered that "Graduation Photoshoot" was (and still is) a very underserved keyword on google. So I took that opportunity to create an AI version of it, where you can receive an AI graduation photoshoot within 2 days for a small fee. Not great traction (yet!) but a very fun project to work on and market!',
			url: 'https://graduationphotoshootnow.com'
		},
		{
			title: 'Do It Or Else',
			excerpt: 'Link massive pain to not following through on your goals.',
			images: [
				'/projects/doitorelse/doitorelse1.avif',
				'/projects/doitorelse/doitorelse2.avif',
				'/projects/doitorelse/doitorelse3.avif',
				'/projects/doitorelse/doitorelse4.avif',
				'/projects/doitorelse/doitorelse5.avif',
				'/projects/doitorelse/doitorelse6.avif'
			],
			description:
				"Link massive pain to not following through on your goals. Having struggles meeting a certain goal? Always feel like giving up because there aren't high enough stakes? With \"Do It Or Else\" you can make your stakes sky high! Choose to donate to a cause you don't support (like the NRA or Trump campaign) when you don't follow through on your goal. A fun project I worked on as well some time ago. Got on the first page on Product Hunt!",
			url: 'https://accountability-tool.vercel.app'
		},
		{
			title: 'Personal Wallet App',
			excerpt: 'Get your financial act together.',
			images: [
				'/projects/personalwalletapp/pwa1.webp',
				'/projects/personalwalletapp/pwa2.webp',
				'/projects/personalwalletapp/pwa3.webp',
				'/projects/personalwalletapp/pwa4.webp',
				'/projects/personalwalletapp/pwa5.webp',
				'/projects/personalwalletapp/pwa7.webp',
				'/projects/personalwalletapp/pwa8.webp',
				'/projects/personalwalletapp/pwa9.webp',
				'/projects/personalwalletapp/pwa10.webp',
				'/projects/personalwalletapp/pwa11.webp',
				'/projects/personalwalletapp/pwamove.webp'
			],
			description:
				'Get your financial act together. Log your financial situation every day and get a grip on your wallet! This one goes way back to when I started coding for my portfolio. One of the few projects from a couple years back I still use every week! Updating my personal financial situation, including graphs and all, so that I can immediately see what my personal net worth is. Still better than having automatic tooling for this in my opinion.',
			url: 'https://personalwallet.app'
		},
		{
			title: 'Time Tracker App',
			excerpt: 'Track time easily for your projects!',
			images: ['/projects/timetrackerapp/timetrackerapp1.webp'],
			description:
				'Track time easily for your projects! Use this beautifully designed time tracker to enjoy time tracking like never before. This was definitely a learning experience. I spent a lot of time back in 2020-2021 making this app. I made it really fancy and visually appealing. Adding things like a fancy onboarding tour and cool promotional video. Spent hours and days on it. Just to find out after doing some market research that I was definitely not the only one creating a time tracker app. Ah well. Lesson learnt and learnt a lot about React hooks and GraphQL in the process!',
			url: 'https://time-tracker-app-tice.netlify.app/'
		}
	]

	let showAll = false

	$: visibleProjects = showAll
		? projects
		: projects.slice(0, $breakpoint >= Breakpoints.lg ? 6 : 4)

	$: hasMoreProjects = visibleProjects.length < projects.length
</script>

<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
	{#each visibleProjects as project}
		<ProjectCard {...project} />
	{/each}
</div>

{#if hasMoreProjects}
	<div class="mt-8 flex justify-center">
		<button
			on:click={() => (showAll = true)}
			class="rounded-lg bg-black px-6 py-3 text-white transition-colors hover:bg-gray-800"
		>
			Load More Projects
		</button>
	</div>
{/if}
