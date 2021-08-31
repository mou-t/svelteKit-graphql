<script lang="ts">
	import { ExDocument } from '../generated/client';
	import { graphqlClient } from '$lib/utils/graphqlClient';

	const client = graphqlClient();

	const ex = client.query(ExDocument, { id: 111 }).toPromise();
</script>

{#await ex}
	<p>loading</p>
{:then { data, operation, extensions }}
	<p>{data?.hero.hello}</p>
{/await}

<h1>hello world</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
