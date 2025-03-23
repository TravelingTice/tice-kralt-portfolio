import { readable } from 'svelte/store'

export enum Breakpoints {
	xs,
	sm,
	md,
	lg,
	xl
}

const breakpoint = readable(
	typeof window !== 'undefined' ? window.innerWidth : 0,
	(set) => {
		if (typeof window === 'undefined') return

		const updateBreakpoint = () => {
			const width = window?.innerWidth
			if (width >= 1280) {
				set(Breakpoints.xl)
			} else if (width >= 1024) {
				set(Breakpoints.lg)
			} else if (width >= 768) {
				set(Breakpoints.md)
			} else if (width >= 640) {
				set(Breakpoints.sm)
			} else {
				set(Breakpoints.xs)
			}
		}

		updateBreakpoint()

		window?.addEventListener('resize', updateBreakpoint)

		return () => window?.removeEventListener('resize', updateBreakpoint)
	}
)

export default breakpoint
