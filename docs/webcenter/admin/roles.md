---
sidebar_position: 4
title: Roles & permissions
description: Define roles and customize permissions in WebCenter. Covers default roles, custom roles, and per-employee grants and revokes.
---

# Roles & permissions

Roles are how WebCenter groups capabilities for employees. Each employee has one role; the role determines a default set of capabilities. Per-employee overrides let you customize for individuals when needed.

Roles are managed at **Admin → Roles**. This is a superuser-only screen.

## Three layers, one effective set

WebCenter combines three layers to compute what each employee can do:

1. **Role** — Each employee has one role with a set of default capabilities.
2. **Per-employee grants** — Specific capabilities added on top of the role's defaults.
3. **Per-employee revokes** — Specific capabilities removed from the role's defaults.

In English: "Effective = role's defaults, plus any grants, minus any revokes."

Per-employee grants and revokes are managed on the **[Employees](./employees)** edit screen, not here. Use them for individuals; use roles for groups.

## Default roles

Most firms work with these built-in roles. Capabilities are simplified here — for the precise list, see the role edit form.

| Role | What they can do |
|---|---|
| **Employee** | Sign in, clock in and out, claim mileage (if enabled), view own time clock and pay-period summary, send individual messages (if allowed) |
| **Supervisor** | Everything Employee can, plus run reports for their office, verify time clock entries |
| **Manager** | Everything Supervisor can, plus override (correct) time clock and mileage entries, run reports across all offices, send messages to offices and groups |
| **Administrator** | Full firm access — everything Manager can, plus manage employees, offices, positions, roles, MOTD, tenant settings, and billing |

The Administrator role has all capabilities (it's the firm's superuser). It can't be edited or deleted.

## Custom roles

You can create custom roles with any combination of capabilities. Useful when:

- The defaults don't quite fit (e.g., "Office Manager" who can manage employees but not billing)
- You want a "Trainee" role with extra restrictions
- Different teams need different access (e.g., bookkeeping team vs. tax-prep team)

To create a custom role: **Admin → Roles → Add Role**, enter a name, check the capability boxes, save.

## Capability categories

When creating or editing a role, capabilities are grouped into categories:

- **Time clock** — Access the time clock, run time-clock reports, verify entries, override (correct) entries.
- **Mileage** — (Mileage availability is also gated by the firm-wide feature toggle and per-employee restriction.)
- **Scheduling** — View the schedule, edit shifts, publish shifts.
- **Employees** — Add, edit, remove employees; set per-employee permission grants and revokes; assign roles.
- **Messaging** — Send to individuals, send to offices, send to groups (everyone with a specific role), set the Message of the Day.
- **Settings** — Edit tenant-wide settings (timezone, rounding, etc.).

Each category has a few specific capabilities. The role edit form lists them with descriptions; check the boxes you want this role to have.

## Restrictions

A few capabilities are inverted — turning them on **restricts** rather than enables:

- **Require time-clock verification** — Employees in this role must have each clock-in or clock-out verified by a manager before proceeding. (Also settable per-employee.)
- **Disallow mileage** — Employees in this role can't claim mileage, regardless of the firm-wide mileage setting.

Restrictions and grants combine the same way — the effective set is the resolution of role + grants + revokes.

## Editing a role

Click **Edit** on any role row.

You can change:

- The role name
- Any of the capability checkboxes
- The restrictions

Save. Changes apply immediately to all employees with this role.

You can't edit the Administrator role — it always has full access by design.

## Deleting a role

Click **Delete**. WebCenter checks whether the role is in use:

- If any employee has this role, deletion fails with a count: "This role is assigned to N employees and M pending invitations. Reassign them first."
- If the role is unused, it's deleted.

You can't delete the Administrator role.

## Per-employee overrides (the cliff notes)

Want to give one employee an extra capability without creating a new role? Or take one capability away from someone in a standard role?

Use the **Permissions** section on the employee's edit screen (**Admin → Employees → [name] → Edit**). Toggle the specific capability — "Grant" to add, "Revoke" to remove.

If you find yourself doing this for many employees with the same delta, that's a signal to make a custom role instead.

## A worked example

You're a small CPA firm with three layers of staff:

- **Tax preparers** — clock in, clock out, log mileage. Default Employee role works.
- **Senior preparers** — same as above, plus they review junior staff hours and run reports for their team. Custom role: "Senior Preparer" — copy of Employee plus Time Clock Reports.
- **Office manager** — runs the firm operationally but doesn't touch billing. Custom role: "Office Manager" — everything Manager has, minus Billing.

Three roles, no per-employee overrides needed. Adding a new tax preparer is a single role assignment.

## Permission audit

To audit who has what:

1. Go to **Admin → Employees**.
2. The list shows each employee's role.
3. Click into individuals to see their per-employee grants and revokes.

There's no firm-wide "who has access to X" report in v1. If you need that, it's a feature request.
