# 11 — Side quests: MCP access and API access

These are **not** the main pitch. They show that the same gate works for other requesters.
Keep them in a clearly marked section after the closing slide (see `03`).

## Side quest 1 — AI agents (MCP)

- MCP (Model Context Protocol) is a standard way for AI assistants and agents to connect
  to software like Slack, Google Drive or Salesforce.
- Agents often get the same too-wide access as vendor apps: one admin approval, everything visible.
- Gatekeeper can sit in front of these connections too: the agent only sees the data of the
  team it serves.
- Nearby: Merge for Workforce already governs employees' AI tools (which tools, which actions,
  DLP, logs). Gatekeeper's difference would be the team-scoped data rule. Be careful not to
  over-claim here.

## Side quest 2 — Any API access

- Any requester that reads company data via APIs — partners, contractors, internal scripts —
  could go through the same gate with the same rules and logs.
- Long-term vision: one gate for all data leaving the company.
- Risk: this vision is very broad. Stay focused on outside vendors first.

## How to present

- Two slides, `--sidequest` background, "Side quest" marker in the corner.
- Say out loud: "Not our focus now. I'm showing it so you see everything the idea can grow into."
