# Kaiyn Website

[![CI](https://github.com/ronload/kaiyn-website/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/ronload/kaiyn-website/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-25-339933?logo=node.js&logoColor=white)](./.nvmrc)
[![pnpm](https://img.shields.io/badge/pnpm-10-F69220?logo=pnpm&logoColor=white)](./package.json)

[![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![next-intl](https://img.shields.io/badge/next--intl-4-3A86FF)](https://next-intl.dev/)
[![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-maia-000000)](https://ui.shadcn.com/)
[![Magic UI](https://img.shields.io/badge/Magic%20UI-registry-7C3AED)](https://magicui.design/)
[![Biome](https://img.shields.io/badge/code%20style-biome-60A5FA?logo=biome&logoColor=white)](https://biomejs.dev/)
[![Dependabot](https://img.shields.io/badge/Dependabot-enabled-025E8C?logo=dependabot&logoColor=white)](./.github/dependabot.yml)

Kaiyn Website is a multilingual marketing site for the Kaiyn crypto trading
community. It is a statically generated Next.js App Router project with
locale-prefixed routing, a `base-ui` + `shadcn/ui` (maia theme) component
system, and a CSS-first Tailwind v4 design layer.

- Live locales: `en` (default, no prefix), `zh-TW`, `zh-CN`
- Strict TypeScript, formatted and linted by Biome
- CI gates every PR on typecheck, lint, format check, and production build

## Tech Stack

| Area              | Choice                                                              |
| ----------------- | ------------------------------------------------------------------- |
| Framework         | Next.js 16 (App Router) + React 19                                  |
| Language          | TypeScript (strict)                                                 |
| Styling           | Tailwind CSS v4 (`@theme inline`, mobile-first, fluid `--page-inline`) |
| Component system  | `@base-ui/react` primitives + `shadcn/ui` (maia theme) + Magic UI registry |
| Animation / icons | `motion`, `tw-animate-css`, `lucide-react`                          |
| i18n              | `next-intl` v4 (`en` / `zh-TW` / `zh-CN`)                           |
| Tooling           | Biome (lint + format), pnpm 10, Node 25                             |
| CI                | GitHub Actions (parallel typecheck / lint / format / build)         |
| Automation        | Dependabot (weekly, npm + github-actions)                           |

## Getting Started

### Prerequisites

- **Node.js 25** — pinned in [`.nvmrc`](./.nvmrc). Use `nvm`, `fnm`, or `volta` so your shell picks up the repo version.
- **pnpm 10** — pinned via the `packageManager` field in [`package.json`](./package.json). Enable Corepack so the right version is selected automatically:

  ```bash
  corepack enable
  ```

### Install and run

```bash
pnpm install
pnpm dev
```

Then open:

- English (default): http://localhost:3000
- Traditional Chinese: http://localhost:3000/zh-TW
- Simplified Chinese: http://localhost:3000/zh-CN

## Scripts

| Script              | Purpose                                                                  |
| ------------------- | ------------------------------------------------------------------------ |
| `pnpm dev`          | Start the local dev server                                               |
| `pnpm build`        | Create a production build                                                |
| `pnpm start`        | Start the production server                                              |
| `pnpm typecheck`    | Run TypeScript checks (`tsc --noEmit`)                                   |
| `pnpm lint`         | Run Biome lint (`biome check`)                                           |
| `pnpm format`       | Apply Biome formatting (`biome format --write`)                          |
| `pnpm format:check` | Check formatting without writing (`biome format`)                        |
| `pnpm check`        | typecheck + `biome check` + `biome format` — same gates CI runs          |
| `pnpm clean`        | Remove generated build/cache files                                       |
| `pnpm clean:all`    | Remove generated files, then reinstall dependencies                      |

Run `pnpm check` before pushing — it mirrors CI.

## Project Structure

```text
src/
  app/
    globals.css                Tailwind v4 entrypoint, design tokens
    [locale]/
      layout.tsx               Locale-aware root layout (fonts, html lang, providers)
      (home)/
        page.tsx               Home page composition
        _components/           Section-scoped components (hero/, feature-cards/, ...)
  components/
    ui/                        shadcn/ui primitives (third-party - do not edit)
    custom/                    Project-specific feature components and wrappers
    layout/                    Page chrome: Container, Header, LanguageSwitcher
  i18n/
    routing.ts                 Locale list and prefix policy
    request.ts                 next-intl request configuration
    navigation.ts              Locale-aware Link / useRouter / redirect
  lib/
    utils.ts                   shadcn utility (third-party - do not edit)
  proxy.ts                     next-intl middleware bridge

messages/
  en.json                      English copy
  zh-TW.json                   Traditional Chinese copy
  zh-CN.json                   Simplified Chinese copy

public/
  img/                         Static image assets
  video/                       Static video assets

.github/
  workflows/ci.yml             Typecheck, lint, format-check, build
  dependabot.yml               Weekly npm + github-actions updates
```

## Internationalization

Locale configuration lives in [`src/i18n/routing.ts`](./src/i18n/routing.ts):

- `en` — default, served from `/` (no prefix)
- `zh-TW` — Traditional Chinese, served from `/zh-TW`
- `zh-CN` — Simplified Chinese, served from `/zh-CN`

Page copy is namespaced in `messages/{en,zh-TW,zh-CN}.json`. When adding or
renaming a translation key, update **all three files in the same commit** —
missing keys cause runtime errors during static generation, which CI's `build`
job will catch.

For navigation, prefer the helpers from `src/i18n/navigation.ts` (`Link`,
`useRouter`, `redirect`, ...) over `next/link` and `next/navigation`. They
preserve locale prefixes correctly across routes.

## Home Page Composition

The home page is assembled in
[`src/app/[locale]/(home)/page.tsx`](./src/app/[locale]/(home)/page.tsx) from
four sections, each backed by components in `_components/`:

1. **Hero** — `_components/hero/`
2. **Exchange logos marquee** — `_components/exchange-logos-marquee.tsx`
3. **Feature cards** — `_components/feature-cards/` (composed of
   `bitget-register-card`, `blockchain-transfer-card`, `contact-admin-card`,
   `telegram-preview-card`)
4. **Timeline** — `_components/timeline.tsx`

Most visible text comes from the `HomePage` namespace in the translation files,
so small copy changes are a low-risk first task that exercises the full i18n
flow.

## Component Conventions

This project follows a strict three-bucket layout (see `CLAUDE.md` and
`CONTRIBUTING.md` for the full rules):

- `src/components/ui/` — shadcn/ui primitives, plus components installed from
  the [Magic UI](https://magicui.design/) registry via the shadcn CLI (e.g.
  `marquee`, `animated-list`, `text-animate`, `shiny-button`, `avatar-circles`).
  Treated as **third-party**; Biome is configured to skip these paths and the
  shadcn CLI may overwrite manual edits.
- `src/components/custom/` — feature components and wrappers around `ui/`
  primitives. New work goes here by default.
- `src/components/layout/` — page chrome (`Container`, `Header`,
  `LanguageSwitcher`).

Two project-specific notes:

- **Wrap, don't fork.** When a shadcn component needs customization, build a
  wrapper in `custom/` instead of editing the `ui/` source.
- **`base-ui` uses `render`, not `asChild`.** The underlying primitive is
  `@base-ui/react` (not Radix), so the composition API is `render={<Button .../>}`,
  not `<Trigger asChild><Button /></Trigger>`.

## CI

[`.github/workflows/ci.yml`](./.github/workflows/ci.yml) runs four parallel
jobs on every push to `main` and every PR:

| Job            | Command                |
| -------------- | ---------------------- |
| `typecheck`    | `pnpm typecheck`       |
| `lint`         | `pnpm lint`            |
| `format-check` | `pnpm format:check`    |
| `build`        | `pnpm build`           |

Concurrency is keyed on `github.ref`, so superseding pushes cancel in-flight
runs and won't pile up CI usage.

## Contributing

See [`CONTRIBUTING.md`](./CONTRIBUTING.md) for branch naming, commit
conventions (Conventional Commits, **no scope**), PR expectations, and the
full set of component / layout / i18n rules.

## License

[MIT](./LICENSE) © ronload
