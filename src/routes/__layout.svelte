<script lang="ts">
	import { onMount } from 'svelte';
	import { initClient, getClient } from '@urql/svelte';
	import { browser } from '$app/env';
	if (browser) {
		try {
			initClient({ url: '/graphql' });
		} catch (e) {
			console.log('initClient error' + e);
		}
	}
</script>

<slot />
