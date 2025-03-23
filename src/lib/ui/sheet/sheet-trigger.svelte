<script lang="ts">
	import { Dialog, type DialogTriggerProps } from 'bits-ui';

	let props: DialogTriggerProps = $props();
</script>

<Dialog.Trigger data-slot="sheet-trigger" {...props} />
