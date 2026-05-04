---
sidebar_position: 5
title: Messaging
---

# Messaging

WebCenter has a built-in messaging feature for internal announcements and one-to-one or one-to-many notes. It's not designed to replace email or chat — it's for firm-internal, persistent communications that should live in WebCenter alongside everyone's accounts.

## Where messaging lives

- **Inbox** — Messages sent to you. Unread messages are bold and counted in the navigation.
- **Outbox** — Messages you've sent.
- **Compose** — Form to send a new message.

All are reachable from the **Messages** menu.

## Composing a message

From **Messages → Compose**:

1. **Subject** — Required.
2. **Recipients** — Required. Pick any combination of:
   - **Individual employees** (search by name)
   - **Entire offices** (if your role allows office-level messaging)
   - **Custom groups** (if your role allows group messaging — groups are firm-defined sets of employees)
3. **Body** — Required. Use the rich text editor to format with bold, italics, lists, and links. Plain text is fine too.
4. **Send**.

The send button stays disabled until subject, recipients, and body are all filled in. If you navigate away with unsaved changes, WebCenter warns you so you don't lose the draft.

Once sent, the message is in your **Outbox** and in each recipient's **Inbox** immediately.

## Permissions

Three messaging-related capabilities can be granted on a role or per-employee basis:

- **Send to individuals** — Pick named employees as recipients.
- **Send to offices** — Pick an entire office as recipients.
- **Send to custom groups** — Pick a custom group as recipients.

Most non-admin employees have only individual-message permission. Office and group messaging is typically reserved for admins and supervisors.

If your role doesn't have a permission, the corresponding recipient option is hidden in compose.

## Inbox

For each received message you can:

- See sender, subject, date, and read/unread status
- Click to read the full body
- **Mark as read** or **mark as unread** (individually or in bulk)
- **Delete** (with confirmation)

Unread messages are bold and counted with a badge in the navigation.

Search by subject or sender to find old messages quickly.

## Outbox

For each sent message:

- See recipients, subject, and date sent
- Click to read the full body
- **Delete** the entry from your outbox (the recipients still see it; deleting from outbox just removes your record)

You can't edit a sent message. If you sent something incorrect, send a follow-up.

## Rich text

The compose editor supports:

- Bold, italics, underline
- Headings
- Bulleted and numbered lists
- Links
- Code formatting (for the rare case where it's useful)

WebCenter sanitizes the HTML on submit — pasting from Word, Google Docs, or web pages is fine; styling that won't render in the inbox is stripped.

## Message of the Day

Separate from one-to-one messaging, WebCenter has a **Message of the Day (MOTD)** feature: an admin-managed banner shown at login and on the dashboard.

- Plain text (no rich formatting)
- One active MOTD at a time
- Visible to everyone in the firm until dismissed

Admins manage the MOTD under **Admin → MOTD**. See **[Message of the Day](../admin/motd)**.

## What messaging does not do

WebCenter messaging is intentionally simple. It does not:

- Notify you outside the app (no email or push notification of new messages in v1)
- Support attachments (text only — for files, use email or a file-sharing tool)
- Support threaded replies (each message is a standalone send)
- Cross firm boundaries — messages stay within the firm

If you need rich threaded discussion or external notifications, use email. WebCenter messaging is for internal, persistent, in-app communication.

## Privacy across firms

If you work at multiple firms, your messages are completely isolated per firm. Messages sent at Firm A are visible only to people at Firm A, and so on. The firm-switch picker is the only thing that crosses the boundary.
