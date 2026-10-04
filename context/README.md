# Gatekeeper — pitch deck handoff

This folder is the full brief for building the Gatekeeper pitch deck in code.
It is written for a coding agent. Read every file before writing any code.

## Who the deck is for

- **Audience:** Taka Morinaga, CEO and co-founder of Trissino. Japanese, non-technical.
  English is his second language.
- **Presenter:** Gagan (CTO). He will present live and explain each slide.
- **Goal of the meeting:** Taka understands the problem, believes it is real and growing,
  understands the MVP in plain words, and agrees on next steps.

## Non-negotiables

1. The product name is **Gatekeeper**. Do not use any other name anywhere
   (not "Data Keeper", not "DataGate", nothing else).
2. **One idea per slide.** Short sentences. No idioms, no slang, no jargon on the slide face.
   If a technical word is unavoidable (OAuth, API, MCP), it must be explained on the slide
   in plain words or in the glossary slide.
3. **English only.** No Japanese text.
4. **MCP access and API access are side quests.** They get their own clearly labeled section
   near the end. They must not compete with the main story. But they must be shown —
   we are being transparent about everything this can do.
5. **Be honest.** Every "open question" and "risk" in `09-risks-and-open-questions.md`
   appears in the deck. Do not hide trade-offs.
6. **The graphics carry the story.** This deck should be understandable with the sound off.

## Tech stack (recommended)

- **Slidev** (https://sli.dev) — Markdown-based slides, Vue components for custom graphics,
  presenter mode with speaker notes, PDF export.
  (Gagan wrote "slide.com, like Markdown slides" — we assume he means Slidev.
  If he meant a different tool, keep the content and swap the framework.)
- Custom graphics as **Vue components** (SVG + light animation). Use D3 or plain canvas
  for the dot-field visual (see `04-visual-design-spec.md`).
- Mermaid only as a fallback for simple diagrams. The hero diagrams must be custom.
- Speaker notes go in Slidev's `<!-- notes -->` blocks. Notes are taken from
  `03-slide-by-slide.md`.

## File map

| File | What it contains |
|---|---|
| `01-context-brief.md` | The full story, what is decided, what is assumed. Read first. |
| `02-narrative-arc.md` | The storyline in one page, and how to talk to a non-technical CEO. |
| `03-slide-by-slide.md` | Every slide: on-slide text, visual, animation, speaker notes. **The main build spec.** |
| `04-visual-design-spec.md` | Colors, type, layout, the signature visual, illustration rules. |
| `05-diagrams.md` | Exact specs for every diagram, with ASCII sketches. |
| `06-evidence-and-sources.md` | Every fact and number used, with its source link. |
| `07-day-zero-use-cases.md` | Brainstorm: industries, tools, and problems Gatekeeper can solve first. |
| `08-mvp-architecture.md` | How the MVP works (for the technical appendix and for Gagan's own reference). |
| `09-risks-and-open-questions.md` | Everything not yet decided or not yet proven. |
| `10-competitors.md` + `competitors.csv` | Who else is near this space and how Gatekeeper differs. |
| `11-side-quests-mcp-and-api.md` | The MCP and API angle, kept separate on purpose. |
| `12-glossary.md` | Plain-English definitions for the glossary slide. |

## Build order

1. Set up Slidev with the theme tokens from `04-visual-design-spec.md`.
2. Build the signature dot-field component first (it is reused on slides 2, 3, 8 and 15).
3. Build slides in order from `03-slide-by-slide.md`.
4. Build the other diagrams from `05-diagrams.md`.
5. Add speaker notes.
6. Export to PDF and check every slide is readable at 50% zoom.
7. Do a "sound off" test: can someone understand the story from the slides alone?

## Placeholders

Text in `[square brackets]` is a placeholder Gagan must fill or confirm.
Render placeholders in the deck with a visible dashed outline so they are easy to find.
