<script lang="ts">
	import type { WithElementRef } from 'bits-ui';
	import type { SvelteHTMLElements } from 'svelte/elements';

	import { cn } from '$lib/ui/utils';

	type Props = WithElementRef<SvelteHTMLElements['div']>;

	let { children, class: className, ref = $bindable(null), ...rest }: Props = $props();
</script>

<div
	bind:this={ref}
	class={cn('flex flex-col gap-1.5 p-4', className)}
	data-slot="sheet-header"
	{...rest}
>
	{@render children?.()}
</div>
