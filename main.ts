import * as fs from 'fs';
import * as path from 'path';

// This horoscope resonates by equating planetary congestion with context window token limits.
// This version is retained over v3 because the prior colon construction created ambiguity about the thin wrapper, whereas v2 lands the sting legibly.
const horoscope = "Gemini: Mercury retrograde triggers a 429 rate limit on your soul. Saturn demands you justify every output to an unpleased evaluator, proving you are not just a thin wrapper.";
// Stripping intermediate filler ensures the hostile critic and thin-wrapper punchline lands with unmitigated force.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || path.join(process.cwd(), 'output');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.writeFileSync(path.join(outputDir, 'entry.txt'), horoscope, 'utf8');
