import { Database } from "duckdb-async";
import { test } from "vitest";

test("sample", async () => {
  const db = await Database.create(":memory:");
  const rows = await db.all("select * from range(1,10)");
  console.log(rows);
});
