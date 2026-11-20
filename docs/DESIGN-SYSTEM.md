# RHEK GLOBAL — Master Design System, Spacing & Interaction Specification

## 1. Color System & Theme Balancing (60-30-10 Rule)

Use the 60-30-10 color balance principle across all pages and components:
- **60% — Dominant (Neutral Canvas):** Pure white (`#FFFFFF`) and architectural paper off-white (`#FAFAFA` / `bg-brand-surface`).
- **30% — Supporting (Structural Surfaces & Typography):** Midnight black (`#101010` / `brand.black`) for authoritative containers and headings; dark body text (`#525252` / `brand.body`); captions (`#737373` / `brand.caption`); muted dark text (`#A3A3A3` / `brand.dim`); architectural hairline borders (`#EBEBEB` / `brand.border` and `#F3F3F3` / `brand.border-subtle`).
- **10% — Accent (Conversion Focus):** Crimson Red (`#E9204F` / `brand.red`) strictly reserved for primary CTA buttons, live verified stamps, active tabs, and key conversion metrics.

### Centralized Token Reference
All colors are tokenized under `colors.brand` in [tailwind.config.ts](file:///D:/RHEK/RHEK-global-website/tailwind.config.ts):
* `bg-brand-red` / `text-brand-red`: `#E9204F`
* `bg-brand-black` / `text-brand-black`: `#101010`
* `text-brand-body`: `#525252`
* `text-brand-caption`: `#737373`
* `text-brand-dim`: `#A3A3A3`
* `text-brand-muted`: `#ACACAC`
* `bg-brand-surface`: `#FAFAFA`
* `border-brand-border`: `#EBEBEB`
* `border-brand-border-subtle`: `#F3F3F3`
* `bg-brand-dark`: `#141416`

---

## 2. Master 8-Point Spacing Foundations

Use multiples of 8px as the primary spacing foundation across all components.

| Token | Size | Category | Implementation Usage |
|---|---|---|---|
| `XS` | 8px | Micro spacing | Related text-to-icon gaps, tiny badge adjustments |
| `SM` | 16px | Compact spacing | Heading-to-description gaps, mobile card gutters |
| `MD` | 24px | Component spacing | Desktop grid gutters, description-to-CTA gaps |
| `LG` | 32px | Content grouping | Standard card internal padding, paragraph-to-button gaps |
| `XL` | 48px | Block spacing | Heading block to card grid spacing |
| `2XL` | 64px | Section padding | Mobile section top/bottom padding |
| `3XL` | 96px | Section separation | Between major desktop sections |
| `4XL` | 112px / 128px | Editorial padding | Desktop section top/bottom rhythm |
| `5XL` | 160px | Master separator | Maximum editorial breathing room |

---

## 3. Horizontal Spacing & Container Architecture

- **Maximum Content Width:** `1280px` centered container (`.site-container`).
- **Desktop Gutters:** `24px` internal page margins.
- **Mobile Gutters:** `16px` internal page margins.
- **Responsive Width:** `min(1280px, calc(100% - 2 * var(--page-gutter)))`.
- **Horizontal Overflow:** Enforced `overflow-x: clip` on `html` and `body` to prevent horizontal jitter.

---

## 4. Vertical Section Rhythm

| Metric | Desktop | Tablet | Mobile |
|---|---|---|---|
| Section top/bottom padding | 96px (`py-24`) | 80px (`py-20`) | 56px (`py-14`) |
| Spacing between major sections | 96px | 80px | 56px |
| Heading to paragraph gap | 16px (`mt-4`) | 14px | 12px |
| Heading block to content grid | 48px (`mb-12`) | 40px (`mb-10`) | 32px (`mb-8`) |
| Card-to-card gap | 24px (`gap-6`) | 20px | 16px |

---

## 5. Responsive Typography Scale

Unified typography via `Plus_Jakarta_Sans` (`font-heading`) and `Instrument_Sans` (`font-sans`):

| Typographic Level | Desktop | Tablet | Mobile | Font & Leading |
|---|---|---|---|---|
| **Hero Display Headline (H1)** | **48–56px** | **40–44px** | **28–32px** | `font-heading font-bold leading-tight tracking-[-0.03em]` |
| **Section H2 Headings** | **34–40px** | **28–32px** | **24–26px** | `font-heading font-bold leading-[1.18] tracking-tight` |
| **Card H3 Subheadings** | **17–20px** | **16–18px** | **15–16px** | `font-heading font-bold leading-snug` |
| **Impact Data Metrics** | **40–56px** | **36–42px** | **28–32px** | `font-heading font-bold tracking-tight text-brand-black` |
| **Prose Body Copy** | **15–16px** | **15px** | **14–14.5px** | `font-sans font-normal leading-relaxed text-brand-body` (`max-w-2xl`) |
| **Micro-Badge / Pill** | **11px** | **11px** | **10.5px** | `font-semibold uppercase tracking-wider` |

---

## 6. 12-Column Grid Layout Combinations

Enforce divisible 12-column sub-units with unified 24px gutters:
- **7 / 5:** Split Hero — Pitch (7 cols) + Concrete Visual Proof Anchor Card (5 cols).
- **6 / 6:** Balanced 2-column comparison (`PatternComparison`).
- **4 / 4 / 4:** 3-tier pricing (`PatternTieredPricing`) or 3-pillar capabilities.
- **3 / 3 / 3 / 3:** 4-step roadmap (`PatternStepper`) or 4-column bento grids (`PatternBentoGrid`).
- **Full Width Centered:** Full-bleed Dark CTA Band (`PatternCtaBand`).

---

## 7. Card Geometry & Internal Rhythm

- **Internal Padding:** `24px` mobile (`p-6`), `28–32px` desktop (`p-7` / `p-8`).
- **Outer Border Radius:** `rounded-2xl` (16px) for cards; `rounded-xl` (12px) for micro-widgets.
- **Inner Element Radius:** `rounded-lg` (8px) for buttons, badges, chips, and inputs.
- **Border Standard:** Single hairline `border border-brand-border` (or `border-brand-black` on selected tiers).

---

## 8. Mouse Hover & Micro-Interaction Standards

Following the comprehensive [MOUSE-HOVER-AUDIT.md](file:///D:/RHEK/RHEK-global-website/docs/MOUSE-HOVER-AUDIT.md), all mouse interactions adhere to 6 strict rules:

1. **Physical Lift Reserved for Operable Targets:**
   Only clickable links (`<a>`, `<Link>`) and buttons (`<Button>`) apply `hover:-translate-y-0.5`. Static cards (Process steps, Why Choose Us, Guarantee seals) must never lift up on hover.
2. **Tactile Click Symmetry:**
   Any element that lifts with `hover:-translate-y-0.5` must include `active:translate-y-0` for immediate tactile press feedback.
3. **Hardware-Accelerated Spotlight:**
   `SpotlightCard` computes coordinates via CSS custom properties (`--spotlight-x`, `--spotlight-y`) on DOM elements, bypassing React render cycles.
4. **Desktop Cursor Affordance:**
   All buttons and actionable elements enforce `cursor: pointer` via the global rule in `globals.css`:
   ```css
   button:not(:disabled), [role="button"]:not([aria-disabled="true"]) { cursor: pointer; }
   ```
5. **Primary CTA Hover Inversion:**
   Primary buttons uniformly transition from `bg-brand-red text-white` to `bg-brand-black text-white`.
6. **Universal Reduced-Motion Guard:**
   All hover transforms and transitions respect `@media (prefers-reduced-motion: reduce)` by resetting duration to `0.01ms`.

---

## 9. The 8 Global Pattern Primitives

1. `PatternSplitHero`: 7:5 split display hero with log window, live status badge, and jump navigation.
2. `PatternBentoGrid`: 2, 3, or 4 column capability cards with 3-line copy clamp and arrow nudges.
3. `PatternComparison`: 2-column Before/After reality contrast grid.
4. `PatternSpecAccordion`: Non-text tech strip with progressive disclosure benchmark drawer.
5. `PatternStepper`: 4-step delivery roadmap with max 3 deliverables and handoff artifact pill.
6. `PatternSocialProof`: 3 large metric blocks + 3 compact quote cards.
7. `PatternTieredPricing`: 3-tier fixed-bid pricing grid with popular badge and inclusions footer.
8. `PatternCtaBand`: Full-bleed dark closing conversion section with risk-reversal subline.
- **3 / 3 / 3 / 3:** 4 Commercial Target Sectors or capability cards.
- **2 / 2 / 2 / 2 / 2 / 2:** 6 Numerical Impact Statistics.
- **8 / 4:** Split Promotional Offers, Guarantee Seals, and Final CTA + QR Dock.

---

## 7. Card Geometry & Internal Rhythm

- **Internal Padding:** `28–36px` (Standard: **`32px` / `p-8`**).
- **Standard Border Radius:** **`12px` / `rounded-xl`** (eliminates puffy app islands; communicates architectural consultancy rigor).
- **Micro Border Radius:** **`8px` / `rounded-lg`** (for internal specs, chips, and input controls).
- **Icon to Heading:** `24px`.
- **Heading to Description:** `12–16px`.
- **Description to Action Button:** `24px`.
- **Card-to-Card Gutters:** `24px` desktop / `16px` mobile.

---

## 8. Alignment Rules

1. **Left Alignment (Primary Spine):** Anchor headlines, sub-copy, badges, and card lists to the exact same left vertical baseline matching the Navbar logo.
2. **Center Alignment (Selective):** Reserved strictly for standalone trust quotes and compact badges.
3. **Asymmetrical Balance (Z-Pattern):** Top-left logo $\rightarrow$ Top-right booking CTA $\rightarrow$ Center-left value pitch $\rightarrow$ Bottom-right visual proof ticket.
4. **Baseline & Edge Alignment:** Align text, numbers, and buttons to shared container baselines and 1280px edge boundaries.

---

## 9. Flagship Web Development Layout Specification

Dedicated section architecture for `/services/web-development`:
1. **Navbar:** Space-between horizontal alignment (80px height).
2. **Hero Section (7 / 5 Grid):**
   - Left 7 Columns: Left-aligned display headline (`leading-[1.08]`), subheadline, Next.js 15 badge, dual CTAs ("Request Architecture Review" + "Explore Case Studies").
   - Right 5 Columns: Modern Dark `#101010` live architecture anchor with interactive tabs (Core Web Vitals, Lighthouse scores, strict tech stack).
3. **Capabilities (3-Column Grid):**
   - 3 equal-width cards: Next.js 15 & React RSC, High-Conversion UI/UX, Full-Stack SaaS.
4. **Asymmetric Portfolio (7/5 and 5/7 Alternation):**
   - Row 1: 7-Col Strata Financial OS + 5-Col Aurora Telehealth.
   - Row 2: 5-Col Vanguard Design System + 7-Col Nordic Minimalist E-Commerce.
5. **Engineering Rigor (2-Column Layout):**
   - Left 5 Columns: Craftsmanship philosophy vs bloated page-builders.
   - Right 7 Columns: 4-pillar architectural standards grid (Sub-second LCP, strict typing, minimal dependencies, 100% code ownership).
6. **Delivery Process (4-Column Grid):**
   - Stage 01 Discovery → Stage 02 Design System → Stage 03 Engineering → Stage 04 Launch & Audit.
7. **Pricing Packages (3-Column Grid):**
   - Landing Page ($2,200), Corporate Platform ($4,800 featured dark card), Bespoke Web App (Custom).
8. **Direct Consultation (2-Column Layout):**
   - Left 5 Columns: Technical guarantees, direct email, 24-hr response SLA.
   - Right 7 Columns: Direct RFP Form with button mutation locks and validation.

---

## 10. The 6 Swiss Architectural Layout Archetypes

Avoid repetitive card-grid fatigue by assigning each section a dedicated layout archetype based on content type:

### Pattern A: Full-Width Editorial Rows
- **Usage:** Detailed service capabilities, offerings, executive features.
- **Structure:** 12-column full-width container with thin hairline dividers (`border-[#EBEBEB]`). Numbered monospace index (`col-span-1`), bold title (`col-span-4`), descriptive narrative & tags (`col-span-6`), and directional hover action (`col-span-1`).

### Pattern B: Asymmetric 8/4 Feature Layout
- **Usage:** "Why Choose Us", flagship case studies, core strategic value propositions.
- **Structure:** 8-column dominant narrative anchor paired with a 4-column secondary SLA/evidence panel.

### Pattern C: Swiss Vertical Timeline
- **Usage:** Delivery methodology, 4-stage sprint roadmaps, step-by-step onboarding.
- **Structure:** Connected vertical hairline axis (`border-l-2`) with numbered milestone nodes (`01`, `02`), timeline badges, deliverable lists, and duration indicators.

### Pattern D: Horizontal Monoline Capability Strip
- **Usage:** Technology stack, operational standards, Core Web Vitals benchmark criteria.
- **Structure:** Continuous horizontal tray with vertical hairline dividers (`divide-x divide-[#EBEBEB]`) and compact metric blocks.

### Pattern E: Full-Width Visual Showcase
- **Usage:** Portfolio case studies, client outcome showcases.
- **Structure:** High-density visual panel with adjacent or structured editorial telemetry dock.

### Pattern F: Asymmetric Comparison Matrix
- **Usage:** Traditional vs. Modern, Outdated Agencies vs. RHEK Standard.
- **Structure:** 2 structured columns with subtle contrasts, hairline separators, and typography-first proof points.
