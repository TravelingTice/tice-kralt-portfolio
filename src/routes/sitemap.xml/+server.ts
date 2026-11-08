import type { RequestHandler } from './$types'

const pages = ['/', '/contact']

export const prerender = true

export const GET: RequestHandler = () =>
	new Response(
		`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map((path) => `\t<url><loc>https://ticekralt.com${path}</loc></url>`).join('\n')}
</urlset>
`,
		{ headers: { 'content-type': 'application/xml' } }
	)
