<script lang="ts">
	import { Dialog, type DialogRootProps } from 'bits-ui';

	let props: DialogRootProps = $props();

	// We can't pass data-slot="sheet" to the Dialog.Root
</script>

<Dialog.Root {...props} />
