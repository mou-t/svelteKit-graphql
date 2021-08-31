import { createClient } from '@urql/core';
import type { Client } from '@urql/core';

export const graphqlClient = (): Client => {
	return createClient({ url: '/graphql' });
};
