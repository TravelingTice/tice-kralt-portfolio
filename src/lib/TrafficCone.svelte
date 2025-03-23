<script lang="ts">
	import { onMount } from 'svelte'
	import * as THREE from 'three'
	import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

	let container: HTMLDivElement
	let renderer = $state<THREE.WebGLRenderer | null>(null)
	let scene = $state<THREE.Scene | null>(null)
	let camera = $state<THREE.PerspectiveCamera | null>(null)
	let controls = $state<OrbitControls | null>(null)

	const createTrafficCone = () => {
		// Create the cone geometry (bottom orange part)
		const coneGeometry = new THREE.ConeGeometry(1, 2, 32)
		const coneMaterial = new THREE.MeshStandardMaterial({
			color: 0xff6600, // Orange color
			roughness: 0.8,
			metalness: 0.2
		})
		const cone = new THREE.Mesh(coneGeometry, coneMaterial)
		cone.position.y = 1 // Position the cone above the ground

		// Create the black base
		const baseGeometry = new THREE.CylinderGeometry(1.2, 1.2, 0.2, 32)
		const baseMaterial = new THREE.MeshStandardMaterial({
			color: 0x222222, // Black color
			roughness: 0.9,
			metalness: 0.1
		})
		const base = new THREE.Mesh(baseGeometry, baseMaterial)
		base.position.y = -0.1 // Position it below the cone

		// Create the reflective stripes
		const stripeGeometry = new THREE.TorusGeometry(1, 0.05, 16, 32)
		const stripeMaterial = new THREE.MeshStandardMaterial({
			color: 0xffffff, // White color
			roughness: 0.5,
			metalness: 0.8,
			emissive: 0xffffff,
			emissiveIntensity: 0.2
		})

		// Create two reflective stripes
		const stripe1 = new THREE.Mesh(stripeGeometry, stripeMaterial)
		stripe1.position.y = 0.5
		stripe1.rotation.x = Math.PI / 2

		const stripe2 = new THREE.Mesh(stripeGeometry, stripeMaterial)
		stripe2.position.y = 1.2
		stripe2.rotation.x = Math.PI / 2
		stripe2.scale.set(0.8, 0.8, 0.8)

		// Create a group and add all elements to it
		const trafficConeGroup = new THREE.Group()
		trafficConeGroup.add(cone)
		trafficConeGroup.add(base)
		trafficConeGroup.add(stripe1)
		trafficConeGroup.add(stripe2)

		return trafficConeGroup
	}

	const init = () => {
		// Create scene
		scene = new THREE.Scene()
		scene.background = new THREE.Color(0xf0f0f0)

		// Create camera
		camera = new THREE.PerspectiveCamera(
			75,
			container.clientWidth / container.clientHeight,
			0.1,
			1000
		)
		camera.position.set(0, 3, 5)

		// Create renderer
		renderer = new THREE.WebGLRenderer({ antialias: true })
		renderer.setSize(container.clientWidth, container.clientHeight)
		renderer.setPixelRatio(window.devicePixelRatio)
		renderer.shadowMap.enabled = true
		container.appendChild(renderer.domElement)

		// Add orbit controls
		controls = new OrbitControls(camera, renderer.domElement)
		controls.enableDamping = true
		controls.dampingFactor = 0.05
		controls.minDistance = 3
		controls.maxDistance = 10

		// Add traffic cone
		const trafficCone = createTrafficCone()
		scene.add(trafficCone)

		// Add light
		const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
		scene.add(ambientLight)

		const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
		directionalLight.position.set(5, 10, 7)
		directionalLight.castShadow = true
		scene.add(directionalLight)

		// Add a simple ground plane
		const groundGeometry = new THREE.PlaneGeometry(20, 20)
		const groundMaterial = new THREE.MeshStandardMaterial({
			color: 0xcccccc,
			roughness: 0.8,
			metalness: 0.2
		})
		const ground = new THREE.Mesh(groundGeometry, groundMaterial)
		ground.rotation.x = -Math.PI / 2 // Rotate to be horizontal
		ground.position.y = -0.2 // Slightly below the cone base
		ground.receiveShadow = true
		scene.add(ground)

		// Start animation
		animate()
	}

	const animate = () => {
		requestAnimationFrame(animate)

		if (controls) controls.update()
		if (renderer && scene && camera) {
			renderer.render(scene, camera)
		}
	}

	const handleResize = () => {
		if (camera && renderer && container) {
			camera.aspect = container.clientWidth / container.clientHeight
			camera.updateProjectionMatrix()
			renderer.setSize(container.clientWidth, container.clientHeight)
		}
	}

	onMount(() => {
		init()
		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
			if (renderer) {
				container.removeChild(renderer.domElement)
				renderer.dispose()
			}
		}
	})
</script>

<div class="traffic-cone-container" bind:this={container}></div>

<style>
	.traffic-cone-container {
		@apply h-full w-full flex-grow overflow-hidden;
	}
</style>
