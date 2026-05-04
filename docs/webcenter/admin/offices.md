---
sidebar_position: 2
title: Offices
description: Manage offices (locations) in WebCenter. Covers plan caps, adding, editing, deactivating, and per-office settings.
---

# Office management

An "office" in WebCenter is a physical location where work happens. Single-office firms have one; multi-location firms can have many. The Offices admin screen is at **Admin → Offices**.

This is a superuser-only screen — only administrators (or anyone with the `superuser` permission flag) can manage offices.

## Plan caps

The number of **active** offices you can have is gated by your plan:

- **Free** — 1 active office.
- **Trial / Paid** — Unlimited active offices, with graduated per-location pricing on the Paid plan (3+ locations get a volume discount).

If you try to add or reactivate an office past your cap, you'll see a 402 Payment Required error in the dialog with a link to **[Billing](./billing)** to upgrade or start a trial.

## Office list

The list shows every office — active and inactive — with:

- Name
- Status (Active / Inactive)
- Active employee count
- Last modified date
- Action buttons: Edit, Deactivate / Reactivate, Delete

Search by name. Toggle to show only active offices, or include inactive in the list.

## Adding an office

1. Click **Add Office**.
2. Enter the office name. Use something distinctive — "Sacramento" or "Smith Tax — Stockton" — since the name appears in employee records, reports, and dashboards.
3. Confirm.

If the office is added successfully, it appears in the list as Active and is available in the office dropdown for new employee assignments and clock-ins.

If your plan caps prevent it, you'll see the upgrade prompt described above.

WebCenter syncs the active location count to Stripe on every add, so per-location subscription billing is updated immediately.

## Editing an office

You can change the office name. Click **Edit** on the row, change the name, and confirm.

Renaming propagates everywhere — all employee records, reports, and historical entries that reference this office update to show the new name.

## Deactivating an office

Deactivating an office:

- Removes it from new employee-assignment dropdowns
- Removes it from clock-in selectors
- Preserves historical employee records and time clock entries that reference it (data integrity is maintained)
- Updates the active location count for Stripe billing

You **cannot deactivate** an office if doing so would leave any employee with no active home office. Reassign affected employees first.

To deactivate: click **Deactivate** on the office row, confirm.

## Reactivating an office

Reactivating restores the office to active status. Subject to plan caps — if your plan only allows 1 active office and you already have one, reactivation will be blocked with a 402 error and an upgrade prompt.

## Deleting an office

Deletion is rarely used and is irreversible. Most firms should deactivate instead.

To delete: click **Delete** on the office row, confirm. Deletion fails if any employee is still assigned to the office (move them first) or if any historical time clock or mileage entries reference the office (in which case deactivate, don't delete).

## Per-office settings

Each office can override the firm's default **clock rounding interval**. Set to 1 minute to effectively disable rounding for that office. This is the only office-specific setting in v1 — time zone and position list are firm-wide. See **[Tenant settings](./tenant-settings)** for firm-wide configuration.

## Why active office count affects billing

WebCenter's Paid plan is priced per active location with a graduated volume discount. Adding or reactivating an office increases your subscription quantity in Stripe at the next billing cycle. Deactivating decreases it. Stripe handles proration automatically.

For the exact pricing currently in effect, see **[Billing](./billing)** or open the in-app billing page.

## Common scenarios

**Adding a second office during tax season.** If on Free, start the 14-day trial first to unlock multi-location during peak. If you don't convert to Paid before the trial ends, locations beyond the Free cap are no longer addable but existing data is preserved.

**Closing an office permanently.** Deactivate. Don't delete. Deactivation is reversible, deletion isn't.

**Renaming an office mid-year.** Edit and rename freely. Historical reports and records update to the new name automatically.

**Office with employees but no clock activity.** Deactivating is fine — employee records preserve their historical office assignment regardless of office status.
