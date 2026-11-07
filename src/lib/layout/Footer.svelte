<script lang="ts">
	import BrandIcon from '$lib/components/BrandIcon.svelte'

	const links = [
		{ name: 'x', label: 'X', href: 'https://x.com/travelingtice' },
		{
			name: 'github',
			label: 'GitHub',
			href: 'https://github.com/travelingtice'
		},
		{
			name: 'linkedin',
			label: 'LinkedIn',
			href: 'https://www.linkedin.com/in/matthijs-kralt/'
		},
		{
			name: 'instagram',
			label: 'Instagram',
			href: 'https://www.instagram.com/travelingtice/'
		}
	] as const
</script>

<footer class="border-line/60 mt-auto border-t">
	<div
		class="text-faint mx-auto flex w-full max-w-2xl items-center justify-between px-5 py-8 text-sm"
	>
		<p>&copy; {new Date().getFullYear()} Tice Kralt</p>
		<div class="flex gap-4">
			{#each links as link (link.name)}
				<a
					href={link.href}
					target="_blank"
					rel="noopener noreferrer"
					class="hover:text-ink transition-colors"
					aria-label={link.label}><BrandIcon name={link.name} /></a
				>
			{/each}
		</div>
	</div>
</footer>
