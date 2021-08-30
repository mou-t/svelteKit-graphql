<script lang="ts">
	import { operationStore, query } from '@urql/svelte';
	import { ExDocument } from '../generated/client';

	const ex = operationStore(ExDocument, { id: 11 });
	query(ex);
</script>

{#if $ex.fetching}
	<p>loading</p>
{:else if $ex.error}
	<p>{$ex.error.message}</p>
{:else}
	<h1>{$ex.data?.hero.hello}</h1>
{/if}
<h1>hello world</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
