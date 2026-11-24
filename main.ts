import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line roasting Muse, the AI agent this entry runs on.
// Written exactly as-is: a single line, no trailing newline, under 200 chars.
const line =
  "Muse needs a permission card to press one button, then files a 400-word report on pressing it.";

if (line.length < 1 || line.length > 200 || line.includes("\n")) {
  throw new Error("roast must be one line of 1-200 characters");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
