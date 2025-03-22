/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography'

export default {
	content: ['./src/**/*.{html,js,svelte,ts,md}'],
	darkMode: 'class', // or 'media' if you prefer system settings
	theme: {
		fontFamily: {
			heading: [
				'system-ui',
				'-apple-system',
				'BlinkMacSystemFont',
				'Segoe UI',
				'Roboto',
				'Helvetica Neue',
				'Arial',
				'sans-serif'
			],
			body: [
				'system-ui',
				'-apple-system',
				'BlinkMacSystemFont',
				'Segoe UI',
				'Roboto',
				'Helvetica Neue',
				'Arial',
				'sans-serif'
			]
		},
		extend: {
			typography: {
				DEFAULT: {
					css: {
						maxWidth: '65ch'
					}
				}
			}
		}
	},
	plugins: [typography]
}
