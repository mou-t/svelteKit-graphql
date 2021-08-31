import type { Resolvers } from '../../generated/resolvers';
export const resolvers: Resolvers = {
	Query: {
		hero: (_parent, args) => {
			return {
				hello: `hello world ${args.id} ${Date.now()}`
			};
		}
	},
	Mutation: {
		updateExample: (_parent, args) => {
			//テスト用で実際にはデータの変更はしていない
			return {
				hello: `mutation ${args.id}`
			};
		}
	}
};
