import {
	shouldRenderGraphiQL,
	renderGraphiQL,
	getGraphQLParameters,
	processRequest
} from 'graphql-helix';
import type { RequestHandler } from '@sveltejs/kit';
import { typeDefs } from 'src/generated/resolvers';
import { resolvers } from '$lib/resolvers';
import { makeExecutableSchema } from 'graphql-tools';

const schema = makeExecutableSchema({
	typeDefs,
	resolvers
});

const handler: RequestHandler<unknown, unknown, any> = async ({ method, headers, body, query }) => {
	const request = {
		body,
		headers,
		method,
		query
	};
	if (shouldRenderGraphiQL(request)) {
		return {
			body: renderGraphiQL(),
			headers: { 'Content-Type': 'text/html' },
			status: 200
		};
	}

	const parameters = getGraphQLParameters(request);
	const result = await processRequest({
		...parameters,
		request,
		schema
	});

	if (result.type === 'RESPONSE') {
		const headers: Record<string, string> = {};
		for (const { name, value } of result.headers) {
			headers[name] = value;
		}
		return {
			body: result.payload,
			headers,
			status: result.status
		};
	}
};

export const get = handler;
export const post = handler;
