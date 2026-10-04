---
marp: true
size: 16:9
paginate: false
style: |
  section { padding: 0; background: #FFFDF9; }
  section.text { padding: 72px 120px; font-family: 'Plus Jakarta Sans', sans-serif; color: #242424; font-size: 26px; }
  section.text h1 { font-family: 'Bricolage Grotesque', sans-serif; font-size: 60px; letter-spacing: -0.03em; }
  section.text a { color: #7C3AED; }
---

<!--
Gatekeeper — pitch to Taka (CEO). Presenter: Gagan.
Every slide is a full-bleed image rendered from React (deck/src/slides.tsx).
Speaker notes are in the HTML comment under each slide (Marp shows them in presenter view).
Text in [brackets] / dashed outline = placeholder to confirm before the meeting.
Re-render images: cd deck && pnpm render
-->

![bg](deck/images/01-title.png)

<!--
I want to show you a problem we hit with Zoom, why I think it is a much bigger problem than just us, and a product idea to fix it. I'll keep it simple. Stop me anytime.

(Point at the picture: each grey dot is one call. The purple dots are the team we sold to. The line on the left is Gatekeeper.)
-->

---

![bg](deck/images/02-what-happened.png)

<!--
We were invited to one floor. We were given the key to the whole building.
More than 90,000 calls. We never asked for this, and we did not want it.

Confirm before presenting: the business unit name (Workvivo?) and the team size [Y].
-->

---

![bg](deck/images/03-why.png)

<!--
Zoom gives two kinds of app connections. Per person — slow, each person must approve.
Or the whole company — one admin approves and the app sees everyone.
There is no "just this team". Zoom's own developer forum confirms this is by design.
So companies pick "everyone", because it is the only practical choice.
-->

---

![bg](deck/images/04-who-gets-hurt.png)

<!--
This is not only Zoom's problem. It is ours too.
If we get hacked, Zoom's data from 90,000 calls is exposed.
In security reviews, this is exactly what slows deals down.
-->

---

![bg](deck/images/05-real-damage.png)

<!--
This is the same pattern. One vendor had wide access to many companies.
When the vendor was hacked, all those companies were exposed at once.
Security companies like Cloudflare and Zscaler were among the victims.
If the vendor had only team-level access, the damage would have been much smaller.
-->

---

![bg](deck/images/06-why-now.png)

<!--
Every new tool wants to connect to company data. 917 connections on average, 76 new ones every month.
Each grey dot here is one connection; the coral dots are this month's new ones.
And now AI tools want even more data — calls, messages, documents — to work well.
More connections, each one too wide. The problem grows every month.

(Honesty note: this is one industry report and not the newest. Say "one industry report".)
-->

---

![bg](deck/images/07-the-idea.png)

<!--
Same building, same vendor. But now there is a front desk.
The desk knows we were invited to one floor. It only brings us documents from that floor.

(Note the colour change: from here on, no more coral. Only the team colour.)
-->

---

![bg](deck/images/08-how-it-works.png)

<!--
This is the whole product in one picture.
Everything flows to Gatekeeper. Only the team's data passes. The rest never leaves.
And every request is written down, so the IT team can see exactly what left the company.
-->

---

![bg](deck/images/09-both-sides.png)

<!--
The IT team pays because it reduces risk.
Vendors want it because it makes security approval easier.
We are a vendor ourselves — we are customer number one.
-->

---

![bg](deck/images/10-build-quickly.png)

<!--
We don't need Zoom to change anything. We call Zoom the normal way, then filter before passing data on.
That is why the first version is fast to build.
Companies can use their own login keys, like they can with Merge.dev.
Trade-off: for a moment, Gatekeeper sees the full data. I'll be honest about that on the risks slide.
-->

---

![bg](deck/images/11-where-we-start.png)

<!--
Start where the problem is sharpest: call recordings. They are sensitive, and we already know Zoom's API.
Best customers are big companies with many business units — like Zoom with Workvivo.
Japanese group companies are a strong fit too. Taka — I want your view on this one.

(The fifth tool, Microsoft 365, is a placeholder. Confirm or swap.)
-->

---

![bg](deck/images/12-who-else.png)

<!--
Merge is the closest. They already sync employee lists and hold login keys. They could add this.
Our edge has to be: neutral, team-level filtering, and doing the hard cases well.
I want us to be honest that Merge is a real risk.
(We could not confirm whether any Merge product filters by team for outside vendors. Ask in a demo.)
-->

---

![bg](deck/images/13-open-questions.png)

<!--
I want to be fully transparent. These are real questions.
None of them stop a first version, but each one needs an answer before we sell to large companies.
More open questions are in the appendix.
-->

---

![bg](deck/images/14-proposal.png)

<!--
We already have the problem, the customer, and the API knowledge.
The cheapest test is to solve it for ourselves first.

Fill in before the meeting: the timeline (30 days?) and the exact decision we want from Taka.
-->

---

![bg](deck/images/15-closing.png)

<!--
(Pause. Open discussion.)
-->

---

![bg](deck/images/16-side-quests.png)

<!--
Not our focus now. I'm showing it so you see everything the idea can grow into.
-->

---

![bg](deck/images/17-sq-ai-agents.png)

<!--
Same gate, different requester. AI agents connect through MCP and often get the same too-wide access.
Not our focus now, but it shows the idea grows with AI.
Careful: Merge for Workforce already governs employees' own AI tools. Our difference would be the team rule.
-->

---

![bg](deck/images/18-sq-any-api.png)

<!--
Long term, Gatekeeper could be the single gate for all data leaving the company.
That is a big vision. For now, we stay focused on vendors.
-->

---

![bg](deck/images/19-appendix.png)

---

![bg](deck/images/20-a1-words.png)

---

![bg](deck/images/21-a2-inside.png)

<!--
Technical detail, only if asked.
- One connection = one company + one tool + one vendor. Own key, own rule, own log.
- Where Zoom lets us ask per person, we only ask for the team's people. Otherwise: fetch, then filter.
- Pages that get filtered can come back short; Gatekeeper re-pages so the vendor sees normal results.
- Mixed calls (one team member + outsiders): default rule not decided — host-based, any participant, all participants, or remove outsiders.
- First version is read-only. Real-time events (webhooks) come later.
-->

---

![bg](deck/images/22-a3-rules.png)

---

![bg](deck/images/23-a4-competitors.png)

---

![bg](deck/images/24-a5-more-questions.png)

---

<!-- _class: text -->

# Sources

**Why Zoom works this way**
- [Zoom dev forum: account-level app can access recordings for all users](https://devforum.zoom.us/t/can-an-account-level-app-with-recordingadmin-access-transcripts-for-all-users-in-the-same-zoom-account/132677)
- [Zoom dev forum: user-level apps are authorized per user](https://devforum.zoom.us/t/both-account-level-and-user-level-app/11737)

**Salesloft Drift breach (Aug 2025)**
- [The Hacker News: 700+ potentially impacted organizations](https://thehackernews.com/2025/08/salesloft-oauth-breach-via-drift-ai.html)
- [BankInfoSecurity: Cloudflare joins list of victims](https://www.bankinfosecurity.com/cloudflare-joins-list-salesloft-drift-breach-victims-a-29353)
- [SOCRadar: overly broad permissions](https://socradar.io/salesloft-drift-breach-everything-you-need-to-know/)

**Growth of connections**
- [Dark Reading / Valence Threat Labs: 917 integrations, 76 per month, 85%](https://www.darkreading.com/tech-trends/quantifying-the-saas-supply-chain-and-its-risks) — older report

**Merge.dev**
- [Selective Sync](https://help.merge.dev/articles/9113654-selective-sync) · [Partner credentials](https://help.merge.dev/articles/4587739678-pipedrive-how-do-i-set-up-my-partner-credentials) · [Agent Handler for Employees](https://www.merge.dev/blog/agent-handler-employees)

---

<!-- _class: text -->

# Before the meeting: confirm

- [ ] Name of the Zoom business unit (we assumed **Workvivo**) — slides 2, 7, 14
- [ ] Team size **[Y]** and number of calls actually needed — slide 2
- [ ] Exact Zoom app type and permissions we were granted
- [ ] Fifth tool on slide 11 (Microsoft 365 is a placeholder)
- [ ] Whether any Merge product can filter by team for outside vendors (ask in a demo)
- [ ] Timeline (**30 days?**) and the decision we want from Taka — slide 14
- [ ] Date on the title slide
