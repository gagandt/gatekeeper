import React from "react";

// Steve brand tokens (steve-lp/DESIGN.md). Gatekeeper story mapping:
//   team / allowed data  -> violet (action) + lavender fields
//   over-exposed data    -> coral (problem slides only, 2–6)
//   everything else      -> line greys
export const C = {
  violet: "#7C3AED",
  ink: "#242424",
  inkStrong: "#181818",
  muted: "#67616F",
  paper: "#FFFDF9",
  white: "#FFFFFF",
  paperMuted: "#FAF9FB",
  lavender: "#CC9CFC",
  lavenderSoft: "#E9D9FF",
  coral: "#FCA884",
  coralSoft: "#FFE0D2",
  coralInk: "#C2410C",
  cream: "#FCE4CC",
  line: "#DDD8E5",
  lineStrong: "#AAA3B3",
  sidequest: "#F3EEFB",
};

export const F = {
  display: "'Bricolage Grotesque', sans-serif",
  body: "'Plus Jakarta Sans', sans-serif",
  mono: "'IBM Plex Mono', monospace",
};

export const W = 1920;
export const H = 1080;
export const PAD = 120;

/* ---------- seeded random ---------- */
export function rng(seed: number) {
  let a = seed >>> 0;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/* ---------- slide frame ---------- */
export function Slide({
  n,
  children,
  bg = C.paper,
  marker,
  footer = true,
}: {
  n?: string;
  children: React.ReactNode;
  bg?: string;
  marker?: string;
  footer?: boolean;
}) {
  return (
    <div
      style={{
        width: W,
        height: H,
        position: "relative",
        overflow: "hidden",
        background: bg,
        fontFamily: F.body,
        color: C.ink,
      }}
    >
      {children}
      {marker && (
        <div style={{ position: "absolute", top: 56, right: PAD }}>
          <Chip variant="link">{marker}</Chip>
        </div>
      )}
      {footer && (
        <div
          style={{
            position: "absolute",
            left: PAD,
            right: PAD,
            bottom: 44,
            display: "flex",
            justifyContent: "space-between",
            fontFamily: F.mono,
            fontWeight: 600,
            fontSize: 18,
            letterSpacing: "0.08em",
            color: C.muted,
          }}
        >
          <span>GATEKEEPER · TRISSINO</span>
          <span>{n}</span>
        </div>
      )}
    </div>
  );
}

export function Headline({
  children,
  size = 84,
  style,
}: {
  children: React.ReactNode;
  size?: number;
  style?: React.CSSProperties;
}) {
  return (
    <h1
      style={{
        fontFamily: F.display,
        fontWeight: 750,
        fontSize: size,
        lineHeight: 1.02,
        letterSpacing: "-0.035em",
        margin: 0,
        color: C.inkStrong,
        ...style,
      }}
    >
      {children}
    </h1>
  );
}

export function Body({
  children,
  size = 34,
  style,
}: {
  children: React.ReactNode;
  size?: number;
  style?: React.CSSProperties;
}) {
  return (
    <p style={{ fontSize: size, lineHeight: 1.45, margin: 0, color: C.ink, ...style }}>
      {children}
    </p>
  );
}

export function Label({
  children,
  color = C.muted,
  size = 20,
  style,
}: {
  children: React.ReactNode;
  color?: string;
  size?: number;
  style?: React.CSSProperties;
}) {
  return (
    <div
      style={{
        fontFamily: F.mono,
        fontWeight: 600,
        fontSize: size,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        color,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

/** Placeholder Gagan must confirm: dashed outline, per handoff README. */
export function Ph({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        outline: `2.5px dashed ${C.muted}`,
        outlineOffset: 4,
        borderRadius: 6,
        padding: "0 6px",
      }}
    >
      {children}
    </span>
  );
}

type ChipVariant = "evidence" | "tool" | "brand" | "link" | "risk";
const chipStyles: Record<ChipVariant, React.CSSProperties> = {
  evidence: { background: C.cream, border: `2px solid ${C.ink}` },
  tool: { background: C.white, border: `2px solid ${C.lineStrong}` },
  brand: { background: C.coralSoft, border: `2px solid ${C.coral}`, fontWeight: 600 },
  link: { background: C.lavenderSoft, border: `2px solid ${C.violet}`, fontWeight: 600 },
  risk: { background: C.coralSoft, border: `2px solid ${C.coralInk}`, fontWeight: 600 },
};

export function Chip({
  children,
  icon,
  variant = "tool",
  size = 24,
  style,
}: {
  children: React.ReactNode;
  icon?: React.ReactNode;
  variant?: ChipVariant;
  size?: number;
  style?: React.CSSProperties;
}) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.4em",
        padding: "0.3em 0.65em",
        borderRadius: 6,
        fontSize: size,
        lineHeight: 1.3,
        fontWeight: 500,
        color: C.ink,
        whiteSpace: "nowrap",
        ...chipStyles[variant],
        ...style,
      }}
    >
      {icon}
      {children}
    </span>
  );
}

