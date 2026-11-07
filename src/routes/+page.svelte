<script lang="ts">
	import BrandIcon from '$lib/components/BrandIcon.svelte'
	import ProjectRow from '$lib/components/ProjectRow.svelte'
	import { projects } from '$lib/projects'

	const { data } = $props()

	const compact = new Intl.NumberFormat('en', {
		notation: 'compact',
		maximumFractionDigits: 1
	})

	const socials = $derived([
		{
			name: 'x' as const,
			label: 'X',
			href: 'https://x.com/travelingtice',
			count: data.counts.x
		},
		{
			name: 'youtube' as const,
			label: 'YouTube',
			href: 'https://www.youtube.com/@travelingtice',
			count: data.counts.youtube
		},
		{
			name: 'instagram' as const,
			label: 'Instagram',
			href: 'https://www.instagram.com/travelingtice/',
			count: data.counts.instagram
		},
		{
			name: 'linkedin' as const,
			label: 'LinkedIn',
			href: 'https://www.linkedin.com/in/matthijs-kralt/',
			count: data.counts.linkedin
		}
	])

	let showAllProjects = $state(false)
	const visibleProjects = $derived(
		showAllProjects ? projects : projects.slice(0, 8)
	)

	let showAllEpisodes = $state(false)
	const episodes = $derived(
		showAllEpisodes ? data.episodes : data.episodes.slice(0, 4)
	)

	const formatDate = (iso: string) =>
		new Date(iso).toLocaleDateString('en', { month: 'short', year: 'numeric' })
</script>

<div
	class="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[640px] bg-[radial-gradient(700px_circle_at_30%_0%,rgba(108,180,238,0.09),transparent_70%)]"
	aria-hidden="true"
></div>

