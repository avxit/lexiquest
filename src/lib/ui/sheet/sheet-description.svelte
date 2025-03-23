<script lang="ts">
	import { cn } from '$lib/ui/utils';
	import { Dialog, type DialogDescriptionProps } from 'bits-ui';

	let { class: className, ...rest }: DialogDescriptionProps = $props();
</script>

<Dialog.Description
	class={cn('text-muted-foreground text-sm', className)}
	data-slot="sheet-description"
	{...rest}
/>
