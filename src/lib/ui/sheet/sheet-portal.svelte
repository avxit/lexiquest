<script lang="ts">
	import { Dialog, type DialogPortalProps } from 'bits-ui';

	let props: DialogPortalProps = $props();

	// We can't pass data-slot="sheet-portal" to the Dialog.Portal
</script>

<Dialog.Portal {...props} />
