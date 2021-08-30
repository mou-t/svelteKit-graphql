<script lang="ts">
	import { page } from '$app/stores';
	import { initClient } from '@urql/svelte';
	import {} from '../generated/client';

	initClient({
		url: 'https://' + $page.host + '/graphql'
	});
</script>

<slot />
