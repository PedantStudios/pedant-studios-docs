---
sidebar_position: 6
title: Verification
---

# Verification

Verification is an optional approval step for time clock entries. When enabled, employees can't proceed past a clock-in or clock-out until a manager has reviewed and verified the entry. The verification screen is at **Admin → Verification**.

This is for managers and admins with the **time clock verify** capability.

## When to use it

Most firms don't enable verification — the time clock works fine without it. Turn it on when:

- You want a manager review step for every clock event before it counts toward payroll.
- You're onboarding a new employee whose hours need extra scrutiny.
- Your firm has a compliance requirement that all hours be reviewed by a supervisor.

Verification can be enabled:

- **Firm-wide** — Set under **[Tenant settings](./tenant-settings)** (the "Require verification" toggle).
- **Per-employee** — Set as a restriction on the employee's edit form. Useful when only certain individuals need it.

If neither toggle is on, the Verification page won't have anything to do — and most employees won't see anything different.

## What employees see

When verification is required:

- After clocking in or out, the dashboard shows "Pending verification" instead of the usual confirmation.
- The next clock action (e.g., clocking out after a verified clock-in) is blocked until the previous entry is verified.

Employees can keep using the rest of the app — only the time clock action is gated.

## What managers see

The Verification screen lists every unverified entry in two tables:

- **Unverified Clock Ins** — Entries where the employee clocked in and is now waiting for verification.
- **Unverified Clock Outs** — Entries where the employee clocked out and the entry is awaiting confirmation.

For each entry:

- Employee name
- Date and time of the event (in your firm's time zone)
- Office and position
- Checkbox for selection

You can:

- **Filter** by office or position
- **Search** by employee name
- **Sort** by employee name or date/time
- **Select** individual entries with the checkboxes
- **Verify selected** in bulk

## Verifying entries

1. Open **Admin → Verification**.
2. Review the list. Hover any time to see the actual time and any context (e.g., position).
3. Select the entries you want to verify (individual checkboxes or "select all" at the top).
4. Click **Verify Selected**.
5. The entries are marked verified and the affected employees can proceed.

There's no "reject" action — if an entry is wrong, use **[Override](./override)** to correct it instead. Override-corrected entries are automatically considered verified by the corrector.

## Permission scope

Most managers can only verify entries for offices they're assigned to. Superusers and administrators can verify any entry.

If you don't see entries you expect to see, check whether your role's verification permission is scoped to a specific office.

## What if entries pile up?

If verification is on and managers don't verify regularly, employees get stuck unable to clock out (or in). Two mitigations:

- Make verification a habit at the start or end of each manager's shift.
- Set up a custom group with all managers and have everyone responsible. (Verification can be done by any user with the permission — it's not assigned per-employee.)

If managers are routinely backed up on verification, verification is probably more friction than value for your firm. Turn it off in **Tenant settings**.

## Verification vs. Override

Different workflows:

- **Verification** is for entries that are correct and just need approval. The time stays as-is.
- **Override** is for entries that are wrong and need correcting. The time is changed.

Use Verification when entries are routine; use Override when something needs to be fixed.

## Audit trail

Verifications are logged — who verified each entry, when. View this in the time clock history for the affected employee, on their dashboard or the Employee History report.

## Common scenarios

**Bulk-verify a manager's office.** Filter by office, click "select all", click Verify Selected. Done in seconds.

**An employee shows up on the verification list but their entry looks wrong (e.g., clocked in at 3 AM by mistake).** Don't verify — use Override to correct the time, which auto-verifies the corrected entry.

**Verification is enabled firm-wide but you want to exempt one trusted employee.** Per-employee restriction toggles aren't quite this — they enable verification per-employee. To exempt, the firm-wide toggle has to be off, and verification is then enabled only for employees whose record has the restriction.
