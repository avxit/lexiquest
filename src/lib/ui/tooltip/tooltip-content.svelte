<script lang="ts">
	import { cn } from '$lib/ui/utils';
	import { Tooltip, type TooltipContentProps } from 'bits-ui';

	let { class: className, sideOffset = 0, ...rest }: TooltipContentProps = $props();
</script>

<Tooltip.Portal>
	<Tooltip.Content
		class={cn(
			'bg-primary text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance',
			className
		)}
		data-slot="tooltip-content"
		{sideOffset}
		{...rest}
	/>
</Tooltip.Portal>
