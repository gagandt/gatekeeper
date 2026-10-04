# 07 — Day-zero use cases (brainstorm)

This is a brainstorm, not a decision. Use it for slide 11 and appendix A3.

## Ways to "draw the line" (filter dimensions)

| Dimension | Example rule | MVP? |
|---|---|---|
| **People / team** | Only data from these 100 people | **Yes — the core** |
| Time | Only data from the last 6 months, or after the contract start date | Easy add-on |
| Fields | Remove phone numbers / personal details from every record | Later |
| Region | Only data from EU employees (data-residency rules) | Later |
| Content type | Only call transcripts, not video files | Later |

## Source tools to start with

| Tool | Data | Why it fits day zero | Notes |
|---|---|---|---|
| **Zoom** (calls, recordings, transcripts) | Very sensitive | Our own case. We know the API. Admin-level apps see everyone. | **Recommended first** |
| Google Workspace (Drive, Gmail, Calendar) | Sensitive | Huge number of connected apps; admin-wide access is common | |
| Slack | Sensitive | Vendors often read all public channels | Mixed-record problem is hard (threads) |
| Salesforce | Customer data | The Drift breach story | Has some native controls already |
| Gong / call recorders | Very sensitive | Sales teams buy tools for one team only | |
| Microsoft 365 / Teams | Sensitive | Largest enterprise base | Complex APIs |

## Customer types (who has the problem most)

| Customer type | Why |
|---|---|
| **Large companies with many business units** | Tools bought for one unit, access granted to all. Zoom + [Workvivo] is exactly this. |
| **Companies after an acquisition** | Acquired units buy tools; parent's whole tenant gets exposed. |
| **Japanese group companies (many subsidiaries)** | Many group companies sharing tenants; strong focus on careful data handling. Natural fit for Trissino's Japan network. [Validate with Taka.] |
| **Regulated industries** (finance, insurance, healthcare, legal) | Must prove least-privilege access to auditors. |
| **Companies rolling out AI tools** | AI tools ask for wide access to calls, docs and messages. |

## Vendor types (who would request through Gatekeeper)

- Competitive intelligence (us — HireSteve)
- AI note-takers and meeting assistants
- Sales coaching and conversation intelligence
- Analytics and people-analytics tools
- AI agents and assistants (see side quests)

## Strongest day-zero combination

**Zoom recordings × large company with business units × vendor that sells to one unit.**
We are living this case right now, so we are design partner number one.
