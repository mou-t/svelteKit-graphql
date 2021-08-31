# このレポジトリ

graphql の素振り

## 使用ライブラリ

|                              | ライブラリ    |
| ---------------------------- | ------------- |
| フロントエンドフレームワーク | Svelte-kit    |
| クライアント                 | @urql/core    |
| サーバ                       | graphql-helix |

## @urql/svelte について

https://github.com/FormidableLabs/urql/issues/1819

getContext は components の初期化時にしか使えないため、現状の仕様だとほぼ使えない。
