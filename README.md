# Lunar Club Tools with React Router

This application is a graphical representation of the information derived from the Lunar Club Tools web service. It provides an overview of the moon's current ephemeris and summaries of the Astronomical League's Lunar Club and Lunar II observing programs.

## Getting Started

First, install dependencies and run the development server:

```bash
pnpm install
pnpm dev
```

A production build can achieved by running the following:

```bash
pnpm build
```

A production server can be run by the following:

```bash
pnpm start
```

## Available Commands

- `pnpm test`: Runs tests in each package using Turborepo (leverages caching)
- `pnpm view-report`: Collects coverage from each package and shows it in a merged report
- `pnpm storybook`: Runs the Storybook system for UI component development
- `pnpm lint`: Runs eslint on each package
- `pnpm format:check`: Runs prettier in check mode
