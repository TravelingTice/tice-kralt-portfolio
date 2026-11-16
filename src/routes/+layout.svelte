<script lang="ts">
	import Plexus from '$lib/components/Plexus.svelte'
	import Footer from '$lib/layout/Footer.svelte'
	import Header from '$lib/layout/Header.svelte'
	import '../app.css'

	let { children } = $props()
</script>

<Plexus />

<Header />

<main class="relative flex flex-grow flex-col">
	{@render children()}
</main>

<Footer />
