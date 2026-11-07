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
			<p class="text-muted mb-8">
				{page.error.message}
			</p>
		{:else}
			<p class="text-muted mb-8">
				Sorry, we couldn't find what you were looking for. Please try again or
				return to the homepage.
			</p>
		{/if}

		<div class="flex flex-wrap justify-center gap-4">
			<a
				href="/"
				class="bg-ink text-paper inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors hover:bg-white"
			>
				Return Home
			</a>

			{#if page.status >= 500}
				<button
					on:click={() => window.location.reload()}
					class="border-line text-muted hover:border-faint hover:text-ink inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm transition-colors"
				>
					Try again
				</button>
			{:else}
				<button
					on:click={() => history.back()}
					class="border-line text-muted hover:border-faint hover:text-ink inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm transition-colors"
				>
					Go Back
				</button>
			{/if}
		</div>
	</div>
</div>
