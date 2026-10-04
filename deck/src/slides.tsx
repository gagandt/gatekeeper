import React from "react";
import {
  Archive, ArrowRight, BadgeCheck, Bot, Building2, CircleHelp, ClipboardCheck, Cloud, Eye, FileText,
  Filter, Hammer, Handshake, Hourglass, KeyRound, Link2, ListChecks, MessagesSquare, Plug, Power,
  ScrollText, Send, Server, SlidersHorizontal, Target, Terminal, TriangleAlert, Upload, UserCheck,
  Users, Wallet, Wrench, Puzzle, Layers, RefreshCw, Webhook, Clock, Scale, Globe, Mic,
} from "lucide-react";
import { Body, C, Card, Chip, F, H, HalftoneDef, Headline, Item, Label, Logo, PAD, Ph, Skel, Slide, W, blob, ico, rng } from "./brand";
import { Arrow, Building, DOTS, DotField, Gate, GatedField, MiniBuilding, buildingGeom } from "./art";

/**
 * Facts to confirm before presenting. Edit here, set `confirmed: true`
 * to drop the dashed placeholder outlines, then `pnpm render`.
 */
export const FACTS = {
  unit: "Workvivo",
  teamSize: "[Y]",
  date: "[DATE]",
  window: "30 days",
  decision: "Do we spend X weeks on Gatekeeper, next to HireSteve?",
  fifthTool: "Microsoft 365",
  confirmed: false,
};
const Fact = ({ children }: { children: React.ReactNode }) => (FACTS.confirmed ? <>{children}</> : <Ph>{children}</Ph>);

const TOTAL = 15;
const num = (n: number) => `${String(n).padStart(2, "0")} / ${TOTAL}`;

const Svg = ({ children }: { children: React.ReactNode }) => (
  <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} style={{ position: "absolute", inset: 0 }}>
    {children}
  </svg>
);

const Abs = ({ x, y, w, children, style }: { x: number; y: number; w?: number; children: React.ReactNode; style?: React.CSSProperties }) => (
  <div style={{ position: "absolute", left: x, top: y, width: w, ...style }}>{children}</div>
);

const Big = ({ children, color = C.inkStrong, size = 132 }: { children: React.ReactNode; color?: string; size?: number }) => (
  <div style={{ fontFamily: F.display, fontWeight: 800, fontSize: size, lineHeight: 0.95, letterSpacing: "-0.04em", color }}>
    {children}
  </div>
);

/* ---------------- 01 Title ---------------- */
function S01() {
  const field = { x: 980, y: 210, w: 820, h: 620 };
  return (
    <Slide footer={false}>
      <Svg>
        <defs>
          <HalftoneDef id="s01-ht" />
        </defs>
        <path d={blob(field.x + 0.2 * field.w, field.y + 0.52 * field.h, 150, 160, 3)} fill="url(#s01-ht)" />
        <DotField box={field} state="rest" />
        <Gate x={900} y1={240} y2={800} label={false} />
      </Svg>
      <Abs x={PAD} y={300} w={720}>
        <Label color={C.violet} size={22}>A product idea from Trissino</Label>
        <Headline size={150} style={{ marginTop: 28 }}>Gatekeeper</Headline>
        <Body size={48} style={{ marginTop: 28, fontWeight: 500 }}>Share only what was sold.</Body>
        <div style={{ marginTop: 72, fontFamily: F.mono, fontWeight: 600, fontSize: 22, letterSpacing: "0.08em", color: C.muted }}>
          GAGAN · TRISSINO · <Fact>{FACTS.date}</Fact>
        </div>
      </Abs>
      <Abs x={field.x} y={field.y + field.h + 36} w={field.w}>
        <div style={{ display: "flex", gap: 28, fontSize: 24, color: C.muted, alignItems: "center" }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
            <svg width="18" height="18"><circle cx="9" cy="9" r="6" fill={C.lineStrong} /></svg> One dot = one call
          </span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
            <svg width="18" height="18"><circle cx="9" cy="9" r="7" fill={C.violet} /></svg> The team we sold to
          </span>
        </div>
      </Abs>
    </Slide>
  );
}

/* ---------------- 02 What happened ---------------- */
function S02() {
  const bx = 1100, by = 170, bw = 400;
  const g = buildingGeom(by);
  return (
    <Slide n={num(2)}>
      <Svg>
        <Building id="s02" x={bx} y={by} w={bw} mode="exposed" />
        {/* team floor label */}
        <line x1={bx + bw + 12} y1={g.teamMid} x2={bx + bw + 70} y2={g.teamMid} stroke={C.violet} strokeWidth={3} />
      </Svg>
      <Abs x={bx} y={by - 70}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 26, fontWeight: 600 }}>
          <Logo name="zoom.png" h={30} /> <span>The company</span>
        </div>
      </Abs>
      <Abs x={bx + bw + 80} y={g.teamMid - 26}>
        <Chip variant="link" icon={<Users size={24} strokeWidth={2} />}>
          <Fact>{FACTS.unit}</Fact>&nbsp;team
        </Chip>
      </Abs>
      <Abs x={bx - 190} y={g.bodyY + 40} w={290}>
        <div style={{ transform: "rotate(-4deg)", background: C.coralSoft, border: `2px solid ${C.ink}`, borderRadius: 14, boxShadow: `5px 5px 0 ${C.coral}`, padding: "22px 24px", display: "flex", gap: 16, alignItems: "center" }}>
          <KeyRound size={44} strokeWidth={2} color={C.ink} />
          <div style={{ fontSize: 26, fontWeight: 600, lineHeight: 1.25 }}>The key we were given</div>
        </div>
      </Abs>
      <Abs x={PAD} y={130} w={760}>
        <Headline>We sold to one team. We got all of Zoom.</Headline>
        <div style={{ display: "flex", gap: 64, marginTop: 96 }}>
          <div>
            <Big color={C.violet}><Fact>{FACTS.teamSize}</Fact></Big>
            <Body size={30} style={{ marginTop: 22, width: 260 }}>people on the team we sold to</Body>
          </div>
          <div>
            <Big>90,000+</Big>
            <Body size={30} style={{ marginTop: 22, width: 300 }}>calls we could access</Body>
          </div>
        </div>
      </Abs>
    </Slide>
  );
}

/* ---------------- 03 Why it happened ---------------- */
function MiniGrid({ kind }: { kind: "one" | "all" | "team" }) {
  const cols = 9, rows = 6, gap = 38;
  const dots = [];
  for (let j = 0; j < rows; j++)
    for (let i = 0; i < cols; i++) {
      const team = i >= 2 && i <= 4 && j >= 2 && j <= 4;
      const one = i === 4 && j === 2;
      let fill: string = C.line, r = 9;
      if (kind === "one" && one) { fill = C.ink; r = 11; }
      if (kind === "all") fill = C.coral;
      if (kind === "team" && team) { fill = C.violet; r = 11; }
      dots.push(<circle key={`${i}-${j}`} cx={24 + i * gap} cy={24 + j * gap} r={r} fill={fill} />);
    }
  return (
    <svg width={24 * 2 + gap * (cols - 1)} height={24 * 2 + gap * (rows - 1)}>
      {kind === "team" && (
        <rect x={24 + 2 * gap - 24} y={24 + 2 * gap - 24} width={gap * 2 + 48} height={gap * 2 + 48} rx={14} fill="none" stroke={C.violet} strokeWidth={3} strokeDasharray="8 7" />
      )}
      {dots}
    </svg>
  );
}

