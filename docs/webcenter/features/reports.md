---
sidebar_position: 4
title: Reports
---

# Reports

> **Stub.** Documents the standard reports and CSV exports.

## Available reports

- **Time Clock Report** — Hours worked per employee for a pay period.
- **Mileage Report** — Mileage entries per employee for a pay period.
- **Pay Period Summary** — Combined view used to verify before payroll export.
- **Audit Log** *(Paid tier)* — Who changed what, when.

## Filters

Each report supports filtering by:

- Date range (preset to current pay period, with manual override)
- Office
- Employee
- Role

## CSV export

Every report exports to CSV. WebCenter ships with format presets for common payroll providers — Gusto, QuickBooks, ADP. Choose your preset from the export dialog and the CSV will be column-mapped and ready to import.

CSVs are UTF-8 with a byte-order mark, so Excel opens them cleanly without encoding mangling.

## Why CSV-only?

WebCenter doesn't have native integrations to payroll providers, and won't. Their APIs change frequently and break, and an indie product can't reliably maintain those connections. A genuinely good CSV export is more durable. See the [philosophy page](../../intro) for context.
