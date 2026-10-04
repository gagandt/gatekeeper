# 08 — MVP architecture (for appendix A2 and for Gagan)

Not for the main deck face. Slide 10 shows the simple version.

## Principle: filter after the fetch

Gatekeeper does not need source tools (Zoom etc.) to change anything.
It calls their normal APIs, receives the full response, filters it, and returns the rest.

## Components

1. **Connection registry** — one record per (company, source tool, vendor). One-to-one mapping:
   each connection has its own token, its own rule, its own logs. No pooled connections.
2. **Credential store** — holds the company's OAuth tokens for the source tool.
   Supports bring-your-own OAuth app (the company registers its own app in Zoom and gives
   Gatekeeper the client ID/secret), similar to Merge's partner credentials.
3. **Policy store** — the rule for each connection. MVP: a list of allowed people
   (emails / user IDs). Entered by the IT team (CSV upload or manual list). Later: sync from
   the company's identity provider (Okta, Entra ID) so the team list updates automatically.
4. **Proxy endpoint** — mirrors the source tool's API paths. The vendor changes only the base URL
   and the token. Example: vendor calls `gatekeeper/.../zoom/v2/users/{id}/recordings` instead of
   `api.zoom.us/v2/users/{id}/recordings`.
5. **Filter engine** — per-tool rules that know how to find "who" in each response
   (e.g. Zoom recording host, meeting participants).
6. **Audit log** — every request: who asked, what was asked, how many records returned,
   how many removed. Visible to the IT team.
7. **Admin console (IT team)** — connect tool, choose team, view logs, turn access off.
8. **Vendor console** — see connections, get credentials, see what the company allows.

## Request flow

```
vendor -> Gatekeeper proxy
  -> authenticate vendor, find connection
  -> load policy (allowed people)
  -> (optimisation) if the API supports asking per user, only ask for allowed users
  -> call source API with the company's token
  -> filter response: keep records where "who" is in the allowed list
  -> log
  -> return filtered response in the same shape as the original
```

## Design choices to keep honest

- **Gatekeeper sees all data in memory for a moment.** Mitigation: do not store payloads
  (pass-through only), encrypt tokens, short retention on logs, SOC 2 path. Later option:
  customer-hosted Gatekeeper so data never leaves their cloud.
- **Pre-filter when possible.** For Zoom, calling per-user endpoints only for allowed users
  avoids fetching other people's data at all. Use post-filter as the universal fallback.
- **Pagination.** Filtering pages can return short or empty pages. The proxy must re-page so
  the vendor sees consistent results.
- **Mixed records.** A call with one team member and five outsiders. MVP default rule:
  [include if the host is on the team] — to decide. Options: host-based, any-participant,
  all-participants, or redact outsiders.
- **Webhooks.** Many integrations use push events (e.g. "new recording"). Gatekeeper must
  receive these and forward only allowed ones. Can be phase 2.
- **Write actions.** MVP is read-only.

## What we do not need to build for the MVP

- New connectors from scratch for each tool's whole API — only the endpoints vendors actually use.
- A unified data model (that is Merge's game, not ours).
- AI or ML. Rules are simple and explainable.