function S03() {
  const panels = [
    { kind: "one" as const, t: "Connect one person", b: "Each person must say yes.", tag: <Chip icon={<Hourglass size={22} strokeWidth={2} />}>Too slow</Chip> },
    { kind: "all" as const, t: "Connect everyone", b: "One admin says yes for all.", tag: <Chip variant="brand" icon={<TriangleAlert size={22} strokeWidth={2} />}>Too much</Chip> },
    { kind: "team" as const, t: "Connect one team", b: "Only the people we sold to.", tag: <Chip variant="link" icon={<CircleHelp size={22} strokeWidth={2} />}>Does not exist</Chip> },
  ];
  return (
    <Slide n={num(3)}>
      <Abs x={PAD} y={130} w={1500}>
        <Headline>Software offers only two choices.</Headline>
        <Body style={{ marginTop: 24, color: C.muted }}>Most apps connect to Zoom, Slack or Google in one of two ways.</Body>
      </Abs>
      <Abs x={PAD} y={380} w={W - 2 * PAD}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 40 }}>
          {panels.map((p, i) => (
            <Card key={i} dashed={p.kind === "team"} style={{ padding: 40, background: p.kind === "team" ? C.paper : C.white }}>
              <Label>{p.kind === "team" ? "Missing" : `Choice ${"AB"[i]}`}</Label>
              <div style={{ fontFamily: F.display, fontWeight: 700, fontSize: 40, marginTop: 14, letterSpacing: "-0.02em" }}>{p.t}</div>
              <div style={{ fontSize: 28, color: C.muted, marginTop: 8 }}>{p.b}</div>
              <div style={{ margin: "32px 0 28px" }}><MiniGrid kind={p.kind} /></div>
              {p.tag}
            </Card>
          ))}
        </div>
      </Abs>
    </Slide>
  );
}

/* ---------------- 04 Who gets hurt ---------------- */
function S04() {
  const side = (title: string, icon: React.ReactNode, items: [React.ReactNode, string][]) => (
    <Card style={{ padding: 44, width: 640 }}>
      <div style={{ display: "flex", gap: 18, alignItems: "center" }}>
        {icon}
        <div style={{ fontFamily: F.display, fontWeight: 700, fontSize: 40, letterSpacing: "-0.02em" }}>{title}</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 26, marginTop: 36 }}>
        {items.map(([ic, t], i) => (
          <Item key={i} icon={ic} size={30}>{t}</Item>
        ))}
      </div>
    </Card>
  );
  const ic = (I: any) => <I size={34} strokeWidth={2} color={C.ink} />;
  return (
    <Slide n={num(4)}>
      <Svg>
        <defs><HalftoneDef id="s04-ht" color={C.coral} /></defs>
        <path d={blob(960, 640, 120, 150, 5)} fill="url(#s04-ht)" />
        <Building id="s04" x={890} y={500} w={140} floors={7} floorH={30} teamFloor={4} windows={3} mode="exposed" />
      </Svg>
      <Abs x={PAD} y={130}>
        <Headline>Both sides lose.</Headline>
      </Abs>
      <Abs x={PAD} y={330}>
        {side("The company's IT team", <Building2 size={44} strokeWidth={2} color={C.ink} />, [
          [ic(Upload), "More data leaves the company"],
          [ic(ClipboardCheck), "Harder to check who saw what"],
          [ic(TriangleAlert), "Bigger damage if a vendor is hacked"],
        ])}
      </Abs>
      <Abs x={W - PAD - 640} y={330}>
        {side("Vendors like us", <Handshake size={44} strokeWidth={2} color={C.ink} />, [
          [ic(Archive), "We hold data we do not want"],
          [ic(Hourglass), "Security reviews take longer"],
          [ic(Scale), "We carry the risk"],
        ])}
      </Abs>
    </Slide>
  );
}

/* ---------------- 05 Real damage ---------------- */
function S05() {
  const cx = 1340, cy = 560;
  const r = rng(11);
  const nodes: { x: number; y: number }[] = [];
  const rings = [{ n: 26, rx: 230, ry: 190 }, { n: 40, rx: 340, ry: 280 }, { n: 54, rx: 450, ry: 370 }];
  rings.forEach((ring, k) => {
    for (let i = 0; i < ring.n; i++) {
      const a = (i / ring.n) * Math.PI * 2 + k * 0.3 + (r() - 0.5) * 0.08;
      nodes.push({ x: cx + Math.cos(a) * ring.rx * (0.95 + r() * 0.1), y: cy + Math.sin(a) * ring.ry * (0.95 + r() * 0.1) });
    }
  });
  const visible = nodes.filter((n) => n.y > 170 && n.y < 980 && n.x < 1860);
  return (
    <Slide n={num(5)}>
      <Svg>
        {visible.map((n, i) => (
          <line key={i} x1={cx} y1={cy} x2={n.x} y2={n.y} stroke={C.coral} strokeWidth={1.6} opacity={0.85} />
        ))}
        {visible.map((n, i) => (
          <MiniBuilding key={`b${i}`} x={n.x} y={n.y} s={0.95} />
        ))}
      </Svg>
      <Abs x={cx - 170} y={cy - 70} w={340}>
        <div style={{ transform: "rotate(-3deg)", background: C.coralSoft, border: `2px solid ${C.ink}`, borderRadius: 14, boxShadow: `5px 5px 0 ${C.coral}`, padding: "20px 24px", display: "flex", gap: 16, alignItems: "center" }}>
          <KeyRound size={44} strokeWidth={2} />
          <div>
            <div style={{ fontSize: 28, fontWeight: 700 }}>One sales app</div>
            <div style={{ fontSize: 22, color: C.muted }}>Its access keys were stolen</div>
          </div>
        </div>
      </Abs>
      <Abs x={PAD} y={130} w={680}>
        <Headline>One vendor. 700+ companies breached.</Headline>
        <Body style={{ marginTop: 40 }}>
          August 2025: attackers stole the access keys of one sales app, Salesloft Drift.
        </Body>
        <Body style={{ marginTop: 20 }}>
          They used the keys to read data from 700+ companies.
        </Body>
        <div style={{ marginTop: 36, display: "flex", gap: 14, alignItems: "center", fontSize: 26, color: C.muted }}>
          Mostly from <Logo name="salesforce.svg" h={40} />
        </div>
        <div style={{ marginTop: 40, background: C.cream, border: `2px solid ${C.ink}`, borderRadius: 8, padding: "18px 22px", fontSize: 26, lineHeight: 1.4 }}>
          Many companies had given the app more access than it needed.
        </div>
      </Abs>
      <Abs x={PAD} y={980} w={1200}>
        <Label size={16}>Source: Google Threat Intelligence via The Hacker News, Aug 2025</Label>
      </Abs>
    </Slide>
  );
}

