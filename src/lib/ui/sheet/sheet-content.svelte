<script lang="ts">
	import { cn } from '$lib/ui/utils';
	import { Dialog, type DialogContentProps } from 'bits-ui';
	import { XIcon } from 'lucide-svelte';

	import SheetOverlay from './sheet-overlay.svelte';
	import SheetPortal from './sheet-portal.svelte';

	let {
		children,
		class: className,
		side,
		...rest
	}: { side?: 'bottom' | 'left' | 'right' | 'top' } & DialogContentProps = $props();
</script>

<SheetPortal>
	<SheetOverlay />
	<Dialog.Content
		class={cn(
			'bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500',
			side === 'right' &&
				'data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm',
			side === 'left' &&
				'data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm',
			side === 'top' &&
				'data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b',
			side === 'bottom' &&
				'data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t',
			className
		)}
		data-slot="sheet-content"
		{...rest}
	>
		{@render children?.()}
		<Dialog.Close
			class="ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none"
		>
			<XIcon class="size-4" />
			<span class="sr-only">Close</span>
		</Dialog.Close>
	</Dialog.Content>
</SheetPortal>
