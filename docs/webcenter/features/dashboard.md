---
sidebar_position: 1
title: Dashboard
description: Tour of the WebCenter dashboard — clock card, pay period summary, mileage card, and Message of the Day.
---

# Dashboard

The dashboard is the page you see right after signing in. It's organized around the things you'll touch most often — clocking in and out, reviewing the current pay period, and (if your firm uses it) logging mileage.

## What's on the dashboard

The exact layout depends on your role and which features your firm has enabled, but the standard sections are:

### Clock card

Front and center. Shows your current state:

- **Clocked Out** — A "Clock In" button.
- **Clocked In** — A "Clock Out" button, plus the time you last clocked in.

The card also lets you change your home office and default position for this clock-in. By default these come from your employee record.

If your firm requires manager verification before clock-out, the card shows a "pending verification" message after a clock-in or clock-out until a manager verifies the entry.

See **[Time clock](./time-clock)** for the full feature.

### Pay Period Summary

A scrollable list of your time clock entries for a pay period. Use the **Previous / Current / Next** buttons to navigate periods.

For each entry the table shows:

- Date and day of week
- Office and position
- Clock-in time (with rounding context if rounding is on, plus an indicator if the time was overridden)
- Clock-out time (same)
- Hours worked
- A "Pending" badge for shifts you haven't clocked out of yet
- A "Locked" indicator for entries in a locked pay period (read-only)

Hovering any time shows the actual clock-in time alongside the rounded value, plus the override reason if the entry was corrected by a manager.

The footer shows total hours for the period.

### Mileage card *(if mileage is enabled)*

A quick form to claim mileage for today (or for any open pay period). Enter the date, miles, and a description, and click submit. The claim shows up immediately in your mileage history.

See **[Mileage](./mileage)** for the full feature.

### Message of the Day *(if your admin has set one)*

A banner-style announcement at the top of the dashboard. Tap or click to dismiss for the rest of your session.

### Quick links

Depending on your role, the navigation provides quick links to:

- **Mileage** (`/mileage`) — Your mileage history, with date filtering
- **Schedule** (`/schedule`) — Your published shifts, including cross-firm conflict warnings if applicable
- **Messages** — Inbox and outbox
- **Admin** menu — All admin pages, if you have admin permissions

## Mobile and tablet

The dashboard is responsive: it adapts to phones and tablets without horizontal scrolling. You can use it from any modern browser. A wrapped mobile app is planned but not yet available.

## What admins see

Admins see the same dashboard but with additional menu items and admin-only pages. The clock card still shows your own state — admin-ness doesn't change how you log your hours.

If you're an admin AND an employee at multiple firms, the dashboard always shows whichever firm is currently active in the firm picker. Switching firms reloads the dashboard.

## Performance and data freshness

The dashboard fetches your clock state and pay period data each time you load it; it doesn't hold stale data across sessions. If something looks wrong after a manager corrects an entry, refresh the page.
