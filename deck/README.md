# Gatekeeper deck — image renderer

Each slide is a React component in `src/slides.tsx`, rendered to a 1920×1080 PNG in `images/`.
`../presentation.md` places them as full-bleed slides (Marp-compatible; notes in HTML comments).

```bash
pnpm install
pnpm render            # all slides
pnpm render 02 14      # only slides whose id contains "02" or "14"
```

- Brand: Steve design system (`steve-lp/DESIGN.md`, `docs/brand/`). Tokens in `src/brand.tsx`.
- Signature visuals (dot field, gate, building) in `src/art.tsx`.
- Placeholders: edit `FACTS` at the top of `src/slides.tsx`, set `confirmed: true`, re-render.
- Fonts load from Google Fonts at render time (needs network).
