<script lang="ts">
	import { cn } from '$lib/ui/utils';
	import type { WithElementRef } from 'bits-ui';
	import { cva, type VariantProps } from 'cva';
	import type { SvelteHTMLElements } from 'svelte/elements';

	const alertVariants = cva({
		base: 'relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current',
		variants: {
			variant: {
				default: 'bg-card text-card-foreground',
				destructive:
					'text-destructive bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90'
			}
		},
		defaultVariants: {
			variant: 'default'
		}
	});

	type Props = WithElementRef<SvelteHTMLElements['div']> & VariantProps<typeof alertVariants>;

	let { children, class: className, ref = $bindable(null), variant, ...rest }: Props = $props();
</script>

<div
	class={cn(alertVariants({ variant }), className)}
	data-slot="alert"
	role="alert"
	bind:this={ref}
	{...rest}
>
	{@render children?.()}
</div>
