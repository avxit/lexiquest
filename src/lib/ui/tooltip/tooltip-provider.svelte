<script lang="ts">
	import { Tooltip, type TooltipProviderProps } from 'bits-ui';

	let { delayDuration = 0, ...rest }: TooltipProviderProps = $props();

	// We can't pass data-slot="tooltip-provider" to the Tooltip.Provider
</script>

<Tooltip.Provider {delayDuration} {...rest} />
