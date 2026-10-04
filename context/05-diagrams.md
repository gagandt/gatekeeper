# 05 — Diagram specs

## D1 — Today: connect one person or everyone (slide 3)

```
  A: one person          B: everyone             C: one team
  . . . . . .            o o o o o o             . . . . . .
  . . o . . .            o o o o o o             . [o o] . .
  . . . . . .            o o o o o o             . [o o] . .
  "slow"                 "too much"              "does not exist"
                         (amber)                 (dashed border, jade)
```

## D2 — The problem flow (slides 2, 4)

```
  [ The company: Zoom ]                    [ Vendor: Trissino ]
  +-----------------------+
  | . . . . . . . . . . . |  ===== all data ======>   (90,000+ calls)
  | . . [team] . . . . . .|
  +-----------------------+
```

## D3 — The Gatekeeper flow (slides 7, 8)

```
  [ The company: Zoom ]        [ Gatekeeper ]        [ Vendor ]
  +-----------------------+         |
  | . . . . . . . . . . . |  --->   |  --- team only --->  (only [Y] people's calls)
  | . . [team] . . . . . .|  --->   |
  +-----------------------+   grey dots stop here, fade
                                    |
                               [ Log of every request ] -> IT team
```

## D4 — Four steps (slide 8 header)

```
 (1) IT connects Zoom  ->  (2) IT picks the team  ->  (3) Vendor asks  ->  (4) Only team data sent + logged
```

## D5 — MVP pipeline (slide 10, appendix A2)

```
 Vendor app
    |  same request it would send to Zoom, but to Gatekeeper's address
    v
 +---------------- Gatekeeper ----------------+
 |  1. Check: which vendor? which company?     |
 |  2. Look up the rule: "team = these people" |
 |  3. Call Zoom API with the company's key    |
 |  4. Receive full response                   |
 |  5. Remove everything outside the team      |
 |  6. Write a log entry                       |
 +---------------------------------------------+
    |  filtered response
    v
 Vendor app
```

## D6 — One connection = one company + one tool + one vendor (slide 10)

```
 [ Zoom (company) ] -- [ Zoom tool ] -- [ Trissino (vendor) ]   = 1 connection, 1 rule, 1 key
 [ Zoom (company) ] -- [ Slack tool ] -- [ Trissino (vendor) ]   = another connection
```

## D7 — Breach fan-out (slide 5)

One centre node "one vendor's stolen keys". 700+ thin amber lines to small building icons.
Draw ~120 lines visually and label "700+ companies".

## D8 — Competitive map (slide 12)

```
                    controls WHICH DATA
                           ^
                           |
         Merge Unified     |      Gatekeeper
      (Scopes, Selective   |   (company controls,
           Sync)           |    by team)
                           |
  vendor controls  <-------+-------> company controls
                           |
                           |   SaaS security tools
                           |   Merge for Workforce
                           |   Built-in permissions
                           v
                    controls WHICH APPS / ACTIONS
```

Note for the agent: Merge for Workforce does inspect data in tool calls (DLP), so place it
slightly above the axis, not at the bottom. Keep the diagram honest.

## D9 — Side quests (side-quest slides)

```
  [ Vendor ] ----\
  [ AI agent (MCP) ] ----> [ Gatekeeper ] ----> [ Company tools ]
  [ Partner ] ---/
  [ Internal script ] -/
```
