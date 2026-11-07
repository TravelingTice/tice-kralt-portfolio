<script lang="ts">
	import { MicIcon } from 'svelte-feather-icons'
</script>

<header
	class="border-line/60 bg-paper/75 sticky top-0 z-30 border-b backdrop-blur-md"
>
	<div
		class="mx-auto flex h-14 w-full max-w-2xl items-center justify-between px-5"
	>
		<a href="/" class="font-heading text-[15px] tracking-tight">Tice Kralt</a>
		<nav>
			<ul
				class="text-muted flex items-center gap-4 text-[13px] sm:gap-6 sm:text-sm"
			>
				<li>
					<a href="/#startups" class="hover:text-ink transition-colors"
						>Startups</a
					>
				</li>
				<li>
					<a
						href="/#podcast"
						class="hover:text-ink flex items-center gap-1.5 transition-colors"
						><MicIcon size="14" />Podcast</a
					>
				</li>
				<li>
					<a href="/values" class="hover:text-ink transition-colors">Values</a>
				</li>
				<li>
					<a href="/contact" class="hover:text-ink transition-colors">Contact</a
					>
				</li>
			</ul>
		</nav>
	</div>
</header>
