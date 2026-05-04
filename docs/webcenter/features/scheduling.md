---
sidebar_position: 4
title: Scheduling
---

# Scheduling

WebCenter has a lightweight scheduling feature for firms whose managers want to plan shifts in advance and publish them for staff to see. This page covers the **employee** experience — viewing your shifts. For the manager-side editor, see **[Schedule editor](../admin/schedule-editor)**.

## Where you see your schedule

After signing in, go to **Schedule** in the navigation (or `/schedule`).

The page shows your **upcoming published shifts**, ordered by date. For each shift:

- Day and date
- Start and end times (in your firm's time zone)
- Office
- Position (if your firm uses positions)
- Any notes the manager attached

If you have no upcoming shifts, you'll see an empty state — your manager hasn't scheduled or published anything for you yet.

## Draft vs. published shifts

Managers create shifts as **drafts** first; drafts aren't visible to employees. When the manager **publishes** a shift (or publishes the whole week at once), it appears on your schedule.

If your manager mentions a shift you don't see, it's probably still in draft. Once they publish, it'll show up. WebCenter does not notify you about new shifts in v1; check the schedule page or your messages.

## Cross-firm conflict warnings

If your account is linked across multiple firms (see **[Working at multiple firms](../getting-started/multi-employer)**), and you have shifts that overlap at different firms, the schedule page shows a **conflict warning** banner above the affected days.

The warning is for **you only** — the firms you work for never see this. They don't know about each other.

What the conflict warning shows:

- The day(s) with overlapping shifts
- Which firms the conflicts are with (only their names — no shift detail)
- A note that you should resolve the conflict with one or both managers

The warning is informational. WebCenter doesn't unilaterally cancel any shift; it just makes the overlap visible so you can sort it out.

## What scheduling does and doesn't do in v1

WebCenter's scheduling in v1 is intentionally minimal. It does:

- Let managers create, edit, and publish shifts on a week grid
- Let managers copy a week's worth of shifts to another week (a templating shortcut)
- Show employees their own published shifts
- Warn employees about cross-firm conflicts

It doesn't (yet):

- Shift swap requests between employees
- Time-off and availability tracking
- Auto-assignment based on availability
- Cost or hours-budget estimates per week
- Notifications when your schedule changes

These are post-v1 candidates based on real-user feedback. If your firm needs any of them, let support know.

## What if my schedule is wrong?

Talk to your manager. Schedule edits are made through the **[Schedule editor](../admin/schedule-editor)**, which is a manager tool. If a shift is wrong, the manager updates it (and re-publishes if needed) and your view updates the next time you refresh.

## What if I'm scheduled but didn't agree to the shift?

WebCenter does not have an "accept shift" workflow in v1. The schedule reflects what your manager has assigned; if you disagree, talk to them. Reading the schedule is not consent or commitment.

## Mobile and tablet

The schedule page is responsive — it works on phone, tablet, and desktop browsers. There's no native app yet.
