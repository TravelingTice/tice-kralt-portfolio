<script lang="ts">
	import type { Project } from '$lib/projects'
	import ProjectModal from './ProjectModal.svelte'

	const { title, excerpt, logo, images, description, url }: Project = $props()

	let isModalOpen = $state(false)
</script>

<button
	onclick={() => (isModalOpen = true)}
	class="group hover:bg-surface -mx-3 flex w-[calc(100%+1.5rem)] items-center gap-4 rounded-xl px-3 py-3 text-left transition-colors"
>
	<img
		src={logo}
		alt=""
		width="44"
		height="44"
		loading="lazy"
		class="bg-surface ring-line h-11 w-11 shrink-0 rounded-[11px] object-cover ring-1"
	/>
	<span class="min-w-0 flex-1">
		<span class="text-ink block font-medium">{title}</span>
		<span class="text-muted block truncate text-sm">{excerpt}</span>
	</span>
	<span
		class="text-faint opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100"
		aria-hidden="true">&rarr;</span
	>
</button>

<ProjectModal
	isOpen={isModalOpen}
	{title}
	{images}
	{description}
	{url}
	onClose={() => (isModalOpen = false)}
/>
