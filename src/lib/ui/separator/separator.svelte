<script lang="ts">
	import { cn } from '$lib/ui/utils';
	import { Separator, type SeparatorRootProps } from 'bits-ui';

	let { class: className, decorative = true, ...rest }: SeparatorRootProps = $props();
</script>

<Separator.Root
	class={cn(
		'bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px',
		className
	)}
	data-slot="separator"
	{decorative}
	{...rest}
/>
