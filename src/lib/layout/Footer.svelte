<script lang="ts">
	import { PUBLIC_APP_NAME } from '$env/static/public'
	import { GithubIcon, InstagramIcon, LinkedinIcon } from 'svelte-feather-icons'
</script>

<footer class="bg-ink text-white">
	<div
		class="container mx-auto flex items-center justify-between px-4 py-8 md:px-8"
	>
		<div>
			<p class="font-heading">{PUBLIC_APP_NAME}</p>
			<p class="text-sm text-white/60">
				&copy; {new Date().getFullYear()} &middot; Built with SvelteKit
			</p>
		</div>

		<div class="flex gap-2">
			<a
				href="https://github.com/travelingtice"
				target="_blank"
				class="rounded-full bg-white/10 p-2.5 text-sm transition-colors hover:bg-accent"
				><span class="sr-only">GitHub</span><GithubIcon size="18" /></a
			>
			<a
				href="https://www.linkedin.com/in/matthijs-kralt/"
				target="_blank"
				class="rounded-full bg-white/10 p-2.5 text-sm transition-colors hover:bg-accent"
				><span class="sr-only">LinkedIn</span><LinkedinIcon size="18" /></a
			>
			<a
				href="https://www.instagram.com/travelingtice/"
				target="_blank"
				class="rounded-full bg-white/10 p-2.5 text-sm transition-colors hover:bg-accent"
				><span class="sr-only">Instagram</span><InstagramIcon size="18" /></a
			>
		</div>
	</div>
</footer>
