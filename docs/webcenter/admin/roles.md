---
sidebar_position: 3
title: Roles & permissions
---

# Roles & permissions

> **Stub.** WebCenter's role-based access control system.

## How it works

WebCenter uses a three-layer permission model:

1. **Role** — Each employee has one role (Employee, Supervisor, Manager, or Administrator). The role carries a default set of permissions.
2. **Per-employee grants** — Specific permissions added on top of the role's defaults.
3. **Per-employee revokes** — Specific permissions removed from the role's defaults.

The effective permission set is: `(rolePermissions | grants) & ~revokes`.

## Default roles

| Role | Hierarchy level | Defaults |
|------|---|---|
| Employee | 1 | Clock in/out, view own time clock, view own mileage |
| Supervisor | 5 | All Employee + verify time, run office reports |
| Manager | 10 | All Supervisor + override clocks, edit employee time, run all reports |
| Administrator | 50 | All Manager + employee admin, office admin, settings, billing |

## Customizing per employee

To grant or revoke a specific permission:

1. Go to **Admin → Employees → [employee] → Permissions**.
2. Toggle individual permissions on or off.

The override is shown explicitly so it's obvious which permissions come from the role and which are custom.

## Custom roles (Paid tier)

The Paid tier supports defining custom roles with your own permission sets. From **Admin → Roles → Add**.
