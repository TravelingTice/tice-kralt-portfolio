<script lang="ts">
	import { PUBLIC_APP_NAME } from '$env/static/public'
	import { GithubIcon, InstagramIcon, LinkedinIcon } from 'svelte-feather-icons'
</script>

<footer class="flex items-center justify-between p-4">
	<div>
		<p>
			&copy; {new Date().getFullYear()}
			{PUBLIC_APP_NAME}.
		</p>
	</div>

	<div class="flex gap-2">
		<a
			href="https://github.com/travelingtice"
			class="rounded-full bg-gray-800 p-2 text-sm text-white"
			><span class="sr-only">GitHub</span><GithubIcon size="18" /></a
		>
		<a
			href="https://www.linkedin.com/in/ticekralt/"
			class="rounded-full bg-gray-800 p-2 text-sm text-white"
			><span class="sr-only">LinkedIn</span><LinkedinIcon size="18" /></a
		>
		<a
			href="https://www.instagram.com/ticekralt/"
			class="rounded-full bg-gray-800 p-2 text-sm text-white"
			><span class="sr-only">Instagram</span><InstagramIcon size="18" /></a
		>
	</div>
</footer>
