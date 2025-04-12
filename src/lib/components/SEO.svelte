<script lang="ts">
	import { PUBLIC_APP_NAME } from '$env/static/public'

	const defaultTitle = 'Tice Kralt Portfolio Website'

	const {
		title = defaultTitle,
		description = 'Welcome to the personal portfolio website of Tice Kralt. On this website I share all of my projects, and other areas of life that are important to mention.',
		image = '/header_image_smaller.webp',
		type = 'website',
		siteUrl = 'https://ticekralt.com'
	} = $props<{
		title?: string
		description?: string
		image?: string
		type?: string
		siteUrl?: string
	}>()

	const fullTitle =
		title === defaultTitle ? title : `${title} | ${PUBLIC_APP_NAME}`

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
