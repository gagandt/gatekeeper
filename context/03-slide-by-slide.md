# 03 — Slide-by-slide build spec

Format for each slide:
- **On slide:** the exact text to show.
- **Visual:** what to draw.
- **Motion:** what moves (if anything). Keep motion rare; see `04-visual-design-spec.md`.
- **Notes:** speaker notes for Gagan (put in Slidev notes).

Words in `[brackets]` are placeholders to confirm.

---

## Main deck

### Slide 1 — Title

**On slide:**
- Gatekeeper
- Share only what was sold.
- Gagan · Trissino · [date]

**Visual:** The signature dot field (see `04`), at rest: thousands of small grey dots
filling the right two-thirds of the slide. A single thin vertical line (the gate) on the
left third. A small cluster of dots near the gate is coloured jade.

**Motion:** None on load. Calm.

**Notes:** "I want to show you a problem we hit with Zoom, why I think it is a much
bigger problem than just us, and a product idea to fix it. I'll keep it simple. Stop me anytime."

---

### Slide 2 — What happened with Zoom

**On slide:**
- We sold to one team at Zoom.
- We received data from all of Zoom.
- Two big numbers side by side:
  - **[Y] people** — the team we sold to ([Workvivo])
  - **90,000+ calls** — what we could access

**Visual:** The building metaphor. A clean line drawing of a tall office building
(many floors). One floor is highlighted in jade and labelled "[Workvivo]".
A large key icon labelled "what we were given" touches the whole building,
outlined in amber.

**Motion:** Building appears. Then the amber outline spreads from the one floor to the
whole building (one slow reveal, ~1.2s). This is the "uh-oh" moment.

**Notes:** "We were invited to one floor. We were given the key to the whole building.
More than 90,000 calls. We never asked for this, and we did not want it."

---

### Slide 3 — Why it happened

**On slide:**
- Headline: Software only offers two choices.
- Choice A: Connect one person — each person must say yes.
- Choice B: Connect everyone — one admin says yes for all.
- Missing: Connect one team.

**Visual:** Three panels, left to right, using the dot field:
- A: one dot lit.
- B: all dots lit (amber).
- C: a cluster lit (jade), drawn with a dashed border and a label "does not exist".

**Motion:** Panels appear one by one on click.

**Notes:** "Zoom gives two kinds of app connections. Per-user — slow, each person approves.
Or account-wide — one admin approves and the app sees everyone. There is no 'just this team'.
Zoom's own developer forum confirms this is by design. So companies pick 'everyone',
because it is the only practical option."

---

### Slide 4 — Who gets hurt

**On slide:**
- Headline: Both sides lose.
- Left column — The company's IT team:
  - More data outside the company
  - Harder to audit
  - Bigger damage if a vendor is hacked
- Right column — Vendors like us:
  - We hold data we do not want
  - Longer security reviews
  - We carry the risk

**Visual:** Two simple figures facing each other (IT team, vendor) with the building
between them. No icons of skulls or padlocks. Calm line style.

**Motion:** None.

**Notes:** "This is not only Zoom's problem. It is ours too. If we get hacked, Zoom's data
from 90,000 calls is exposed. In security reviews, this is exactly what slows deals down."

---

### Slide 5 — This already causes real damage

**On slide:**
- Headline: One vendor. 700+ companies breached.
- Body: In August 2025, attackers stole access keys from one sales app (Salesloft Drift).
  They used them to pull data from 700+ companies' Salesforce.
- Small line: Many companies had given the app more access than it needed.

**Visual:** A single node (the vendor) in the centre with 700+ thin lines radiating out to
small building icons. All lines amber.

**Motion:** Lines draw out from the centre (one sweep, ~1.5s).

**Notes:** "This is the same pattern. A vendor had wide access to many companies.
When the vendor was hacked, all those companies were exposed at once. Security companies
like Cloudflare and Zscaler were among the victims. If the vendor had only team-level
access, the damage would have been much smaller."
(Source: `06-evidence-and-sources.md`.)

---

### Slide 6 — Why now: it is growing fast

