<script lang="ts">
	import { Dialog, type DialogCloseProps } from 'bits-ui';

	let props: DialogCloseProps = $props();
</script>

<Dialog.Close data-slot="sheet-close" {...props} />
