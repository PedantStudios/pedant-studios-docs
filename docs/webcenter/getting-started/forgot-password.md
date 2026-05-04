---
sidebar_position: 4
title: Forgot password
---

# Forgot password

If you can't sign in, the password reset flow gets you back in without involving your firm's admin.

## Reset your password

1. On the login page, click **Forgot password?**.
2. Enter the email address associated with your account.
3. Submit. WebCenter shows a generic "if an account exists, we've sent a link" message regardless of whether the email matches a real account — this is on purpose, so attackers can't enumerate which addresses are signed up.
4. Check your email for a message with subject **"Reset your WebCenter password"**.
5. Click the link in the email.
6. Enter and confirm your new password (minimum 12 characters).
7. Sign in with the new password.

## If the email doesn't arrive

- Wait a couple of minutes — email is occasionally slow.
- Check spam, junk, and promotions folders.
- Verify you typed the right email address. If you used a typo, the reset email goes to a typo address that doesn't exist; just try again with the correct address.
- If you remember an old email but no longer have access to it, ask your firm's admin to update your email under **Admin → Employees → [your name] → Edit**, then run the forgot-password flow again.

## If the reset link doesn't work

- **"Token expired"** — Reset links are time-limited. Run the forgot-password flow again to get a fresh one.
- **"Token already used"** — You (or someone) already used this link. Run forgot-password again to issue a new one.

## If you don't know your username

The reset email is sent to your account email and the reset page lets you set a new password without knowing your username. After resetting, you can sign in with either your username or the email — both work.

If you've truly forgotten the username, ask any admin at your firm to look it up from **Admin → Employees**.

## Linked accounts

If your account is linked across multiple firms (see **[Working at multiple firms](./multi-employer)**), resetting your password resets it everywhere — you only have one password regardless of how many firms you work for.

## Suspended account?

If your firm's admin has deactivated your account, the reset flow will still appear to work (we don't reveal the deactivation), but you won't be able to sign in afterward. If you suspect this, contact your admin directly.
