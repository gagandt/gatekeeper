# 09 — Risks and open questions

Everything here must be visible in the deck (slide 13 shows the top six; the rest go in the appendix).

## Trust and security

- **Gatekeeper sees all data for a moment** (because it filters after the fetch).
  The company must trust Gatekeeper more than it trusts the vendor. Gatekeeper becomes a
  high-value target, like Drift was. Needs: no payload storage, strong token security,
  SOC 2, possibly a customer-hosted option.
- **Who holds the master key?** Today the vendor holds it. With Gatekeeper, we hold it.
  This is better only if we are much more secure and only pass filtered data.

## Product

- **Mixed records:** calls, threads and files that include team members and outsiders.
  Which rule is the default? Can IT choose?
- **Keeping the team list current:** people join and leave. Manual list for MVP; identity
  provider sync later.
- **API coverage:** each tool needs its own filter rules. How many tools before it is useful?
- **Vendors must change their base URL.** Small change, but vendors must agree to it.
- **Webhooks / real-time events** not in the first version.

## Business

- **Who pays first?** IT teams (risk reduction) or vendors (faster security approval)?
  Or both?
- **Pricing model:** per connection? per company? per vendor? Not decided.
- **Sales cycle:** enterprise security products sell slowly.
- **Focus:** this is a new product next to HireSteve. How much time can a team of 4 spend?

## Competition

- **Merge could build this.** They already sync employee directories, hold OAuth tokens and
  inspect tool calls. Team-level filtering for outside vendors would be a feature for them.
- **Source tools could fix it themselves** (e.g. Zoom adding "team-scoped apps").
  Then per-tool value shrinks. Our defence: one place for all tools, and the logs.

## Facts to confirm before presenting

- [ ] Name of the Zoom business unit (we assumed Workvivo).
- [ ] Exact team size and number of calls actually needed.
- [ ] Exact Zoom app type and permissions we were granted.
- [ ] Whether any Merge product can filter by team for outside vendors (ask in a demo).
- [ ] Proposed timeline and the decision we want from Taka.
