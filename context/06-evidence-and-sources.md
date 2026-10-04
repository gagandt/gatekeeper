# 06 — Evidence and sources

Every number or claim used in the deck, with where it comes from.
All facts below are paraphrased. Re-check links before presenting.

## Our own case (internal, from Gagan)

- Sold HireSteve to [Workvivo], part of Zoom.
- The Zoom integration gave access to the whole Zoom organization: **90,000+ calls**.
- Team we actually needed: **[Y] people / [X] calls** — to confirm.

## Why Zoom works this way

- Zoom apps are either user-managed (each user authorizes) or admin-managed / account-level
  (one admin authorizes for the whole account).
- A Zoom staff answer on the developer forum confirms that an account-level app with recording
  permissions, once approved by an admin, can access recordings and transcripts for all users
  in the organization, without each user approving.
  https://devforum.zoom.us/t/can-an-account-level-app-with-recordingadmin-access-transcripts-for-all-users-in-the-same-zoom-account/132677
- A separate Zoom forum thread: admins can pre-approve a user-level app but cannot install it on
  users' behalf; user-level apps are designed to be authorized per user for privacy reasons.
  https://devforum.zoom.us/t/both-account-level-and-user-level-app/11737
- Connector docs (e.g. PipesHub) note that one admin authorization covers all users, and that
  admin-scoped permissions are only available to admin-managed apps.
  https://docs.pipeshub.com/connectors/zoom/zoom.md

## Salesloft Drift breach (slide 5)

- Attacker (tracked by Google as UNC6395) used stolen OAuth tokens from the Salesloft Drift app
  to pull data from customers' Salesforce instances, roughly 8–18 August 2025.
- Google's threat intelligence group said it was aware of 700+ potentially impacted organizations.
  https://thehackernews.com/2025/08/salesloft-oauth-breach-via-drift-ai.html
- Victims reported in the press include Cloudflare, Zscaler, BeyondTrust, Proofpoint, Rubrik,
  SpyCloud and Tenable.
  https://www.bankinfosecurity.com/cloudflare-joins-list-salesloft-drift-breach-victims-a-29353
- Analysis notes that many organizations had granted the Drift app overly broad permissions.
  https://socradar.io/salesloft-drift-breach-everything-you-need-to-know/
- Drift's connections also reached Google Workspace and other systems, not only Salesforce.
  https://www.secureworld.io/industry-news/salesloft-drift-breach-salesforce-data

## Growth of integrations (slide 6)

- Valence Threat Labs (reported by Dark Reading): average organization has **917** SaaS-to-SaaS
  third-party integrations; **76** new ones are added every 30 days; **85%** of CISOs said they
  lack appropriate visibility and protection; about half of integrations are unused, many over-privileged.
  https://www.darkreading.com/tech-trends/quantifying-the-saas-supply-chain-and-its-risks
  (Note: this is an older report. Present as "one industry report", not as current-year data.)
- Adaptive Shield 2023 report: companies with 10,000 SaaS users average about 2,033 apps connected
  to Microsoft 365 and about 6,710 to Google Workspace.
  https://thehackernews.com/2023/02/shocking-findings-from-2023-third-party.html

## Merge.dev (slides 10, 12)

- Merge Unified offers **Scopes** (choose which data models and fields sync) and
  **Selective Sync** (filter what data is synced; depends on the underlying platform supporting the filter).
  https://help.merge.dev/articles/9113654-selective-sync
- Merge supports **"partner credentials" / bring-your-own OAuth app**: the vendor registers its own
  OAuth app and enters the client ID and secret in Merge.
  https://help.merge.dev/articles/4587739678-pipedrive-how-do-i-set-up-my-partner-credentials
- **Merge for Workforce / Agent Handler for Employees**: connects to identity providers, imports
  employees and groups, maps them to approved AI tools and actions, applies DLP and logging to every
  employee AI session.
  https://siliconangle.com/2026/06/01/merge-launches-agent-handler-employees-gatekeeper-workplace-ai-agents/
  https://www.merge.dev/blog/agent-handler-employees
- Merge for Workforce also supports bring-your-own OAuth app per connector.
  https://docs.merge.dev/merge-workforce/connectors/application-credentials
- Latest Merge for Workforce launch focuses on lowering AI token spend through model routing.
  https://www.merge.dev/blog/introducing-merge-for-workforce

## Other nearby solutions (slide 12)

- Salesforce recommends a dedicated integration user per use case, restricting each to a subset of data.
  https://help.salesforce.com/s/articleView?id=platform.integration_user.htm&language=en_US&type=5
- Push Security: discovers third-party app integrations, shows permissions, and lets IT remove them.
  https://pushsecurity.com/blog/is-it-safe-to-allow-my-employees-to-connect-third-party-apps-to-our-m365

## What we could not confirm

- Whether Merge (any product) can filter records by group/team membership for an outside vendor.
  Ask in a demo before claiming it cannot.
- Market size numbers. None are used in the deck. Do not invent any.
