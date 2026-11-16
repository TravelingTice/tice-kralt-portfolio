<script lang="ts">
	import { onMount } from 'svelte'

	const CELL = 170
	const SWAY = 6

	type Point = {
		x: number
		y: number
		radius: number
		alpha: number
		phase: number
		speed: number
	}

	let canvas: HTMLCanvasElement

	onMount(() => {
		const ctx = canvas.getContext('2d')!
		const still = matchMedia('(prefers-reduced-motion: reduce)').matches
		let points: Point[] = []
		let links: { from: number; to: number; alpha: number }[] = []
		let frame = 0

		const build = () => {
			const dpr = devicePixelRatio || 1
			canvas.width = innerWidth * dpr
			canvas.height = innerHeight * dpr
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

			// Seeded so the layout is the same on every visit and resize
			let seed = 2026
			const rand = () => (seed = (seed * 16807) % 2147483647) / 2147483647

			points = []
			for (let row = -1; row <= innerHeight / CELL + 1; row++) {
				for (let col = -1; col <= innerWidth / CELL + 1; col++) {
					const point = {
						x: (col + rand() * 0.84) * CELL,
						y: (row + rand() * 0.84) * CELL,
						radius: 1 + rand() * 1.4,
						alpha: 0.2 + rand() * 0.2,
						phase: rand() * Math.PI * 2,
						speed: 0.0004 + rand() * 0.0003
					}
					if (rand() > 0.12) points.push(point)
				}
			}

			links = []
			points.forEach((point, from) => {
				const nearest = points
					.map((other, to) => ({
						to,
						distance: Math.hypot(other.x - point.x, other.y - point.y)
					}))
					.sort((a, b) => a.distance - b.distance)
					.slice(1, 6)
				for (const { to } of nearest) {
					if (to > from && rand() < 0.6)
						links.push({ from, to, alpha: 0.05 + rand() * 0.07 })
				}
			})
		}

		const draw = (time: number) => {
			ctx.clearRect(0, 0, innerWidth, innerHeight)
			const positions = points.map((point) => ({
				x: point.x + Math.cos(time * point.speed + point.phase) * SWAY,
				y: point.y + Math.sin(time * point.speed * 1.3 + point.phase) * SWAY
			}))

			ctx.lineWidth = 1
			for (const { from, to, alpha } of links) {
				ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`
				ctx.beginPath()
				ctx.moveTo(positions[from].x, positions[from].y)
				ctx.lineTo(positions[to].x, positions[to].y)
				ctx.stroke()
			}
			points.forEach((point, index) => {
				ctx.fillStyle = `rgba(255, 255, 255, ${point.alpha})`
				ctx.beginPath()
				ctx.arc(
					positions[index].x,
					positions[index].y,
					point.radius,
					0,
					Math.PI * 2
				)
				ctx.fill()
			})

			if (!still) frame = requestAnimationFrame(draw)
		}

		const onResize = () => {
			build()
			if (still) draw(0)
		}

		build()
		draw(0)
		addEventListener('resize', onResize)

		return () => {
			cancelAnimationFrame(frame)
			removeEventListener('resize', onResize)
		}
	})
</script>

<canvas
	bind:this={canvas}
	aria-hidden="true"
	class="pointer-events-none fixed inset-0 -z-10 h-full w-full opacity-60"
></canvas>
