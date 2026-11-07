<script lang="ts">
	const defaultTitle = 'Tice Kralt - Solo Founder and Online Builder'

	const {
		title = defaultTitle,
		description = "Tice Kralt (Matthijs Kralt) is a solo founder who has launched 10+ apps. Startups, podcast episodes of Tice's Tech Trek and more.",
		image = '/og.png',
		type = 'website',
		siteUrl = 'https://ticekralt.com'
	} = $props<{
		title?: string
		description?: string
		image?: string
		type?: string
		siteUrl?: string
	}>()

	const fullTitle = title === defaultTitle ? title : `${title} | Tice Kralt`

	const ogImage = image.startsWith('http') ? image : `${siteUrl}${image}`
</script>

<svelte:head>
	<title>{fullTitle}</title>
	<meta name="description" content={description} />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content={type} />
	<meta property="og:url" content={siteUrl} />
	<meta property="og:title" content={fullTitle} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={ogImage} />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content={siteUrl} />
	<meta property="twitter:title" content={fullTitle} />
	<meta property="twitter:description" content={description} />
	<meta property="twitter:image" content={ogImage} />
</svelte:head>
