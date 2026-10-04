import React from "react";
import { C, F, rng } from "./brand";

/* =========================================================
   Dot field — the signature visual. Each dot = one call.
   Same seed everywhere, so "the team" is always the same dots.
   ========================================================= */

export type Dot = { x: number; y: number; team: boolean };

const TEAM_CENTRE = { x: 0.2, y: 0.52 };
const TEAM_R = { x: 0.085, y: 0.13 };

/** Jittered grid in the unit square. ~3% of dots form the team cluster. */
export function makeDots(cols = 56, rows = 34, seed = 7): Dot[] {
  const r = rng(seed);
  const dots: Dot[] = [];
  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols; i++) {
      if (r() < 0.06) continue; // a few gaps so it reads organic
      const x = (i + 0.5 + (r() - 0.5) * 0.7) / cols;
      const y = (j + 0.5 + (r() - 0.5) * 0.7) / rows;
      const dx = (x - TEAM_CENTRE.x) / TEAM_R.x;
      const dy = (y - TEAM_CENTRE.y) / TEAM_R.y;
      dots.push({ x, y, team: dx * dx + dy * dy < 1 });
    }
  }
  return dots;
}

export const DOTS = makeDots();

type Box = { x: number; y: number; w: number; h: number };

export function DotField({
  box,
  state = "rest",
  dots = DOTS,
  r = 4.2,
}: {
  box: Box;
  state?: "rest" | "exposed" | "muted";
  dots?: Dot[];
  r?: number;
}) {
  return (
    <g>
      {dots.map((d, i) => {
        const cx = box.x + d.x * box.w;
        const cy = box.y + d.y * box.h;
        if (d.team)
          return <circle key={i} cx={cx} cy={cy} r={r * 1.3} fill={C.violet} />;
        const fill = state === "exposed" ? C.coral : C.lineStrong;
        const op = state === "muted" ? 0.45 : state === "exposed" ? 1 : 0.75;
        return <circle key={i} cx={cx} cy={cy} r={r} fill={fill} opacity={op} />;
      })}
    </g>
  );
}

/**
 * Gated state: company field on the left, Gatekeeper line, vendor side on the right.
 * Grey dots stop at the gate and fade. Team dots pass and settle on the vendor side.
 */
export function GatedField({
  company,
  gateX,
  vendorCentre,
  r = 4.2,
  inTransit = true,
}: {
  company: Box;
  gateX: number;
  vendorCentre: { x: number; y: number };
  r?: number;
  inTransit?: boolean;
}) {
  const rand = rng(99);
  const team = DOTS.filter((d) => d.team);
  const others = DOTS.filter((d) => !d.team);
  return (
    <g>
      {others.map((d, i) => {
        // compress toward the gate: dots drift right and bunch near the line
        const t = Math.pow(d.x, 0.75);
        const cx = company.x + t * company.w;
        const cy = company.y + d.y * company.h;
        const nearGate = t > 0.86;
        return (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r={r}
            fill={C.lineStrong}
            opacity={nearGate ? 0.3 : 0.7}
          />
        );
      })}
      {/* empty footprint where the team dots used to be */}
      {team.map((d, i) => {
        const tx = vendorCentre.x + (d.x - TEAM_CENTRE.x) * company.w * 0.95;
        const ty = vendorCentre.y + (d.y - TEAM_CENTRE.y) * company.h * 0.95;
        return <circle key={`t${i}`} cx={tx} cy={ty} r={r * 1.3} fill={C.violet} />;
      })}
      {inTransit &&
        [0, 1, 2, 3, 4].map((k) => (
          <circle
            key={`m${k}`}
            cx={gateX - 40 + k * 26 + rand() * 6}
            cy={company.y + company.h * 0.5 + (rand() - 0.5) * 30}
            r={r * 1.3}
            fill={C.violet}
            opacity={0.35 + k * 0.13}
          />
        ))}
    </g>
  );
}

/** The gate: a thin vertical line with a small opening. */
export function Gate({
  x,
  y1,
  y2,
  opening = 70,
  label = true,
  labelY,
}: {
  x: number;
  y1: number;
  y2: number;
  opening?: number;
  label?: boolean;
  labelY?: number;
}) {
  const mid = (y1 + y2) / 2;
  const ly = labelY ?? y1 - 24;
  return (
    <g>
      <line x1={x} y1={y1} x2={x} y2={mid - opening / 2} stroke={C.ink} strokeWidth={4} strokeLinecap="round" />
      <line x1={x} y1={mid + opening / 2} x2={x} y2={y2} stroke={C.ink} strokeWidth={4} strokeLinecap="round" />
      <line x1={x - 14} y1={mid - opening / 2} x2={x + 14} y2={mid - opening / 2} stroke={C.violet} strokeWidth={4} strokeLinecap="round" />
      <line x1={x - 14} y1={mid + opening / 2} x2={x + 14} y2={mid + opening / 2} stroke={C.violet} strokeWidth={4} strokeLinecap="round" />
      {label && (
        <g>
          <rect x={x - 112} y={ly - 30} width={224} height={52} rx={14} fill={C.lavenderSoft} stroke={C.violet} strokeWidth={2.5} />
          <text x={x} y={ly + 4} textAnchor="middle" fontFamily={F.display} fontWeight={700} fontSize={26} fill={C.ink}>
            Gatekeeper
          </text>
        </g>
      )}
    </g>
  );
}