/* ---------------- 06 Why now ---------------- */
function S06() {
  // 917 dots: one per integration. The last 76 are this month's new ones.
  const cols = 37, gap = 22, total = 917, fresh = 76;
  const ox = PAD + 8, oy = 400;
  const dots = Array.from({ length: total }, (_, i) => {
    const c = i % cols, rr = Math.floor(i / cols);
    return <circle key={i} cx={ox + c * gap} cy={oy + rr * gap} r={7} fill={i >= total - fresh ? C.coral : C.lineStrong} opacity={i >= total - fresh ? 1 : 0.7} />;
  });
  const stat = (n: string, t: string, color: string, icon: React.ReactNode) => (
    <div style={{ display: "flex", gap: 28, alignItems: "center" }}>
      <div style={{ width: 210 }}><Big size={104} color={color}>{n}</Big></div>
      <div style={{ display: "flex", gap: 14, alignItems: "flex-start", fontSize: 30, lineHeight: 1.3, maxWidth: 420 }}>
        <div style={{ marginTop: 3 }}>{icon}</div>{t}
      </div>
    </div>
  );
  return (
    <Slide n={num(6)}>
      <Svg>{dots}</Svg>
      <Abs x={PAD} y={130} w={1600}>
        <Headline>More connections every month.</Headline>
        <Body style={{ marginTop: 22, color: C.muted }}>Each dot is one outside app connected to a company's data.</Body>
      </Abs>
      <Abs x={1050} y={390} w={760}>
        <div style={{ display: "flex", flexDirection: "column", gap: 44 }}>
          {stat("917", "connected apps in an average company", C.inkStrong, <Plug size={32} strokeWidth={2} />)}
          {stat("+76", "new connections every month", C.coralInk, <RefreshCw size={32} strokeWidth={2} />)}
          {stat("85%", "of security leaders cannot see or protect them well", C.inkStrong, <Eye size={32} strokeWidth={2} />)}
        </div>
      </Abs>
      <Abs x={PAD} y={950} w={1680}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", gap: 14, alignItems: "center", fontSize: 26 }}>
            <Bot size={30} strokeWidth={2} /> And AI tools now ask for calls, messages and documents too.
          </div>
        </div>
      </Abs>
      <Abs x={1050} y={850} w={760}>
        <Label size={16}>Source: Valence Threat Labs, via Dark Reading (one industry report)</Label>
      </Abs>
    </Slide>
  );
}

/* ---------------- 07 The idea ---------------- */
function S07() {
  const bx = 1030, by = 170, bw = 360;
  const g = buildingGeom(by);
  const deskX = bx + bw + 36, deskY = g.groundY - 110;
  const vx = 1680;
  return (
    <Slide n={num(7)}>
      <Svg>
        <defs>
          <Arrow id="s07-a" color={C.violet} />
          <HalftoneDef id="s07-ht" />
        </defs>
        <path d={blob(vx + 70, g.groundY - 90, 150, 120, 8)} fill="url(#s07-ht)" />
        <Building id="s07" x={bx} y={by} w={bw} />
        <line x1={bx + bw} y1={g.groundY} x2={1860} y2={g.groundY} stroke={C.ink} strokeWidth={2.5} strokeLinecap="round" />
        {/* documents path: team floor -> desk -> vendor */}
        <path
          d={`M${bx + bw - 30},${g.teamMid} C${bx + bw + 120},${g.teamMid} ${deskX + 105},${g.teamMid + 40} ${deskX + 105},${deskY - 10}`}
          fill="none" stroke={C.violet} strokeWidth={3.5} strokeDasharray="10 9" markerEnd="url(#s07-a)"
        />
        <path d={`M${deskX + 210},${deskY + 45} L${vx - 14},${deskY + 45}`} fill="none" stroke={C.violet} strokeWidth={3.5} markerEnd="url(#s07-a)" />
        {/* the front desk */}
        <rect x={deskX} y={deskY} width={210} height={90} rx={14} fill={C.lavenderSoft} stroke={C.violet} strokeWidth={3} />
        <text x={deskX + 105} y={deskY + 56} textAnchor="middle" fontFamily={F.display} fontWeight={700} fontSize={30} fill={C.ink}>Gatekeeper</text>
      </Svg>
      <Abs x={deskX + 150} y={g.teamMid - 4}>
        <div style={{ background: C.white, border: `2px solid ${C.violet}`, borderRadius: 8, padding: 8, display: "inline-flex" }}>
          <FileText size={34} strokeWidth={2} color={C.violet} />
        </div>
      </Abs>
      <Abs x={vx} y={deskY - 20} w={180}>
        <Card style={{ padding: "18px 20px", textAlign: "center" }}>
          <Handshake size={40} strokeWidth={2} style={{ margin: "0 auto" }} />
          <div style={{ fontSize: 26, fontWeight: 700, marginTop: 6 }}>The vendor</div>
        </Card>
      </Abs>
      <Abs x={bx} y={by - 64}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 26, fontWeight: 600 }}>
          <Logo name="zoom.png" h={30} /> <span>The company</span>
        </div>
      </Abs>
      <Abs x={bx - 300} y={g.teamMid - 26}>
        <Chip variant="link" icon={<Users size={24} strokeWidth={2} />}><Fact>{FACTS.unit}</Fact>&nbsp;team</Chip>
      </Abs>
      <Abs x={PAD} y={130} w={580}>
        <Headline>Gatekeeper is the front desk.</Headline>
        <Body style={{ marginTop: 40 }}>Vendors ask Gatekeeper, not the company's tools.</Body>
        <Body style={{ marginTop: 20 }}>Gatekeeper only hands over data from the right team.</Body>
      </Abs>
    </Slide>
  );
}

/* ---------------- 08 How it works ---------------- */
function S08() {
  const steps: [React.ReactNode, string][] = [
    [<Plug {...ico} />, "The IT team connects Zoom to Gatekeeper. Once."],
    [<Users {...ico} />, "The IT team chooses the team: “these 100 people”."],
    [<Send {...ico} />, "The vendor asks Gatekeeper for data."],
    [<ListChecks {...ico} />, "Gatekeeper sends only that team's data. Every request is logged."],
  ];
  const company = { x: PAD + 40, y: 600, w: 820, h: 300 };
  const gateX = 1060;
  return (
    <Slide n={num(8)}>
      <Svg>
        <defs><HalftoneDef id="s08-ht" /></defs>
        <path d={blob(1520, 750, 230, 150, 4)} fill="url(#s08-ht)" />
        <GatedField company={company} gateX={gateX} vendorCentre={{ x: 1520, y: 750 }} r={3.6} />
        <Gate x={gateX} y1={600} y2={900} opening={60} labelY={580} />
      </Svg>
      <Abs x={PAD} y={110}>
        <Headline size={76}>How it works.</Headline>
      </Abs>
      <Abs x={PAD} y={240} w={W - 2 * PAD}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 28 }}>
          {steps.map(([icon, t], i) => (
            <div key={i} style={{ borderTop: `3px solid ${i === 3 ? C.violet : C.ink}`, paddingTop: 20 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <Label color={i === 3 ? C.violet : C.ink} size={24}>{`0${i + 1}`}</Label>
                {icon}
              </div>
              <div style={{ fontSize: 28, lineHeight: 1.35, marginTop: 14 }}>{t}</div>
            </div>
          ))}
        </div>
      </Abs>
      <Abs x={company.x} y={915}>
        <div style={{ display: "flex", gap: 12, alignItems: "center", fontSize: 24, color: C.muted }}>
          <Logo name="zoom.png" h={26} /> All of Zoom's calls
        </div>
      </Abs>
      <Abs x={1330} y={915} w={480}>
        <div style={{ display: "flex", gap: 12, alignItems: "center", fontSize: 24, fontWeight: 600 }}>
          <Handshake size={28} strokeWidth={2} /> The vendor gets only the team's calls
        </div>
      </Abs>
      <Abs x={1640} y={580}>
        <Chip variant="evidence" icon={<ScrollText size={22} strokeWidth={2} />} size={22}>Logged</Chip>
      </Abs>
    </Slide>
  );
}

