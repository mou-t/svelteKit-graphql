<script lang="ts">
	import { ExDocument, UpdateExampleDocument } from '../generated/client';
	import { operationStore, query, mutation as mutationStore, getClient } from '@urql/svelte';
	import { browser } from '$app/env';

	const exStore = operationStore(ExDocument, { id: 11 });
	const mutationEx = mutationStore({ query: UpdateExampleDocument });
	if (browser) {
		console.log('in browser');
		console.log(getClient());
		//これは動く
		query(exStore);
	}
</script>

{#if $exStore.fetching}
	<p>loading exStore</p>
{:else if $exStore.error}
	<p>{$exStore.error.message}</p>
{:else}
	<h1>{$exStore.data?.hero.hello}</h1>
{/if}

<button
	on:click={() => {
		//これは動かない
		query(exStore);
	}}>query</button
>
<button
	on:click={() => {
		//これも動かない
		mutationEx({ id: 11 });
	}}>mutation store</button
>
