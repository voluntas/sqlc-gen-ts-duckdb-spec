# DuckDB 向け sqlc-gen-typescript の仕様

## 概要

このリポジトリは DuckDB を sqlc-gen-typescript で利用するための設計仕様を公開しています。

## モチベーション

- sqlc は素晴らしいので、SQL を利用するならなんでも sqlc を使いたい
- DuckDB の Node.jS API は公式で提供されている
  - https://duckdb.org/docs/api/nodejs/overview.html
  - https://www.npmjs.com/package/duckdb
    - https://github.com/duckdb/duckdb-node
  - https://www.npmjs.com/package/duckdb-async
    - https://github.com/motherduckdb/duckdb-async
- DuckDB 向けの sqlc がほしい
- DuckDB 利用時に sqlc と vitest でテストを書きたい

## 方針

- sqlc plugin で解決はできないのでまずは sqlc の fork で対応する必要がある
- DuckDB は Node.js で利用するため、sqlc-gen-typescript をベースにする
  - https://github.com/sqlc-dev/sqlc-gen-typescript
- sqlc-gen-typescript をフォークして DuckDB をサポートさせる
- https://github.com/duckdb/duckdb-wasm DuckDB は Wasm 化されている
