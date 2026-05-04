---
sidebar_position: 5
title: Pay periods
---

# Pay period management

A pay period is a fixed-length window of time over which hours are summed for payroll. WebCenter handles biweekly periods by default, with configurable length and anchor date. Pay periods are managed at **Admin → Pay Periods**.

## What's on the page

The page lists all pay periods that have time clock or mileage activity, newest first. For each:

- Period start and end dates (in your firm's time zone)
- Status — **Open** or **Locked**
- Number of employees with at least one entry in this period
- Number of incomplete shifts (clock-in without clock-out)
- Last locked date, if applicable
- Action button — Lock or Unlock, depending on current status

## Open vs. Locked

- **Open** periods are editable. Employees can clock in and out, claim mileage, and managers can override.
- **Locked** periods are read-only. New entries can't be added; mileage can't be claimed for that date range.

The current pay period is always open. As soon as it ends, you decide whether to lock it (typically right after running the payroll-export workflow).

## Why locking matters

Locking serves two purposes:

1. **Finalize for payroll.** Once a period is locked, you can run reports knowing the data won't change. This is the right time to export the CSV and hand it to your payroll provider.
2. **Audit clarity.** Locked periods preserve the historical record. Anyone who edits a locked period leaves an audit trail with their reason.

You can keep periods unlocked indefinitely if you don't run a strict payroll cycle. Locking is a discipline, not a requirement.

## Locking a period

1. Go to **Admin → Pay Periods**.
2. On the period you want to lock, click **Lock Period**.
3. WebCenter checks for issues:
   - **Incomplete shifts** — Clock-ins without matching clock-outs. Shown as a warning, not a block.
   - **Long shifts** — Shifts exceeding your firm's max-shift-length setting (typically 15 hours). Shown as a warning.
4. The confirmation dialog lists any warnings. You can:
   - **Cancel** — Go back and resolve the issues first (typical: use **[Override](./override)** to fix incomplete shifts).
   - **Lock anyway** — Proceed despite warnings. Useful when warnings are acknowledged or expected.
5. Confirm. The period is now locked.

After locking:

- Employees see "Locked" indicators on dashboard entries in that period.
- Mileage can't be claimed for dates in the period.
- Override is technically still possible for managers with the right permission, but it's discouraged — see Unlocking below.

## Unlocking a period

If you discover an error after locking — for example, an employee's hours were wrong on the payroll export — you can unlock the period to make corrections.

1. On a locked period, click **Unlock Period**.
2. The confirmation dialog warns that unlocking is logged in the audit trail.
3. **Enter a reason** for unlocking. This is required and goes into the audit log.
4. Confirm. The period is now open again.

After unlocking:

- Make whatever corrections are needed via **[Override](./override)** or by asking the affected employees to re-clock.
- **Re-lock** the period when corrections are done. Don't leave a previously-locked period open longer than necessary.

Unlocking is occasional and intentional — typically a couple of times a year, not weekly. Frequent unlocks are a sign that the lock workflow is happening too early.

## Pay period configuration

The shape of pay periods (length, anchor date) is configured under **[Tenant settings](./tenant-settings)**, not on the Pay Periods page itself. From settings you can change:

- **Period length** — typically 14 days (biweekly), but weekly, semi-monthly, and monthly are options.
- **Anchor date** — A known start date that the pay period schedule walks forward and backward from. Changing this realigns all current and future periods.

Changes apply prospectively only — historical periods retain their original boundaries.

## Max shift length

Set under **[Tenant settings](./tenant-settings)**. Used by the lock workflow to warn about unusually long shifts (e.g., > 15 hours), which usually indicate a forgotten clock-out. The value is a soft warning — WebCenter doesn't prevent long shifts, just flags them at lock time.

## Overtime thresholds

Two thresholds, both set under **[Tenant settings](./tenant-settings)**:

- **Overtime warning hours/week** — At or above this, the Overtime report colors the row yellow.
- **Overtime critical hours/week** — At or above this, the row goes red.

These don't gate clock-ins; they're indicators on the report. The defaults are typically 30 (warning) and 40 (critical) for full-time-equivalent firms; tune to your firm.

## Verification before locking

Some firms have a manager-verification step before each clock event becomes part of the official record. If your firm has verification enabled (firm-wide or per-employee), make sure all entries in the period are verified before locking — locking with unverified entries is allowed but typically not what you want.

See **[Verification](./verification)** for the manager workflow.

## Common scenarios

**End-of-period flow.** Period ends → run Time Worked or Payroll report → review for unusual entries → fix any with Override → lock the period → export CSV → hand to payroll.

**Found an error after locking.** Unlock with a reason → fix via Override → re-lock.

**An employee forgot to clock out three days ago.** Use Override to set the correct clock-out time. They don't need to re-clock; the override creates the audit trail.

**A manager wants to lock for their own office only.** Not supported — locking is firm-wide. If you need office-by-office locking, that's a feature request.
