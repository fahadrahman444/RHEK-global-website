# Rate Global — Master Design System & Spacing Specification

## 1. Color System & Theme Balancing (60-30-10 Rule)

Use the 60-30-10 color balance principle across all pages and components:
- **60% — Dominant (Neutral Canvas):** Pure white (`#FFFFFF`) and architectural paper off-white (`#FAFAFA`).
- **30% — Supporting (Structural Surfaces & Typography):** Midnight black (`#101010`) for authoritative containers and headings; slate (`#747474`) for body copy; architectural borders (`#EBEBEB` and `#F3F3F3`).
- **10% — Accent (Conversion Focus):** Crimson Red (`#E9204F`) strictly reserved for primary CTA buttons, live verified stamps, and dynamic ROI metrics.

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

---

## 4. Vertical Section Rhythm

| Metric | Desktop | Tablet | Mobile |
|---|---|---|---|
| Hero vertical padding | 120px | 96px | 72px |
| Section top/bottom padding | 112px | 80px | 64px |
| Spacing between major sections | 96px | 80px | 64px |
| Heading to paragraph gap | 24px | 20px | 16px |
| Heading block to content grid | 48px | 40px | 32px |
| Card-to-card gap | 24px | 20px | 16px |

---

## 5. Responsive Typography Scale

| Typographic Level | Desktop | Tablet | Mobile | Font & Leading |
|---|---|---|---|---|
| **Hero Display Headline** | **72px** | **52px** | **38px** | Poppins Extrabold, `leading-[1.05] tracking-[-0.04em]` |
| **Section H2 Headings** | **42px** | **34px** | **28px** | Poppins Extrabold, `leading-[1.12] tracking-[-0.035em]` |
| **Card H3 Subheadings** | **22px** | **20px** | **18px** | Poppins Extrabold, `leading-[1.25]` |
| **Impact Data Metrics** | **60px** | **48px** | **36px** | Poppins Black, Crimson Red (`#E9204F`) |
| **Editorial Body Copy** | **16–18px** | **16px** | **15px** | Roboto Condensed, `leading-[1.65]` max-w-xl |
| **Eyebrow Micro-Badges** | **11px** | **11px** | **10px** | Poppins Extrabold, uppercase `tracking-[0.12em]` |

---

## 6. 12-Column Grid Layout Combinations

Enforce divisible 12-column sub-units with unified 24px gutters:
- **7 / 5:** Hero headline & Pitch (7 cols) + Concrete Visual Proof Anchor Card (5 cols).
- **6 / 6:** Balanced comparison and image-to-content sections.
- **4 / 4 / 4:** 3 Performance Pillars and 3 Pricing Packages.
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
