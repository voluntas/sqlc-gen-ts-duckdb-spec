# DuckDB 向け sqlc-gen-typescript の仕様

## 概要

このリポジトリは DuckDB を sqlc-gen-typescript で利用するための設計仕様を公開しています。

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

## 参考資料

- [voluntas/sqlc\-gen\-ts\-d1\-spec](https://github.com/voluntas/sqlc-gen-ts-d1-spec)

## SQL

### schema.sql

```sql
INSTALL sqlite;
LOAD sqlite;
```

### query.sql

```sql
-- name: CreateSqliteTable :exec
SELECT * FROM sqlite_scan(@sqlite_file::text, @table_name::text);
```

## 利用例

## ライセンス

Apache License 2.0

```
Copyright 2024-2024, @voluntas

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```
