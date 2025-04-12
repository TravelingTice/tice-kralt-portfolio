<script lang="ts">
	import { PUBLIC_APP_NAME } from '$env/static/public'
	import breakpoint, { Breakpoints } from '$lib/helpers/breakpoint'
	import MobileNav from '$lib/layout/MobileNav.svelte'
	import isMobileMenu from './menu'
	import { MenuIcon, XIcon } from 'svelte-feather-icons'
</script>

<header class="flex h-16 items-center justify-between px-4 shadow md:h-20">
	<a
		href="/"
		on:click={isMobileMenu.off}
		title="Go to the {PUBLIC_APP_NAME} home page"
	>
		<div class="flex items-center">
			<img
				class="mr-3 h-11 w-11 rounded-full"
				src="/avatar.webp"
				alt="Tice Kralt Avatar"
			/>
			<p class="font-heading text-xl">Tice Kralt</p>
		</div>
	</a>
	<div>
		{#if $breakpoint > Breakpoints.md}
			<nav>
				<ul class="flex items-center space-x-4">
					<li><a href="/contact">Contact</a></li>
				</ul>
			</nav>
		{:else if $isMobileMenu}
			<button on:click={isMobileMenu.off}><XIcon /></button>
		{:else}
			<button on:click={isMobileMenu.on}><MenuIcon /></button>
		{/if}
	</div>
</header>

{#if $breakpoint < Breakpoints.md && $isMobileMenu}
	<MobileNav />
{/if}
