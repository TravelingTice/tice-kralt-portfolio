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

<footer class="mt-auto">
	<figure class="group relative mx-auto block w-full max-w-2xl px-5">
		<img
			src="/header_image_smaller.webp"
			srcset="/header_image_smaller.webp 800w, /header_image.webp 1600w"
			sizes="(min-width: 672px) 672px, 100vw"
			alt="Tice at the Canton Fair in Guangzhou, China"
			class="aspect-[5/2] w-full rounded-2xl object-cover object-[center_40%] opacity-45 grayscale transition duration-700 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] group-hover:opacity-70 group-hover:grayscale-0 sm:aspect-[4/1]"
			loading="lazy"
		/>
		<div
			class="from-paper/60 pointer-events-none absolute inset-x-5 inset-y-0 rounded-2xl bg-gradient-to-t to-transparent"
		></div>
		<figcaption
			class="absolute bottom-3 left-9 text-xs text-[#c4c4c4] drop-shadow"
		>
			Canton Fair, Guangzhou
		</figcaption>
	</figure>
	<div class="border-line/60 mt-8 border-t">
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
	</div>
</footer>
