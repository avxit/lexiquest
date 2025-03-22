<script lang="ts">
	import { m } from '@/paraglide/messages';
	import { GalleryVerticalEnd } from 'lucide-svelte';

	let { children } = $props();
</script>

<div class="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
	<div class="flex w-full max-w-sm flex-col gap-6">
		<a href="/" class="flex items-center gap-2 self-center font-medium">
			<div
				class="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md"
			>
				<GalleryVerticalEnd class="size-4" />
			</div>
			{m['common.app_name']()}
		</a>
		{@render children()}
	</div>
</div>
