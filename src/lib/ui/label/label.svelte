<script lang="ts">
	import { cn } from '$lib/ui/utils';
	import { Label, type LabelRootProps } from 'bits-ui';

	let { class: className, ...rest }: LabelRootProps = $props();
</script>

<Label.Root
	class={cn(
		'flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
		className
	)}
	data-slot="label"
	{...rest}
/>
