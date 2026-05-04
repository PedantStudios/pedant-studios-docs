---
sidebar_position: 6
title: Invite your team
description: Send email invitations to bring your staff into WebCenter. Covers single and bulk invites, role assignment, and pending-invitation management.
---

# Invite your team

Once your firm is set up, the next step is getting your staff on board. WebCenter uses email invitations — admins send an invite, the employee accepts via the link, and they choose their own password.

This page covers the early-days "invite your first batch" workflow. For ongoing employee management — editing, deactivating, bulk operations — see **[Employees](../admin/employees)**.

## Sending an invitation

1. Go to **Admin → Employees**, then click **Invite by Email**.
2. Fill in:
   - **Email address** — Or multiple, comma-separated, to invite several people at once.
   - **Role** — The role they'll start with. You can change this later or use per-employee permission overrides if one person needs something custom.
   - **First name** *(optional)* — If provided, the invite email greets them by name.
   - **Office** *(optional)* — Pre-assigns them to an office. They can be reassigned later.
   - **Position** *(optional)* — Pre-assigns a job title.
3. Send. WebCenter emails each invitee a unique acceptance link.

## What the invitee sees

The recipient gets an email pointing to the **[Accept invitation](./accept-invitation)** page. They:

- See your firm's name and the role you assigned
- Choose to create a new account or link an existing WebCenter account at another firm
- Set their password
- Land on their dashboard, signed in

## Tracking invitations

Pending invites show up under **Admin → Employees → Invitations**. For each one you can:

- See the email, role, sent date, and expiration date
- **Resend** if the original got lost
- **Revoke** if the person is no longer expected
- See status — Pending, Accepted, Expired, or Revoked

Invitations expire after 7 days. Expired invitations stay on the list for record-keeping; resending generates a fresh link.

## Roles in brief

Most firms start with three or four roles. The simplified view:

| Role | What they can do |
|---|---|
| Employee | Clock in and out, view own time clock and mileage, send messages (if enabled) |
| Supervisor | Everything Employee can, plus verify time clock entries and run office reports |
| Manager | Everything Supervisor can, plus override (correct) time entries, run all reports |
| Administrator | Full firm access — manage employees, offices, roles, settings, and billing |

You can also create **custom roles** with any combination of capabilities, and apply per-employee overrides for individual exceptions. See **[Roles & permissions](../admin/roles)** for the full model.

## Bulk invitations

For larger imports, send multiple emails on the same invitation form (comma-separated). Each one becomes a separate invitation in the Invitations list.

If you need to import dozens or hundreds of employees with varying offices, positions, and roles at once, contact support — there's no bulk-import UI in v1, but it's a candidate feature based on demand.

## Already-existing accounts

If you invite someone who already has a WebCenter account at another firm with the same email, the acceptance flow gives them the choice to **link** their existing account (one set of credentials, switch between firms in the app) or **create a new** account (separate identity).

This is opt-in by design — employees may want to keep side-gigs private from day jobs. WebCenter never auto-links accounts.

See **[Working at multiple firms](./multi-employer)** for the employee's perspective.

## Next

- **[First clock-in](./first-clock-in)** — Try the time clock yourself.
- **[Employees](../admin/employees)** — Ongoing employee management (CRUD, restrictions, bulk operations).
- **[Roles & permissions](../admin/roles)** — Customize what each role can do.
