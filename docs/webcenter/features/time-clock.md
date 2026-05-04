---
sidebar_position: 2
title: Time clock
description: How the WebCenter time clock works — clocking in and out, rounding, history, verification, override, and locked pay periods.
---

# Time clock

The time clock is WebCenter's core feature. This page covers the day-to-day mechanics for employees and the supporting concepts you'll bump into — rounding, overrides, verification, and locked pay periods.

For a quick walkthrough of clocking in for the first time, see **[First clock-in](../getting-started/first-clock-in)**. For the manager-side workflows, see **[Verification](../admin/verification)** and **[Override](../admin/override)**.

## Clocking in and out

Clocking happens from the clock card on your **[dashboard](./dashboard)**. One button at a time:

- If you're clocked out, the card shows **Clock In**.
- If you're clocked in, the card shows **Clock Out** plus the time you started.

Clicking either button shows a confirmation dialog with the current time. Confirm to proceed.

## What gets recorded

Every clock event records:

- The **actual** time of the click, to the second.
- The **rounded** time (if your firm rounds), per your firm's rounding setting.
- Your office and position at the time of clocking in.
- An audit trail if the entry is later corrected by a manager.

You can see all of this on your dashboard's **Pay Period Summary** by hovering any time value.

## Rounding

WebCenter supports configurable clock rounding. The default for new firms is to round to 15 minutes; admins can change this firm-wide and per-office.

- **Rounding is for display and reporting only.** The actual time is always preserved.
- The standard pattern is: round down on clock-in, round up on clock-out, both to the nearest interval. (Talk to your admin if you need a different rounding rule.)
- To turn rounding off effectively, set the interval to 1 minute.

You'll see both the rounded and actual values on your dashboard, and pay calculations use the rounded values.

## Office and position per clock-in

You have a default office and default position on your employee record. The clock card lets you override either for a specific clock-in — useful if you're filling in at a different office or doing a different role for the day.

If you change either, the new values stick to that single clock-in / clock-out pair. Your defaults aren't changed.

## Time clock history

The full history is on your dashboard's Pay Period Summary, with previous/next buttons to scroll through periods. Admins and managers can see all employees' history through the **[Reports](./reports)** pages.

## What if I forget to clock in or clock out?

A manager or administrator can correct any entry through the **Override** workflow.

- They can set a clock-in time, a clock-out time, or both.
- They can also "force clock out" if you forgot and the shift is still pending.
- All corrections are audited (who made the change, when, and why).

You'll see corrected entries on your dashboard with both the original and corrected times — nothing is hidden.

## Verification

Some firms turn on a setting that requires manager **verification** of every clock-in or clock-out before the next action is allowed. If that applies to you:

- After clocking in or out, you may see a "pending verification" message.
- A manager will review the entry on the **[Verification](../admin/verification)** page and either approve or correct it.
- Once verified, you can proceed.

Verification is independent of override. Most firms don't enable it; ask your admin if you're unsure.

## Locked pay periods

When a pay period closes, an admin **locks** it — typically after the payroll-export workflow is complete. Locked entries are read-only:

- Employees can't add or edit time clock or mileage in a locked period.
- Managers can't override locked entries through the normal override flow.
- An admin can **unlock** a locked period if a correction is needed after the fact, but the unlock is audited.

See **[Pay periods](../admin/pay-periods)** for the locking workflow.

## Restrictions

A few employee-level settings affect clocking:

- **Require verification** — Each entry must be manager-verified before the employee can proceed.
- **Disallow mileage** — The employee can't claim mileage (the mileage card is hidden on their dashboard).

These are set on the employee's record by an admin. See **[Employees](../admin/employees)** for the configuration.

## Common scenarios

**I clocked in at the wrong office.** Ask a manager to override the entry and set the right office, or clock out and clock in again with the correct office.

**The actual time on my dashboard is different from the rounded time.** That's normal — rounding shifts the displayed value to the nearest interval. Hover to see both. Pay is calculated from the rounded value.

**I tried to clock in but it said "already clocked in".** You're probably clocked in at a different office or position from earlier. Click Clock Out, then Clock In again with the right office/position. If it still doesn't make sense, ask a manager.

**I tried to clock out but it said "verification required".** Your firm has the verification setting on. A manager needs to verify your clock-in before you can clock out.
