<script lang="ts">
	import Modal from '$lib/components/Modal.svelte'
	import type { Category, Value } from './values'

	const {
		isOpen = false,
		category = null,
		value = null,
		onClose = () => {}
	} = $props<{
		isOpen: boolean
		category: Category | null
		value: Value | null
		onClose: () => void
	}>()
</script>

<Modal
	isOpen={isOpen && category !== null && value !== null}
	title={category?.name || ''}
	{onClose}
>
	<div class="prose max-w-none">
		<p class="mb-6 text-lg font-medium">{value?.text || ''}</p>

		<div class="mt-6">
			<p class="text-sm text-gray-500">
				Part of my <span class={`font-medium text-${category?.color}-800`}
					>{category?.name}</span
				> values
			</p>
		</div>
	</div>
</Modal>
