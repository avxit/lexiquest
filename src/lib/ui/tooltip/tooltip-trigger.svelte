<script lang="ts">
	import { Tooltip, type TooltipTriggerProps } from 'bits-ui';

	let props: TooltipTriggerProps = $props();
</script>

<Tooltip.Trigger data-slot="tooltip-trigger" {...props} />
