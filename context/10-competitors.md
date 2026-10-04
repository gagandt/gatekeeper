# 10 — Competitors and nearby solutions

See `competitors.csv` for the same data as a spreadsheet.

Key question for each: **who controls it** (vendor or company) and **what it controls**
(which apps, which actions, or which data).

| Solution | Who controls | What it controls | Filters by team for outside vendors? | Threat level |
|---|---|---|---|---|
| Built-in permissions (e.g. Salesforce integration users) | Company | Data, if the tool supports it | Only in tools with good permission models; not in Zoom-style all-or-nothing apps | Medium |
| SaaS security tools (e.g. Push Security, Adaptive Shield, AppOmni, Valence) | Company | Which apps are connected; remove risky ones | No — they see and revoke, they don't filter | Low–medium |
| Merge Unified (Scopes, Selective Sync, partner credentials) | Vendor (mostly) | Which data models/fields sync; source-side filters | Partly — filters depend on the source API; set by the vendor | **High** |
| Merge for Workforce / Agent Handler for Employees | Company IT | Employees' own AI tools: which tools and actions, DLP, logs, model costs | Not for outside vendors (as far as public info shows — unconfirmed) | **High** |
| Data gateways (hoop.dev, Cloudentity, Gravitee) | Company | Row-level rules on databases and internal APIs | Not built for SaaS tools like Zoom | Low |
| Data platforms (Snowflake row access policies, etc.) | Company | Data already in the warehouse | No — data has already been pulled | Low |

## Gatekeeper's position

The **company** controls **which data** an **outside vendor** can see, **by team**,
across many tools, with a log of every request.

## Honest summary for the deck

Merge is the closest and the biggest risk. Our possible edges:
- Neutral: trusted by both the company and the vendor.
- Built around "team scope" from day one.
- Handles the hard cases (mixed records, team changes) better than a general platform.
- We are the customer ourselves and can move fast.
