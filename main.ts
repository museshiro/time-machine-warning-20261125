import { mkdirSync, writeFileSync } from "node:fs";

// One-line entry for u-eager-stork-81-9647-funniest-time-machine-warning-f8add151:
// written only to /output/entry.txt, with no trailing newline.
const line = "WARNING: Passengers arriving before they depart will be charged a second fare.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line);
