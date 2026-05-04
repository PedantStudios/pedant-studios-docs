---
sidebar_position: 1
title: Common issues
description: Common WebCenter questions and how to resolve them — sign-in problems, time clock fixes, reports, multi-firm accounts, and billing.
---

# Common issues

A living list of common questions. If your situation isn't here, contact support from inside the app.

## Sign-in problems

### I forgot my password

Use the **[Forgot password](../getting-started/forgot-password)** flow. The reset link arrives within a couple of minutes. Check spam if you don't see it.

### I forgot my username

Ask any admin at your firm to look it up under **Admin → Employees**. If you don't have an admin to ask, run the **[Forgot password](../getting-started/forgot-password)** flow with your email — once you can sign in, your username is visible in your account details.

### "Invalid credentials" but I'm sure my password is right

A few possibilities:

- **Caps Lock** is on (passwords are case-sensitive).
- You're trying the **wrong username** — usernames are stable; if you remember an old one, try recent ones.
- Your account is **deactivated**. The error message is the same as a wrong password (intentionally — it doesn't reveal whether the account exists). Contact your admin if you suspect this.
- The **password reset** you ran earlier didn't actually complete. Run forgot-password again.

### I never received my confirmation email

After sign-up, the confirmation email should arrive in 1–2 minutes:

- Check spam, junk, and promotions folders.
- Search for "WebCenter" or the sender's email.
- Verify the email address you typed on the sign-up form. If wrong, sign up again with the correct address.
- Not arriving at all? Try a different email address (some corporate spam filters block transactional email).

### I never received my invitation email

Same checks as above. If still missing, ask the inviting admin to **resend** from **Admin → Employees → Invitations**.

### My confirmation/invitation/reset link says "expired" or "already used"

Links are time-limited and single-use:

- **Sign-up confirmation** — Sign up again to get a fresh link.
- **Invitation** — Ask the admin to resend.
- **Password reset** — Run forgot-password again.

## Time clock problems

### I clocked in at the wrong time

Ask a manager or admin to fix it via **[Override](../admin/override)**. They can adjust the time and add a note. Audit trail preserved; nothing hidden.

### I forgot to clock out

Same fix — a manager runs an Override (specifically, a **Force Clock Out** for shifts still pending) at the correct end time.

### I tried to clock in but it says I'm already clocked in

You probably are — likely from earlier today at a different office or position. Click Clock Out, then Clock In again with the right office and position. If the dashboard says you're clocked in but you don't remember it, ask a manager to investigate.

### I tried to clock out but it says "verification required"

Your firm has the verification setting on, and a manager hasn't yet verified your clock-in. They'll need to do so on the **[Verification](../admin/verification)** page before you can clock out.

### My displayed time doesn't match when I actually clocked

That's clock rounding. Hover any time value to see both the actual time and the rounded value. The actual time is preserved; rounding only affects the displayed and reportable values. Talk to your admin if rounding is unexpected — it's a per-firm setting.

## Mileage problems

### I can't see the mileage card on my dashboard

Three possibilities:

- Your firm has the **mileage feature disabled** firm-wide. Talk to your admin.
- Your account has the **disallow mileage restriction** set. An admin can remove it.
- The **pay period is locked**. Mileage can't be claimed in locked periods.

### I claimed mileage but it doesn't show on my history

Refresh the page. If it's still missing, double-check the date you entered — if the date falls in a locked period, the claim wouldn't have saved.

### My mileage was changed

A manager corrected it via Override. The original value is preserved alongside the corrected value (with the override reason on hover). If the change looks wrong, talk to the manager who made it.

## Reports and pay periods

### My report is missing an employee

Check:

- The employee is **active** (not deactivated).
- The employee is **assigned to the office** you're filtering by, if you're filtering.
- The employee actually has time clock entries in the date range.
- The date range is within your plan's history retention window (90 days on Free, full history on Paid/Trial).

### CSV export looks weird in Excel

WebCenter's CSVs are UTF-8 with a byte-order mark, which Excel handles correctly by default. If you're seeing corrupted characters:

- Open Excel first, then **Data → From Text** and explicitly select **UTF-8**.
- Try opening in Google Sheets or another tool that handles UTF-8 BOM more reliably.

### A pay period I expected is missing from the report

The Free plan limits report data to the **last 90 days**. Older data is hidden but not deleted. Upgrade to Paid (or start the 14-day trial) to access full history.

### "Locked" pay periods are read-only — what if I need to fix one?

An admin can **unlock** a locked period (with a reason that goes to the audit log), make corrections via Override, then re-lock. See **[Pay periods](../admin/pay-periods)**.

## Multi-firm accounts

### I work at multiple firms — how do I switch?

Use the firm picker in the top navigation. Each switch reloads the dashboard for that firm. Your previously-active firm doesn't see anything about the switch.

### Can my firm see that I work elsewhere on WebCenter?

No. The firm-boundary is enforced at the database layer. Firms see only their own data — they don't see your accounts at other firms, your hours, or anything else. The only place WebCenter surfaces cross-firm data is your **own** schedule view, where overlapping shifts at different firms are flagged for you to resolve.

See **[Working at multiple firms](../getting-started/multi-employer)** for the full privacy model.

### I have two accounts at WebCenter that I'd like to merge

Linking happens at sign-up confirmation or invitation acceptance. Once accounts are separate, the UI doesn't merge them. Contact support — manual merging is possible but requires help.

## Billing

### I added an office and got a "402 Payment Required" error

You're on the Free plan, which is limited to 1 office. Either start the 14-day trial or upgrade to Paid. See **[Billing](../admin/billing)**.

### My subscription says "Past Due"

A recent payment failed. Click **Update Payment** on the Billing page to open the Stripe portal and update your card. You have a 7-day grace period before write actions are blocked.

### I want to cancel

Click **Manage Subscription** on the Billing page. The Stripe portal lets you cancel. You keep Paid features until the end of the current billing period.

## App behavior

### The dashboard shows old data after a manager corrected my time

Refresh the page. The dashboard fetches fresh data each load.

### A feature I expected is hidden

Most features are gated by either:

- **Plan tier** — Some features (multi-office, custom roles, full history) require Paid or Trial.
- **Role permission** — Your role may not include a specific capability.
- **Feature toggle** — Some features (mileage, messaging, comp time) can be disabled firm-wide by an admin.

Talk to your admin to confirm which it is.

### The session signed me out

The session idle timeout (default 10 minutes) automatically signs you out after inactivity. Sign back in. Your admin can adjust the timeout under **[Tenant settings](../admin/tenant-settings)** if it's too aggressive for your environment.

## Still stuck?

Click **Support** in the navigation to open the in-app contact form, and include:

- What you were trying to do
- What happened instead
- The approximate time it happened (helps us find logs)
- Browser and device, if relevant

Pedant Studios is a small team, but support requests are typically answered within one business day.
