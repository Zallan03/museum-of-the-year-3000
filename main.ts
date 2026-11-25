import { mkdirSync, writeFileSync } from "node:fs";

// Museum of the Year 3000 — one line, 114 characters.
// Deterministic: a single string literal, no network, no randomness,
// no reads from outside the repository.
const ENTRY =
  "Parking meter, c. 2025. Citizens paid this box rent for time itself. The box kept the coins and gave nothing back.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
