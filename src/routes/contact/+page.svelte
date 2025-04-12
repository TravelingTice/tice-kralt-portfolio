<script lang="ts">
	import SEO from '$lib/components/SEO.svelte'
	import { enhance } from '$app/forms'

	let { form } = $props()
</script>

<SEO
	title="Contact Me"
	description="Get in touch with Tice Kralt for collaboration, job opportunities, or just to say hello."
/>

<div class="container mx-auto max-w-3xl px-4 py-12">
	<h1 class="mb-8 text-3xl font-bold md:text-4xl">Contact Me</h1>

	<p class="mb-8">
		I'm always open to discussing new opportunities, collaborations, or just
		having a chat. Fill out the form below, and I'll get back to you as soon as
		possible.
	</p>

	<form method="POST" use:enhance class="space-y-6">
		{#if form?.success}
			<div class="mb-6 rounded-md bg-green-50 p-4">
				<div class="flex">
					<div class="flex-shrink-0">
						<svg
							class="h-5 w-5 text-green-400"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
						>
							<path
								fill-rule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
								clip-rule="evenodd"
							/>
						</svg>
					</div>
					<div class="ml-3">
						<p class="text-sm font-medium text-green-800">{form.message}</p>
					</div>
				</div>
			</div>
		{:else if form?.success === false}
			<div class="mb-6 rounded-md bg-red-50 p-4">
				<div class="flex">
					<div class="flex-shrink-0">
						<svg
							class="h-5 w-5 text-red-400"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
						>
							<path
								fill-rule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
								clip-rule="evenodd"
							/>
						</svg>
					</div>
					<div class="ml-3">
						<p class="text-sm font-medium text-red-800">{form.message}</p>
					</div>
				</div>
			</div>
		{/if}

		{#if !form?.success}
			<div>
				<label for="name" class="block text-sm font-medium text-gray-700"
					>Name</label
				>
				<input
					type="text"
					id="name"
					name="name"
					value={form?.values?.name || ''}
					required
					class="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
				/>
			</div>

			<div>
				<label for="email" class="block text-sm font-medium text-gray-700"
					>Email</label
				>
				<input
					type="email"
					id="email"
					name="email"
					value={form?.values?.email || ''}
					required
					class="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
				/>
			</div>

			<div>
				<label for="message" class="block text-sm font-medium text-gray-700"
					>Message</label
				>
				<textarea
					id="message"
					name="message"
					rows="5"
					required
					class="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
					>{form?.values?.message || ''}</textarea
				>
			</div>

			<div>
				<button
					type="submit"
					class="rounded-md border border-transparent bg-black px-4 py-2 text-sm text-white shadow-sm hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none"
				>
					Send Message
				</button>
			</div>
		{/if}
	</form>
</div>
