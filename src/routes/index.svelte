<script lang="ts" context="module">
	import type { Load } from '@sveltejs/kit';
	import { ExDocument } from '../generated/client';
	import { createClient } from '@urql/core';

	const client = createClient({
		url: 'http://localhost:3000/graphql'
	});
	export const load: Load = async () => {
		const res = await client.query(ExDocument, { id: 111 }).toPromise();

		return {
			props: {
				res: res.data?.hero?.hello
			}
		};
	};
</script>

<script lang="ts">
	export let res: string;
</script>

<h1>{res}</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
