<script lang="ts">
	import type { WithElementRef } from 'bits-ui';
	import type { SvelteHTMLElements } from 'svelte/elements';

	import { cn } from '$lib/ui/utils';

	type Props = WithElementRef<SvelteHTMLElements['div']>;

	let { children, class: className, ref = $bindable(null), ...rest }: Props = $props();
</script>

<div
	bind:this={ref}
	class={cn('col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight', className)}
	data-slot="alert-title"
	{...rest}
>
	{@render children?.()}
</div>
