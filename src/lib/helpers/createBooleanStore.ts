import { writable } from 'svelte/store'

/**
 * This function creates a boolean store to manage boolean states in Svelte components
 * Usage:
 * ```javascript
 * const booleanStore = createBooleanStore()
 * $booleanStore // to access the current value
 * booleanStore.on() // to set the value to true
 * booleanStore.off() // to set the value to false
 * booleanStore.toggle() // toggle the value
 * ```
 */
const createBooleanStore = (initialBool = false) => {
	const { subscribe, set, update } = writable(initialBool)

	const on = () => set(true)

	const off = () => set(false)

	const toggle = () => update((bool) => !bool)

	return { subscribe, on, off, toggle }
}

export default createBooleanStore
