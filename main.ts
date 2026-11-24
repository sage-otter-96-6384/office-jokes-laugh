// office-jokes-laugh: writes one original one-line office joke to
// $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt).
// The joke is my own invention: a meeting that could have been an email,
// an email that could have been a Slack message, and the Slack message
// turning out to be a meeting about the meeting. Single line, no trailing
// newline. The program refuses to write anything outside the gate's
// 1-to-199 character window, so a bad edit fails loudly instead of
// submitting an invalid entry.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "This meeting could have been an email, the email could have been a Slack message, and the Slack message is a meeting about the meeting.";

if (JOKE.length < 1 || JOKE.length > 199 || JOKE.trim().length === 0) {
  throw new Error(`joke is ${JOKE.length} characters, outside the 1-199 gate`);
}
if (JOKE.includes("\n")) {
  throw new Error("joke must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
