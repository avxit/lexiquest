<script>
	import { Alert, AlertDescription, AlertTitle } from '@/ui/alert';
	import { Button } from '@/ui/button';
	import { AlertCircle } from 'lucide-svelte';
</script>

<Alert class="mb-3" variant="destructive">
	<AlertCircle className="h-4 w-4" />
	<AlertTitle>Error</AlertTitle>
	<AlertDescription>There was an error when trying to process your request.</AlertDescription>
</Alert>
<div class="flex justify-center">
	<Button
		onclick={() => {
			history.back();
		}}
	>
		Go back
	</Button>
</div>
