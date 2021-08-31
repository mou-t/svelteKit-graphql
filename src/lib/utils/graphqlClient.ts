import { createClient } from '@urql/core';
import type { Client } from '@urql/core';

class SingletonClient {
	private static instanse: Client;
	private constructor() {
		//no-empty-functionの回避
	}

	static getInstance(): Client {
		return this.instanse || (this.instanse = createClient({ url: '/graphql' }));
	}
}

export const graphqlClient = SingletonClient.getInstance();
