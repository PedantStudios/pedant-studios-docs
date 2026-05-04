---
sidebar_position: 1
title: Overview
---

# WebCenter

WebCenter is a time clock and workforce management application built for tax preparation and bookkeeping firms — the kind of firm whose headcount swings 3× during tax season and shrinks afterward. It handles the day-to-day workforce mechanics so a small back office doesn't have to: time tracking, scheduling, mileage, employee management, internal messaging, and the reports your payroll provider needs.

## Who it's for

- Independent tax preparation offices (CTEC- and PTIN-based practices)
- Tax-prep franchise locations (Liberty Tax, Jackson Hewitt, and similar)
- Enrolled Agent practices and tax resolution firms
- Small CPA firms doing tax (1–5 CPAs plus support staff)
- Bookkeeping firms — same product fit, often combined with tax practices under one roof

If your team grows during tax season and shrinks afterward, and you'd rather not pay for software designed around continuous employment, WebCenter is built for that pattern.

## What WebCenter does

- **Time clock** — Web-based clock-in / clock-out with optional rounding, manager verification, and override workflows.
- **Mileage tracking** — Self-service claims with admin override and per-mile reimbursement reports.
- **Scheduling** — Week-grid editor for managers, "My Schedule" for employees, and copy-week templates for repeat schedules.
- **Messaging** — Internal announcements to individuals, offices, or custom groups, plus a Message of the Day shown at login.
- **Reports** — Time worked, overtime, payroll-ready, mileage, and per-employee history. Every report exports to CSV.
- **Roles & permissions** — Configurable per-tenant roles with per-employee grant/revoke overrides.
- **Multi-location** — Multi-office support with per-office time zones, rounding rules, and position lists.
- **Multi-employer for employees** — One employee account can be linked to multiple firms. Each firm only sees their own data; the other firms are never visible.

## What WebCenter does **not** do

A few capabilities are explicit non-goals so expectations are set up front:

- **No native payroll integrations.** WebCenter exports CSV, pre-formatted for Gusto, QuickBooks, ADP, and similar. Payroll APIs change too often for a small team to maintain reliably; CSV is durable.
- **No cross-employer overtime calculation.** Under the FLSA, overtime is per-employer, not per-employee. Reports calculate OT within a single firm only.
- **No native mobile app yet.** The web app works on phones and tablets today. A wrapped mobile app is planned for v1.1.
- **No tablet shared-PIN mode.** WebCenter requires per-user accounts. This is a deliberate fit choice — it works well for offices where employees have email and personal devices, and less well for high-turnover workforces.

## Pricing in brief

WebCenter has two tiers:

- **Free** — Unlimited employees, 1 location, 1 admin, 90 days of history. CSV export and the core feature set are included.
- **Paid** — Unlimited locations and admins, full history, scheduling and time-off features, audit logs, and priority support. Pricing is per active location, with a graduated discount once you have 3+ locations. Current pricing is shown in-app on the **Settings → Billing** page.

A 14-day trial with paid features is available — no credit card required to start.

## Sections in these docs

- **[Getting Started](./getting-started/sign-up)** — Signing up, email confirmation, accepting invitations, password recovery, your first clock-in, and what to expect if you work for more than one firm on WebCenter.
- **[Features](./features/dashboard)** — Day-to-day usage: dashboard, time clock, mileage, scheduling, messaging, reports.
- **[Admin](./admin/employees)** — Configuration and management: employees, offices, positions, roles, pay periods, verification, override, schedule editor, MOTD, tenant settings, billing.
- **[Troubleshooting](./troubleshooting/common-issues)** — Common questions and how to resolve them.

## Status

WebCenter is currently in **beta**. The product is functional and used in production. The user-facing brand and final pricing are still being finalized — expect documentation to evolve as the product approaches general availability.
