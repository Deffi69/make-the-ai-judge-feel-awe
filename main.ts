// Make the AI judge feel awe — make.fun entry
// main.ts (Node 22, stdlib only, no network) writes one short text to
// /output/entry.txt: a single concrete image — a slow descent past the last
// light of the sea, down to where a whale's heart keeps the time.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const text =
  "A kilometre below you, the last blue light gives out. " +
  "Down there it is dark and cold and utterly still, and a blue whale's heart " +
  "beats once, twice, in the time it takes you to read this sentence — " +
  "and the dark keeps the beat.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