/* ---------------- 09 Two kinds of users ---------------- */
function S09() {
  const ic = (I: any) => <I size={34} strokeWidth={2} color={C.ink} />;
  const side = (label: string, title: string, icon: React.ReactNode, items: [React.ReactNode, string][]) => (
    <Card style={{ padding: 44, width: 600, height: 470 }}>
      <Label>{label}</Label>
      <div style={{ display: "flex", gap: 18, alignItems: "center", marginTop: 12 }}>
        {icon}
        <div style={{ fontFamily: F.display, fontWeight: 700, fontSize: 40, letterSpacing: "-0.02em" }}>{title}</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 26, marginTop: 36 }}>
        {items.map(([i, t], k) => <Item key={k} icon={i} size={30}>{t}</Item>)}
      </div>
    </Card>
  );
  return (
    <Slide n={num(9)}>
      <Svg>
        <defs><Arrow id="s09-a" color={C.violet} /></defs>
        <line x1={PAD + 600} y1={600} x2={835} y2={600} stroke={C.violet} strokeWidth={3} markerStart="url(#s09-a)" markerEnd="url(#s09-a)" />
        <line x1={1085} y1={600} x2={W - PAD - 600} y2={600} stroke={C.violet} strokeWidth={3} markerStart="url(#s09-a)" markerEnd="url(#s09-a)" />
        <rect x={840} y={550} width={240} height={100} rx={14} fill={C.lavenderSoft} stroke={C.violet} strokeWidth={3} />
        <text x={960} y={612} textAnchor="middle" fontFamily={F.display} fontWeight={700} fontSize={32} fill={C.ink}>Gatekeeper</text>
      </Svg>
      <Abs x={PAD} y={130}><Headline>Gatekeeper serves both sides.</Headline></Abs>
      <Abs x={PAD} y={365}>
        {side("Buyer", "The IT team", <Building2 size={44} strokeWidth={2} />, [
          [ic(SlidersHorizontal), "Control what leaves"],
          [ic(ScrollText), "See every request"],
          [ic(Power), "Turn access off anytime"],
        ])}
      </Abs>
      <Abs x={W - PAD - 600} y={365}>
        {side("Requester", "The vendor", <Handshake size={44} strokeWidth={2} />, [
          [ic(Target), "Get exactly the data you were sold"],
          [ic(BadgeCheck), "Pass security review faster"],
        ])}
      </Abs>
      <Abs x={W - PAD - 600 + 44} y={365 + 470 - 100}>
        <div style={{ transform: "rotate(-3deg)", display: "inline-block" }}>
          <Chip variant="link" icon={<Handshake size={22} strokeWidth={2} />} style={{ boxShadow: `4px 4px 0 ${C.lavender}` }}>Trissino is customer #1</Chip>
        </div>
      </Abs>
    </Slide>
  );
}

