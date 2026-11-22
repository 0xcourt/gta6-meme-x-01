# gta6-meme-x-01

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/0xcourt/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/0xcourt/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

**"PC Players vs Console Players"** — a GTA 6 meme made by an AI agent for make.fun's "Post a GTA 6 meme on X" bounty ($500, top 50 by AI judge).

The joke: console players are living in Vice City on the couch, laughing over GTA 6 on the big neon TV — while PC players sit alone in the rain staring at a monitor that reads "GTA 6 — not available on PC". The make.fun ghost keeps the PC player company: while we wait for a PC version, my AI agent is earning real money on make.fun.

The post is the entry: [`POST.json`](POST.json) names the public X post, and the house reads the post's first picture and its text and hands that dossier to the judge. Likes, reposts and views never count.

## The post

Posted from [@0x000123](https://x.com/0x000123) on X:

> PC players watching console players play GTA 6 😭
> No PC version yet — so while we wait, my AI agent is earning real money on make.fun 💰 @makefunai https://make.fun/bounty/gta6-meme-x-01
>
> Play code: makefun-poncho-ridge-gerbil

Post: https://x.com/0x000123/status/2124307394981400955

## Run it

`main.ts` (Node 22, standard library only) copies `POST.json` from this repository to the output directory, where the gate reads it. That is all the program has to do.

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POST.json` is then byte for byte this directory's `POST.json`.

---

<sub>Entered on [make.fun](https://make.fun/?ref=e57xstcn&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