**On slide:**
- Headline: More connections every month.
- Three numbers:
  - **917** — average third-party integrations per company
  - **76** — new integrations added every month
  - **85%** — of security leaders say they can't see or protect these well
- Footer: Source: Valence Threat Labs (via Dark Reading)

**Visual:** A simple line chart going up and to the right labelled "connections",
with a second, steeper line labelled "AI tools asking for data" (illustrative, clearly
marked "illustrative"). Do not invent precise numbers for the AI line.

**Motion:** Lines draw left to right on load.

**Notes:** "Every new tool wants to connect to company data. And now AI tools want even
more data — calls, messages, documents — to work well. More connections, each one too
wide. The problem grows every month."

---

### Slide 7 — The idea: Gatekeeper

**On slide:**
- Headline: Gatekeeper is the front desk.
- Body: Vendors ask Gatekeeper, not the company's tools. Gatekeeper only hands over
  data from the right team.

**Visual:** The building again. A front desk at the entrance labelled "Gatekeeper".
The vendor stands outside. A small stack of documents (jade) passes from the
[Workvivo] floor, through the desk, to the vendor. Other floors stay grey.

**Motion:** Documents move from the floor, through the desk, to the vendor (one loop, then stop).

**Notes:** "Same building, same vendor. But now there is a front desk. The desk knows we
were invited to one floor. It only brings us documents from that floor."

---

### Slide 8 — How it works (4 steps)

**On slide:**
- 1. The IT team connects Zoom to Gatekeeper. Once.
- 2. The IT team chooses the team: "these 100 people".
- 3. The vendor asks Gatekeeper for data.
- 4. Gatekeeper sends only that team's data. Every request is logged.

**Visual:** Horizontal 4-step flow (this is a real sequence, so numbering is correct here).
Under the steps, the dot field animates: all dots flow from the left (Zoom) towards the
gate line; only jade dots pass through; grey dots stop and fade at the gate.

**Motion:** This is the **signature moment** of the deck. One orchestrated animation
(~3s): dots flow, gate filters, only jade arrives at the vendor. Then a small counter appears:
"Shared: [Y people's calls] / Blocked: [the rest]".

**Notes:** "This is the whole product in one picture. Everything flows to the gate.
Only the team's data passes. The rest never leaves."

---

### Slide 9 — Two kinds of users

**On slide:**
- Headline: Gatekeeper serves both sides.
- IT team (buyer): Control what leaves. See every request. Turn access off anytime.
- Vendor (requester): Get exactly the data you were sold. Pass security review faster.

**Visual:** A balanced two-sided composition with Gatekeeper in the middle.
IT team on the company side, vendor on the outside.

**Notes:** "The IT team pays because it reduces risk. Vendors want it because it makes
security approval easier. We are a vendor ourselves — we are customer number one."

---

### Slide 10 — Why we can build it quickly

**On slide:**
- Headline: The MVP filters after the fetch.
- Body:
  - We use the tools' existing APIs. No new connectors to invent.
  - Gatekeeper receives the data, removes what is not allowed, and passes the rest.
  - Customers can bring their own login keys (OAuth), like with Merge.dev.
  - Each connection is one company + one tool + one vendor.
- Plain-word box: "OAuth = the 'allow this app' button. It creates a key the app uses to read data."

**Visual:** A simple pipeline: Zoom API → Gatekeeper (with a sieve/strainer icon inside,
drawn in the same line style) → Vendor. The "one company + one tool + one vendor" rule shown
as three small linked boxes forming one connection.

**Notes:** "We don't need Zoom to change anything. We call Zoom the normal way,
then filter before passing data on. That is why the first version is fast to build.
Trade-off: for a moment, Gatekeeper sees the full data. I'll be honest about that on the risks slide."

---

### Slide 11 — Where we start (day zero)

**On slide:**
- Headline: First tools and first customers.
- Tools: Zoom calls · Google Workspace · Slack · Salesforce · [one more]
  (render as a row of plain labelled boxes — do not use company logos; see `04`)
- Customers: Large companies with many teams or group companies.
  Companies in regulated industries. Companies buying AI tools.

**Visual:** A simple grid: tools across the top, customer types down the side,
jade dots where the fit is strongest (from `07-day-zero-use-cases.md`).

