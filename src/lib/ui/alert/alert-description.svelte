<script lang="ts">
	import type { WithElementRef } from 'bits-ui';
	import type { SvelteHTMLElements } from 'svelte/elements';

	import { cn } from '$lib/ui/utils';

	type Props = WithElementRef<SvelteHTMLElements['div']>;

	let { children, class: className, ref = $bindable(null), ...rest }: Props = $props();
</script>

<div
	bind:this={ref}
	class={cn(
		'text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed',
		className
	)}
	data-slot="alert-description"
	{...rest}
>
	{@render children?.()}
</div>
