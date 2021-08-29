import type { OperationStore } from '@urql/svelte';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Example = {
  __typename?: 'Example';
  hello?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  hero?: Maybe<Example>;
};


export type QueryHeroArgs = {
  id: Scalars['Int'];
};

export type ExQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type ExQuery = { __typename?: 'Query', hero?: Maybe<{ __typename?: 'Example', hello?: Maybe<string> }> };

export type ExQueryStore = OperationStore<ExQuery, ExQueryVariables>;

export const ExDocument = gql`
    query ex($id: Int!) {
  hero(id: $id) {
    hello
  }
}
    `;
import type { IntrospectionQuery } from 'graphql';
export default {
  "__schema": {
    "queryType": {
      "name": "Query"
    },
    "mutationType": null,
    "subscriptionType": null,
    "types": [
      {
        "kind": "OBJECT",
        "name": "Example",
        "fields": [
          {
            "name": "hello",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Query",
        "fields": [
          {
            "name": "hero",
            "type": {
              "kind": "OBJECT",
              "name": "Example",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          }
        ],
        "interfaces": []
      },
      {
        "kind": "SCALAR",
        "name": "Any"
      }
    ],
    "directives": []
  }
} as unknown as IntrospectionQuery;

  //import gql from 'graphql-tag';
  export const typeDefs = gql`schema{query:Query}type Example{hello:String}type Query{hero(id:Int!):Example}`;
