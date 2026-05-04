---
sidebar_position: 6
title: Reports
---

# Reports

Reports are the bridge between the time you've tracked in WebCenter and the payroll and accounting tools that consume that data. Every report supports CSV export, with column layouts pre-configured for common payroll providers.

Reports are available to anyone with the **time clock reports** permission — typically supervisors, managers, and administrators.

## Available reports

| Report | What it shows | Use case |
|---|---|---|
| **Time Worked** | Per-employee total hours, days worked, average hours per day, for any date range | Quick check on hours-per-employee |
| **Overtime** | Per-employee weekly hours with color-coded warnings against firm-set thresholds | Catch employees approaching or exceeding overtime limits |
| **Payroll** | Hours grouped by office and position, plus a per-employee tab | Pre-payroll review and CSV export to your payroll provider |
| **Mileage Summary** | Per-employee total miles and calculated reimbursement | Pre-reimbursement review |
| **Mileage Detail** | Per-claim breakdown for a single employee, with override audit | Investigating a single employee's mileage |
| **Employee History** | Full time-clock history for a single employee in a date range | Detailed audit on one person's hours |

All reports live under **Admin → Reports**.

## Common controls

Each report has:

- **Date range** — Defaults vary per report but you can always pick a custom range. Reports default to the current pay period for time-worked reports and to the last 30 days for mileage.
- **Office filter** — Filter to one office or include all.
- **Sort** — Click column headers to sort. Most reports support sort by name, hours, or amount.
- **CSV export** — A button on every report. The CSV opens cleanly in Excel and Google Sheets and is column-mapped for direct import into common payroll providers.

If your firm has multiple offices and you only have access to specific ones, the office filter is pre-restricted to your scope.

## Time Worked report

Lists each employee with:

- Total hours for the period
- Number of days worked
- Average hours per day

Useful for quick sanity checks — who's been over- or under-staffed during a busy stretch.

## Overtime report

Per-employee weekly hours with color coding:

- **Green** — Below the warning threshold
- **Yellow** — Between warning and critical thresholds
- **Red** — At or above the critical threshold

The thresholds are set firm-wide under **[Tenant settings](../admin/tenant-settings)**. They're soft warnings — WebCenter doesn't prevent clock-ins past the threshold.

The defaults are typically 30 hours/week (warning) and 40 hours/week (critical), but every firm sets their own.

> **Note on multi-firm employees:** This report calculates overtime within your firm only. Hours an employee works at another firm aren't combined here. Under the FLSA, overtime is calculated per-employer for unrelated SMBs — and WebCenter never crosses the firm boundary in any report or export.

## Payroll report

Two tabs:

1. **By Office / Position** — Total hours grouped by office and position, with employee counts. Useful for high-level cost analysis.
2. **By Employee** — Each employee with their office, position, total hours, and number of days worked. Useful for the actual payroll run.

The CSV export covers both views, with formatting compatible with Gusto, QuickBooks, ADP, and similar.

## Mileage Summary

Per-employee totals for a date range:

- Total miles claimed
- Total effective miles (after any manager overrides)
- Reimbursement rate (from your firm's settings)
- Calculated reimbursement amount

CSV export drops directly into expense-reimbursement workflows.

## Mileage Detail (per employee)

Drills into one employee's mileage:

- Date
- Description (the trip note the employee entered)
- Original miles claimed
- Effective miles (after overrides)
- Override reason, if applicable

Useful when you need the audit trail — for example, when an employee asks why their reimbursement looks different from their claim.

## Employee History (per employee)

Full time-clock detail for one employee:

- Date and day of week
- Office
- Position
- Clock-in time (rounded and actual)
- Clock-out time (rounded and actual)
- Hours worked
- Override indicator and reason if applicable

Use this when verifying a single person's hours before payroll, or when investigating a specific claim about hours worked.

## CSV format

WebCenter's CSVs are:

- **UTF-8** with a byte-order mark (BOM), so Excel opens them with correct encoding by default
- **Comma-delimited** with double-quoted values where commas appear in the data
- **Header row** at the top, matching what's shown in the on-screen report

If a CSV opens with mangled characters in Excel, open it via **Data → From Text** and explicitly select **UTF-8** as the encoding.

## History retention

Reports are limited by your firm's plan tier:

- **Free** — Last 90 days. Older time clock and mileage data is preserved but hidden from reports until you upgrade.
- **Paid / Trial** — Full history.

If you run a report with a date range that extends past your retention window, the report shows what's accessible and a banner explaining the clamp.

See **[Billing](../admin/billing)** for plan details.

## What about scheduled exports or email delivery?

Not in v1. Reports are run on demand and exported manually. Scheduled exports (weekly CSV by email) are a candidate for the Paid tier but not yet shipped.
