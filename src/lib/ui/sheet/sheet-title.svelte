<script lang="ts">
	import { cn } from '$lib/ui/utils';
	import { Dialog, type DialogTitleProps } from 'bits-ui';

	let { class: className, ...rest }: DialogTitleProps = $props();
</script>

<Dialog.Title
	class={cn('text-foreground font-semibold', className)}
	data-slot="sheet-title"
	{...rest}
/>