<div class="mx-auto w-full max-w-2xl px-5">
	<section class="pt-14 pb-16 md:pt-24">
		<div class="flex items-end gap-5 md:gap-7">
			<h1
				class="font-heading to-ink/80 -mt-[0.12em] bg-gradient-to-b from-white bg-clip-text pt-[0.12em] pr-[0.06em] pb-2 text-[clamp(5.5rem,22vw,10rem)] leading-[0.85] tracking-[-0.045em] text-transparent"
			>
				Tice
			</h1>
			<img
				src="/avatar.webp"
				alt="Tice Kralt"
				width="80"
				height="80"
				class="ring-line mb-4 h-16 w-16 rounded-full object-cover ring-1 md:mb-6 md:h-20 md:w-20"
			/>
		</div>
		<p class="text-muted mt-5 text-lg tracking-tight">
			Solo founder &amp; online builder
		</p>

		<div class="mt-10 space-y-5 text-[17px] leading-[1.75] text-[#c4c4c4]">
			<p>
				My real name is <span class="text-ink">Matthijs Kralt</span>, and after
				launching and failing <span class="text-ink">10+ apps</span>, I'm still
				on my way to becoming an app founder. I'm interested in building apps
				that really help people. I excel at building them. Marketing is still
				something I struggle with, but I will get there.
			</p>
			<p>
				I also speak <span class="text-ink">Chinese, Indonesian and Dutch</span>
				besides English. I went to China 2 times to try to launch an app for Chinese
				factory owners. Also becoming a
				<span class="text-ink">dad in January 2027</span>, which is really
				exciting!
			</p>
		</div>

		<ul class="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3">
			{#each socials as social (social.name)}
				<li>
					<a
						href={social.href}
						target="_blank"
						rel="noopener noreferrer"
						class="text-muted hover:text-ink flex items-center gap-2 transition-colors"
						aria-label={social.count
							? `${social.label}: ${social.count} followers`
							: social.label}
					>
						<BrandIcon name={social.name} class="h-[18px] w-[18px]" />
						{#if social.count}
							<span class="tabular-nums">{compact.format(social.count)}</span>
						{/if}
					</a>
				</li>
			{/each}
		</ul>
	</section>

	<figure class="group relative mb-14 overflow-hidden rounded-2xl">
		<img
			src="/header_image_smaller.webp"
			srcset="/header_image_smaller.webp 800w, /header_image.webp 1600w"
			sizes="(min-width: 672px) 672px, 100vw"
			alt="Tice at the Canton Fair in Guangzhou, China"
			class="aspect-[5/2] w-full object-cover object-[center_40%] opacity-45 grayscale transition duration-700 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] group-hover:opacity-70 group-hover:grayscale-0 sm:aspect-[4/1]"
			loading="lazy"
		/>
		<div
			class="from-paper/60 absolute inset-0 bg-gradient-to-t to-transparent"
		></div>
		<figcaption
			class="absolute bottom-3 left-4 text-xs text-[#c4c4c4] drop-shadow"
		>
			Canton Fair, Guangzhou
		</figcaption>
	</figure>

	<section id="startups" class="mb-20 scroll-mt-20">
		<div
			class="border-line mb-2 flex items-baseline justify-between border-b pb-3"
		>
			<h2 class="eyebrow">My startups</h2>
			<span class="text-faint text-xs tabular-nums">{projects.length}</span>
		</div>
		<ul>
			{#each visibleProjects as project (project.title)}
				<li><ProjectRow {...project} /></li>
			{/each}
		</ul>
		{#if !showAllProjects}
			<button
				onclick={() => (showAllProjects = true)}
				class="text-muted hover:text-ink mt-4 text-sm transition-colors"
			>
				Show all {projects.length} &darr;
			</button>
		{/if}
	</section>

	<section id="podcast" class="mb-20 scroll-mt-20">
		<div
			class="border-line mb-5 flex items-baseline justify-between border-b pb-3"
		>
			<h2 class="eyebrow">
				Podcast<span
					class="text-muted ml-2 font-sans font-normal tracking-normal normal-case"
					>Tice's Tech Trek</span
				>
			</h2>
			<div class="text-faint flex items-center gap-4 text-xs">
				<a
					href="https://www.youtube.com/@TicesTechTrek"
					target="_blank"
					rel="noopener noreferrer"
					class="hover:text-ink flex items-center gap-1.5 transition-colors"
					aria-label="Podcast on YouTube: {data.counts.podcast} subscribers"
				>
					<BrandIcon name="youtube" class="h-4 w-4" />
					<span class="tabular-nums">{compact.format(data.counts.podcast)}</span
					>
				</a>
				<a
					href="https://open.spotify.com/show/1XNO8yjHVI8NXfywgEnMMy"
					target="_blank"
					rel="noopener noreferrer"
					class="hover:text-ink transition-colors"
					aria-label="Podcast on Spotify"
				>
					<BrandIcon name="spotify" class="h-4 w-4" />
				</a>
			</div>
		</div>
		<p class="text-muted mb-6">
			Building online businesses, failing and trying again.
		</p>

		{#if data.episodes.length}
			<ul class="space-y-1">
				{#each episodes as episode (episode.id)}
					<li>
						<a
							href="https://www.youtube.com/watch?v={episode.id}"
							target="_blank"
							rel="noopener noreferrer"
							class="group hover:bg-surface -mx-3 grid grid-cols-[112px_1fr] items-center gap-4 rounded-xl p-3 transition-colors sm:grid-cols-[148px_1fr] sm:gap-5"
						>
							<div
								class="bg-surface ring-line overflow-hidden rounded-lg ring-1"
							>
								<img
									src={episode.thumbnail}
									alt=""
									loading="lazy"
									class="aspect-video w-full object-cover opacity-75 saturate-[.8] transition duration-300 group-hover:opacity-100 group-hover:saturate-100"
								/>
							</div>
							<div class="min-w-0">
								<p class="text-faint mb-1 text-xs tabular-nums">
									{episode.number ? `#${episode.number} · ` : ''}{formatDate(
										episode.published
									)}
								</p>
								<p
									class="text-ink/85 group-hover:text-ink line-clamp-2 text-[15px] leading-snug transition-colors"
								>
									{episode.title}
								</p>
							</div>
						</a>
					</li>
				{/each}
			</ul>
			{#if !showAllEpisodes && data.episodes.length > episodes.length}
				<button
					onclick={() => (showAllEpisodes = true)}
					class="text-muted hover:text-ink mt-6 text-sm transition-colors"
				>
					Show all {data.episodes.length} episodes &darr;
				</button>
			{/if}
		{/if}
	</section>

	<section class="mb-16 flex items-center gap-4">
		<img
			src="/travelingtice/silhouette.png"
			alt=""
			class="h-10 w-10 shrink-0 object-contain opacity-50"
		/>
		<p class="text-muted text-sm leading-relaxed">
			Before building apps I cycled through 13 countries as
			<span class="text-ink">TravelingTice</span>.
			<a
				href="https://www.youtube.com/@TravelingTice"
				target="_blank"
				rel="noopener noreferrer"
				class="hover:text-ink decoration-line ml-1 whitespace-nowrap underline underline-offset-4 transition-colors"
				>YouTube</a
			>
			&middot;
			<a
				href="https://travelingtice.com"
				target="_blank"
				rel="noopener noreferrer"
				class="hover:text-ink decoration-line whitespace-nowrap underline underline-offset-4 transition-colors"
				>Website</a
			>
		</p>
	</section>
</div>
