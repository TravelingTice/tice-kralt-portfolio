<script>
	import { fly } from 'svelte/transition'
	import isMobileMenu from './menu'
</script>

<div
	class="fixed top-16 right-0 bottom-0 left-0 z-20 bg-paper"
	transition:fly={{ x: 400, duration: 150 }}
>
	<nav class="my-10">
		<ul class="flex flex-col items-center space-y-6 font-heading text-2xl">
			<li><a href="/" on:click={isMobileMenu.off}>Home</a></li>
			<li><a href="/contact" on:click={isMobileMenu.off}>Contact</a></li>
		</ul>
	</nav>
</div>
