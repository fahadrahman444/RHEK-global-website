# RHEK GLOBAL — Enterprise Website & Growth Platform

[![Next.js 15](https://img.shields.io/badge/Next.js-15.5.28-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React-19.1.0-blue?style=flat&logo=react)](https://react.dev/)
[![TypeScript 5](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![WCAG 2.2 AA](https://img.shields.io/badge/Accessibility-WCAG_2.2_AA-success)](https://www.w3.org/WAI/standards-guidelines/wcag/)
[![Static Prerender](https://img.shields.io/badge/Static_Routes-25%2F25_Prerendered-emerald)](https://nextjs.org/docs/app/building-your-application/rendering/server-components)

The official enterprise web platform for **RHEK GLOBAL** — a full-service commercial growth, digital infrastructure, and pipeline solutions agency.

Built with Next.js 15 (App Router), TypeScript, and Tailwind CSS following **Swiss Modular Design Principles**, an **8-point spatial foundation**, strict **copy budgets**, and **100% tokenized color architecture**.

---

## ⚡ Key Highlights & Architecture Metrics

* **91% Route Footprint Reduction:** Homepage initial JavaScript bundle reduced from 13.1 kB down to **1.15 kB**.
* **68% Web Development Route Reduction:** Flagship service route reduced from 14.2 kB down to **4.51 kB**.
* **100% Static Route Generation:** All 25 site routes (`/`, `/services`, `/services/[slug]`, `/about`, `/work`, `/team`, `/careers`, `/contact`, `/book-a-meeting`, `/privacy-policy`) statically prerendered with zero dynamic server lag.
* **100% Design Token Enforcement:** Zero arbitrary hex utility classes in application TSX templates; centralized semantic tokens in `tailwind.config.ts`.
* **Zero Dead Code:** All 24 obsolete and orphaned legacy draft files purged.
* **Hardware-Accelerated Micro-Interactions:** Cursor tracking via CSS custom properties (`--spotlight-x`, `--spotlight-y`) bypassing React render cycles.
* **WCAG 2.2 Level AA Focus & Motion Safety:** Distinct `focus-visible:ring-2` indicators and universal `@media (prefers-reduced-motion: reduce)` protection.

---

## 🏛️ The 8 Core Services

RHEK Global unifies growth and digital infrastructure across 8 core practice areas:

1. **Janitorial Lead Generation:** Exclusive commercial cleaning walkthroughs, territory locking, and zero-shared property manager appointments.
2. **Outbound Sales Development:** Dedicated SDR cadences, verified executive contact dossiers, and pipeline generation.
3. **Web Design & Development:** Sub-second Next.js 15 web applications, 12-column Swiss UI, and 100% code ownership.
4. **Social Media Advertising:** High-ROAS paid acquisition across Meta and LinkedIn with continuous creative testing.
5. **Graphic Design & Brand Identity:** Authoritative visual identity guidelines, vector design token systems, and collateral.
6. **Video Editing & Production:** 4K commercial reels, high-retention video pacing, and motion graphics.
7. **Email Marketing & Outreach:** Deliverability-first email sequences, domain warming, and automated nurture funnels.
8. **Virtual Assistant Staffing:** Dedicated, rigorously vetted operational and administrative support teams.

---

## 🧩 The 8 Reusable Global Pattern Primitives

All marketing and service pages are assembled from typed, composable layout primitives located in `components/layout/patterns/`:

| Component | Responsibility | Copy Budget & Constraints |
|---|---|---|
| [`PatternSplitHero`](file:///D:/RHEK/RHEK-global-website/components/layout/patterns/PatternSplitHero.tsx) | 12-col split hero (7:5) with live log window and trust bar | Headline $\le 7$ words, subhead $\le 25$ words |
| [`PatternBentoGrid`](file:///D:/RHEK/RHEK-global-website/components/layout/patterns/PatternBentoGrid.tsx) | Modular bento grid (supports 2, 3, or 4 columns) | Card title $\le 7$ words, description $\le 12$ words (3-line clamp) |
| [`PatternComparison`](file:///D:/RHEK/RHEK-global-website/components/layout/patterns/PatternComparison.tsx) | 2-column Before/After reality contrast | 3-4 structured comparative dimension pairs |
| [`PatternSpecAccordion`](file:///D:/RHEK/RHEK-global-website/components/layout/patterns/PatternSpecAccordion.tsx) | Non-text tech strip + progressive disclosure drawer | Collapsed benchmarks, syntax-highlighted configs |
| [`PatternStepper`](file:///D:/RHEK/RHEK-global-website/components/layout/patterns/PatternStepper.tsx) | 4-step delivery roadmap (horizontal desktop, vertical mobile) | Step duration, title, max 3 deliverables, handoff artifact |
| [`PatternSocialProof`](file:///D:/RHEK/RHEK-global-website/components/layout/patterns/PatternSocialProof.tsx) | 3 numerical impact metrics + 3 verified quote cards | Metric, label, caption, author, role, company |
| [`PatternTieredPricing`](file:///D:/RHEK/RHEK-global-website/components/layout/patterns/PatternTieredPricing.tsx) | 3-tier fixed-bid pricing grid with middle popular badge | Tier name, timeline, price, features checklist, shared guarantee |
| [`PatternCtaBand`](file:///D:/RHEK/RHEK-global-website/components/layout/patterns/PatternCtaBand.tsx) | Full-bleed dark conversion section with risk-reversal subline | Display H2, action group, 3 proof bullets, guarantee badge |

---

## 🎨 Design System & Spacing Standard

### The 60-30-10 Color Architecture
* **60% Dominant (Canvas):** Pure White (`#FFFFFF`) and Architectural Paper Off-White (`#FAFAFA` / `bg-brand-surface`).
* **30% Structural (Typography & Surfaces):** Midnight Black (`#101010` / `text-brand-black` / `bg-brand-black`) for headings and dark cards; Body Gray (`#525252` / `text-brand-body`) for prose; Caption Gray (`#737373` / `text-brand-caption`); Hairline Borders (`#EBEBEB` / `border-brand-border`).
* **10% Accent (Conversion & Focus):** Crimson Red (`#E9204F` / `bg-brand-red` / `text-brand-red`), reserved strictly for primary buttons, active indicators, and conversion anchors.

### 8-Point Spatial Foundation
All vertical section rhythm, padding, and grid gaps adhere to discrete 8pt multiples:
`8px (xs)` · `16px (sm)` · `24px (md)` · `32px (lg)` · `48px (xl)` · `64px (2xl)` · `96px (3xl)` · `112px (4xl)`

---

## 🛠️ Tech Stack

* **Framework:** [Next.js 15.5.28](https://nextjs.org/) (App Router, React Server Components)
* **Language:** [TypeScript 5](https://www.typescriptlang.org/) (Strict type checking, zero `any`)
* **Styling:** [Tailwind CSS 3.4](https://tailwindcss.com/) with custom design tokens
* **Icons:** Centralized SVG primitives in `components/common/icons/`
* **Animations & Transitions:** Native CSS transitions (150ms–200ms) with Framer Motion 12 for micro-drawers
* **Font Delivery:** Next.js Font Optimization (`Plus_Jakarta_Sans` & `Instrument_Sans`)

---

## 📁 Repository Structure

```
RHEK-global-website/
├── app/                           # Next.js App Router routes
│   ├── layout.tsx                 # Root layout with fonts, metadata, and landmarks
│   ├── page.tsx                   # Master Agency Homepage (8 services architecture)
│   ├── not-found.tsx              # Custom 404 error page
│   ├── about/page.tsx             # Company mission, values, and history
│   ├── book-a-meeting/page.tsx    # Interactive consultation booking flow
│   ├── careers/page.tsx           # Open engineering and SDR positions
│   ├── contact/page.tsx           # Contact dispatch and intake form
│   ├── privacy-policy/page.tsx    # Data protection and privacy policy
│   ├── services/                  # Service catalog and individual landing pages
│   │   ├── page.tsx               # Service directory overview
│   │   ├── [slug]/page.tsx        # Dynamic SSR/SSG template for all 8 verticals
│   │   └── web-development/       # Flagship Web Development landing page
│   ├── team/page.tsx              # Executive leadership and practice leads
│   └── work/page.tsx              # Case studies and client portfolio
├── components/                    # Modular React components
│   ├── common/                    # Core UI primitives (Button, SectionHeader, SpotlightCard, etc.)
│   ├── layout/                    # Global navigation (Navbar, Footer, SubpageHeader)
│   │   └── patterns/              # The 8 Reusable Global Layout Pattern Primitives
│   ├── sections/                  # Common page sections (PartnerLogos, PortfolioSection, FAQ)
│   └── services/                  # Vertical interactive widgets (JanitorialRoiCalculator, LeadTicketCard)
├── data/                          # Strongly typed business data contracts
│   ├── rhek-config.ts             # Company metadata, contact telemetry, and SLAs
│   └── services-data.ts           # Service vertical definitions, pricing tiers, and copy
├── docs/                          # Comprehensive technical documentation & audits
│   ├── DEPLOYMENT.md              # Production deployment and DNS guidelines
│   ├── DESIGN-SYSTEM.md           # Master design token and 8pt layout specification
│   ├── MOUSE-HOVER-AUDIT.md       # Technical audit of hover micro-interactions
│   ├── PROJECT-CONTEXT.md         # Agency background and strategic scope
│   ├── SRS.md                     # Software Requirements Specification
│   ├── UI-CSS-ENGINEERING-AUDIT.md# 14-Point UI & 43-Point CSS Engineering Audit Report
│   └── UI-ENGINEERING-GUIDE.md    # Living UI component implementation guide
├── tailwind.config.ts             # Centralized design tokens and theme extensions
└── tsconfig.json                  # Strict TypeScript configuration
```

---

## 🚀 Getting Started

### Prerequisites
* Node.js 18.18+ or 20+
* npm, pnpm, or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/RHEK-Global/RHEK-global-website.git
cd RHEK-global-website

# Install dependencies
npm install
```

### Development
```bash
# Start local development server with Turbopack
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Type Check & Production Build
```bash
# Run strict TypeScript compilation check (0 errors required)
npx tsc --noEmit

# Compile production bundle and generate static pages
npm run build

# Start production server
npm run start
```

---

## 📑 Technical Documentation

* 📘 [UI & CSS Engineering Audit (V2)](docs/UI-CSS-ENGINEERING-AUDIT.md) — 14-point UI checklist and 43-point CSS engineering verification.
* 🖱️ [Mouse Hover & Micro-Interaction Audit](docs/MOUSE-HOVER-AUDIT.md) — Cursor physics, spotlight hardware acceleration, and tactile press states.
* 📐 [Master Design System Specification](docs/DESIGN-SYSTEM.md) — Color tokens, typography scales, and 12-column Swiss grid configurations.
* 🛠️ [Living UI Engineering Guide](docs/UI-ENGINEERING-GUIDE.md) — Component contracts, copy budgets, and implementation standards.
* 🚀 [Production Deployment Guide](docs/DEPLOYMENT.md) — Vercel and AWS deployment pipeline and headers.

---

## 📄 License & Ownership

Copyright © 2026 RHEK GLOBAL. All rights reserved.  
100% intellectual property, design assets, and production code ownership.