/* =========================================================
   The building — a company with many floors (one per team).
   ========================================================= */

export function Building({
  x,
  y,
  w,
  floors = 12,
  floorH = 46,
  teamFloor = 7,
  mode = "rest",
  windows = 6,
  id,
}: {
  x: number;
  y: number;
  w: number;
  floors?: number;
  floorH?: number;
  teamFloor?: number; // counted from the top, 0-based
  mode?: "rest" | "exposed";
  windows?: number;
  id: string;
}) {
  const bodyY = y + 26;
  const lobbyH = floorH * 1.6;
  const bodyH = floors * floorH + lobbyH;
  const exposed = mode === "exposed";
  const ww = (w - 40) / windows - 12;
  return (
    <g>
      <defs>
        <pattern id={`${id}-ht`} width={9} height={9} patternUnits="userSpaceOnUse" patternTransform="rotate(30)">
          <circle cx={4.5} cy={4.5} r={1.6} fill={C.coral} />
        </pattern>
      </defs>
      {exposed && (
        <rect
          x={x + 12}
          y={bodyY + 12}
          width={w}
          height={bodyH}
          rx={6}
          fill={`url(#${id}-ht)`}
          stroke={C.coral}
          strokeWidth={5}
        />
      )}
      {/* roof parapet */}
      <rect x={x + w * 0.3} y={y} width={w * 0.4} height={26} rx={4} fill={C.white} stroke={C.ink} strokeWidth={2.5} />
      {/* body */}
      <rect x={x} y={bodyY} width={w} height={bodyH} rx={6} fill={exposed ? C.coralSoft : C.white} stroke={C.ink} strokeWidth={3} />
      {Array.from({ length: floors }).map((_, f) => {
        const fy = bodyY + f * floorH;
        const isTeam = f === teamFloor;
        return (
          <g key={f}>
            {isTeam && (
              <rect x={x + 3} y={fy + 2} width={w - 6} height={floorH - 2} fill={C.lavenderSoft} />
            )}
            {f > 0 && <line x1={x} y1={fy} x2={x + w} y2={fy} stroke={C.line} strokeWidth={2} />}
            {Array.from({ length: windows }).map((_, k) => (
              <rect
                key={k}
                x={x + 26 + k * (ww + 12)}
                y={fy + floorH * 0.28}
                width={ww}
                height={floorH * 0.44}
                rx={3}
                fill={isTeam ? C.violet : exposed ? C.coral : C.white}
                stroke={isTeam ? C.violet : exposed ? C.coral : C.lineStrong}
                strokeWidth={2}
              />
            ))}
            {isTeam && (
              <rect x={x} y={fy} width={w} height={floorH} fill="none" stroke={C.violet} strokeWidth={4} />
            )}
          </g>
        );
      })}
      {/* lobby + door */}
      <line x1={x} y1={bodyY + floors * floorH} x2={x + w} y2={bodyY + floors * floorH} stroke={C.ink} strokeWidth={2.5} />
      <rect
        x={x + w / 2 - 34}
        y={bodyY + bodyH - lobbyH * 0.78}
        width={68}
        height={lobbyH * 0.78}
        rx={4}
        fill={C.paper}
        stroke={C.ink}
        strokeWidth={2.5}
      />
      <line x1={x + w / 2} y1={bodyY + bodyH - lobbyH * 0.78} x2={x + w / 2} y2={bodyY + bodyH} stroke={C.ink} strokeWidth={2} />
      {/* ground */}
      <line x1={x - 120} y1={bodyY + bodyH} x2={x + w + 120} y2={bodyY + bodyH} stroke={C.ink} strokeWidth={2.5} strokeLinecap="round" />
    </g>
  );
}

export function buildingGeom(y: number, floors = 12, floorH = 46, teamFloor = 7) {
  const bodyY = y + 26;
  const lobbyH = floorH * 1.6;
  return {
    bodyY,
    groundY: bodyY + floors * floorH + lobbyH,
    teamY: bodyY + teamFloor * floorH,
    teamMid: bodyY + teamFloor * floorH + floorH / 2,
  };
}

/** Small building glyph used in the breach fan-out. */
export function MiniBuilding({ x, y, s = 1, color = C.ink }: { x: number; y: number; s?: number; color?: string }) {
  const w = 16 * s, h = 22 * s;
  return (
    <g>
      <rect x={x - w / 2} y={y - h / 2} width={w} height={h} rx={2} fill={C.white} stroke={color} strokeWidth={1.8} />
      <line x1={x - w / 2 + 4 * s} y1={y - h / 6} x2={x + w / 2 - 4 * s} y2={y - h / 6} stroke={color} strokeWidth={1.4} />
      <line x1={x - w / 2 + 4 * s} y1={y + h / 6} x2={x + w / 2 - 4 * s} y2={y + h / 6} stroke={color} strokeWidth={1.4} />
    </g>
  );
}

/** Arrowhead marker def. */
export function Arrow({ id, color = C.ink }: { id: string; color?: string }) {
  return (
    <marker id={id} viewBox="0 0 10 10" refX={8} refY={5} markerWidth={7} markerHeight={7} orient="auto-start-reverse">
      <path d="M1,1 L9,5 L1,9" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </marker>
  );
}
