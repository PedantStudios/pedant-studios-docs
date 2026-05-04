---
sidebar_position: 8
title: Schedule editor
---

# Schedule editor

The schedule editor is where managers plan and publish shifts. It's a week-grid view at **Admin → Schedule**.

This is for roles with the **schedule view**, **schedule edit**, or **schedule publish** capabilities. The exact permissions you have determine what you can do — view-only, edit (drafts), or publish.

For the employee-side view of schedules, see **[Scheduling](../features/scheduling)**.

## The week grid

The editor shows one week at a time:

- Days across the top (Sunday through Saturday in most US firms)
- Employees down the left
- Each cell is a single employee × day

Cells contain shifts. An empty cell has no shift; a filled cell shows the start and end times.

Shifts have a status:

- **Draft** — Created but not yet visible to the employee.
- **Published** — Visible on the employee's My Schedule page.
- **Cancelled** — Marked cancelled but kept in the record.

## Navigating the grid

- **Previous / Next week** buttons at the top, or use **PageUp / PageDown** keyboard shortcuts.
- **Arrow keys** move focus between cells in the grid.
- **Home / End** jump to the first or last day of the week.
- The roving tabindex pattern means keyboard navigation moves around the grid efficiently without tabbing through every cell.

## Creating a shift

Click an empty cell (or focus it and press Enter):

1. **Employee** is pre-filled to the row's employee.
2. **Date** is pre-filled to the column's day.
3. **Office** — Pick the office for this shift.
4. **Position** — Optional; pick if the firm uses positions per shift.
5. **Start time** and **End time** — Enter using the time picker.
6. **Notes** — Optional; free text. Useful for special instructions ("training day", "client meeting at 2pm").
7. Save.

The new shift appears as a Draft (not yet visible to the employee).

## Editing a shift

Click an existing cell:

- **Edit** opens the same form to change details.
- **Delete** removes the shift entirely.
- **Cancel** marks the shift cancelled but keeps it in the record (useful when you want to communicate "this was canceled, not just deleted").

Save changes. If the shift is Published, employees see the updated version on their next page load.

## Publishing shifts

Drafts aren't visible to employees. To make them visible:

- **Publish a single shift** — Edit the shift, change its status to Published, save.
- **Publish the whole week** — Click **Publish Week** at the top of the editor. All draft shifts in the visible week become Published in one action.

Publishing requires the **schedule publish** capability. If your role only has **schedule edit**, you can create and modify drafts but someone else has to publish.

This separation lets organizations have a "scheduling assistant" role that drafts schedules and a "manager" role that approves and publishes.

## Copy week template

To reuse a week's schedule for another week — common when a typical schedule recurs:

1. Click **Copy Week**.
2. Pick the **source week** (usually a "template" week you've designed).
3. Pick the **target week** (where the shifts will be created).
4. Confirm.

All shifts from the source week are copied to the target week, **as drafts** (regardless of whether they were published in the source). You'll need to publish the target week separately when you're ready.

The original source week is unaffected — it remains exactly as it was.

## Conflicts and warnings

The editor doesn't aggressively enforce conflicts (different roles in the same firm need different rules). Some checks the editor performs:

- **Same-firm overlaps** — If you schedule the same employee for two overlapping shifts at the same firm, you'll see a warning. You can save anyway — the warning is informational.

The editor does **not** show cross-firm conflicts. Those appear only on the employee's own My Schedule page (since cross-firm employment is private to the employee — see **[Working at multiple firms](../getting-started/multi-employer)**).

## Office / employee filters

If your firm has many employees, the editor lets you filter the rows shown:

- **Office filter** — Show only employees assigned to a specific office.
- **Search** — Filter by name.

Filters are local to the editor view; they don't change which employees can be scheduled.

## Notes

The notes field on a shift is the right place for short instructions ("special pickup at 10am", "training shift"). Notes are visible to the employee on their schedule page.

Notes are free text — they don't have rich formatting and aren't searchable across shifts. For larger announcements, use **[Messaging](../features/messaging)** or the **[Message of the Day](./motd)**.

## What the editor doesn't do (yet)

WebCenter scheduling in v1 is intentionally minimal:

- No shift swap requests between employees
- No time-off / availability tracking
- No auto-assignment based on availability
- No cost or hours-budget calculations per week
- No notifications to employees when their schedule changes (they need to check the page)

These are post-v1 candidates depending on real-user feedback.

## Common scenarios

**Build next week's schedule from scratch.** Open the editor, navigate to next week, click empty cells to create shifts. When done, click Publish Week.

**Reuse this week's schedule for next week.** Copy Week → source: this week, target: next week. Then adjust any individual differences. Publish.

**Cancel a shift after publishing.** Edit the shift, change status to Cancelled, save. Employee sees the cancellation on their schedule.

**One employee always works 9–5 Mon-Fri.** Build a "template week" once, copy it forward as needed. (A native recurring-shifts feature is a v1.1+ candidate.)

**Schedule an employee at multiple offices in the same week.** Create separate shifts at each office. Each shift records its office independently.
