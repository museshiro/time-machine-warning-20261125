import { mkdirSync, writeFileSync } from "node:fs";

const label =
  "WARNING: If your birth certificate begins to fade, stay seated and " +
  "continue not existing until an attendant arrives.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", label, "utf8");