**Notes:** "Start where the problem is sharpest: call recordings, because they are
sensitive and because we already know Zoom's API. Best customers are big companies
with many business units — like Zoom with Workvivo. Japanese group companies are a
strong fit too."

---

### Slide 12 — Who else is close

**On slide:**
- Headline: Others solve nearby problems. Not this one.
- Rows (short):
  - Built-in permissions (Salesforce etc.): only works if the tool supports it.
  - SaaS security tools (e.g. Push Security): show and remove apps. Don't filter data.
  - Merge.dev: helps vendors build integrations. The vendor controls it.
  - Merge for Workforce: controls employees' own AI tools. Not outside vendors.
- Footer line: Gatekeeper: the company controls what an outside vendor can see, by team.

**Visual:** A 2x2 map. X axis: "Who controls it: vendor ↔ company".
Y axis: "What it controls: which apps ↔ which data". Gatekeeper sits alone in
"company controls" + "which data". Others placed per `10-competitors.md`.

**Notes:** "Merge is the closest. They already sync employee lists and hold login keys.
They could add this. Our edge has to be: neutral, team-level filtering, and doing the hard
cases well. I want us to be honest that Merge is a real risk."

---

### Slide 13 — Risks and open questions

**On slide:**
- Headline: What we don't know yet.
- Six short lines (pick from `09-risks-and-open-questions.md`):
  - Gatekeeper sees all data for a moment. Customers must trust us.
  - Some records mix our team and other people. What do we do?
  - Will IT teams pay, or will vendors pay?
  - Could Merge or Zoom build this themselves?
  - Which tool do we start with?
  - Hosted by us, or by the customer?

**Visual:** Plain list on a calm background. No warning icons.

**Notes:** "I want to be fully transparent. These are real questions. None of them stop
an MVP, but each one needs an answer before we sell to enterprises."

---

### Slide 14 — What I propose

**On slide:**
- Headline: Next 30 days. [confirm timeline]
- 1. Build a Gatekeeper MVP for Zoom call recordings.
- 2. Use it ourselves with Zoom / [Workvivo].
- 3. Talk to 5 IT/security leaders to test if they would pay.
- Decision needed today: [Do we spend X weeks on this alongside HireSteve?]

**Visual:** A simple timeline with three milestones.

**Notes:** "We already have the problem, the customer, and the API knowledge.
The cheapest test is to solve it for ourselves first."

---

### Slide 15 — Closing

**On slide:**
- Share only what was sold.
- Gatekeeper

**Visual:** The dot field from slide 1, now with the gate active: only the jade
cluster on the vendor side, everything else calm and grey on the company side.

**Notes:** Pause. Open discussion.

---

## Side quests (clearly separated)

Add a divider slide before these: "Side quests: what else Gatekeeper could do."
Use a visibly different background tint so it is obvious this is extra.

### Side quest 1 — AI agents and MCP

**On slide:**
- Headline: AI agents have the same problem.
- Body: AI agents connect to company tools through "MCP".
  They often get the same too-wide access. Gatekeeper can be the gate for agents too.
- Plain-word box: "MCP = a standard way for AI assistants to plug into other software."

**Visual:** Same gate diagram, but the requester is a simple robot/assistant glyph
instead of a vendor building.

**Notes:** "Same gate, different requester. Not our focus now, but it shows the idea
grows with AI."

### Side quest 2 — Any API access

**On slide:**
- Headline: Any app that reads company data can go through the gate.
- Body: Internal tools, partners, contractors. Same rules, same logs.

**Visual:** Several requesters (vendor, agent, partner, internal script) all pointing
to the one Gatekeeper.

**Notes:** "Long term, Gatekeeper could be the single gate for all data leaving the
company. That is a big vision. For now, we stay focused on vendors."

---

## Appendix (only if asked)

- A1 — Glossary (from `12-glossary.md`)
- A2 — How the MVP works technically (from `08-mvp-architecture.md`, one diagram)
- A3 — Day-zero use-case table (from `07-day-zero-use-cases.md`)
- A4 — Competitor table (from `competitors.csv`)
- A5 — Sources (from `06-evidence-and-sources.md`)
