---
sidebar_position: 1
title: Employees
description: Manage employees in WebCenter — invitations, manual creation, role assignment, per-employee permissions, restrictions, and deactivation.
---

# Employee management

The Employees admin screen is where you manage the people in your firm — adding, editing, deactivating, and tuning their permissions. Reachable at **Admin → Employees**.

For the early-days "invite my first batch" workflow, see **[Invite your team](../getting-started/invite-team)**. This page covers the full management surface.

## Tabs

The Employees screen has two tabs:

- **Members** — Active and inactive employees. Default view.
- **Invitations** — Pending, accepted, expired, and revoked invitations.

## Members tab

Lists all employees with: name, username, email, office, position, role, and status (active or inactive).

**Search** by name, username, or email. **Quick actions** on each row: Edit, Deactivate (or Reactivate), and View Details.

## Adding employees

Two paths, depending on whether the person should set up their own account:

### Invite by email (recommended)

The standard onboarding path. The employee receives an email and sets their own password.

1. Click **Invite by Email**.
2. Provide one or more email addresses (comma-separated for bulk).
3. Pick the role.
4. Optionally pre-fill first name, office, and position.
5. Send.

Each invitation is valid for 7 days. The invitee follows the **[Accept an invitation](../getting-started/accept-invitation)** flow.

### Add manually

For placeholder records or imported data where you don't want to send an invitation email:

1. Click **Add Employee**.
2. Fill in the full form: username, password (you'll need to share it securely), name, email, office, position, role, and any per-employee permission overrides or restrictions.
3. Save.

The employee can sign in immediately with the credentials you set. They can change their password from the forgot-password flow if needed.

## Editing an employee

Click **Edit** on any employee row. The form lets you change:

- Name and email
- Office and position assignments
- Role
- Password (no need to know the current password)
- Per-employee permission grants and revokes
- Restrictions
- Feature flags

Click Save when done. WebCenter warns you about unsaved changes if you navigate away.

Note: usernames are immutable after creation — they can't be changed.

## Per-employee permission overrides

You can grant or revoke individual permissions on top of the employee's role. Useful when one person needs a specific capability that doesn't fit the standard role set.

The effective permission formula: `(role's permissions | grants) & ~revokes`. In English: start from what the role gives, add anything in grants, remove anything in revokes.

The employee form shows the role's defaults and the deltas (grants and revokes) explicitly so it's clear what's coming from the role and what's been customized.

If you find yourself granting or revoking the same permission for many employees, that's a signal to define a custom role instead. See **[Roles & permissions](./roles)**.

## Restrictions

Two restrictions can be set per employee:

- **Require verification** — The employee can't clock out (or in, depending on configuration) until a manager verifies the entry. Use this for new hires or employees whose hours need extra scrutiny.
- **Disallow mileage** — The mileage card is hidden from the employee's dashboard and they can't claim mileage. Their existing mileage history (if any) remains.

Both are toggles on the employee form.

## Feature flags

Three feature flags control optional capabilities:

- **Allow comp time** — The employee can accumulate comp time. Sensitive — toggling it shows a confirmation dialog.
- **Allow messaging** — The employee can send messages.
- **Allow group / office messaging** — The employee can send to entire offices or to groups (everyone with a specific role).

These overlap with role permissions in some cases. If both are off, the employee can't use the feature regardless of role.

## Deactivating and reactivating

Deactivating disables sign-in for the employee. Their history (time clock, mileage, messages) is preserved.

- **Deactivate** — From the employee row, click Deactivate. Confirm.
- **Reactivate** — On an inactive employee, click Reactivate.

There is no "delete employee" — history is preserved for legal and audit reasons. If an employee was created in error and has no history, contact support.

End of tax season is a common time to deactivate seasonal staff in bulk.

## Deactivating in bulk

There is no bulk-deactivate UI in v1 — status changes are one row at a time. At end of season, this means clicking through the list to deactivate each seasonal employee. If you have many to do at once, contact support — bulk deactivation is a tracked feature request.

## Invitations tab

Lists every invitation — pending, accepted, expired, or revoked.

For each invitation:

- Email address
- Role assigned
- Sent date and expiration date (or "expired", "accepted", "revoked")
- Action buttons: **Resend** (issues a fresh link), **Revoke** (cancels a pending invite)

Filter by status to focus on what needs attention. Resending an expired invite is the standard fix for "I lost the email" support requests.

Revoked invitations can't be undone — issue a new invitation if needed.

## Plan caps

Some employee operations are gated by your firm's plan:

- **Number of admins** — Free plan limits you to 1 admin (a role with hierarchy level ≥ 99). To add more admins, start a trial or upgrade. Promoting an employee to a higher-tier role that exceeds the cap shows a 402 Payment Required error.

See **[Billing](./billing)** for cap details.

## What about restrictions on what admins can do?

Admins can edit any employee in the firm, including other admins. There is no "junior admin" tier in v1. If you need finer control — e.g., "this person can manage employees but not change roles" — define a custom role with the specific permissions and assign it instead of the full Administrator role.
