<script lang="ts">
	import SEO from '$lib/components/SEO.svelte'
	import { enhance } from '$app/forms'

	let { form } = $props()
</script>

<SEO
	title="Contact Me"
	description="Get in touch with Tice Kralt for collaboration, job opportunities, or just to say hello."
/>

<div class="mx-auto w-full max-w-2xl px-5 py-16">
	<p class="eyebrow mb-2">Contact</p>
	<h1 class="mb-8 text-3xl font-bold md:text-4xl">Let's talk</h1>

	<p class="text-muted mb-8">
		I'm always open to discussing new opportunities, collaborations, or just
		having a chat. Fill out the form below, and I'll get back to you as soon as
		possible.
	</p>

	<form method="POST" use:enhance class="space-y-6">
		{#if form?.success}
			<div class="mb-6 rounded-md bg-green-500/10 p-4">
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
						<p class="text-sm font-medium text-green-300">{form.message}</p>
					</div>
				</div>
			</div>
		{:else if form?.success === false}
			<div class="mb-6 rounded-md bg-red-500/10 p-4">
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
						<p class="text-sm font-medium text-red-300">{form.message}</p>
					</div>
				</div>
			</div>
		{/if}

		{#if !form?.success}
			<div>
				<label for="name" class="text-muted block text-sm font-medium"
					>Name</label
				>
				<input
					type="text"
					id="name"
					name="name"
					value={form?.values?.name || ''}
					required
					class="border-line bg-surface text-ink placeholder:text-faint focus:border-faint mt-1 block w-full rounded-lg border p-2.5 focus:outline-none sm:text-sm"
				/>
			</div>

			<div>
				<label for="email" class="text-muted block text-sm font-medium"
					>Email</label
				>
				<input
					type="email"
					id="email"
					name="email"
					value={form?.values?.email || ''}
					required
					class="border-line bg-surface text-ink placeholder:text-faint focus:border-faint mt-1 block w-full rounded-lg border p-2.5 focus:outline-none sm:text-sm"
				/>
			</div>

			<div>
				<label for="message" class="text-muted block text-sm font-medium"
					>Message</label
				>
				<textarea
					id="message"
					name="message"
					rows="5"
					required
					class="border-line bg-surface text-ink placeholder:text-faint focus:border-faint mt-1 block w-full rounded-lg border p-2.5 focus:outline-none sm:text-sm"
					>{form?.values?.message || ''}</textarea
				>
			</div>

			<div>
				<button
					type="submit"
					class="bg-ink text-paper rounded-full px-6 py-2.5 text-sm font-medium transition-colors hover:bg-white"
				>
					Send Message
				</button>
			</div>
		{/if}
	</form>
</div>
