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
