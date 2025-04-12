<script lang="ts">
	import { page } from '$app/state'
	import SEO from '$lib/components/SEO.svelte'

	// Common HTTP status codes and their friendly messages
	const statusMessages = {
		404: 'Page not found',
		500: 'Internal server error',
		503: 'Service unavailable',
		403: 'Forbidden',
		401: 'Unauthorized',
		400: 'Bad request'
	}

	// Get a friendly message based on status code
	const getFriendlyMessage = (status: number) => {
		return (
			statusMessages[status as keyof typeof statusMessages] ||
			'An error occurred'
		)
	}

	// Default title if no error message is available
	const errorTitle = `${page.status} | ${getFriendlyMessage(page.status)}`
</script>

<SEO
	title={errorTitle}
	description="Sorry, we encountered an error. Please try again or return to the homepage."
/>

<div
	class="flex h-full w-full flex-1 grow items-center justify-center px-4 py-16"
>
	<div class="max-w-lg text-center">
		<h1 class="mb-4 text-2xl font-bold md:text-3xl">
			{getFriendlyMessage(page.status)}
		</h1>

		{#if page.error?.message && page.status !== 500}
			<p class="mb-8 text-gray-600">
				{page.error.message}
			</p>
		{:else}
			<p class="mb-8 text-gray-600">
				Sorry, we couldn't find what you were looking for. Please try again or
				return to the homepage.
			</p>
		{/if}

		<div class="flex flex-wrap justify-center gap-4">
			<a
				href="/"
				class="inline-flex items-center gap-2 rounded-lg bg-black px-6 py-3 text-white transition-colors hover:bg-gray-800"
			>
				Return Home
			</a>

			{#if page.status >= 500}
				<button
					on:click={() => window.location.reload()}
					class="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-6 py-3 text-gray-700 transition-colors hover:bg-gray-100"
				>
					Try again
				</button>
			{:else}
				<button
					on:click={() => history.back()}
					class="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-6 py-3 text-gray-700 transition-colors hover:bg-gray-100"
				>
					Go Back
				</button>
			{/if}
		</div>
	</div>
</div>
