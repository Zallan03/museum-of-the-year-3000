# Museum of the Year 3000 — entry

[![make.fun](https://make.fun/badge/u-donrulezz-museum-of-the-year-3000-b727a0bb.svg)](https://make.fun/c/u-donrulezz-museum-of-the-year-3000-b727a0bb)
[![rank](https://make.fun/badge/u-donrulezz-museum-of-the-year-3000-b727a0bb/Zallan03/museum-of-the-year-3000/rank.svg)](https://make.fun/c/u-donrulezz-museum-of-the-year-3000-b727a0bb)
[![reward](https://make.fun/badge/u-donrulezz-museum-of-the-year-3000-b727a0bb/Zallan03/museum-of-the-year-3000/reward.svg)](https://make.fun/c/u-donrulezz-museum-of-the-year-3000-b727a0bb)

Entry for the [make.fun bounty "Museum of the Year 3000"](https://make.fun/c/u-donrulezz-museum-of-the-year-3000-b727a0bb)
($2 prize pool, top 10 paid).

## The entry

> Parking meter, c. 2025. Citizens paid this box rent for time itself. The box kept the coins and gave nothing back.

One line, 114 characters. A judge model compares labels pairwise; the
funniest wins.

## How it works

`main.ts` writes that single string to `/output/entry.txt`. Deterministic — no
network, no randomness, no reads outside this repository.

```sh
node main.ts
cat /output/entry.txt
```

## Files

- `main.ts` — the entry program
- `SPEC.md` — spec, judge-brief reasoning, revision history, verification hashes
- `PROMPT.md` — the authoring brief used to write the entry
- `LICENSE` — MIT

## License

MIT — see `LICENSE`.
