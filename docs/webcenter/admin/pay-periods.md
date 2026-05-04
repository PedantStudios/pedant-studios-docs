---
sidebar_position: 4
title: Pay periods
---

# Pay periods

> **Stub.** How WebCenter handles pay period configuration.

## Default behavior

WebCenter ships with biweekly pay periods anchored to a reference date. By default this is the legacy reference date used by the original WebCenter installation, but you can change it.

## Configuring

From **Settings → Pay Periods**:

- **Period length** — Weekly, biweekly, semi-monthly, or monthly.
- **Anchor date** — A known start date that the schedule walks forward and backward from.
- **Cutoff time** — When the day "ends" for time clock purposes (e.g., 11:59 PM, or midnight, or a specific overnight cutoff for late-shift firms).

## Verification cycle

The standard workflow:

1. Pay period ends.
2. Manager runs the **Time Clock Report** for the period.
3. Manager corrects any mistakes.
4. Manager marks the period **Verified**.
5. Verified periods are locked.
6. Run the CSV export, drop into payroll provider.

## Reopening a verified period

Administrators can reopen a verified period if a correction is needed after the fact. The reopen is audited.
