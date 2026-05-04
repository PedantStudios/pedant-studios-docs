---
sidebar_position: 3
title: Positions
---

# Position management

A "position" is a job title — Tax Preparer, Bookkeeper, Front Desk, Manager, and so on. Positions show up in employee records, on time clock entries, and in payroll reports grouped by position.

Positions live at **Admin → Positions**. This is a superuser-only screen.

## What positions are for

Three things:

1. **Categorization for payroll reports.** The Payroll report has a "By Office / Position" tab that aggregates hours by position. Useful for analyzing staffing costs by role.
2. **Per-clock-in flexibility.** Employees can change their position for a single clock-in via the dashboard's clock card — useful when one person fills multiple roles.
3. **Audit trail.** Time clock entries record the position the employee was clocked in under, even if their default changes later.

If your firm doesn't differentiate roles for reporting purposes, a single position like "Staff" works fine.

## Position list

Shows every position — active and inactive — with:

- Name
- Status (Active / Inactive)
- Employee count (employees whose default position is this one)
- Action buttons: Edit, Deactivate / Reactivate, Delete

Search by name; filter to show only active or include inactive.

## No plan cap

Unlike offices, positions have no plan-tier cap. You can have as many as you want on any plan.

## Adding a position

1. Click **Add Position**.
2. Enter the position name.
3. Confirm.

The new position appears in the list as Active, and is available in dropdowns when assigning to employees and on the clock card.

## Editing a position

Click **Edit**. Change the name. Save.

Renaming propagates — all employee records, time clock entries, and reports update to show the new name.

## Deactivating a position

Deactivating a position:

- Removes it from new-assignment dropdowns
- Removes it from the clock card position selector
- Preserves historical assignments and time clock entries

You **cannot deactivate** a position if doing so would leave any employee with no active default position. Reassign first.

To deactivate: click **Deactivate** on the row, confirm.

## Reactivating a position

Click **Reactivate**. The position returns to active status and reappears in dropdowns.

## Deleting a position

Deletion is irreversible and fails if any employee has the position as their default or if any time clock entries reference it. Most firms should deactivate instead.

## Per-office position lists

Each office can optionally have its own set of positions. By default, all positions are firm-wide. If you want office-specific positions, configure that on the office's edit screen — see **[Offices](./offices)**.

## Common scenarios

**Renaming "Front Desk" to "Reception".** Edit, change name, save. Historical entries update to the new name.

**Creating a "Trainee" position for new hires.** Add the position. Assign new hires to it. When they're trained, edit them to a different default position. Historical "Trainee" entries are preserved.

**Splitting one role into two (e.g., "Tax Preparer" → "Senior Tax Preparer" + "Junior Tax Preparer").** Add the two new positions. Reassign each employee individually to one of the new ones. Deactivate the old "Tax Preparer" once everyone's moved over. Historical entries continue to reference "Tax Preparer".

**Deleting a position that was created in error.** If no one's assigned and no time clock entries exist, you can delete. Otherwise, deactivate.
