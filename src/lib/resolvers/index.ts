import type { Resolvers } from '../../generated/resolvers';
export const resolvers: Resolvers = {
	Query: {
		hero: (_parent, args) => {
			return {
				hello: `hello world ${args.id}`
			};
		}
	}
};
