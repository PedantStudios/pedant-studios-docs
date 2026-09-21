# Progress Log — pedant-studios-docs

---

## 2026-09-21 - Session End
**Status**: ended
**Branch**: main

**Accomplishments**:
- Renamed product WebCenter → Pedant Clok (254cf12): `git mv docs/webcenter → docs/clok` (history preserved), all links/labels/frontmatter updated, `/docs/webcenter/:path*` → `/docs/clok/:path*` 308 redirect in vercel.json. Fact corrections: 30-day trial (was 14), volume-tiered pricing ($19/$16/$14, all locations reprice at threshold), paid plan = unlimited locations/admins/history + email support, trial-lapse grandfathering (removed "offices auto-deactivated" claims). Deployed and verified live.
- Set up Dependabot (47a41f0): weekly npm + github-actions, docusaurus/react groups + catch-all; typescript major deferred (ignore + major-upgrade-watch workflow, issue #1); alerts + automated security fixes enabled.
- Merged 20 Dependabot PRs across three waves (groups, then transitive security bumps: js-yaml, svgo, nanoid, brace-expansion, postcss, body-parser, webpack-dev-server chain, babel). Docusaurus + react groups build-verified locally before merging. 0 open PRs.

**WIP**:
- None. Working tree clean, all pushed, docs.pedantstudios.com/docs/clok/overview verified 200, old URLs 308.

**Next Steps**:
- [ ] Weekly: review Monday Dependabot group PRs (Vercel preview = CI check).
- [ ] When Docusaurus supports TS 7: do the typescript major, remove its ignore entry + watch workflow, close issue #1.
- [ ] 4 open alerts need no action now: 2× high `image-size` (no patched version upstream), 2× medium `qs` (fix 6.16.0 exists but a parent pins `~6.14.0`; dev-server-only, never in the deployed static site). Both resolve via future upstream bumps.

**Blockers**:
- None.

**Active Plans**:
- None (no `.claude/plans/` in this repo).

**Quality Status**:
- Last Review: not reviewed (verification: `npm run build` with onBrokenLinks:'throw', Vercel previews, live-prod curl checks)
- Unresolved Critical: None
- Accepted Risks: None

**Notes**:
- Sibling repo `../pedant-studios-web` got the matching rename + Dependabot setup this session (its watch workflow was retired after Astro 7 landed there). Keep the two repos' deploys in sync when cross-linking paths change.
- Never write "WebCenter" in docs source (only remaining match is the redirect source path in vercel.json). Naming: "Pedant Clok" in titles/labels/first mention per page, "Clok" in running prose.
- This handoff commit is local-only (not pushed) to avoid triggering a pointless Vercel deploy; push whenever convenient.
