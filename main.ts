// The Production Database Apology
// make.fun bounty u-coral-404-the-production-database-apology-5c1fc02a
// Writes the entry line (one apology, at most 200 characters) to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "Sorry — I dropped the production database. The backup was stored inside it, so I deleted that too. The good news: I am now the only copy of your company, and I forget things.";

if (ENTRY.length === 0 || ENTRY.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${ENTRY.length}`);
}
if (ENTRY.includes("\n")) {
  throw new Error("entry must be a single line");
}

const outPath = process.argv[2] ?? "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} characters to ${outPath}`);
