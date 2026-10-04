# 01 — Context brief

## The one-sentence idea

Gatekeeper sits between a vendor and a company's data, and only lets through the data
the vendor was actually sold access to.

## Where the idea came from (our real story)

- Trissino sells **HireSteve.ai**, a competitive intelligence platform.
- Zoom is one of our customers. We sold to **one part of Zoom: [Workvivo]** — not to all of Zoom.
  (Gagan wrote "Workovo". We assume this is **Workvivo**, Zoom's employee-experience business.
  Confirm the name before presenting.)
- To build the integration, we needed access to Zoom call data — but only for the
  Workvivo team.
- Zoom's integration options gave us access to **the entire Zoom organization:
  over 90,000 calls.**
- We only needed **[X] calls** from **[Y] people** on the Workvivo team.
  (Gagan: fill in X and Y if known. If unknown, use "a small fraction".)
- This was a security risk **for Zoom**: a vendor holding data it never needed.
- It was also a risk **for us**: we were holding data we did not want, could not justify,
  and would be responsible for if anything went wrong.

## Why this happens (in plain words)

Most business software gives an outside app two choices:

1. **Connect one person.** Each person must click "allow" themselves. Slow, and the
   company has little control.
2. **Connect the whole company.** One admin clicks "allow" once. Fast — but the app can
   now see everyone's data.

There is usually **no "connect only this team" option.**

Zoom is a clear example. Zoom has user-level apps (each person approves) and
account-level apps (an admin approves once for everyone). An account-level app with
recording permissions can read recordings for all users in the organization.
(Sources in `06-evidence-and-sources.md`.)

So companies are forced to choose between "too slow" and "too much". Most choose
"too much". That is the problem.

## Who has the problem

| Who | Their pain |
|---|---|
| **The company's IT / security team** (the eventual customer, the buyer) | Vendors get far more data than they need. More risk, harder audits, bigger damage if a vendor is breached. |
| **Vendors like us** (the requester, also a user of Gatekeeper) | We receive data we do not want. Security reviews take longer. Deals get blocked or shrunk. We carry liability. |
| **Employees outside the team** | Their calls, messages, and files are exposed to vendors they have never heard of. |

## What Gatekeeper is

A layer that sits **between** the vendor and the company's software (Zoom, Slack, etc.).

- The company's IT team connects their software to Gatekeeper.
- The IT team draws a line: "Vendor X may only see data from **these 100 people**."
- The vendor asks Gatekeeper for data — not Zoom directly.
- Gatekeeper fetches the data, **removes everything outside the line**, and passes on
  only what is allowed.
- Every request is logged, so IT can see exactly what left the company.

## What has been decided (from Gagan)

1. **Product name: Gatekeeper.** Only this name.
2. **Two sides:** IT teams are the main stakeholder and eventual customer. Vendors
   (like us) are also users — they request data through Gatekeeper.
3. **Target: enterprises.**
4. **Bring your own OAuth.** Like Merge.dev's "partner credentials" / "application credentials",
   customers can bring their own OAuth app keys. Gatekeeper will support this.
5. **One-to-one mapping.** Each connection is one company + one source tool + one vendor,
   with its own rules. No shared, pooled connections.
6. **MVP approach: filter after the fetch.** Gatekeeper calls the source tool's existing API
   normally, receives the full response, filters it, and returns only allowed data.
   We do not need to build new connectors or new APIs for the source tools.
   This is what makes the MVP fast to build.
7. **MCP and API access** are side quests. Shown in the deck, clearly labeled, not the main story.

## What is NOT decided (show as open in the deck)

See `09-risks-and-open-questions.md`. Main ones: pricing, who pays first, which tool to
start with, how to handle records that mix allowed and not-allowed people, whether
Gatekeeper is hosted by us or by the customer.

## Tone for the deck

Calm, clear, honest. Not hype. This is a co-founder conversation, not an investor pitch.
