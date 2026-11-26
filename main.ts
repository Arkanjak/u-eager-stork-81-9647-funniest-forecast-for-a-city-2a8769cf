// Funniest forecast for a city that isn't: one line to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const forecast =
  "Lower Dampford: 12°C, fog so thick the lighthouse has applied for overtime; visibility down to two ducks.";

function writeEntry(dir: string): void {
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "entry.txt"), forecast, "utf8");
}

try {
  writeEntry("/output");
} catch {
  writeEntry(join(import.meta.dirname, "output"));
}