/** Real brand mark, unchanged. */
// Some marks ship with generous padding in their viewBox; scale the image, not the mark.
const LOGO_PAD: Record<string, number> = { "slack.svg": 1.9 };

export function Logo({ name, h = 36 }: { name: string; h?: number }) {
  const k = LOGO_PAD[name] ?? 1;
  const m = (-(k - 1) * h) / 2;
  return <img src={`../assets/logos/${name}`} style={{ height: h * k, width: "auto", display: "block", margin: m }} />;
}

/** Halftone dot pattern def for SVG. */
export function HalftoneDef({ id, color = C.lavender, gap = 9, r = 1.7 }: { id: string; color?: string; gap?: number; r?: number }) {
  return (
    <pattern id={id} width={gap} height={gap} patternUnits="userSpaceOnUse" patternTransform="rotate(30)">
      <circle cx={gap / 2} cy={gap / 2} r={r} fill={color} />
    </pattern>
  );
}

/** Soft pebble blob path centred on (cx, cy). */
export function blob(cx: number, cy: number, rx: number, ry: number, seed = 1) {
  const r = rng(seed);
  const pts: [number, number][] = [];
  const n = 8;
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2;
    const k = 0.88 + r() * 0.2;
    pts.push([cx + Math.cos(a) * rx * k, cy + Math.sin(a) * ry * k]);
  }
  // Catmull-Rom -> cubic bezier, closed
  let d = `M${pts[0][0].toFixed(1)},${pts[0][1].toFixed(1)}`;
  for (let i = 0; i < n; i++) {
    const p0 = pts[(i - 1 + n) % n], p1 = pts[i], p2 = pts[(i + 1) % n], p3 = pts[(i + 2) % n];
    const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
    const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
    d += ` C${c1[0].toFixed(1)},${c1[1].toFixed(1)} ${c2[0].toFixed(1)},${c2[1].toFixed(1)} ${p2[0].toFixed(1)},${p2[1].toFixed(1)}`;
  }
  return d + "Z";
}

/** White card with ink hairline and optional registration offset. */
export function Card({
  children,
  style,
  offset,
  dashed,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
  offset?: string;
  dashed?: boolean;
}) {
  return (
    <div
      style={{
        background: C.white,
        border: `2px ${dashed ? "dashed" : "solid"} ${C.ink}`,
        borderRadius: 14,
        boxShadow: offset ? `6px 6px 0 0 ${offset}` : undefined,
        padding: 32,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

/** Skeleton bar standing in for words. */
export function Skel({ w, h = 12, color = C.line, style }: { w: number | string; h?: number; color?: string; style?: React.CSSProperties }) {
  return <div style={{ width: w, height: h, borderRadius: h, background: color, ...style }} />;
}

/** Icon + short line row. */
export function Item({
  icon,
  children,
  size = 32,
  gap = 20,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
  size?: number;
  gap?: number;
}) {
  return (
    <div style={{ display: "flex", alignItems: "flex-start", gap, fontSize: size, lineHeight: 1.35 }}>
      <div style={{ flex: "none", marginTop: size * 0.12 }}>{icon}</div>
      <div>{children}</div>
    </div>
  );
}

export const ico = { size: 40, strokeWidth: 2, color: C.ink } as const;
