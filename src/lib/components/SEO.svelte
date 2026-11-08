<script lang="ts">
	import { page } from '$app/state'

	const siteUrl = 'https://ticekralt.com'
	const defaultTitle = 'Tice Kralt - Solo Founder and Online Builder'

	const {
		title = defaultTitle,
		description = "Matthijs 'Tice' Kralt is a solo founder who launched and failed 10+ apps and keeps building ones that help people. Speaks Chinese, Indonesian and Dutch.",
		image = '/og-image.png',
		imageAlt = 'Tice Kralt, solo founder, with a list of his startups and their revenue',
		type = 'website',
		noindex = false
	}: {
		title?: string
		description?: string
		image?: string
		imageAlt?: string
		type?: string
		noindex?: boolean
	} = $props()

	const fullTitle = $derived(
		title === defaultTitle ? title : `${title} | Tice Kralt`
	)
	const url = $derived(`${siteUrl}${page.url.pathname}`)
	const ogImage = $derived(
		image.startsWith('http') ? image : `${siteUrl}${image}`
	)
</script>

<svelte:head>
	<title>{fullTitle}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={url} />
	{#if noindex}
		<meta name="robots" content="noindex" />
	{/if}

	<meta property="og:type" content={type} />
	<meta property="og:site_name" content="Tice Kralt" />
	<meta property="og:locale" content="en_US" />
	<meta property="og:url" content={url} />
	<meta property="og:title" content={fullTitle} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={ogImage} />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content={imageAlt} />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@travelingtice" />
	<meta name="twitter:creator" content="@travelingtice" />
	<meta name="twitter:title" content={fullTitle} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={ogImage} />
	<meta name="twitter:image:alt" content={imageAlt} />
</svelte:head>
