<script lang="ts">
	import { m } from '@/paraglide/messages';
	import { Alert, AlertDescription, AlertTitle } from '@/ui/alert';
	import { Button } from '@/ui/button';
	import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/ui/card';
	import { Input } from '@/ui/input';
	import { Label } from '@/ui/label';
	import { page } from '$app/state';
	import { AlertCircle } from 'lucide-svelte';

	let { data, form } = $props();

	const redirectTo = data.redirectTo ?? page.url.searchParams.get('redirect_to') ?? '/';
</script>

<div class="flex flex-col gap-6">
	<Card>
		<CardHeader class="text-center">
			<CardTitle class="text-xl">{m['auth.title']()}</CardTitle>
			<CardDescription>{m['auth.subtitle']()}</CardDescription>
		</CardHeader>
		<CardContent>
			{#if form?.error}
				<Alert class="mb-3" variant="destructive">
					<AlertCircle className="h-4 w-4" />
					<AlertTitle>Error</AlertTitle>
					<AlertDescription>{form?.message}</AlertDescription>
				</Alert>
			{/if}
			<form action="?/login" method="POST">
				<input name="redirect_to" type="hidden" value={redirectTo} />
				<div class="grid gap-6">
					<div class="grid gap-6">
						<div class="grid gap-3">
							<Label for="email">{m['common.email']()}</Label>
							<Input
								id="email"
								name="email"
								placeholder="m@example.com"
								required
								type="email"
								value={form?.fieldValues.email ?? ''}
							/>
						</div>
						<div class="grid gap-3">
							<Label for="password">{m['common.password']()}</Label>
							<Input id="password" name="password" required type="password" />
						</div>
						<Button class="w-full" type="submit">{m['common.login']()}</Button>
					</div>
					<div class="text-center text-sm">
						{m['auth.dont_have_an_account']()}
					</div>
				</div>
			</form>
		</CardContent>
	</Card>
	<div
		class="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4"
	>
		By clicking continue, you agree to our <a href="/">Terms of Service</a> and
		<a href="/">Privacy Policy</a>.
	</div>
</div>
