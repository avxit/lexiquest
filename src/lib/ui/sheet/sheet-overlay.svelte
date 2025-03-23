<script lang="ts">
	import { cn } from '$lib/ui/utils';
	import { Dialog, type DialogOverlayProps } from 'bits-ui';

	let { class: className, ...rest }: DialogOverlayProps = $props();
</script>

<Dialog.Overlay
	class={cn(
		'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50',
		className
	)}
	data-slot="sheet-overlay"
	{...rest}
/>
