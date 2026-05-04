---
sidebar_position: 3
title: Mileage
description: Track mileage in WebCenter — log claims, view history, and understand reimbursement rates and admin overrides.
---

# Mileage tracking

If your work involves driving — between client sites, between offices, or for errands — WebCenter can track miles for reimbursement. The feature is opt-in per firm; if your firm doesn't reimburse mileage, the mileage card is hidden from your dashboard.

## When the feature is available

The mileage card and `/mileage` page show up only when:

- Your firm has **mileage enabled** under tenant settings.
- Your account is **not** flagged with the *disallow mileage* restriction.
- The pay period you're claiming for is **open** (not locked).

If any of those isn't true, the option won't appear. Ask your admin if you expected to see it and don't.

## Logging a mileage claim

From your dashboard's mileage card (or `/mileage`):

1. **Date** — Defaults to today. You can pick any date that falls in an open pay period; locked periods aren't selectable.
2. **Miles** — Decimal allowed (e.g., 25.5). Enter the total miles for the activity.
3. **Description** — Required. Describe the trip — e.g., "Client visit: Smith → Jones → Brown" or "Office to bank deposit".
4. Submit. The claim appears in your mileage history immediately.

The reimbursement rate is set firm-wide by your admin under **[Tenant settings](../admin/tenant-settings)**. Reports calculate the dollar value automatically.

## Viewing your mileage history

The `/mileage` page shows your claims with date-range filtering. For each claim:

- Date and description
- Miles claimed (with strikethrough and effective-miles indicator if a manager overrode it)
- A "Locked" indicator if the entry's pay period has been locked
- An "Override" indicator if a manager edited the entry

Default filter is the last 30 days; presets cover Last 7 / Last 30 / Last 90 days, or you can pick a custom range.

## Editing or deleting a claim

Open mileage entries (in unlocked pay periods) can be edited from the same form on your dashboard or `/mileage`. Once a pay period locks, entries are read-only.

To remove a claim, edit it and set miles to 0, or ask a manager to override it.

## What managers can do

A manager with override permission can:

- Adjust the miles or description on any claim
- Add a note explaining the change
- See the audit trail (original miles, corrected miles, who, when, why)

The original value is preserved alongside the override; nothing is hidden. See **[Override](../admin/override)** for the manager-side workflow.

## Reports

Two mileage reports are available to anyone with reporting permission:

- **Mileage Summary** — Per-employee totals and reimbursement amounts, with date-range filter and CSV export. Useful for payroll runs.
- **Mileage Detail** — Per-claim breakdown for a specific employee, with override audit trail.

See **[Reports](./reports)** for filters, sort options, and CSV format.

## Reimbursement rate

The per-mile reimbursement rate is a firm-wide setting (typically the current IRS standard rate, but firms can override). It's set under **Admin → Settings**. Past claims continue to use whatever rate was in effect when the report was generated — changing the rate doesn't retroactively alter historical reports if they've already been exported.

## Why no GPS or auto-tracking?

WebCenter's mileage feature is intentionally manual: you enter miles and a description. There's no automatic GPS tracking, no automatic odometer reading, no integration with mapping tools. Two reasons:

- **Simplicity for tax-and-bookkeeping use cases.** Miles for these firms are mostly trip-based, not continuous fleet driving.
- **Privacy.** Continuous location tracking changes the trust model significantly. If your firm needs that capability, it's a different product fit.

If you need richer tracking, log miles immediately after each trip rather than at end of day — it's the easiest way to keep accurate records.
