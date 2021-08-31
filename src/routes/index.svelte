<script lang="ts">
	import { ExDocument, UpdateExampleDocument } from '../generated/client';
	import { graphqlClient } from '$lib/utils/graphqlClient';

	let ex = graphqlClient.query(ExDocument, { id: 111 }).toPromise();

	const reFetch = () => {
		ex = graphqlClient.query(ExDocument, { id: 111 }).toPromise();
	};

	const mutation = async () => {
		await graphqlClient.mutation(UpdateExampleDocument, { id: 111 }).toPromise();
		ex = graphqlClient.query(ExDocument, { id: 111 }).toPromise();
	};
</script>

{#await ex}
	<p>loading</p>
{:then { data, operation, extensions }}
	<p>{data?.hero.hello}</p>
{/await}

<button
	on:click={() => {
		reFetch();
	}}>reFetch</button
>

<button
	on:click={() => {
		mutation();
	}}>mutation</button
>
<h1>hello world</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
