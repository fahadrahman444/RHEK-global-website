# RHEK GLOBAL — Master UI & CSS Engineering Guide

**Version:** 2.0.0  
**Last Updated:** November 19, 2026  
**Status:** Canonical Living UI Specification  
**Applies to:** `rate-global-website` (`RHEK-global-website`)  

---

## 1. Core Visual Foundations & Design Tokens

### 1.1 The 60-30-10 Color Architecture
Every screen, section, and component adheres strictly to the 60-30-10 color balance:
* **60% Dominant (Canvas):** Pure White (`#FFFFFF`) and Architectural Paper Off-White (`#FAFAFA` / `bg-brand-surface`).
* **30% Structural (Typography & Surfaces):** Midnight Black (`#101010` / `text-brand-black` / `bg-brand-black`) for authoritative containers and titles; Slate (`#747474` / `text-brand-slate`) and Dark Charcoal (`#525252`) for body copy; Architectural Borders (`#EBEBEB` / `border-brand-border` and `#F3F3F3` / `border-brand-border-subtle`).
* **10% Accent (Conversion & Verifications):** Crimson Red (`#E9204F` / `bg-brand-red` / `text-brand-red`), reserved strictly for primary CTA buttons, live verified stamps, active tabs, and key ROI data points.

#### Color Token Mapping
Use Tailwind tokens instead of arbitrary hex codes:

| Token Name | Hex Value | Tailwind Class | Usage Context |
|---|---|---|---|
| `brand.red` | `#E9204F` | `bg-brand-red`, `text-brand-red` | Primary CTAs, active indicators, focus rings |
| `brand.black` | `#101010` | `text-brand-black`, `bg-brand-black` | Main headlines, dark container sections |
| `brand.slate` | `#747474` | `text-brand-slate` | Secondary body text, captions |
| `brand.surface` | `#FAFAFA` | `bg-brand-surface` | Card surfaces, alternating background panels |
| `brand.border` | `#EBEBEB` | `border-brand-border` | Hairline card borders, section dividers |
| `brand.border-subtle`| `#F3F3F3` | `border-brand-border-subtle`| Soft inner dividers, secondary cards |
| `brand.dark` | `#141416` | `bg-brand-dark` | Inset dark container cards, dropdowns |

---

