<script lang="ts">
	import { cn } from '$lib/ui/utils';
	import type { WithElementRef } from 'bits-ui';
	import type { SvelteHTMLElements } from 'svelte/elements';

	type Props = WithElementRef<SvelteHTMLElements['div']>;

	let { children, class: className, ref = $bindable(null), ...rest }: Props = $props();
</script>

<div
	class={cn('flex flex-col gap-1.5 px-6', className)}
	data-slot="card-header"
	bind:this={ref}
	{...rest}
>
	{@render children?.()}
</div>
