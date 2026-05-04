---
sidebar_position: 1
title: Time clock
---

# Time clock

> **Stub.** This page documents WebCenter's time clock feature in detail, including rounding, overrides, and the verification flow.

## Clocking in and out

See [First clock-in](../getting-started/first-clock-in) for the basic flow.

## Rounding

WebCenter supports configurable clock rounding to align with your firm's payroll practices.

- **Tenant default** — Set under **Settings → Time Clock**.
- **Office override** — Each office can override the tenant default.
- **Disable** — Set rounding to 1 minute to effectively disable rounding.

The actual clock-in/out time is always stored. Rounding only affects the displayed time and the values used for reports. Hover any time in the app to see both the rounded and actual values.

## Corrections

If an employee forgets to clock in or clocks in by mistake, a supervisor, manager, or administrator can correct it.

1. Go to **Time Clock → History** for that employee.
2. Click the entry you want to fix.
3. Edit the time, add a note explaining the change, and save.

All corrections are audited — the original time, the new time, and who made the change are preserved.

## Verification

Larger firms often want a manager to verify time before it's exported to payroll. WebCenter's verification flow:

1. Manager runs the **Time Clock Report** for the pay period.
2. Reviews each employee's hours.
3. Marks the period as **Verified**.

Verified periods are locked from further edits. Administrators can unlock if needed.

## Override

Override permission lets a manager clock in or out on behalf of an employee. Use sparingly — it bypasses the employee's confirmation. All overrides are audited.
