# NivoraIB Website

NivoraIB is an AI-powered workspace that helps IB educators plan, teach, assess, and manage their teaching workflows in one place.

This repository contains the complete public-facing website for NivoraIB, built with Next.js (App Router), React, TypeScript, and Tailwind CSS.

---

## Overview

The NivoraIB website serves as the primary digital presence for the platform, introducing DP educators, IB coordinators, and school leadership to:
- The multi-agent AI workspace tailored for the International Baccalaureate Diploma Programme.
- The 5 contextual grounding layers ensuring syllabus alignment and deterministic academic verification.
- The Core Reliability Invariant: `Generated ≠ Validated ≠ Approved ≠ Published`.
- Platform capabilities across unit planning, assessment generation, and moderation assistance.
- Founding leadership, company mission, career opportunities, and educator community inquiries.

---

## Tech Stack

This project uses modern, production-hardened web standards:

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router, Server & Client Components)
- **UI Library:** [React 18](https://react.dev/)
- **Language:** [TypeScript 5](https://www.typescriptlang.org/) (Strict typing, zero `any`)
- **Styling:** [Tailwind CSS 3](https://tailwindcss.com/) & PostCSS
- **Icons:** [Lucide React](https://lucide.dev/)
- **Image Optimization:** [Sharp](https://github.com/lovell/sharp)
- **Theme Support:** Dark & Light mode with custom anti-FOUC script and smooth color transitions

---

## Project Structure

```
Website/
├── public/                    # Static public assets
│   ├── favicon.ico            # Official brand favicon
│   └── logo/                  # High-resolution logos, emblems, and lockups
│
├── src/
│   ├── app/                   # Next.js App Router
│   │   ├── layout.tsx         # Root layout with ThemeProvider, Navbar, Footer, and SEO metadata
│   │   ├── globals.css        # Global design tokens, font styling, and theme transitions
│   │   ├── page.tsx           # Homepage (/)
│   │   ├── platform/page.tsx  # Platform Architecture (/platform)
│   │   ├── features/page.tsx  # Feature Matrix & Agent Capabilities (/features)
│   │   ├── how-it-works/page.tsx # 8-Step Teacher Workflow Loop (/how-it-works)
│   │   ├── about/page.tsx     # Mission, Philosophy & Founding Principles (/about)
│   │   ├── team/page.tsx      # Founding Leadership & Engineering Team (/team)
│   │   ├── careers/page.tsx   # Culture, Benefits & Open Roles (/careers)
│   │   ├── contact/page.tsx   # Educator & School Inquiry Form (/contact)
│   │   ├── resources/page.tsx # Research Briefs & Pedagogy Hub (/resources)
│   │   ├── roadmap/page.tsx   # Development Roadmap (/roadmap)
│   │   ├── dashboard/page.tsx # Interactive Product Preview Sandbox (/dashboard)
│   │   ├── robots.ts          # Search engine crawler policies
│   │   └── sitemap.ts         # Dynamic XML sitemap generator
│   │
│   ├── components/            # Reusable UI & section components
│   │   ├── Navbar.tsx         # Global navigation bar with desktop dropdown & mobile drawer
│   │   ├── Footer.tsx         # Standard organization footer with trademark disclaimers
│   │   ├── ThemeProvider.tsx  # Light/Dark mode state, local persistence, and system preference
│   │   ├── ComingSoonModal.tsx# Accessible modal for early-access features
│   │   ├── ContactForm.tsx    # Accessible contact & inquiry form with instant validation
│   │   ├── SectionHeader.tsx  # Standard section title & badge wrapper
│   │   ├── HeroWorkspaceMockup.tsx # Centerpiece workspace interface preview
│   │   ├── ContextLayersGraphic.tsx# 5-layer contextual grounding diagram
│   │   ├── ReliabilityPipeline.tsx # Deterministic verification gate pipeline visualizer
│   │   └── ...
│   │
│   ├── data/                  # Structured domain content
│   │   ├── navigation.ts      # Menu items and footer hierarchies
│   │   ├── agents.ts          # Academic agent definitions
│   │   ├── features.ts        # Feature categories and capability specifications
│   │   ├── team.ts            # Team members, roles, and LinkedIn links
│   │   ├── careers.ts         # Job listings, departments, and focus areas
│   │   ├── resources.ts       # Articles and pedagogy briefs
│   │   └── roadmap.ts         # Development milestones
│   │
│   └── lib/                   # Utility helpers
│       └── utils.ts           # ClassName helper (`cn`)
│
├── .env.example               # Environment variable templates
├── .gitignore                 # Standard Git exclusion list
├── next.config.mjs            # Next.js configuration
├── package.json               # Scripts and dependencies
├── postcss.config.js          # PostCSS configuration
├── tailwind.config.ts         # Tailwind theme extension and custom color tokens
└── tsconfig.json              # TypeScript configuration
```

---

## Getting Started

### Prerequisites
- Node.js 18.17+ or 20+ (tested up to Node 22)
- npm 9+ or pnpm / yarn

### Installation
Clone the repository and install dependencies:
```bash
npm install
```

### Running Locally (Development Server)
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Production Build

To build the application for production:
```bash
npm run build
```

To run the production server locally:
```bash
npm start
```
By default, the server listens on [http://localhost:3000](http://localhost:3000).

---

## Environment Variables

The website runs out of the box with zero external configuration. If you wish to configure deployment URLs or external integrations, copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

| Variable | Description | Default |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical URL used for OpenGraph and Sitemap | `https://nivoraib.com` |

---

## Pages / Routes

All primary routes are statically pre-rendered for maximum performance and SEO visibility:

| Route | Name | Purpose |
|---|---|---|
| `/` | Home | Overview of NivoraIB, value proposition, and interactive preview |
| `/platform` | Platform | Architecture, 5 contextual grounding layers, and reliability pipelines |
| `/features` | Features | Academic agent suite, curriculum alignment, and assessment workflows |
| `/how-it-works` | How It Works | 8-step execution loop and verification checkpoints |
| `/about` | About | Company mission, pedagogy philosophy, and founding principles |
| `/team` | Team | Leadership, engineering contributors, and confirmed profiles |
| `/careers` | Careers | Culture, engineering standards, and current open positions |
| `/contact` | Contact | Inquiries, school partnerships, and walkthrough scheduling |
| `/resources` | Resources | Pedagogy briefs, reliability whitepapers, and guides |
| `/roadmap` | Roadmap | Product milestones from Stage 1 through future releases |
| `/dashboard` | Product Preview | Interactive sandbox demonstrating workspace flow |

---

## Development Guidelines

1. **Brand Assets & Typography:**
   - Preserve official logos in `public/logo/`.
   - Maintain the established color palette defined in `tailwind.config.ts` (`navy`, `brand`, `slate`).
   - Use `Plus Jakarta Sans` for UI typography and `JetBrains Mono` for audit telemetry and code blocks.

2. **Theming & Anti-FOUC:**
   - The application supports both **Light** and **Dark** themes.
   - Theme state is managed via `ThemeProvider.tsx` and persisted to `localStorage`.
   - Critical inline script in `src/app/layout.tsx` guarantees zero flash of unstyled theme on cold load.
   - Theme toggle micro-interactions use CSS animations. Avoid inline styles that override theme variables.

3. **Accessibility (WCAG 2.1 AA):**
   - Maintain semantic HTML elements (`<header>`, `<main>`, `<nav>`, `<footer>`, `<section>`).
   - All interactive controls must have accessible labels (`aria-label`, `aria-expanded`).
   - Ensure high contrast in both themes (minimum 4.5:1 for body text, 3:1 for large headings).

4. **Performance Standards:**
   - Prefer Server Components where state or interactivity is not required.
   - Next.js `<Image>` components should specify `sizes`, `width`, and `height` to prevent layout shift.
   - Non-critical links in navigation and footer should use `prefetch={false}` to minimize background network contention on mobile devices.

---

## Important Architectural Notes

- **The Core Reliability Invariant:**
  $$\mathbf{Generated} \;\neq\; \mathbf{Validated} \;\neq\; \mathbf{Teacher\;Approved} \;\neq\; \mathbf{Published}$$
  NivoraIB is founded on deterministic verification. AI outputs must pass deterministic schema and syllabus audits before teacher sign-off. The public website design reflects this rigor.

- **Independent Technology:**
  NivoraIB is an independent educational technology platform. International Baccalaureate® and IB® are registered trademarks of the International Baccalaureate Organization. The website includes standard non-endorsement disclaimers in the footer across all routes.
