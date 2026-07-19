# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

`cod-connect` is a **pnpm workspace monorepo** (`pnpm-workspace.yaml` → `apps/*`) containing two independent, currently unconnected front-end apps:

- **`apps/react-app`** — React 19 SPA built with **Vite 8**, linted with **Oxlint**, TypeScript ~6.0.
- **`apps/next-app`** — **Next.js 16** (App Router, `src/app/`) with Tailwind CSS v4, linted with **ESLint**, TypeScript 5.

The two apps use different toolchains on purpose; don't assume a change in one applies to the other. Use pnpm (not npm/yarn) — a `pnpm-lock.yaml` is committed.

## Commands

Run from the repo root. Root scripts fan out with `pnpm -r`; per-app scripts use `--filter`.

| Task | All apps | react-app only | next-app only |
|------|----------|----------------|---------------|
| Dev | `pnpm dev` (parallel) | `pnpm dev:react` | `pnpm dev:next` |
| Build | `pnpm build` | `pnpm build:react` | `pnpm build:next` |
| Lint | `pnpm lint` | `pnpm lint:react` | `pnpm lint:next` |
| Test | `pnpm test` (`--if-present`, runs next-app only) | — | `pnpm test:next` |
| Preview / Start | — | `pnpm preview:react` | `pnpm start:next` |

Pass through to an app with `pnpm react <script>` or `pnpm next <script>`. next-app dev/build run on **Turbopack**.

**Testing is wired up in next-app only** — it uses **Vitest** (jsdom environment, `vitest.config.mts`) with **React Testing Library** and `jest-dom` matchers (`vitest.setup.ts`). `pnpm --filter next-app test` runs once; `test:watch` watches. To run a single test file: `pnpm --filter next-app exec vitest run src/components/atoms/Button/Button.test.tsx`. **react-app has no test runner installed yet** — set up Vitest + Testing Library there before adding its first component test, per the convention below.

## Frontend conventions

These rules apply to component code in **both** apps.

- **Atomic Design** — organize UI components by level: `atoms/` (buttons, inputs, labels), `molecules/` (small groups of atoms), `organisms/` (larger composed sections), then `templates/` and `pages/`. Build upward: an organism composes molecules, a molecule composes atoms — don't reach past a level. Place shared components under a `components/` root split into these folders.
- **Tailwind for styling** — style with Tailwind utility classes rather than bespoke CSS files or inline `style` props. next-app already has Tailwind CSS v4 configured; **react-app does not have Tailwind yet** — add and configure it before styling components there.
- **Every component ships a test** — each component has a colocated test (e.g. `Button.tsx` + `Button.test.tsx`) that exercises its *essential use*: render it the way it's actually used and assert the behavior/output that matters (visible content, the effect of a click, the state it drives), not implementation details. A component without such a test is incomplete.

next-app's `src/components/` (under `/login`, see `src/app/login/page.tsx`) is the reference implementation of this pattern end-to-end — atoms (`Button`, `Input`, `Checkbox`, `Label`, `Divider`, `TextLink`, icon atoms) compose into molecules (`FormField`, `RememberForgot`, `SocialButton`, `SocialLogins`), which compose into organisms (`AuthBanner`, `LoginForm`), assembled by the `AuthLayout` template. Follow this shape (props interface, colocated test, Tailwind classes only) for new components in either app.

## Git conventions

Commits across the whole monorepo (both apps and root) follow **Conventional Commits**: `type(scope): subject`.

- **Types** — `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`.
- **Scope** (optional but preferred here) — use the app or area the change touches: `react-app`, `next-app`, `deps`, `ci`. Example: `feat(react-app): add Button atom`.
- **Subject** — imperative mood, lower-case, no trailing period, kept short.
- **Breaking changes** — mark with `!` after the type/scope (`feat(next-app)!: ...`) and/or a `BREAKING CHANGE:` footer.

The existing history follows this (`chore: init pnpm workspace with react + next apps`); keep it consistent.

## Backend conventions

There is **no backend app in the repo yet** (the API surface today is only Next.js route handlers under `apps/next-app`, if any). When backend/API code is added, it **must adhere to REST**:

- **Resource-oriented URLs** — paths name resources as plural nouns, never actions/verbs: `GET /users/42/orders`, not `/getUserOrders`. Nest to show relationships; keep hierarchy shallow.
- **HTTP methods carry the semantics** — `GET` (read, safe), `POST` (create), `PUT` (full replace), `PATCH` (partial update), `DELETE` (remove). `GET`/`PUT`/`DELETE` must be **idempotent** and `GET` must have no side effects.
- **Meaningful status codes** — `200/201/204` for success (`201` + `Location` on create, `204` for empty bodies), `400/401/403/404/409/422` for client errors, `5xx` for server errors. Don't return `200` with an error payload.
- **Stateless** — no server-side session state between requests; each request carries everything it needs (e.g. auth token). State lives in the resource store, not the connection.
- **Consistent JSON contracts** — camelCase JSON, a stable error shape across endpoints, and explicit API versioning (e.g. `/v1/...`) so changes don't break clients.
- **Correct semantics over convenience** — use query params for filtering/sorting/pagination (`?status=open&page=2`), honor content negotiation, and return the right method-not-allowed/`Allow` headers rather than bending a verb to fit.

## Per-app specifics

**react-app** — `build` runs `tsc -b && vite build`, so a type error fails the build. Linting is Oxlint via `.oxlintrc.json` (not ESLint); type-aware rules are off by default (see the app README to enable). Entry is `src/main.tsx` → `src/App.tsx`.

**next-app** — App Router under `src/app/`. `next.config.ts` pins the Turbopack `root` to the workspace root (two levels up) so Next doesn't infer the wrong root from stray lockfiles elsewhere on the machine; keep that if you touch the config. Use the `@/*` path alias (maps to `src/*`, configured in `tsconfig.json`) for imports instead of relative `../../..` chains. `apps/next-app/CLAUDE.md` includes `AGENTS.md`, which carries a standing warning: **this Next.js 16 has breaking changes vs. older versions — consult `node_modules/next/dist/docs/` before writing Next code rather than relying on prior knowledge.**
