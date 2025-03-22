<script lang="ts">
	import { cn } from '$lib/ui/utils';
	import type { WithElementRef } from 'bits-ui';
	import type { SvelteHTMLElements } from 'svelte/elements';

	type Props = WithElementRef<SvelteHTMLElements['div']>;

	let { children, class: className, ref = $bindable(null), ...rest }: Props = $props();
</script>

<div
	class={cn('text-muted-foreground text-sm', className)}
	data-slot="card-description"
	bind:this={ref}
	{...rest}
>
	{@render children?.()}
</div>
