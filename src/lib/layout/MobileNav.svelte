<script>
	import { fly } from 'svelte/transition'
	import isMobileMenu from './menu'

	$: if ($isMobileMenu) {
		document.body.classList.add('no-scroll')
	} else {
		document.body.classList.remove('no-scroll')
	}
</script>

<div
	class="fixed top-16 right-0 bottom-0 left-0 z-20 bg-white"
	transition:fly={{ x: 400, duration: 150 }}
>
	<nav class="my-8">
		<ul class="flex flex-col items-center space-y-5">
			<li><a href="/" on:click={isMobileMenu.off}>Home</a></li>
			<li><a href="/about" on:click={isMobileMenu.off}>About</a></li>
			<li><a href="/contact" on:click={isMobileMenu.off}>Contact</a></li>
		</ul>
	</nav>
</div>
