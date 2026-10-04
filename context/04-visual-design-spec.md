# 04 — Visual design spec

## Design idea

The deck is about **one small part of something large**. Every visual should make that
contrast obvious: a big grey whole, a small coloured part, and a gate between them.

Spend boldness in **one place: the dot field** (see below). Everything else stays quiet,
clean, and readable.

## Colour tokens

| Token | Hex | Use |
|---|---|---|
| `--paper` | `#F6F7F9` | Slide background (cool, light — not cream) |
| `--ink` | `#1F2A44` | Headlines and body text (deep indigo, not black) |
| `--ink-soft` | `#5B6478` | Secondary text, labels |
| `--allowed` | `#2E8B6E` | The team / allowed data (jade). The "good" colour. |
| `--exposed` | `#D9962B` | Over-exposed data, the problem state (amber, not red) |
| `--muted` | `#C5CAD3` | Everything else: the rest of the company, blocked data |
| `--sidequest` | `#EEF1F6` | Background tint for the side-quest section |

Rules:
- Never use red. The tone is calm and serious, not alarmist.
- Amber appears only on problem slides (2–6). From slide 7 onward, amber disappears and
  jade takes over. This colour shift is part of the story.
- Check contrast: all text must pass WCAG AA on `--paper`.

## Typography

- **One family: Atkinson Hyperlegible** (Google Fonts). Designed for maximum letter
  clarity — a deliberate choice for a reader whose first language is not English.
- Headlines: 700 weight, 44–52px at 1920×1080.
- Body: 400 weight, 28–32px. Never smaller than 24px on the slide face.
- Big numbers: 700 weight, 120–160px.
- Sentence case everywhere. No all-caps labels. No small "eyebrow" labels above headlines.
- Left-align text. Centre only the title and closing slides.

## Layout

- 16:9, 1920×1080 base.
- Generous margins (120px left/right).
- Typical slide: headline top-left, visual takes 60–70% of the slide on the right or below.

```
+-----------------------------------------------------------+
| Headline (max 12 words)                                   |
|                                                           |
| Short line 1          +---------------------------------+ |
| Short line 2          |                                 | |
| Short line 3          |          VISUAL                 | |
|                       |                                 | |
|                       +---------------------------------+ |
|                                            source, small  |
+-----------------------------------------------------------+
```

## The signature visual: the dot field

A reusable Vue component, `<DotField>`.

- Draw ~2,000 small dots (not 90,000 — it is a representation; label it as such if needed).
  Each dot = a call / a piece of data.
- A cluster of ~2–5% of dots belongs to "the team". These are always the same dots across slides,
  so Taka learns to recognise them.
- Props:
  - `state`: `"rest" | "exposed" | "gated"`
  - `showGate`: boolean (a thin vertical line with a small opening)
  - `animate`: boolean
- **rest:** all dots `--muted`, team dots `--allowed`.
- **exposed:** all dots turn `--exposed` and drift towards the vendor side. Used on slides 2–3.
- **gated:** all dots drift towards the gate; team dots pass through and settle on the vendor
  side; other dots stop at the gate and fade to 30% opacity. Used on slide 8 and 15.
- Use a seeded random layout so the picture is identical on every render.
- Respect `prefers-reduced-motion`: show the final state without animation.
- Render with canvas for performance; SVG is fine if it stays smooth.

## The building illustration

Reusable component `<Building>`.

- Simple line drawing, 2px `--ink` strokes, no shading, no perspective tricks.
- ~12 floors. One floor (the team floor, labelled `[Workvivo]`) can be filled `--allowed`.
- Optional front desk at ground level labelled "Gatekeeper".
- Optional outline state: whole building outlined in `--exposed` (slide 2).
- Optional document stack that moves from the team floor through the desk (slide 7).

## Illustration rules

- One line style everywhere: 2px strokes, rounded caps, no gradients, no drop shadows.
- People are simple, friendly, faceless figures (head circle + body shape).
- **Do not use real company logos** (Zoom, Slack, Salesforce, Merge, etc.). Use plain text
  labels in rounded boxes. This avoids trademark issues and keeps the visual style consistent.
- No stock photos. No 3D. No padlocks, skulls, hoodie hackers or matrix code.
- No card grids with identical drop shadows.

## Motion rules

- Motion only where it explains something: slides 2, 5, 6, 7, 8.
- **Slide 8 is the one big moment.** Keep other motion short and quiet.
- No fade-and-slide-up on every bullet. Use Slidev click steps only where the slide says so.
- All animations: ease-in-out, 0.8–3s. Nothing loops forever.

## Side-quest section

- Background `--sidequest`.
- A small, consistent marker in the corner: "Side quest" in `--ink-soft`, sentence case.

## Accessibility and export

- PDF export must show the final state of every animation.
- Every visual must still make sense in greyscale (use shape and position, not only colour:
  team dots can be slightly larger).
