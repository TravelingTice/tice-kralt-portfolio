<script lang="ts">
	import Footer from '$lib/layout/Footer.svelte'
	import Header from '$lib/layout/Header.svelte'
	import '../app.css'
	let { children } = $props()
</script>

<Header />

<main class="flex flex-grow flex-col">
	{@render children()}
</main>

<Footer />
