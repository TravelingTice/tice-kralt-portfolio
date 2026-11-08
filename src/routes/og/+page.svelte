<script lang="ts">
	import OgCard from '$lib/components/OgCard.svelte'

	const { data } = $props()
</script>

<svelte:head>
	<meta name="robots" content="noindex" />
</svelte:head>

<div class="flex justify-center overflow-x-auto py-10">
	<OgCard {...data} />
</div>
