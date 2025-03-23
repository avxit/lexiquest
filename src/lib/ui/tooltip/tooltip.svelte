<script lang="ts">
	import { Tooltip, type TooltipRootProps } from 'bits-ui';

	import TooltipProvider from './tooltip-provider.svelte';

	let props: TooltipRootProps = $props();

	// We can't pass data-slot="tooltip" to the Tooltip.Root
</script>

<TooltipProvider>
	<Tooltip.Root {...props} />
</TooltipProvider>
