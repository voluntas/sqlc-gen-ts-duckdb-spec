# DuckDB 向け sqlc-gen-typescript の仕様

## 概要

このリポジトリは DuckDB を sqlc-gen-typescript で利用するための設計仕様を公開しています。

## 関連

- [voluntas/sqlc\-gen\-ts\-d1\-spec](https://github.com/voluntas/sqlc-gen-ts-d1-spec)

## モチベーション

- sqlc は素晴らしいので、SQL を利用するならなんでも sqlc を使いたい
  - https://sqlc.dev/
  - https://github.com/sqlc-dev/sqlc
- DuckDB は素晴らしいので sqlc 経由で使いたい
  - https://duckdb.org/
- DuckDB の Node.jS API は公式で提供されている
  - https://duckdb.org/docs/api/nodejs/overview.html
  - https://www.npmjs.com/package/duckdb
    - https://github.com/duckdb/duckdb-node
  - https://www.npmjs.com/package/duckdb-async
    - https://github.com/motherduckdb/duckdb-async
- DuckDB 利用時に sqlc と vitest でテストを書きたい
  - https://vitest.dev/

## 方針

- sqlc plugin で解決はできないのでまずは sqlc の fork で対応する必要がある
- DuckDB は Node.js で利用するため、sqlc-gen-typescript をベースにする
  - https://github.com/sqlc-dev/sqlc-gen-typescript
- sqlc-gen-typescript をフォークして DuckDB をサポートさせる
- DuckDB は Wasm 化されている
  - https://github.com/duckdb/duckdb-wasm
