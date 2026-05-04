---
sidebar_position: 7
title: Working at multiple firms
description: How linked WebCenter accounts work across firms — one login, switch between firms, with strict privacy boundaries so firms never see each other.
---

# Working at multiple firms

WebCenter lets one employee account span multiple firms. If you work for more than one firm that uses WebCenter — common during tax season, when many preparers split time between two or more offices — you can use a single login for all of them.

This is opt-in. WebCenter will never link your accounts without your explicit consent. And firms never see that you work at any other firm.

## Why it works this way

Two design constraints, both deliberate:

1. **Employees benefit from one login.** Remembering separate credentials per firm is a tax. So is having to re-enter availability and preferences at every firm.
2. **Firms must not see employee privacy data they don't own.** A firm hires you to do work for them — they're not entitled to know who else employs you. Hours at Firm A and Firm B never combine for any purpose visible to either firm.

The result: employees get a unified experience; firms get a strict tenant boundary.

## When linking happens

Linking is offered in two places:

- **At sign-up confirmation**, if your email already exists in WebCenter from a different firm.
- **When accepting an invitation** to a new firm, if your email already exists.

In both cases, you're shown a choice:

- **Link to my existing account** — One set of credentials. After signing in, you'll pick which firm you want to be in.
- **Create a separate account** — A new account, isolated from any other. Use this if you want to keep firms entirely separate.

You can't link two accounts after the fact through the app — make the choice at acceptance time. If you've already created two separate accounts and want them merged, contact support.

## Switching between firms

If your account is linked across firms, after signing in you'll see a **firm picker** before being dropped onto a dashboard. You can also switch at any time from the firm dropdown in the top navigation bar.

Switching reloads your dashboard, navigation, and permissions to match the firm you've selected. The previously-active firm doesn't see anything about the switch.

## Cross-firm shift conflicts

If you have shifts at two different firms that overlap, WebCenter shows a warning on **your** schedule view (the **My Schedule** page). The warning is **employee-only** — neither firm sees that you have a shift elsewhere.

This is the only place WebCenter surfaces cross-firm data, and it only ever appears in the employee-facing UI.

## What firms cannot see

If you work at Firm A and Firm B:

- Firm A cannot see that you work at Firm B
- Firm A cannot see your hours, schedule, mileage, or messages at Firm B
- Reports run by Firm A include only Firm A data
- Audit logs at Firm A show only Firm A activity
- Firm A's admins do not see Firm B in any export, search, or analytic view

This applies in both directions. The boundary is enforced in the database layer, not just in the UI.

## What you see

When you switch to Firm A, you see only Firm A:

- Your time clock history at Firm A
- Mileage claims at Firm A
- Schedules and shifts at Firm A
- Messages sent and received at Firm A

The exception is the cross-firm conflict warning on your **My Schedule** view, where shifts from other firms appear as gray bars solely so you can see overlap. Firm-specific details aren't shown in those bars.

## Resetting your password

If your accounts are linked, your password is shared across all of them. Resetting it changes it everywhere. See **[Forgot password](./forgot-password)**.

If your accounts are not linked, each one has its own password.

## Common questions

**Q: Can I unlink an account later?**
Not through the UI in v1. Contact support.

**Q: Can my firm tell whether my account is linked elsewhere?**
No. The firm sees only their own employee record for you. Linkage is invisible to them.

**Q: If I'm clocked in at Firm A, can I clock in at Firm B simultaneously?**
WebCenter warns you on the dashboard if you try to clock in at Firm B while clocked in at Firm A — but it doesn't prevent it, since legitimate cases exist (forgot to clock out at one firm). The warning is employee-only.

**Q: What about mileage if I drove between firms?**
Each firm reimburses for mileage you incurred for that firm's work. Log the mileage at the firm whose work it was for. WebCenter doesn't allocate or split mileage across firms.
