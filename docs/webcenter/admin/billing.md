---
sidebar_position: 11
title: Billing
---

# Billing

The Billing page is at **Admin → Billing**. It's where you see your current plan, start a trial, upgrade to Paid, or manage your subscription. Restricted to administrators.

## Plan tiers

WebCenter has two plans, with a 14-day trial available on the Paid plan:

| Plan | Active locations | Admins | History | Support |
|---|---|---|---|---|
| **Free** | 1 | 1 | 90 days | Best-effort |
| **Trial** | Unlimited | Unlimited | Full | Standard |
| **Paid** | Unlimited | Unlimited | Full | Priority |

Trial is identical to Paid in terms of features — it's just time-limited (14 days from start) and doesn't require payment information.

## Plan status

The Billing page header shows your current plan with a status badge:

- **Free** — Default plan. Caps apply.
- **Trialing** — In a 14-day trial. Trial-end countdown is shown.
- **Paid** — Active subscription. Next renewal date is shown.
- **Past Due** — Payment failed. Tenant has a 7-day grace period before write actions are blocked. Banner shown across the app.
- **Canceled** — Subscription was canceled. Tenant reverts to Free behavior.

## Free plan

The default for newly-created tenants. The Billing page shows:

- Active location count vs. cap (1 of 1, or 1 of 1 with the cap reached)
- Active admin count vs. cap (1 of 1)
- History retention: 90 days
- A **Start Trial** button (if trial hasn't been used)
- An **Upgrade** button to go directly to Paid

If you try to add a second office or a second admin while on Free, you'll see a 402 Payment Required error with a prompt to upgrade or start a trial.

## Starting the trial

The trial gives you Paid features for 14 days, no credit card required.

1. Click **Start Trial**.
2. Confirm the dialog (which mentions the 14-day duration and what happens when it ends).
3. The plan switches to Trialing immediately.

During the trial, all Paid-tier limits are unlocked:

- Add multiple offices
- Add multiple admins
- Run reports across full history (not just last 90 days)

The trial can only be started **once per tenant**. If your firm has already used its trial, the button is hidden. Contact support if you have a legitimate need to extend.

## Trial expiration

About 3 days before the trial expires, WebCenter sends a reminder email to the tenant admin. (This is implemented as a notification — exact wording is in the email itself.)

At expiration, if no Paid subscription is in place:

- The plan reverts to **Free**.
- Free caps reapply: 1 active office, 1 admin, 90 days history.
- Offices beyond the cap are automatically deactivated.
- Admins beyond the cap retain the role but lose admin capabilities until you upgrade.
- History older than 90 days is hidden in reports (data isn't deleted; just clamped).

Upgrade to Paid before expiration to avoid the cap reapplication.

## Upgrading to Paid

1. Click **Upgrade** on the Billing page.
2. WebCenter redirects you to **Stripe Checkout** (Stripe's hosted payment page).
3. Enter your billing details and payment method.
4. Confirm.
5. Stripe redirects back to WebCenter. The Billing page polls and updates to show **Paid** status within a few seconds.

The Paid plan is **per active location**, with a graduated volume discount applied automatically once you hit 3+ locations. The exact pricing is shown in the Stripe Checkout page.

You can upgrade from Free or from Trial. Upgrading from Trial cancels the trial countdown immediately and starts the paid subscription.

## Managing your subscription

Once on Paid, the Billing page shows a **Manage Subscription** button.

Clicking it opens the **Stripe Customer Portal** in a new tab. From the portal you can:

- View invoices and payment history
- Update your payment method
- Update billing address
- Cancel the subscription

Stripe sends an email receipt for every charge. Invoices are downloadable from the portal.

## Past Due

If a recurring payment fails (typically expired card), Stripe sends a notification and your tenant enters **Past Due** status:

- A red banner appears at the top of the app.
- You have a **grace period** (7 days by default) to update payment.
- During the grace period, all features still work normally.
- After the grace period, write actions (clocking in, claiming mileage, sending messages, editing settings) are blocked. Read actions still work.

To resolve: click **Update Payment** on the Billing page, which opens the Stripe Customer Portal. Update your card. Stripe retries the failed payment automatically.

## Canceling

To cancel, use the Manage Subscription button to open the Stripe portal, then choose Cancel. Cancellation takes effect at the end of the current billing period — you keep Paid features until then.

After cancellation, your tenant reverts to Free behavior at the next billing cycle. All your data is preserved; you can restart Paid at any time without losing history.

## Plan caps in detail

The caps are enforced when you try to add or reactivate something past the limit. The exact rules:

| Operation | Free cap | Trial / Paid |
|---|---|---|
| Add office | Fails if 1 active office already exists | Unlimited |
| Reactivate office | Fails if you'd exceed the cap | Unlimited |
| Add admin | Fails if 1 active admin already exists | Unlimited |
| Promote employee to admin role | Fails if you'd exceed the cap | Unlimited |
| Run report past 90 days | History clamped, banner shown | Full history |

When a cap-blocked action is attempted, the error message includes a link to the Billing page so the user can upgrade or start a trial.

## History retention

The 90-day cap on Free affects:

- The Time Worked, Overtime, Payroll, Mileage Summary, and Employee History reports
- Date pickers' minimum selectable date
- The pay period list

Data isn't deleted at 90 days — it's just hidden from queries on the Free plan. Upgrading to Paid restores access to the full history immediately.

## What's not in the Billing page

WebCenter doesn't yet expose:

- Per-feature add-ons (everything's bundled in Paid)
- Multiple billing contacts / split billing
- Usage analytics (e.g., per-office cost breakdown)

If any of these matter, contact support — these are tracked as feature requests.

## Common scenarios

**End of tax season — closing offices.** Deactivate offices you no longer need (Offices admin). Stripe automatically reduces the next charge. No need to cancel and re-subscribe.

**Card expired.** Stripe sends an email; tenant enters Past Due. Update the card via Manage Subscription within 7 days. No data loss.

**Want to start a trial after canceling.** Trial is one-per-tenant. Once used, it's used. Contact support if you have a legitimate case.

**Multi-firm employees and billing.** Each firm has its own subscription. An employee linked across firms doesn't affect any individual firm's billing.

**Forgot to upgrade before trial expired.** Click Upgrade on the Billing page. There's no penalty for letting the trial revert; the Paid plan starts fresh from your upgrade time. Offices that were auto-deactivated at trial-end can be reactivated immediately after upgrade.
