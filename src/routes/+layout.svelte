<script lang="ts">
	import Footer from '$lib/layout/Footer.svelte'
	import Header from '$lib/layout/Header.svelte'
	import '../app.css'
	import SEO from '$lib/components/SEO.svelte'

	let { children } = $props()
</script>

<SEO />

<Header />

<main class="flex flex-grow flex-col">
	{@render children()}
</main>

<Footer />
