<script lang="ts">
	import { page } from '$app/state';

	let { data } = $props();
	let redirectTo = data.redirectTo ?? page.url.searchParams.get('redirect_to') ?? '/';
</script>

<form method="POST" action="?/login">
	<input type="hidden" name="redirect_to" value={redirectTo} />
	<label>
		Email
		<input name="email" type="email" />
	</label>
	<label>
		Password
		<input name="password" type="password" />
	</label>
	<button>Login</button>
</form>
