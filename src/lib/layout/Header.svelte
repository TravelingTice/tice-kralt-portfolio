<script lang="ts">
	import { PUBLIC_APP_NAME } from '$env/static/public'
	import breakpoint, { Breakpoints } from '$lib/helpers/breakpoint'
	import MobileNav from '$lib/layout/MobileNav.svelte'
	import isMobileMenu from './menu'
	import { MenuIcon, XIcon } from 'svelte-feather-icons'

	$: if (typeof document !== 'undefined') {
		if ($isMobileMenu) {
			document.body.classList.add('no-scroll')
		} else {
			document.body.classList.remove('no-scroll')
		}
	}
</script>

<header
	class="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-ink/10 bg-paper/80 px-4 backdrop-blur-md md:h-20 md:px-8"
>
	<a
		href="/"
		on:click={isMobileMenu.off}
		title="Go to the {PUBLIC_APP_NAME} home page"
	>
		<div class="flex items-center">
			<img
				class="mr-3 h-10 w-10 rounded-full ring-2 ring-accent/30"
				src="/avatar.webp"
				alt="Tice Kralt Avatar"
			/>
			<p class="font-heading text-lg tracking-tight md:text-xl">Tice Kralt</p>
		</div>
	</a>
	<div>
		{#if $breakpoint > Breakpoints.md}
			<nav>
				<ul class="flex items-center space-x-4">
					<li>
						<a
							href="/contact"
							class="rounded-full border border-ink/15 px-5 py-2 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
							>Contact</a
						>
					</li>
				</ul>
			</nav>
		{:else if $isMobileMenu}
			<button on:click={isMobileMenu.off} aria-label="Close menu"><XIcon /></button>
		{:else}
			<button on:click={isMobileMenu.on} aria-label="Open menu"><MenuIcon /></button>
		{/if}
	</div>
</header>

{#if $breakpoint < Breakpoints.md && $isMobileMenu}
	<MobileNav />
{/if}
