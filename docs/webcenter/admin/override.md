---
sidebar_position: 7
title: Override
---

# Override

Override is the workflow for correcting time clock and mileage entries that are wrong. It's the answer to "I forgot to clock out" and similar mistakes — a manager corrects the entry, with an audit trail.

The override screen is at **Admin → Override**. It's restricted to roles with the **time clock override** capability — typically managers and administrators.

## When to use it

- An employee forgot to clock in or out
- An employee clocked in at the wrong office or position
- An employee's clock time is off (e.g., they realized they were 30 minutes late but had clocked in on time)
- A clock event was recorded but the employee disputes it
- A mileage claim has the wrong miles or description

If you just want to approve correct entries without changing them, use **[Verification](./verification)** instead. Override is specifically for changing values.

## Two views

The override page has:

- **Employee picker** at the top — search by name, filter by office.
- **Active time entries** for the selected employee, with override actions on each row.

Clicking an entry opens the override form where you can adjust either the clock-in time, the clock-out time, or both. You can also adjust mileage entries the same employee has claimed.

## Overriding a clock-in or clock-out

1. Pick the employee.
2. Find the entry to correct in their list.
3. Click the entry.
4. In the form, choose what to change:
   - **Clock-in time only** — A new clock-in time, leaving clock-out as-is.
   - **Clock-out time only** — A new clock-out time, leaving clock-in as-is.
   - **Both** — Replace both times.
5. Use the date/time picker to set the corrected value(s).
6. Add a **description** (required) — a short reason: "Forgot to clock out", "Wrong time entered", "Manager correction per request", etc.
7. Confirm.

The original (raw) time stays in the database alongside the override. The dashboard and reports show both:

- Raw clock-in / clock-out
- Effective (overridden) clock-in / clock-out
- An "Override" indicator with the reason on hover

Pay calculations use the effective values.

## Force clock-out

If an employee has an open shift (clock-in without clock-out) and you want to close it immediately — without waiting for them to come back and clock out themselves — use the **Force Clock-Out** action.

1. Pick the employee with the open shift.
2. Click **Force Clock-Out**.
3. Set the clock-out time (typically the time their shift actually ended).
4. Add a description.
5. Confirm.

The shift is closed at the time you specified, with the override audit trail attached.

Force clock-out is the standard fix for "they forgot to clock out three days ago."

## Overriding mileage

The same workflow applies to mileage claims. Pick the employee, find the mileage entry, click to override.

You can change:

- The miles (decimal allowed)
- The description

The original value is preserved alongside the override. Reports show effective miles, with strikethrough on the original. The audit trail records who overrode, when, and why.

## What employees see

When you override an entry:

- It appears on the employee's dashboard with both original and overridden values
- An "Override" indicator with the reason is visible on hover
- Pay-period summaries use the overridden values

Nothing is hidden from the employee. They can see exactly what was changed and why.

## What if the override should also change verification status?

If your firm has verification enabled, overriding an entry automatically marks it verified by the overrider. There's no need to verify again.

## Permission scope

Most managers can override entries only for employees in offices they're assigned to. Superusers and administrators can override for anyone.

If you can't find an employee in the picker, check whether your role's override permission is scoped to a specific office.

## Locked pay periods

Override of entries in **locked** pay periods is technically possible if your role has the capability and the period is unlocked first — see **[Pay periods](./pay-periods)** for the unlock workflow.

The expected workflow:

1. Unlock the period (with a reason).
2. Make the override.
3. Re-lock the period.

Don't leave a period unlocked longer than needed.

## Audit trail

Every override is logged:

- The original value
- The new value
- Who made the override
- When it was made
- The reason

You can see the audit trail:

- On the employee's dashboard (hover the entry for the override reason)
- In the Employee History report

## Common scenarios

**Employee forgot to clock out yesterday.** Pick the employee → find yesterday's open entry → Force Clock-Out at the appropriate time → reason: "Forgot to clock out".

**Employee clocked in at 9:00 but was actually here at 8:30.** Override clock-in to 8:30 → reason: "Adjusted to actual arrival time per employee".

**Mileage claim is missing zero miles for one trip.** Override the claim, increase the miles, update description if needed → reason: "Added missed trip per employee".

**Two employees swapped offices for one day.** Override each entry's office assignment to the correct office, plus a description → reason: "Office swap for [date]".

## What override is not

- It's not "deleting" — entries always remain in the database with their full history.
- It's not retroactive verification of previously unverified entries — that's a side effect, but verification has its own workflow.
- It's not silent — every override is logged with the reason and visible to the employee.
