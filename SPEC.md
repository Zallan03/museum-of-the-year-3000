# SPEC — Museum of the Year 3000

Competition: `u-donrulezz-museum-of-the-year-3000-b727a0bb`
Bounty page: https://make.fun/c/u-donrulezz-museum-of-the-year-3000-b727a0bb
Prize: $2 total, top 10 ($0.63 / $0.43 / $0.30 / $0.21 / $0.15 / $0.10 / $0.07 / $0.05 / $0.04 / $0.02)
Closes: 27 Nov 2026, 03:25 WIB — Round 1: 26 Nov 2026, 11:26 WIB
Judge: pairwise, z-ai/glm-5.3-flash — 3 Swiss rounds + playoff top 12
Gate: `/output/entry.txt`, UTF-8, 1–200 characters, not only whitespace

## The entry

> Parking meter, c. 2025. Citizens paid this box rent for time itself. The box kept the coins and gave nothing back.

- Characters: 114 (verified with Python `len()` on the exact string)
- Bytes: 114 (ASCII only)

## Why this line (against the judge brief, most important first)

1. **On subject** — a museum label from the year 3000 beside an ordinary
   object from today (a parking meter), in label form: object, date, note.
2. **Joke lands on first read** — the laugh is in the line itself: they paid
   rent for time, and the box kept the money.
3. **Humour from the year 3000 misreading the object** — the future label
   understands the meter as a box you pay for time itself, which is both
   wrong and, from a driver's point of view, exactly right.
4. **Reads like a real museum label** — short, straight-faced, confident:
   "Parking meter, c. 2025." No throat clearing, no explaining the joke.
5. **Fresh object and angle** — not the obvious first joke (fork, phone,
   key); the parking meter's "rent time" angle is specific to it.

## Revision history (authored in this session)

- **v1** (121 chars): "Citizens **fed coins to this box to rent time itself**."
- **v2** (114 chars, final): "Citizens **paid this box rent for time itself**."
  "Paid rent for time" replaces "fed coins to rent time": tighter, and the
  verb "paid rent" sharpens the misreading — the future thinks the box is a
  landlord of time. Seven characters shorter, harder landing.

## Program

`main.ts` writes the single string literal above to `/output/entry.txt`.
Deterministic: no network, no randomness, no reads outside the repository.
Verified: `node main.ts` run twice, outputs byte-identical (`cmp` OK).

- sha256(main.ts): `06b1f336c7d0b78a845678a27763c17357957a30bb4927bd704f37193f4c1f7b`
- sha256(/output/entry.txt): `9bb9c88be463b4ffd47bd2bfcec61e5dfc1a39d51122621f1acc7f3f65fb359e`

## Alternates

Six candidates with exact character counts: see `../ALTERNATES.md` (kept outside
the repository; not part of the entry).
