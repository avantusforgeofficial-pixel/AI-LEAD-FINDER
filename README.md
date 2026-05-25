# AI-LEAD-FINDER

AI Lead Finder is a modern SaaS dashboard for AI-powered lead generation, outreach, and pipeline management.

## What’s included

- `app/` — Next.js App Router pages for the dashboard, auth flows, lead details, outreach, CRM, and settings.
- `components/` — reusable UI components with glassmorphism styling, responsive layouts, and motion support.
- `lib/` — mock lead data, filter helpers, and API client hooks.
- `app/api/` — backend routes for search, lead loading, outreach generation, and save-lead actions.

## Features

- Next.js 15 with TypeScript
- TailwindCSS dark theme and glassmorphism styling
- Reusable UI primitives inspired by shadcn/ui
- Animated transitions with Framer Motion
- Premium SaaS dashboard experience
- Fully responsive layout and mobile support

## Quick Start

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open http://localhost:3000

## Pages

- `/` — Landing page
- `/auth/login` — Login
- `/auth/register` — Register
- `/auth/forgot-password` — Password reset
- `/dashboard` — Main dashboard with search, filters, stats, and lead table
- `/leads/[id]` — Lead details view
- `/outreach` — AI outreach generation
- `/crm` — Pipeline board
- `/settings` — Workspace settings

## Build

```bash
npm run build
```

## Backend routes

- `GET /api/search`
- `GET /api/leads`
- `POST /api/save-lead`
- `POST /api/outreach`
