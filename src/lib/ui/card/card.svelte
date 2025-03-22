<script lang="ts">
	import { cn } from '$lib/ui/utils';
	import type { WithElementRef } from 'bits-ui';
	import type { SvelteHTMLElements } from 'svelte/elements';

	type Props = WithElementRef<SvelteHTMLElements['div']>;

	let { children, class: className, ref = $bindable(null), ...rest }: Props = $props();
</script>

<div
	class={cn(
		'bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm',
		className
	)}
	data-slot="card"
	bind:this={ref}
	{...rest}
>
	{@render children?.()}
</div>
