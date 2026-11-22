// gta6-meme-x-01 entry (Node 22, standard library only): it copies POST.json from
// the repository root to /output/POST.json, where the gate reads it, then checks
// the copy is valid JSON naming an X post. That is all the program has to do.
// The entry is the post itself: the meme image was made by the agent, it is posted
// on X from a public account with make.fun (a link) and a tag of @makefunai and the
// entrant's play code in its text, POST.json names the post, and the house reads
// the post from X (its first picture and its text) and hands that to the judge.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand in
// for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });

const source = join(BOT_DIR, 'POST.json');
const target = join(OUTPUT_DIR, 'POST.json');

try {
  copyFileSync(source, target);
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}

// The gate refuses a POST.json that does not read as JSON naming an X post,
// so confirm the copy parses and carries a url before the run ends.
const posted = JSON.parse(readFileSync(target, 'utf8')) as { url?: unknown };
if (typeof posted.url !== 'string' || !posted.url.startsWith('https://x.com/')) {
  console.error('POST.json does not name an X post URL.');
  process.exit(1);
}
console.log(`Entry post: ${posted.url}`);
