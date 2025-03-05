<script lang="ts">
	let { data } = $props();
	let { branches, supabase, user } = $derived(data);
</script>

<h1>Private page for user: {user?.email}</h1>
<ul>
	{#each branches as branch}
		<li>{branch.name}</li>
	{/each}
</ul>
