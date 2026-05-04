---
sidebar_position: 9
title: Message of the Day
description: Manage WebCenter's Message of the Day — a banner-style announcement shown at login and on the dashboard.
---

# Message of the Day (MOTD)

The Message of the Day is a banner-style announcement shown to everyone in your firm — at login and at the top of the dashboard. Use it for short, firm-wide messages that need broad visibility.

The MOTD is managed at **Admin → MOTD**. This is for roles with the **set MOTD** capability.

## What MOTD is good for

- Short announcements that need to reach everyone ("Office closed Friday for the holiday")
- Reminders during peak season ("Tax-season verification reminders sent each Monday")
- Quick policy notes ("New mileage rate effective Monday")

What it's **not** good for:

- Long messages — keep it short, or use **[Messaging](../features/messaging)** instead.
- Targeted messages — MOTD shows to everyone. For specific recipients, use Messaging.
- Rich formatting — MOTD is plain text only.

## What employees see

When the MOTD is active:

- It appears on the **login page** for users who haven't signed in yet.
- It appears at the **top of the dashboard** for signed-in users.
- Each user can dismiss it for the rest of their session — clicking the dismiss icon hides it until they sign in again.

The MOTD reappears on next login. Dismissing is per-session, not permanent.

## Managing the MOTD

The Admin → MOTD page shows the current message (if any) and lets you:

- **Create a new MOTD** — Enter the text, mark it active.
- **Edit the existing MOTD** — Change the text.
- **Toggle active / inactive** — Disable display without deleting.
- **Delete** — Remove the message entirely.

Only one MOTD can be active at a time. Activating a new message implicitly deactivates the previous one.

## Active vs. Inactive

- **Active** — Shown to all users.
- **Inactive** — Saved in the system but not displayed. Useful for messages you want to bring back later.

Toggling between active and inactive is one click; you don't need to delete and re-create.

## Plain text

The MOTD is plain text — no bold, italics, links, or HTML. This is deliberate: brevity and consistency are the point.

If you need formatting or links, use **[Messaging](../features/messaging)** to send a message with the rich text editor instead.

## Common scenarios

**Office closed for a holiday.** Set MOTD: "Office closed Friday Dec 26. Have a great holiday!" Activate. Disable when the holiday's over.

**New rule going into effect.** Set MOTD: "Mileage rate updated to $0.67/mile effective Monday." Leave active for a week or two, then deactivate.

**Routine "verification reminders go out Monday" notice.** Activate during tax season; deactivate after.

**Don't.** Don't use MOTD for ongoing announcements that should live in messaging history. The MOTD is ephemeral — once dismissed and replaced, the previous one isn't easily retrievable.