### 1.2 Responsive Typography Scale
Typography is set using `Plus_Jakarta_Sans` for headings (`font-heading`) and `Instrument_Sans` for body copy (`font-sans`), loaded in [app/layout.tsx](file:///D:/RHEK/RHEK-global-website/app/layout.tsx).

```
Level                Mobile (0-639px)    Tablet (640-1023px)   Desktop (1024px+)     Font Class & Leading
──────────────────────────────────────────────────────────────────────────────────────────────────────────────────
Hero Display (H1)    26px - 28px         44px                  56px                  font-heading font-bold leading-[1.1] tracking-tight
Section Title (H2)   24px                30px                  34px                  font-heading font-bold leading-[1.18] tracking-tight
Subpage Title (H1)   24px                30px                  36px                  font-heading font-bold leading-tight tracking-tight
Card Title (H3)      17px                20px                  22px                  font-heading font-bold leading-snug
Prose Body Copy      14.5px - 15px       15px - 16px           16px                  font-sans font-normal leading-relaxed text-[#525252]
Micro-Badge / Pill   10.5px              11px                  11px                  font-semibold uppercase tracking-wider
```

---

### 1.3 The 8-Point Spacing Scale
All vertical rhythm, margins, paddings, and flex/grid gaps must be multiples of 8px:

| Token | Size | Tailwind Class | Implementation Target |
|---|---|---|---|
| `--space-xs` | `8px` | `p-2`, `gap-2` | Micro text-to-icon gaps, tiny badge adjustments |
| `--space-sm` | `16px` | `p-4`, `gap-4` | Mobile card gutters, title-to-description gaps |
| `--space-md` | `24px` | `p-6`, `gap-6` | Desktop grid gutters, description-to-CTA spacing |
| `--space-lg` | `32px` | `p-8`, `gap-8` | Standard card internal padding, paragraph gaps |
| `--space-xl` | `48px` | `py-12`, `gap-12` | Spacing between major section blocks |
| `--space-2xl`| `64px` | `py-16` | Mobile section top/bottom padding |
| `--space-3xl`| `96px` | `py-24` | Desktop section separation |

---

### 1.4 Container & Viewport Architecture
* **Standard Container (`.site-container`):**
  ```css
  .site-container {
    width: min(1280px, calc(100% - 2 * var(--page-gutter)));
    margin-inline: auto;
  }
  ```
* **Page Gutters (`var(--page-gutter)`):** `24px` on desktop, `16px` on screens `<768px`.
* **Rules:**
  1. **NEVER** apply horizontal padding (`px-*`) on an element that already has the `.site-container` class (prevents double gutter indentation).
  2. **NEVER** use arbitrary container widths like `max-w-[1360px]` for core content grids.
  3. Every page root and body applies `overflow-x: clip` to eliminate accidental horizontal jitter on mobile swipes.

---

## 2. Standardized Component Primitives

The codebase provides 5 standardized primitives in `components/common/`. **Never write ad-hoc markup when a primitive exists.**

### 2.1 The `<Button>` Primitive
Location: [components/common/Button.tsx](file:///D:/RHEK/RHEK-global-website/components/common/Button.tsx)

Supports standard HTML buttons or Next.js `<Link>` instances automatically when `href` is supplied. Includes built-in mutation locking, spinners, disabled states, and accessible focus rings.

#### Props API
* `variant?: "primary" | "secondary" | "dark" | "outline" | "ghost"` (default: `"primary"`)
* `size?: "sm" | "md" | "lg"` (default: `"md"`)
* `href?: string` (renders Next.js `Link` with identical styling)
* `loading?: boolean` (disables clicks and renders an animated spinner)
* `disabled?: boolean` (styles disabled opacity and prevents interactions)
* `icon?: React.ReactNode` (left icon)
* `rightIcon?: React.ReactNode` (right icon)
* `children: React.ReactNode`

#### Code Examples
```tsx
import { Button } from "@/components/common/Button";
import { ArrowRight, Calendar } from "@/components/common/icons";

// 1. Primary CTA with Link and Right Icon
<Button
  href="/#leads"
  variant="primary"
  size="md"
  rightIcon={<ArrowRight className="h-4 w-4" />}
>
  Claim Your Territory
</Button>

// 2. Secondary Bordered Action
<Button
  href="/services/janitorial-leads"
  variant="secondary"
  size="md"
>
  Check Territory Availability
</Button>

// 3. Form Submit Button with Mutation Lock
<Button
  type="submit"
  variant="primary"
  size="md"
  loading={isSubmitting}
  disabled={isSubmitting}
  className="w-full"
>
  Submit Territory Inquiry
</Button>
```

---

### 2.2 The `<SectionHeader>` Primitive
Location: [components/common/SectionHeader.tsx](file:///D:/RHEK/RHEK-global-website/components/common/SectionHeader.tsx)

Ensures consistent visual hierarchy for section titles across the homepage and subpages.

#### Props API
* `badge?: string` (uppercase overline badge text)
* `badgeIcon?: React.ReactNode` (optional icon inside the badge)
* `title: string | React.ReactNode` (H2 title)
* `description?: string | React.ReactNode` (lead paragraph copy)
* `align?: "left" | "center"` (default: `"left"`)
* `cta?: React.ReactNode` (right-aligned action button on desktop)
* `bordered?: boolean` (renders an architectural bottom border divider)
* `maxWidth?: string` (default: `"max-w-[680px]"`)

#### Code Example
```tsx
import { SectionHeader } from "@/components/common/SectionHeader";
import { Button } from "@/components/common/Button";
import { ShieldCheck, ArrowRight } from "@/components/common/icons";

<SectionHeader
  badge="Risk-Reversal Commitment"
  badgeIcon={<ShieldCheck className="h-3.5 w-3.5" />}
  title="100% Replacement Guarantee on Every Appointment"
  description="Every walkthrough includes verified facility square footage, cleaning frequency, and direct access to decision-makers with budget authority."
  maxWidth="max-w-[720px]"
  cta={
    <Button
      href="/contact"
      variant="secondary"
      size="sm"
      rightIcon={<ArrowRight className="h-3.5 w-3.5" />}
    >
      Review SLA Terms
    </Button>
  }
/>
```

---

### 2.3 The `<FormControls>` Primitives
Location: [components/common/FormControls.tsx](file:///D:/RHEK/RHEK-global-website/components/common/FormControls.tsx)

Provides `<TextInput>`, `<Select>`, and `<Textarea>`. Enforces accessible `<label>` association via `useId()`, visible focus rings (`focus:ring-1 focus:ring-brand-black`), and accessible error alerts (`aria-invalid`, `aria-describedby`, and `role="alert"`).

#### Code Example
```tsx
import { TextInput, Select, Textarea } from "@/components/common/FormControls";

<form onSubmit={handleSubmit} className="space-y-4">
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
    <TextInput
      label="Your Name"
      required
      value={formData.name}
      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      placeholder="e.g. Alex Morgan"
      error={errors.name}
    />

    <TextInput
      label="Work Email"
      type="email"
      required
      value={formData.email}
      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      placeholder="alex@company.com"
      error={errors.email}
    />
  </div>

  <Select
    label="Desired Monthly Walkthroughs"
    value={formData.volume}
    onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
  >
    <option value="5-10">5–10 Walkthroughs / mo</option>
    <option value="10-20">10–20 Walkthroughs / mo</option>
    <option value="20-40">20–40 Walkthroughs / mo</option>
  </Select>
</form>
```

---

### 2.4 The `<FaqAccordion>` Primitive
Location: [components/common/FaqAccordion.tsx](file:///D:/RHEK/RHEK-global-website/components/common/FaqAccordion.tsx)

The canonical single source of truth for accordions. Driven by pure typed data, with smooth Framer Motion height transitions and full keyboard accessibility.

#### Props API
* `faqs: Array<{ question: string; answer: string }>`
* `title?: string`
* `subtitle?: string`
* `badge?: string`
* `defaultOpenIndex?: number | null` (default: `0`)

---

### 2.5 Card Geometry Standards
All cards follow these strict structural standards:
* **Border Radius:** `rounded-xl` (`12px`). **Never** use `rounded-2xl` or `rounded-3xl` for standard content cards.
* **Border:** `border border-[#EBEBEB]` (`border-brand-border`).
* **Surface Background:** `bg-[#FAFAFA]` (`bg-brand-surface`) or `bg-white`.
* **Internal Padding:** `p-5 sm:p-6` on mobile/tablet, `p-6 sm:p-8` on desktop.
* **Hover Interaction:** `hover:border-[#101010] hover:bg-white hover:shadow-2xs transition-all duration-200`.

---

## 3. Semantic Landmark & Accessibility Rules

### 3.1 Landmark Separation (WCAG 2.2 AA)
**Strict Rule:** `<Navbar>` and `<Footer>` must **never** be placed inside `<main>`.

#### Correct Page Shell Structure:
```tsx
export default function StandardPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* 1. Global Navigation Header Landmark */}
      <header>
        <Navbar />
      </header>

      {/* 2. Main Page Content Landmark */}
      <main>
        <section className="site-container">
          {/* Content */}
        </section>
      </main>

      {/* 3. Global Footer Landmark */}
      <Footer />
    </div>
  );
}
```

### 3.2 Keyboard Navigation & Focus Visible
* **Never use bare `focus:outline-none`** without an accompanying visible replacement.
* Always use:
  ```css
  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E9204F] focus-visible:ring-offset-2
  ```
* All interactive controls (buttons, links, inputs, dropdown toggles) must meet the minimum **44×44px touch target** on mobile (`min-h-[44px]`).

---

## 4. The 43 CSS Engineering Standards Matrix

```
1. CSS Architecture               2. Layout Systems                 3. Positioning
[x] CSS custom properties         [x] Flexbox                       [x] Static positioning
[x] Global stylesheet             [x] CSS Grid                      [x] Relative positioning
[x] Utility class strategy        [x] Parent-child relationships    [x] Absolute positioning
[x] Component-scoped styling       [x] Row and column direction      [x] Fixed positioning
[x] Zero-runtime styling          [x] Justify-content & align-items [x] Sticky positioning
[x] Centralized design tokens     [x] Gap & spacing management      [x] Z-index & stacking contexts
[x] Semantic naming conventions   [x] Container clamping            [x] Overflow-x clipping

4. Responsive Design              5. CSS Fundamentals               6. Component Engineering
[x] Mobile-first breakpoints      [x] Cascade & source order        [x] Reusable React primitives
[x] Fluid responsive typography   [x] Low selector specificity      [x] Slot-based composition
[x] Fluid spacing & sizing        [x] Property inheritance          [x] Props customization
[x] Responsive Grid & Flexbox     [x] Box-sizing: border-box        [x] Shared dark/light variants
[x] Scalable responsive assets    [x] Display property rigor        [x] Strict TypeScript contracts
[x] Touch target sizing (≥44px)   [x] Unit discipline (px, rem, %)  [x] Data-driven rendering
[x] Viewport overflow clipping    [x] Pseudo-classes (:hover, etc.) [x] WCAG 2.2 AA accessibility
                                  [x] Fluid cubic-bezier motion
```

---

## 5. Anti-Slop Code Quality Guard

Every engineer and AI agent working on this codebase must adhere to the following:

1. **No Dead or Orphaned Files:** Before creating a component, verify whether a similar component already exists. Never leave duplicate or unreferenced components in the repository.
2. **Strict TypeScript Typing:** No loose `any` types. All component props and data models must have explicit TypeScript interfaces.
3. **No Hardcoded Hex Colors in Section Markup:** Always consume tokens (`brand.red`, `brand.black`, `brand.surface`, `brand.border`).
4. **Data-Driven Architecture:** Store repeated arrays (offerings, metrics, pricing tiers, phases) in typed files inside `data/` instead of hardcoding raw objects inside `.tsx` components.
5. **Mandatory Pre-Commit Verification:** Run the full verification suite before committing any changes:
   ```bash
   npx tsc --noEmit     # Must exit with code 0 (Zero type errors)
   npm run lint         # Must exit with code 0 (Zero linter errors)
   npm run build        # Must compile all static routes without failure
   ```