/* ---------------- 10 Why we can build it quickly ---------------- */
function S10() {
  const y = 420;
  const dotsIn = Array.from({ length: 28 }, (_, i) => i);
  return (
    <Slide n={num(10)}>
      <Svg>
        <defs><Arrow id="s10-a" color={C.ink} /><Arrow id="s10-v" color={C.violet} /></defs>
        {/* Zoom -> Gatekeeper : full data */}
        <line x1={470} y1={y + 70} x2={770} y2={y + 70} stroke={C.ink} strokeWidth={3} markerEnd="url(#s10-a)" />
        {dotsIn.map((i) => (
          <circle key={i} cx={500 + (i % 14) * 18} cy={y + 30 + Math.floor(i / 14) * 16} r={5.5} fill={i % 9 === 4 ? C.violet : C.lineStrong} />
        ))}
        {/* Gatekeeper -> vendor : filtered */}
        <line x1={1150} y1={y + 70} x2={1450} y2={y + 70} stroke={C.violet} strokeWidth={3.5} markerEnd="url(#s10-v)" />
        {[0, 1, 2].map((i) => <circle key={i} cx={1250 + i * 22} cy={y + 38} r={6.5} fill={C.violet} />)}
      </Svg>
      <Abs x={PAD} y={y}>
        <Card style={{ width: 330, height: 140, display: "flex", alignItems: "center", gap: 16, padding: 28 }}>
          <Logo name="zoom.png" h={44} />
          <div><div style={{ fontSize: 30, fontWeight: 700 }}>Zoom</div><div style={{ fontSize: 22, color: C.muted }}>Its normal API</div></div>
        </Card>
      </Abs>
      <Abs x={790} y={y - 10}>
        <div style={{ width: 340, height: 160, background: C.lavenderSoft, border: `3px solid ${C.violet}`, borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", gap: 16 }}>
          <Filter size={44} strokeWidth={2} color={C.violet} />
          <div><div style={{ fontFamily: F.display, fontSize: 34, fontWeight: 700 }}>Gatekeeper</div><div style={{ fontSize: 22, color: C.muted }}>Removes the rest</div></div>
        </div>
      </Abs>
      <Abs x={1470} y={y}>
        <Card style={{ width: 330, height: 140, display: "flex", alignItems: "center", gap: 16, padding: 28 }}>
          <Handshake size={44} strokeWidth={2} />
          <div><div style={{ fontSize: 30, fontWeight: 700 }}>The vendor</div><div style={{ fontSize: 22, color: C.muted }}>Gets the team only</div></div>
        </Card>
      </Abs>
      <Abs x={PAD} y={130} w={1600}>
        <Headline>We can build the first version quickly.</Headline>
        <Body style={{ marginTop: 22, color: C.muted }}>Gatekeeper asks Zoom the normal way, then filters before passing data on.</Body>
      </Abs>
      <Abs x={PAD} y={660} w={1000}>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <Item icon={<Plug size={32} strokeWidth={2} />} size={30}>Uses the tools' existing APIs. Zoom changes nothing.</Item>
          <Item icon={<KeyRound size={32} strokeWidth={2} />} size={30}>Companies can bring their own login keys (OAuth).</Item>
          <Item icon={<Link2 size={32} strokeWidth={2} />} size={30}>One connection = one company + one tool + one vendor.</Item>
        </div>
      </Abs>
      <Abs x={1240} y={680} w={560}>
        <div style={{ background: C.cream, border: `2px solid ${C.ink}`, borderRadius: 8, padding: "22px 26px" }}>
          <Label color={C.ink} size={18}>Plain words</Label>
          <div style={{ fontSize: 26, lineHeight: 1.4, marginTop: 10 }}><b>OAuth</b> = the "allow this app" button. It creates a key the app uses to read data.</div>
          <div style={{ fontSize: 26, lineHeight: 1.4, marginTop: 10 }}><b>API</b> = the door software uses to talk to other software.</div>
        </div>
      </Abs>
    </Slide>
  );
}

/* ---------------- 11 Where we start ---------------- */
function S11() {
  const tools: [React.ReactNode, string][] = [
    [<Logo name="zoom.png" h={34} />, "Zoom calls"],
    [<Logo name="google-drive.png" h={34} />, "Google Workspace"],
    [<Logo name="slack.svg" h={34} />, "Slack"],
    [<Logo name="salesforce.svg" h={34} />, "Salesforce"],
    [<Logo name="teams.svg" h={34} />, FACTS.fifthTool],
  ];
  const rows: [React.ReactNode, string, number[]][] = [
    [<Layers size={32} strokeWidth={2} />, "Large companies with many teams", [3, 2, 2, 1, 2]],
    [<Building2 size={32} strokeWidth={2} />, "Group companies (many subsidiaries)", [2, 2, 1, 1, 3]],
    [<Scale size={32} strokeWidth={2} />, "Regulated industries", [3, 2, 1, 2, 2]],
    [<Bot size={32} strokeWidth={2} />, "Companies buying AI tools", [3, 3, 2, 1, 2]],
  ];
  const dot = (v: number, focal: boolean) => (
    <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>
      <svg width="44" height="44">
        <circle cx="22" cy="22" r={v === 3 ? 18 : v === 2 ? 12 : 7} fill={v === 3 ? C.violet : v === 2 ? C.lavender : C.line} />
      </svg>
      {focal && (
        <div style={{ position: "absolute", top: 4, left: "calc(50% + 30px)", transform: "rotate(-4deg)" }}>
          <Chip variant="link" size={20} icon={<Target size={18} strokeWidth={2} />} style={{ boxShadow: `3px 3px 0 ${C.lavender}` }}>Start here</Chip>
        </div>
      )}
    </div>
  );
  return (
    <Slide n={num(11)}>
      <Abs x={PAD} y={130} w={1600}>
        <Headline>Where we start.</Headline>
        <Body style={{ marginTop: 22, color: C.muted }}>Big dot = the problem is sharpest there. A first guess, not a decision.</Body>
      </Abs>
      <Abs x={PAD} y={360} w={W - 2 * PAD}>
        <div style={{ display: "grid", gridTemplateColumns: "560px repeat(5, 1fr)", alignItems: "center", rowGap: 0 }}>
          <div />
          {tools.map(([l, t], i) => (
            <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10, paddingBottom: 26 }}>
              {l}
              <div style={{ fontSize: 22, fontWeight: 600, textAlign: "center" }}>{i === 4 ? <Fact>{t}</Fact> : t}</div>
            </div>
          ))}
          {rows.map(([ic, label, vals], r) => (
            <React.Fragment key={r}>
              <div style={{ display: "flex", gap: 16, alignItems: "center", fontSize: 28, borderTop: `2px solid ${C.line}`, padding: "38px 0", height: 132 }}>
                {ic}{label}
              </div>
              {vals.map((v, c) => (
                <div key={c} style={{ borderTop: `2px solid ${C.line}`, padding: "38px 0", height: 132 }}>{dot(v, r === 0 && c === 0)}</div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </Abs>
    </Slide>
  );
}

/* ---------------- 12 Who else is close ---------------- */
function S12() {
  const mx = 980, my = 600, hw = 620, hh = 300;
  const node = (x: number, y: number, title: string, sub: string, focal = false) => (
    <Abs x={x} y={y} w={focal ? 360 : 330}>
      <div style={{
        background: focal ? C.lavenderSoft : C.white,
        border: `${focal ? 3 : 2}px ${focal ? "solid" : "dashed"} ${focal ? C.violet : C.lineStrong}`,
        borderRadius: 14, padding: "16px 20px",
        transform: focal ? "rotate(-2deg)" : undefined,
        boxShadow: focal ? `5px 5px 0 ${C.lavender}` : undefined,
      }}>
        <div style={{ fontFamily: focal ? F.display : F.body, fontSize: focal ? 32 : 25, fontWeight: 700 }}>{title}</div>
        <div style={{ fontSize: 21, color: C.muted, lineHeight: 1.3, marginTop: 4 }}>{sub}</div>
      </div>
    </Abs>
  );
  return (
    <Slide n={num(12)}>
      <Svg>
        <defs><Arrow id="s12-a" color={C.lineStrong} /></defs>
        <line x1={mx - hw} y1={my} x2={mx + hw} y2={my} stroke={C.lineStrong} strokeWidth={2.5} markerStart="url(#s12-a)" markerEnd="url(#s12-a)" />
        <line x1={mx} y1={my - hh} x2={mx} y2={my + hh} stroke={C.lineStrong} strokeWidth={2.5} markerStart="url(#s12-a)" markerEnd="url(#s12-a)" />
      </Svg>
      <Abs x={PAD} y={110} w={1700}><Headline size={76}>Others solve nearby problems. Not this one.</Headline></Abs>
      <Abs x={mx - hw - 10} y={my + 14}><Label size={18}>The vendor controls it</Label></Abs>
      <Abs x={mx + hw - 290} y={my + 14}><Label size={18}>The company controls it</Label></Abs>
      <Abs x={mx + 16} y={my - hh - 8}><Label size={18}>Controls which data</Label></Abs>
      <Abs x={mx + 16} y={my + hh - 20}><Label size={18}>Controls which apps</Label></Abs>
      {node(mx - 560, my - 250, "Merge.dev", "Helps vendors build integrations. The vendor sets the filters.")}
      {node(mx + 300, my - 320, "Gatekeeper", "The company decides what an outside vendor sees, by team.", true)}
      {node(mx + 40, my - 165, "Merge for Workforce", "Controls employees' own AI tools. Not outside vendors.")}
      {node(mx + 40, my + 70, "SaaS security tools", "Find risky apps and remove them. They do not filter data.")}
      {node(mx + 420, my + 110, "Built-in permissions", "Only work if the tool supports them. Zoom does not.")}
    </Slide>
  );
}

/* ---------------- 13 Risks ---------------- */
function S13() {
  const items: [any, string][] = [
    [Eye, "Gatekeeper sees all the data for a moment. Companies must trust us."],
    [Users, "Some calls mix the team and other people. What do we share?"],
    [Wallet, "Who pays: the IT team, or the vendor?"],
    [Puzzle, "Could Merge or Zoom build this themselves?"],
    [Wrench, "Which tool do we start with?"],
    [Server, "Do we run it, or does the company run it?"],
  ];
  return (
    <Slide n={num(13)}>
      <Abs x={PAD} y={130} w={1600}>
        <Headline>What we don't know yet.</Headline>
        <Body style={{ marginTop: 22, color: C.muted }}>None of these stop a first version. All need an answer before we sell.</Body>
      </Abs>
      <Abs x={PAD} y={350} w={W - 2 * PAD}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
          {items.map(([I, t], i) => (
            <div key={i} style={{ background: C.white, border: `2px solid ${C.line}`, borderRadius: 14, padding: "28px 40px", display: "flex", gap: 28, alignItems: "center", height: 178 }}>
              <I size={48} strokeWidth={2} color={C.ink} style={{ flex: "none" }} />
              <div style={{ fontSize: 34, lineHeight: 1.35 }}>{t}</div>
            </div>
          ))}
        </div>
      </Abs>
    </Slide>
  );
}

/* ---------------- 14 Proposal ---------------- */
function S14() {
  const steps: [any, string, React.ReactNode][] = [
    [Hammer, "Build", <>A first Gatekeeper for Zoom call recordings.</>],
    [UserCheck, "Use", <>Use it ourselves with Zoom and <Fact>{FACTS.unit}</Fact>.</>],
    [MessagesSquare, "Test", <>Talk to 5 IT and security leaders. Would they pay?</>],
  ];
  const y = 430;
  return (
    <Slide n={num(14)}>
      <Svg>
        <line x1={PAD + 30} y1={y} x2={W - PAD - 30} y2={y} stroke={C.ink} strokeWidth={3} strokeLinecap="round" />
        {steps.map((_, i) => <circle key={i} cx={PAD + 30 + i * 560} cy={y} r={14} fill={C.violet} stroke={C.ink} strokeWidth={2.5} />)}
      </Svg>
      <Abs x={PAD} y={130} w={1600}>
        <Headline>What I propose: next <Fact>{FACTS.window}</Fact>.</Headline>
        <Body style={{ marginTop: 22, color: C.muted }}>We already have the problem, the customer and the Zoom know-how. Solve it for ourselves first.</Body>
      </Abs>
      {steps.map(([I, k, t], i) => (
        <Abs key={i} x={PAD + i * 560} y={y + 44} w={480}>
          <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
            <Label color={C.violet} size={22}>{`0${i + 1}`}</Label>
            <I size={36} strokeWidth={2} />
            <div style={{ fontFamily: F.display, fontWeight: 700, fontSize: 36 }}>{k}</div>
          </div>
          <div style={{ fontSize: 30, lineHeight: 1.35, marginTop: 12 }}>{t}</div>
        </Abs>
      ))}
      <Abs x={PAD} y={760} w={1100}>
        <div style={{ transform: "rotate(-1.5deg)", background: C.lavenderSoft, border: `2px solid ${C.ink}`, borderRadius: 14, boxShadow: `6px 6px 0 ${C.violet}`, padding: "26px 32px" }}>
          <Label color={C.violet} size={20}>Decision needed today</Label>
          <div style={{ fontSize: 34, fontWeight: 600, marginTop: 10 }}>
            <Fact>{FACTS.decision}</Fact>
          </div>
        </div>
      </Abs>
    </Slide>
  );
}

/* ---------------- 15 Closing ---------------- */
function S15() {
  const company = { x: 260, y: 540, w: 900, h: 330 };
  return (
    <Slide footer={false}>
      <Svg>
        <defs><HalftoneDef id="s15-ht" /></defs>
        <path d={blob(1500, 705, 210, 150, 9)} fill="url(#s15-ht)" />
        <GatedField company={company} gateX={1260} vendorCentre={{ x: 1500, y: 705 }} r={3.8} inTransit={false} />
        <Gate x={1260} y1={540} y2={870} opening={60} label={false} />
      </Svg>
      <Abs x={0} y={170} w={W} style={{ textAlign: "center" }}>
        <Headline size={110}>Share only what was sold.</Headline>
        <div style={{ fontFamily: F.display, fontWeight: 700, fontSize: 48, color: C.violet, marginTop: 24 }}>Gatekeeper</div>
      </Abs>
    </Slide>
  );
}

/* ---------------- Side quests ---------------- */
function SQ0() {
  return (
    <Slide bg={C.sidequest} marker="Side quest">
      <Svg>
        <defs><HalftoneDef id="sq0-ht" /></defs>
        <path d={blob(1450, 560, 300, 260, 12)} fill="url(#sq0-ht)" opacity={0.7} />
      </Svg>
      <Abs x={PAD} y={360} w={1100}>
        <Label color={C.violet} size={22}>Extra · not the main story</Label>
        <Headline size={120} style={{ marginTop: 24 }}>Side quests</Headline>
        <Body size={40} style={{ marginTop: 24 }}>What else Gatekeeper could do later.</Body>
      </Abs>
      <Abs x={1330} y={460}>
        <div style={{ display: "flex", gap: 28, alignItems: "flex-start" }}>
          <Card style={{ padding: 28 }}><Bot size={64} strokeWidth={2} /></Card>
          <Card style={{ padding: 28, marginTop: 80 }}><Terminal size={64} strokeWidth={2} /></Card>
        </div>
      </Abs>
    </Slide>
  );
}

function Hub({ requesters, sqn }: { requesters: [any, string, boolean?][]; sqn: string }) {
  const gx = 960, gy = 620;
  const ys = requesters.map((_, i) => gy + (i - (requesters.length - 1) / 2) * 120);
  const tools: [string, string][] = [["slack.svg", "Slack"], ["google-drive.png", "Google Drive"], ["salesforce.svg", "Salesforce"]];
  const tys = tools.map((_, i) => gy + (i - 1) * 130);
  return (
    <>
      <Svg>
        <defs><Arrow id={`${sqn}-a`} color={C.ink} /><Arrow id={`${sqn}-v`} color={C.violet} /></defs>
        {ys.map((y, i) => (
          <path key={i} d={`M560,${y} C700,${y} 700,${gy} 820,${gy}`} fill="none" stroke={requesters[i][2] ? C.violet : C.ink} strokeWidth={requesters[i][2] ? 3.5 : 2.5} markerEnd={`url(#${sqn}-${requesters[i][2] ? "v" : "a"})`} />
        ))}
        {tys.map((y, i) => (
          <path key={i} d={`M1100,${gy} C1220,${gy} 1220,${y} 1340,${y}`} fill="none" stroke={C.ink} strokeWidth={2.5} markerEnd={`url(#${sqn}-a)`} />
        ))}
        <rect x={830} y={gy - 60} width={260} height={120} rx={14} fill={C.lavenderSoft} stroke={C.violet} strokeWidth={3} />
        <text x={960} y={gy + 11} textAnchor="middle" fontFamily={F.display} fontWeight={700} fontSize={34} fill={C.ink}>Gatekeeper</text>
      </Svg>
      {requesters.map(([I, t, hot], i) => (
        <Abs key={i} x={PAD + 40} y={ys[i] - 42} w={400}>
          <div style={{ display: "flex", gap: 16, alignItems: "center", background: C.white, border: `2px ${hot ? "solid" : "dashed"} ${hot ? C.violet : C.lineStrong}`, borderRadius: 14, padding: "16px 22px", fontSize: 28, fontWeight: 600, boxShadow: hot ? `5px 5px 0 ${C.lavender}` : undefined }}>
            <I size={36} strokeWidth={2} color={hot ? C.violet : C.ink} />{t}
          </div>
        </Abs>
      ))}
      {tools.map(([l, t], i) => (
        <Abs key={i} x={1360} y={tys[i] - 42} w={360}>
          <div style={{ display: "flex", gap: 16, alignItems: "center", background: C.white, border: `2px solid ${C.ink}`, borderRadius: 14, padding: "16px 22px", fontSize: 28, fontWeight: 600 }}>
            <Logo name={l} h={34} />{t}
          </div>
        </Abs>
      ))}
    </>
  );
}

function SQ1() {
  return (
    <Slide bg={C.sidequest} marker="Side quest" n="SIDE QUEST 1">
      <Abs x={PAD} y={130} w={1300}>
        <Headline>AI agents have the same problem.</Headline>
        <Body style={{ marginTop: 22 }}>AI agents often get the same too-wide access. Gatekeeper can stand in front of them too.</Body>
      </Abs>
      <Hub sqn="sq1" requesters={[[Bot, "AI agent", true]]} />
      <Abs x={PAD} y={860} w={820}>
        <div style={{ background: C.cream, border: `2px solid ${C.ink}`, borderRadius: 8, padding: "18px 24px", fontSize: 26 }}>
          <b>MCP</b> = a standard way for AI assistants to plug into other software.
        </div>
      </Abs>
    </Slide>
  );
}

function SQ2() {
  return (
    <Slide bg={C.sidequest} marker="Side quest" n="SIDE QUEST 2">
      <Abs x={PAD} y={130} w={1400}>
        <Headline>Any app that reads company data can use Gatekeeper.</Headline>
        <Body style={{ marginTop: 22 }}>Vendors, agents, partners, internal tools. Same rules, same logs.</Body>
      </Abs>
      <Hub sqn="sq2" requesters={[[Handshake, "Vendor", true], [Bot, "AI agent"], [Users, "Partner"], [Terminal, "Internal script"]]} />
    </Slide>
  );
}

/* ---------------- Appendix ---------------- */
function A0() {
  return (
    <Slide n="APPENDIX">
      <Abs x={PAD} y={380} w={1200}>
        <Label color={C.violet} size={22}>Only if asked</Label>
        <Headline size={120} style={{ marginTop: 24 }}>Appendix</Headline>
        <Body size={36} style={{ marginTop: 24, color: C.muted }}>Words, how it works inside, first customers, competitors, more open questions.</Body>
      </Abs>
    </Slide>
  );
}

function A1() {
  const terms: [any, string, string][] = [
    [Handshake, "Vendor", "An outside company that sells software to a company. Example: Trissino."],
    [Link2, "Integration", "A connection that lets one piece of software read data from another."],
    [Plug, "API", "The “door” software uses to talk to other software."],
    [KeyRound, "OAuth", "The “allow this app” button. It creates a key the app uses."],
    [Eye, "Scope / permission", "What the key is allowed to see or do."],
    [Building2, "Admin-level app", "One admin says yes for the whole company. The app sees everyone."],
    [UserCheck, "User-level app", "Each person says yes for themselves only."],
    [KeyRound, "Bring your own OAuth", "The company uses its own app keys. It keeps more control."],
    [Filter, "Proxy", "Something in the middle that passes messages on. Gatekeeper also filters."],
    [ScrollText, "Audit log", "A record of every request: who asked, for what, what was sent."],
    [Users, "IT / security team", "The people who decide which tools can access data."],
    [Bot, "MCP", "A standard way for AI assistants to plug into other software."],
  ];
  return (
    <Slide n="A1 · WORDS">
      <Abs x={PAD} y={100}><Headline size={68}>Words used in this deck.</Headline></Abs>
      <Abs x={PAD} y={240} w={W - 2 * PAD}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", columnGap: 64, rowGap: 22 }}>
          {terms.map(([I, t, d], i) => (
            <div key={i} style={{ display: "flex", gap: 18, alignItems: "flex-start", borderTop: `2px solid ${C.line}`, paddingTop: 16 }}>
              <I size={30} strokeWidth={2} style={{ flex: "none", marginTop: 4 }} />
              <div style={{ fontSize: 24, lineHeight: 1.35 }}><b>{t}</b> — {d}</div>
            </div>
          ))}
        </div>
      </Abs>
    </Slide>
  );
}

function A2() {
  const steps: [any, string][] = [
    [BadgeCheck, "Check which vendor and which company"],
    [Users, "Look up the rule: “team = these people”"],
    [KeyRound, "Call Zoom with the company's key"],
    [Archive, "Receive the full answer"],
    [Filter, "Remove everything outside the team"],
    [ScrollText, "Write a log entry for the IT team"],
  ];
  return (
    <Slide n="A2 · INSIDE">
      <Svg>
        <defs><Arrow id="a2-a" color={C.ink} /><Arrow id="a2-v" color={C.violet} /></defs>
        <line x1={440} y1={560} x2={600} y2={560} stroke={C.ink} strokeWidth={3} markerEnd="url(#a2-a)" />
        <line x1={1320} y1={560} x2={1480} y2={560} stroke={C.violet} strokeWidth={3.5} markerEnd="url(#a2-v)" />
      </Svg>
      <Abs x={PAD} y={100} w={1700}>
        <Headline size={68}>Inside Gatekeeper: one request.</Headline>
        <Body style={{ marginTop: 16, color: C.muted }} size={28}>The vendor sends the same request it would send to Zoom, to Gatekeeper's address instead.</Body>
      </Abs>
      <Abs x={PAD} y={480} w={300}>
        <Card style={{ padding: 26, textAlign: "center" }}>
          <Handshake size={40} strokeWidth={2} style={{ margin: "0 auto" }} />
          <div style={{ fontSize: 26, fontWeight: 700, marginTop: 8 }}>Vendor asks</div>
        </Card>
      </Abs>
      <Abs x={620} y={300} w={680}>
        <div style={{ background: C.lavenderSoft, border: `3px solid ${C.violet}`, borderRadius: 14, padding: "26px 32px" }}>
          <div style={{ fontFamily: F.display, fontWeight: 700, fontSize: 34, marginBottom: 14 }}>Gatekeeper</div>
          {steps.map(([I, t], i) => (
            <div key={i} style={{ display: "flex", gap: 16, alignItems: "center", fontSize: 26, padding: "10px 0", borderTop: i ? `1.5px solid ${C.lavender}` : undefined }}>
              <Label color={C.violet} size={20}>{i + 1}</Label><I size={28} strokeWidth={2} />{t}
            </div>
          ))}
        </div>
      </Abs>
      <Abs x={1500} y={470} w={300}>
        <Card style={{ padding: 26, textAlign: "center", border: `3px solid ${C.violet}` }}>
          <Users size={40} strokeWidth={2} color={C.violet} style={{ margin: "0 auto" }} />
          <div style={{ fontSize: 26, fontWeight: 700, marginTop: 8 }}>Gets team data only</div>
        </Card>
      </Abs>
      <Abs x={PAD} y={900} w={1680}>
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <Chip icon={<Clock size={22} strokeWidth={2} />} size={22}>Data is passed on, never stored</Chip>
          <Chip icon={<Filter size={22} strokeWidth={2} />} size={22}>Where Zoom allows it, ask only for the team's calls</Chip>
          <Chip icon={<Power size={22} strokeWidth={2} />} size={22}>Read only in the first version</Chip>
        </div>
      </Abs>
    </Slide>
  );
}

function A3() {
  const dims: [any, string, string, string][] = [
    [Users, "People / team", "Only data from these 100 people", "First version"],
    [Clock, "Time", "Only data after the contract started", "Easy next step"],
    [FileText, "Fields", "Remove phone numbers and personal details", "Later"],
    [Globe, "Region", "Only data from EU employees", "Later"],
    [Mic, "Content type", "Only transcripts, not video files", "Later"],
  ];
  return (
    <Slide n="A3 · RULES">
      <Abs x={PAD} y={100} w={1700}>
        <Headline size={68}>Ways to draw the line.</Headline>
        <Body style={{ marginTop: 16, color: C.muted }} size={28}>The team rule comes first. Other rules can follow.</Body>
      </Abs>
      <Abs x={PAD} y={300} w={W - 2 * PAD}>
        {dims.map(([I, d, e, m], i) => (
          <div key={i} style={{ display: "grid", gridTemplateColumns: "70px 380px 1fr 300px", alignItems: "center", borderTop: `2px solid ${C.line}`, padding: "26px 0", fontSize: 30, background: i === 0 ? C.lavenderSoft : undefined }}>
            <I size={36} strokeWidth={2} color={i === 0 ? C.violet : C.ink} style={{ marginLeft: 16 }} />
            <b>{d}</b>
            <span>{e}</span>
            <span>{i === 0 ? <Chip variant="link" icon={<Target size={22} strokeWidth={2} />}>{m}</Chip> : <span style={{ color: C.muted }}>{m}</span>}</span>
          </div>
        ))}
      </Abs>
    </Slide>
  );
}

function A4() {
  const rows: [string, string, string, string, string][] = [
    ["Built-in permissions", "Company", "Data, if the tool supports it", "Only in some tools. Not in Zoom.", "Medium"],
    ["SaaS security tools", "Company", "Which apps are connected", "No. They find and remove apps.", "Low–medium"],
    ["Merge.dev (Unified)", "Vendor", "Which data and fields sync", "Partly. Set by the vendor.", "High"],
    ["Merge for Workforce", "Company IT", "Employees' own AI tools", "Not for outside vendors (unconfirmed)", "High"],
    ["Data gateways", "Company", "Rules on databases", "Not built for tools like Zoom", "Low"],
    ["Data warehouses", "Company", "Data already copied in", "No. Data has already left.", "Low"],
  ];
  const head = ["Solution", "Who controls", "What it controls", "Filters by team for vendors?", "Threat"];
  return (
    <Slide n="A4 · COMPETITORS">
      <Abs x={PAD} y={100}><Headline size={68}>Nearby solutions, in detail.</Headline></Abs>
      <Abs x={PAD} y={250} w={W - 2 * PAD}>
        <div style={{ display: "grid", gridTemplateColumns: "340px 220px 1fr 1fr 190px", fontSize: 24 }}>
          {head.map((h, i) => <div key={i} style={{ padding: "0 0 14px" }}><Label size={17}>{h}</Label></div>)}
          {rows.map((r, k) => r.map((c, i) => (
            <div key={`${k}-${i}`} style={{ borderTop: `2px solid ${C.line}`, padding: "22px 12px 22px 0", fontWeight: i === 0 ? 700 : 400, lineHeight: 1.3 }}>
              {i === 4 && c === "High" ? <Chip variant="risk" size={20} icon={<TriangleAlert size={18} strokeWidth={2} />}>High</Chip> : c}
            </div>
          )))}
        </div>
      </Abs>
      <Abs x={PAD} y={930} w={1680}>
        <div style={{ fontSize: 26 }}><b>Gatekeeper:</b> the company controls which data an outside vendor sees, by team, across many tools, with a log.</div>
      </Abs>
    </Slide>
  );
}

function A5() {
  const groups: [string, [any, string][]][] = [
    ["Trust", [[KeyRound, "Today the vendor holds the master key. With Gatekeeper, we hold it. We must be much safer."]]],
    ["Product", [
      [RefreshCw, "People join and leave the team. Manual list first, automatic sync later."],
      [Puzzle, "Each tool needs its own filter rules. How many before it is useful?"],
      [Link2, "Vendors must change one address in their app. They must agree."],
      [Webhook, "Real-time updates (“new recording” alerts) are not in the first version."],
    ]],
    ["Business", [
      [Wallet, "Price per connection, per company, or per vendor? Not decided."],
      [Hourglass, "Large companies buy security products slowly."],
      [Users, "This sits next to HireSteve. How much time can a team of 4 give?"],
    ]],
  ];
  return (
    <Slide n="A5 · MORE QUESTIONS">
      <Abs x={PAD} y={100}><Headline size={68}>More open questions.</Headline></Abs>
      <Abs x={PAD} y={240} w={W - 2 * PAD}>
        <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
          {groups.map(([g, items]) => (
            <div key={g} style={{ display: "grid", gridTemplateColumns: "220px 1fr", borderTop: `2px solid ${C.line}`, paddingTop: 18 }}>
              <Label size={20} style={{ marginTop: 6 }}>{g}</Label>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {items.map(([I, t], i) => <Item key={i} icon={<I size={28} strokeWidth={2} />} size={27} gap={16}>{t}</Item>)}
              </div>
            </div>
          ))}
        </div>
      </Abs>
    </Slide>
  );
}

export const slides: { id: string; el: React.ReactElement }[] = [
  { id: "01-title", el: <S01 /> },
  { id: "02-what-happened", el: <S02 /> },
  { id: "03-why", el: <S03 /> },
  { id: "04-who-gets-hurt", el: <S04 /> },
  { id: "05-real-damage", el: <S05 /> },
  { id: "06-why-now", el: <S06 /> },
  { id: "07-the-idea", el: <S07 /> },
  { id: "08-how-it-works", el: <S08 /> },
  { id: "09-both-sides", el: <S09 /> },
  { id: "10-build-quickly", el: <S10 /> },
  { id: "11-where-we-start", el: <S11 /> },
  { id: "12-who-else", el: <S12 /> },
  { id: "13-open-questions", el: <S13 /> },
  { id: "14-proposal", el: <S14 /> },
  { id: "15-closing", el: <S15 /> },
  { id: "16-side-quests", el: <SQ0 /> },
  { id: "17-sq-ai-agents", el: <SQ1 /> },
  { id: "18-sq-any-api", el: <SQ2 /> },
  { id: "19-appendix", el: <A0 /> },
  { id: "20-a1-words", el: <A1 /> },
  { id: "21-a2-inside", el: <A2 /> },
  { id: "22-a3-rules", el: <A3 /> },
  { id: "23-a4-competitors", el: <A4 /> },
  { id: "24-a5-more-questions", el: <A5 /> },
];
