---
sidebar_position: 10
title: Tenant settings
description: Firm-wide settings in WebCenter — time zone, clock rounding, max shift length, overtime thresholds, session timeout, feature toggles, mileage rate.
---

# Tenant settings

Tenant settings are the firm-wide configuration for WebCenter — time zone, time clock rounding, overtime thresholds, feature toggles, and similar. These apply to your whole firm and affect every employee.

Settings are at **Admin → Settings**. This is a superuser-only page.

## Time zone

Set your firm's primary time zone using IANA names (e.g., "America/New_York", "America/Los_Angeles", "America/Chicago").

This affects:

- Pay period boundaries (when "Monday" starts)
- Date pickers and time displays in the dashboard
- Reports

All backend calculations are done in UTC; the time zone setting is for display and period-boundary alignment.

In v1, the time zone is firm-wide — there is no per-office override. All offices use the same time zone for clock-in/out displays and pay-period boundary calculations.

Changing the firm time zone realigns current and future pay periods. Past periods retain their original boundaries.

## Time clock rounding

The default rounding interval for clock-in and clock-out times, in minutes.

Common values:

- **15** — Round to the nearest quarter-hour (typical for hourly pay).
- **5** or **10** — Smaller rounding for finer-grained pay.
- **1** — Effectively no rounding (every minute counts).

The standard rounding rule:

- Clock-in is rounded **down** to the nearest interval.
- Clock-out is rounded **up** to the nearest interval.
- Both behaviors slightly favor the employee, which is the conservative choice.

Per-office overrides are available if a specific office needs different rounding. See **[Offices](./offices)**.

A confirmation dialog appears when changing this setting because the change applies to historical entries' display values. Pay calculations on previously-locked periods aren't recalculated, but display updates.

## Max shift length

The longest a shift should reasonably be, in hours. Used by the pay-period **lock** workflow to flag entries that exceed it (typically a forgotten clock-out).

Default is usually 15 hours. Adjust if your firm has unusually long workdays.

This is a soft warning at lock time, not a clock-out block. Long shifts are still recorded; the warning just helps you catch likely errors before locking the period.

## Overtime warning hours per week

The threshold (hours per week) at which the **Overtime** report colors an employee row yellow.

Default is typically 30. The Overtime report compares each employee's weekly hours against this threshold.

This doesn't affect anything except report coloring — it doesn't gate clock-ins or trigger notifications.

## Overtime critical hours per week

The threshold above which the Overtime report colors a row red. Default is typically 40.

Both the warning and critical thresholds are soft — set them according to your firm's policy. Federal overtime is per-employer for unrelated SMBs; WebCenter doesn't combine hours across firms in any report.

## Session idle timeout

How long a session can be idle (in minutes) before the user is automatically signed out.

Default is 10 minutes. Tighter values increase security; looser values reduce friction. Pick what fits your firm's environment — open offices may want shorter timeouts; remote work may want longer.

The timeout enforces on the next request after the timeout passes — there's no countdown clock in the UI.

## Require verification before clock-out (firm-wide)

When enabled, every employee in the firm must have manager verification of each clock event before proceeding. Per-employee restrictions can also enable verification for specific employees only — see **[Employees](./employees)**.

Most firms keep this off. See **[Verification](./verification)** for the workflow.

## Feature toggles

Three optional features can be enabled or disabled firm-wide:

- **Mileage** — Enable or disable mileage tracking. Affects employee dashboards and the Mileage section of the app.
- **Messages** — Enable or disable internal messaging.
- **Comp time** — Enable or disable compensatory time accumulation. Sensitive — toggling shows a confirmation dialog. Currently a partial feature; expect expanded support over time.

Disabling a feature hides the UI but doesn't delete history. Re-enabling restores access to existing data.

## Mileage reimbursement rate

The per-mile rate used to calculate reimbursement on mileage reports. Set in dollars per mile (e.g., 0.67).

The rate applies prospectively — claims are calculated using the rate that's in effect when the report is run. Past CSV exports remain unchanged.

The default is typically the current IRS standard mileage rate, but you can set whatever rate matches your firm's reimbursement policy.

## Pay period configuration

Pay period **shape** is configured here too:

- **Reference date** — A known start date that pay periods walk forward and backward from.
- **Period length** — Number of days in a pay period. Any whole number from 1 to 31; most firms use 14 (biweekly) or 7 (weekly).

Changing these realigns current and future periods. Past periods retain their original boundaries.

The pay period **management** workflow (locking, unlocking, viewing periods) is a different page — see **[Pay periods](./pay-periods)**.

## Common scenarios

**Daylight saving time transitions.** No action needed — WebCenter handles DST correctly using the time zone setting. Pay periods crossing a DST boundary are calculated correctly.

**Office in another state.** All offices share the firm-wide time zone in v1 — there is no per-office time zone override. If multi-time-zone support is critical for your firm, contact support.

**Move from biweekly to weekly pay.** Update the period length to 7 days. Past periods are unaffected; the next period boundary aligns to the new schedule.

**Adjusting overtime thresholds for tax season.** Soft thresholds — change them anytime, no audit trail concern.

**Test rounding off without committing.** Set rounding to 1 minute, observe behavior on a test entry, then change back. The dashboard always shows both raw and rounded times so you can see the effect.
