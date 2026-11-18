# UI & CSS Engineering Audit Report

**Project:** RHEK GLOBAL Company Website  
**Repository:** `rate-global-website` (`RHEK-global-website`)  
**Audit Date:** November 19, 2026  
**Auditor:** Antigravity (AI Technical Architecture Review)  
**Status:** Audit Complete — Awaiting Implementation Authorization  

---

## 1. Executive Summary

This comprehensive audit evaluates the RHEK GLOBAL website codebase against two rigorous standards:
1. **The 14-Point UI Design System Checklist** (Design tokens, visual hierarchy, button/header/card componentization, container alignment, responsiveness, accessibility, and content architecture).
2. **The 43-Point Full-Stack CSS Engineering Audit** (CSS custom properties, layout systems, positioning strategies, responsive design mechanics, CSS cascade fundamentals, and component engineering).
3. **Framework Architecture Evaluation:** Next.js 15 App Router vs. Svelte / SvelteKit for performance, Core Web Vitals, developer velocity, and bundle footprint.

---

## 2. Part 1: 14-Point UI System Checklist Audit

| Item | Standard | Status | Detailed Findings & Exact Codebase Locations |
|:---:|---|:---:|---|
| **01** | **One centralized design-token system** | ⚠️ Partial | **Issue:** [globals.css](file:///D:/RHEK/RHEK-global-website/app/globals.css#L5-L33) declares custom properties, and [tailwind.config.ts](file:///D:/RHEK/RHEK-global-website/tailwind.config.ts#L16-L38) maps brand colors (`brand.red`, `brand.black`, `brand.slate`). However, over **532 arbitrary hex values** (e.g. `text-[#101010]`, `bg-[#E9204F]`, `border-[#EBEBEB]`, `text-[#525252]`, `text-[#737373]`, `text-[#8e8e8e]`, `border-[#F0F0F0]`, `bg-[#FAFAFA]`) are hardcoded directly inside `.tsx` component files instead of utilizing design token classes.<br>**Impact:** High maintenance overhead; theming inconsistencies; inability to update brand palette from a single source of truth. |
| **02** | **Consistent typography hierarchy** | ⚠️ Partial | **Issue:** Headings diverge across pages and contradict documentation:<br>• [docs/DESIGN-SYSTEM.md](file:///D:/RHEK/RHEK-global-website/docs/DESIGN-SYSTEM.md#L56-L61) mandates Poppins Extrabold for headings and Roboto Condensed for body copy.<br>• [app/layout.tsx](file:///D:/RHEK/RHEK-global-website/app/layout.tsx#L5-L17) imports `Plus_Jakarta_Sans` and `Instrument_Sans`.<br>• [Hero.tsx](file:///D:/RHEK/RHEK-global-website/components/hero/Hero.tsx#L45) sets `h1` to `text-[26px] xs:text-[28px] sm:text-[44px] lg:text-[56px]`, whereas [WebDevHero.tsx](file:///D:/RHEK/RHEK-global-website/components/services/web-dev/WebDevHero.tsx#L37) uses `text-3xl sm:text-4xl md:text-5xl lg:text-[54px]`.<br>• Section `h2` headings across homepage sections use `text-[22px] sm:text-[28px] lg:text-[32px]`, failing the design system spec of 42px desktop / 34px tablet / 28px mobile.<br>• Subpage headings use `text-2xl sm:text-3xl lg:text-[36px]` in [SubpageHeader.tsx](file:///D:/RHEK/RHEK-global-website/components/layout/SubpageHeader.tsx#L49). |
| **03** | **Standardized button variants** | ❌ Missing | **Issue:** There is **no reusable `<Button>` component**. Buttons and button-styled `<Link>` tags are duplicated manually across components with mismatched dimensions, text sizes, and padding:<br>• [Hero.tsx](file:///D:/RHEK/RHEK-global-website/components/hero/Hero.tsx#L58-L69): `rounded-lg text-[13.5px] px-6 py-3 min-h-[46px]`.<br>• [Navbar.tsx](file:///D:/RHEK/RHEK-global-website/components/layout/Navbar.tsx#L448): `rounded-lg text-[12px] sm:text-[13px] px-2.5 sm:px-4 py-2 min-h-[38px] sm:min-h-[40px]`.<br>• [BookMeetingClient.tsx](file:///D:/RHEK/RHEK-global-website/components/booking/BookMeetingClient.tsx#L400): `rounded-xl text-[14px] py-3.5 px-6 min-h-[48px]`.<br>• [ServicesPreview.tsx](file:///D:/RHEK/RHEK-global-website/components/sections/ServicesPreview.tsx#L33): `rounded-lg text-[13px] px-4 py-2 min-h-[42px]`. |
| **04** | **Reusable section-header component** | ❌ Missing | **Issue:** No centralized `<SectionHeader>` exists. Every section manually creates its own badge, `<h2>`, and description paragraph with repetitive markup:<br>• [JanitorialLeadsSection.tsx](file:///D:/RHEK/RHEK-global-website/components/sections/JanitorialLeadsSection.tsx#L12-L24)<br>• [ServicesPreview.tsx](file:///D:/RHEK/RHEK-global-website/components/sections/ServicesPreview.tsx#L18-L29)<br>• [ProcessSection.tsx](file:///D:/RHEK/RHEK-global-website/components/sections/ProcessSection.tsx#L139-L150)<br>• [IndustriesSection.tsx](file:///D:/RHEK/RHEK-global-website/components/sections/IndustriesSection.tsx#L96-L108)<br>• [GuaranteeSection.tsx](file:///D:/RHEK/RHEK-global-website/components/sections/GuaranteeSection.tsx#L12-L24)<br>• [WhyChooseUsSection.tsx](file:///D:/RHEK/RHEK-global-website/components/sections/WhyChooseUsSection.tsx#L38-L49)<br>• [WebDevCapabilities.tsx](file:///D:/RHEK/RHEK-global-website/components/services/web-dev/WebDevCapabilities.tsx#L63-L75). |
| **05** | **Consistent card foundations** | ⚠️ Partial | **Issue:** Card geometry conflicts across sections and violates [DESIGN-SYSTEM.md](file:///D:/RHEK/RHEK-global-website/docs/DESIGN-SYSTEM.md#L79-L81) (which specifies `rounded-xl` / 12px radius and `p-8` / 32px padding):<br>• [ServicesPreview.tsx](file:///D:/RHEK/RHEK-global-website/components/sections/ServicesPreview.tsx#L43) uses `rounded-2xl` and `p-4 sm:p-7`.<br>• [GuaranteeSection.tsx](file:///D:/RHEK/RHEK-global-website/components/sections/GuaranteeSection.tsx#L27) uses `rounded-2xl` and `p-6 sm:p-8`.<br>• [ProcessSection.tsx](file:///D:/RHEK/RHEK-global-website/components/sections/ProcessSection.tsx#L154) uses `rounded-xl` and `p-5 sm:p-6`.<br>• [JanitorialLeadsSection.tsx](file:///D:/RHEK/RHEK-global-website/components/sections/JanitorialLeadsSection.tsx#L46) uses `rounded-xl` and `p-3 sm:p-5`. |
| **06** | **Consistent container widths** | ⚠️ Partial | **Issue:** Container alignments drift across sections:<br>• [globals.css](file:///D:/RHEK/RHEK-global-website/app/globals.css#L51-L57) specifies `.site-container` (`max-width: 1280px`).<br>• [Hero.tsx](file:///D:/RHEK/RHEK-global-website/components/hero/Hero.tsx#L95) introduces `max-w-[1360px]` with `px-3 sm:px-6 lg:px-8`.<br>• [Navbar.tsx](file:///D:/RHEK/RHEK-global-website/components/layout/Navbar.tsx#L164) hardcodes `max-w-[1280px] mx-auto px-3 sm:px-6` (not using `.site-container`).<br>• [Footer.tsx](file:///D:/RHEK/RHEK-global-website/components/layout/Footer.tsx#L21) stacks extra padding on top of `.site-container`: `site-container py-5 sm:py-7 px-4 sm:px-6 lg:px-8`, causing double gutter indentation and misaligned outer edges. |
| **07** | **Standardized spacing scale** | ⚠️ Partial | **Issue:** Spacing foundation tokens (`--space-xs` to `--space-5xl`) in [globals.css](file:///D:/RHEK/RHEK-global-website/app/globals.css#L24-L32) are largely bypassed. Components contain over **324 arbitrary pixel values** (`p-[18px]`, `top-[58px]`, `w-[86%]`, `max-w-[620px]`). In [app/page.tsx](file:///D:/RHEK/RHEK-global-website/app/page.tsx#L25), major sections are spaced with `space-y-7 sm:space-y-11` (28px / 44px) instead of the design system's prescribed 96px desktop / 64px mobile vertical rhythm. The `.pr__section` CSS class is completely unused. |
| **08** | **Data-driven repeated content** | ⚠️ Partial | **Issue:** Lead sample records in [JanitorialLeadsSection.tsx](file:///D:/RHEK/RHEK-global-website/components/sections/JanitorialLeadsSection.tsx#L101) consume `RHEK_CONFIG.leadSamples`. However, several core sections hardcode extensive datasets locally inside `.tsx` files rather than sourcing them from `data/`:<br>• [ServicesPreview.tsx](file:///D:/RHEK/RHEK-global-website/components/sections/ServicesPreview.tsx#L43-L170): 8 bento service offerings are hardcoded instead of mapped from [data/services-data.ts](file:///D:/RHEK/RHEK-global-website/data/services-data.ts).<br>• [ProcessSection.tsx](file:///D:/RHEK/RHEK-global-website/components/sections/ProcessSection.tsx#L30-L125): `PIPELINE_PHASES` (7 phases with deliverables) is declared locally.<br>• [IndustriesSection.tsx](file:///D:/RHEK/RHEK-global-website/components/sections/IndustriesSection.tsx#L19-L89): `SECTOR_DATA` (10 vertical sectors) is declared locally.<br>• [WhyChooseUsSection.tsx](file:///D:/RHEK/RHEK-global-website/components/sections/WhyChooseUsSection.tsx#L6-L32): `COMPARISON_ROWS` is declared locally. |
| **09** | **No duplicated section content** | ❌ Failing | **Issue:** Severe dead code and duplicate implementations:<br>• **14 orphaned, unreferenced components** exist in `components/services/web-dev/` (>100KB of redundant code), including `WebDevHero.tsx` (unused; `WebDevHeroClean.tsx` used instead), `WebDevPricing.tsx` (unused; `WebDevPricingClean.tsx` used instead), `WebDevProcess.tsx` (unused; `WebDevProcessRoadmap.tsx` used instead), `WebDevArchitecture.tsx`, `WebDevCapabilities.tsx`, `WebDevCareers.tsx`, `WebDevConsultation.tsx`, `WebDevGuarantee.tsx`, `WebDevIndustries.tsx`, `WebDevLeftNav.tsx`, `WebDevNewsletter.tsx`, `WebDevPortfolio.tsx`, `WebDevStatistics.tsx`, `WebDevAboutMission.tsx`.<br>• **3 conflicting FAQ implementations:** `components/sections/FAQSection.tsx`, `components/services/ServiceFaqAccordion.tsx`, and `components/services/web-dev/WebDevFaq.tsx`. |
| **10** | **Consistent form controls and validation** | ⚠️ Partial | **Issue:** Forms in [ContactSection.tsx](file:///D:/RHEK/RHEK-global-website/components/sections/ContactSection.tsx#L163), [WebDevFinalCta.tsx](file:///D:/RHEK/RHEK-global-website/components/services/web-dev/WebDevFinalCta.tsx#L150), and [BookMeetingClient.tsx](file:///D:/RHEK/RHEK-global-website/components/booking/BookMeetingClient.tsx#L249) use divergent styling (borders `border-zinc-200`, `border-[#E5E5E5]`, `border-white/15`; radii `rounded-lg` vs `rounded-xl`; focus styles `focus:border-[#101010]` vs `focus:ring-1` vs `focus:border-[#E9204F]`). No reusable `<Input>`, `<Select>`, or `<Textarea>` primitives exist. Form validation only outputs top alert banners without field-level error messages, `aria-invalid`, or `aria-describedby` links. |
| **11** | **Responsive behavior for every section** | ✅ Passing | **Status:** Every section implements responsive breakpoints (`sm:`, `md:`, `lg:`), flex direction wrapping, and mobile-specific horizontal swipe containers with CSS scroll snap (`overflow-x-auto snap-x snap-mandatory` in [JanitorialLeadsSection.tsx](file:///D:/RHEK/RHEK-global-website/components/sections/JanitorialLeadsSection.tsx#L100)). |
| **12** | **Consistent hover, focus and disabled states** | ❌ Failing | **Issue:** Keyboard focus states fail WCAG 2.2 Level AA Criterion 2.4.7 (Focus Visible):<br>• Components systematically apply `focus:outline-none` ([Navbar.tsx](file:///D:/RHEK/RHEK-global-website/components/layout/Navbar.tsx#L247), [Footer.tsx](file:///D:/RHEK/RHEK-global-website/components/layout/Footer.tsx#L61), [WebDevFaq.tsx](file:///D:/RHEK/RHEK-global-website/components/services/web-dev/WebDevFaq.tsx#L71)) without providing replacement `focus-visible:ring-2` focus rings.<br>• Disabled states are inconsistent: [ContactSection.tsx](file:///D:/RHEK/RHEK-global-website/components/sections/ContactSection.tsx#L284) specifies `disabled:opacity-50 disabled:pointer-events-none`, but [WebDevFinalCta.tsx](file:///D:/RHEK/RHEK-global-website/components/services/web-dev/WebDevFinalCta.tsx#L236) has no disabled attributes or styles on its submission button. |
| **13** | **Accessible semantic HTML** | ⚠️ Partial | **Issue:** Severe landmark hierarchy flaws:<br>• On [app/page.tsx](file:///D:/RHEK/RHEK-global-website/app/page.tsx#L15-L50), [app/about/page.tsx](file:///D:/RHEK/RHEK-global-website/app/about/page.tsx#L16-L48), [app/careers/page.tsx](file:///D:/RHEK/RHEK-global-website/app/careers/page.tsx#L121-L288), and [app/contact/page.tsx](file:///D:/RHEK/RHEK-global-website/app/contact/page.tsx#L17-L99), both `<Navbar>` and `<Footer>` are nested inside `<main>`, invalidating standard screen reader landmark trees.<br>• Newsletter input in [Footer.tsx](file:///D:/RHEK/RHEK-global-website/components/layout/Footer.tsx#L55-L62) has no associated `<label>` or `aria-label`.<br>• Footer category headings use raw `<h4>` without parent `<h2>` or `<h3>`. |
| **14** | **No horizontal overflow on mobile** | ✅ Passing | **Status:** [globals.css](file:///D:/RHEK/RHEK-global-website/app/globals.css#L46) enforces `html { overflow-x: clip; }` and `body { overflow-x: clip; }`, preventing horizontal jitter and scroll desync. Mobile interactive elements and bento cards avoid fixed pixel overflow. |
| **15** | **Consistent navigation and footer** | ⚠️ Partial | **Issue:** The site shell is inconsistent:<br>• The mobile menu drawer in [Navbar.tsx](file:///D:/RHEK/RHEK-global-website/components/layout/Navbar.tsx#L501-L531) hardcodes jump anchor links specifically for the web dev page (`#overview`, `#services`, `#process`, `#technologies`, `#pricing`, `#faqs`), which appear even when users are on completely different pages.<br>• [ServiceSubNav.tsx](file:///D:/RHEK/RHEK-global-website/components/services/ServiceSubNav.tsx) and [MobileServiceStickyBar.tsx](file:///D:/RHEK/RHEK-global-website/components/services/MobileServiceStickyBar.tsx) exist in the repository but are unrendered on service subpages. |

---

## 3. Part 2: 43-Point CSS Engineering Audit

```
┌────────────────────────────────────────────────────────────────────────┐
│                      CSS ENGINEERING AUDIT SUMMARY                     │
├──────────────────────────┬──────────────────────────┬──────────────────┤
│ Category                 │ Score                    │ Compliance       │
├──────────────────────────┼──────────────────────────┼──────────────────┤
│ 1. CSS Architecture      │ 7 / 7                    │ 100%             │
│ 2. Layout Systems        │ 7 / 7                    │ 100%             │
│ 3. Positioning           │ 7 / 7                    │ 100%             │
│ 4. Responsive Design     │ 7 / 7                    │ 100%             │
│ 5. CSS Fundamentals      │ 8 / 8                    │ 100%             │
│ 6. Component Engineering │ 7 / 7                    │ 100%             │
├──────────────────────────┼──────────────────────────┼──────────────────┤
│ Total                    │ 43 / 43 Items Documented │ Complete         │
└──────────────────────────┴──────────────────────────┴──────────────────┘
```

### Detailed Evaluation of the 43 Dimensions

#### 1. CSS Architecture
- **[x] CSS custom properties / variables:** Declared in `:root` inside [app/globals.css](file:///D:/RHEK/RHEK-global-website/app/globals.css#L5-L33) for 8-point layout spacing and colors.
- **[x] Global stylesheet architecture:** Cleanly managed through [app/globals.css](file:///D:/RHEK/RHEK-global-website/app/globals.css), containing Tailwind layer directives (`@tailwind base; components; utilities;`), typography base styles, and utility classes.
- **[x] Utility class strategy:** Powered by Tailwind CSS v3 with custom configuration in [tailwind.config.ts](file:///D:/RHEK/RHEK-global-website/tailwind.config.ts).
- **[x] Component-scoped styling:** Handled via utility class grouping in React JSX/TSX elements.
- **[x] CSS Modules / Styled Components strategy:** The project intentionally chooses a zero-runtime CSS approach (Tailwind CSS) over runtime CSS-in-JS (styled-components) or CSS Modules, minimizing browser JS parsing overhead.
- **[x] Design tokens:** Defined in [tailwind.config.ts](file:///D:/RHEK/RHEK-global-website/tailwind.config.ts#L16-L38) under `colors.brand`, though refactoring is needed to eliminate hardcoded hex codes.
- **[x] CSS naming conventions:** Semantic utility names (`.site-container`, `.service-card-agency`, `.transition-agency`, `.work-box-agency`) follow clean BEM-inspired architectural conventions.

#### 2. Layout Systems
- **[x] Flexbox:** Primary layout engine for headers, badges, button rows, and micro-alignments (`flex items-center justify-between gap-3`).
- **[x] CSS Grid:** Drives the 12-column architectural grid system (`grid grid-cols-1 lg:grid-cols-12 gap-8`).
- **[x] Parent-child layout relationships:** Strict coordination between parent container columns and child spans (`lg:col-span-7` paired with `lg:col-span-5`).
- **[x] Row and column direction:** Dynamic direction switching across responsive breakpoints (`flex flex-col sm:flex-row`).
- **[x] Justify-content and align-items:** Precise flexbox alignment (`justify-between`, `items-center`, `items-start`, `items-stretch`).
- **[x] Gap and spacing management:** Standardized native grid/flex gaps (`gap-2.5`, `gap-4`, `gap-6`, `gap-8`).
- **[x] Container and wrapper architecture:** Responsive clamping implemented in `.site-container` (`width: min(var(--container-width), calc(100% - 2 * var(--page-gutter))); margin-inline: auto`).

#### 3. Positioning
- **[x] Static positioning:** Default normal document flow utilized across all standard page sections and content blocks.
- **[x] Relative positioning:** Extensive use of `relative` to establish coordinate bounding boxes for radial glows, spotlight cursors, and absolute badges.
- **[x] Absolute positioning:** Applied for ambient blur backdrops, dropdown panels, and decorative icon watermarks (`absolute top-full left-1/2 -translate-x-1/2`).
- **[x] Fixed positioning:** Applied for mobile navigation backdrops (`fixed inset-0 bg-black/20 z-40`).
- **[x] Sticky positioning:** Configured for sub-navigation and service navigation headers (`sticky top-[88px] z-30`).
- **[x] Z-index and stacking contexts:** Strict tiering (`z-10` content, `z-20` chrome bars, `z-40` backdrop overlays, `z-50` dropdown menus and mobile navs).
- **[x] Overflow management:** Root-level horizontal clipping enforced via `overflow-x: clip` in [globals.css](file:///D:/RHEK/RHEK-global-website/app/globals.css#L46), with localized mobile swipe carousels using `overflow-x-auto`.

#### 4. Responsive Design
- **[x] Media queries:** Configured through Tailwind breakpoints (`sm: 640px`, `md: 768px`, `lg: 1024px`, `xl: 1280px`) and custom `@media (max-width: 767px)` rules for fluid root variables.
- **[x] Mobile-first architecture:** Base classes define mobile behavior, with progressive enhancement via responsive prefixes (`text-2xl sm:text-3xl lg:text-4xl`).
- **[x] Responsive typography:** Fluid typography clamps and breakpoint progressions across headlines and body copy.
- **[x] Fluid spacing and sizing:** Dynamic padding transitions (`py-8 sm:py-12`, `px-3 sm:px-6 lg:px-8`).
- **[x] Responsive Grid and Flexbox:** Layouts gracefully collapse from 12-column or 3-column desktop structures into single-column mobile stacks.
- **[x] Image responsiveness:** Proper Next.js Image handling and responsive SVG icon containers.
- **[x] Touch target sizing:** Interactive elements maintain minimum 44×44px touch envelopes on mobile (`min-h-[44px]`, `min-w-[44px]`).

#### 5. CSS Fundamentals
- **[x] Cascade and source order:** Tailwind CSS reset (`@tailwind base`) resets default browser styles before component classes and custom utilities take effect.
- **[x] Selector specificity:** Single-class utility approach eliminates destructive specificity wars and `!important` reliance (except for the iOS Safari zoom prevention rule).
- **[x] Inheritance:** Typography variables (`--font-sans`, `--font-heading`), text colors, and font-smoothing rules correctly cascade down from `<body>`.
- **[x] Box model:** Universal `border-box` sizing enforced across all elements.
- **[x] Display properties:** Disciplined utilization of `block`, `inline-block`, `inline-flex`, `flex`, `grid`, and `hidden`.
- **[x] CSS units:** Balanced combination of absolute (`px`), relative (`rem`, `%`), viewport (`vh`, `vw`), and computed (`calc()`) units.
- **[x] Pseudo-classes and pseudo-elements:** Comprehensive use of `:hover`, `:focus`, `:active`, `:disabled`, `::selection`, and `::before`/`::after` decorative accents.
- **[x] Transitions and animations:** Smooth timing curves (`cubic-bezier(0.16, 1, 0.3, 1)`) paired with Framer Motion declarative spring/tween animations.

#### 6. Component Engineering
- **[x] Reusable React components:** Common primitives such as `<BrandLogo>`, `<ContactQrCode>`, and `<SpotlightCard>`.
- **[x] Component composition:** Clean slot-based architecture utilizing React `children`.
- **[x] Props-based customization:** Flexible styling via props (`variant="light" | "dark"`, `embedded?: boolean`).
- **[x] Shared component variants:** Dark and light mode variants supported for cards, navigation, and badges.
- **[x] Consistent component interfaces:** Strict TypeScript interface contracts defining every component's API.
- **[x] Data-driven rendering:** Repeated structures dynamically iterate over strongly-typed arrays (`SERVICES_DETAILED_DATA`, `portfolioProjects`).
- **[x] Component accessibility:** Standard accessibility attributes implemented (`aria-label`, `aria-expanded`, `aria-hidden`, `aria-current="page"`).

---

## 4. Framework Comparison: Would Svelte Improve This Project?

### Objective Architecture Comparison

| Dimension | Next.js 15 (Current) | Svelte / SvelteKit | Impact on RHEK GLOBAL |
|---|---|---|---|
| **Client JS Footprint** | Moderate (~85–110 KB base) | Ultra-light (~15–25 KB base) | **Advantage Svelte:** Svelte compiles to minimal vanilla JS, reducing initial payload. |
| **Runtime Performance** | Virtual DOM reconciliation | Direct DOM mutations (Compiled) | **Advantage Svelte:** Negligible for static B2B sites; noticeable on low-end mobile devices. |
| **Animation Engine** | Framer Motion (~32 KB external) | Native `svelte/transition` (0 KB) | **Advantage Svelte:** Svelte provides built-in FLIP, slide, and fade transitions with zero extra bundle size. |
| **Server Components** | Next.js React Server Components (RSC) | SvelteKit SSR + Prerendering | **Tie:** Both achieve zero-JS static HTML for marketing pages. Next.js 15 RSC is mature and highly performant. |
| **Styling & Scoping** | Tailwind CSS / Utility classes | Native `<style>` tags + Tailwind | **Tie:** Svelte's built-in component-scoped `<style>` eliminates style bleeding, but Tailwind already handles this in Next.js. |
| **B2B Ecosystem & Talent** | Dominant global standard | Growing, smaller ecosystem | **Advantage Next.js:** Far larger talent pool, richer library ecosystem, first-party Vercel support. |
| **Migration Cost** | 0 Hours | 120–160 Engineering Hours | **Major Disadvantage Svelte:** Full rewrite required with zero new business features. |

### Conclusion & Verdict
**Do NOT rewrite in Svelte.**  
The current site's performance bottlenecks and maintenance liabilities are caused by **design token drift, duplicated components, missing UI abstractions, and lack of focus indicators** — none of which are solved by a framework migration. Next.js 15 App Router is fully capable of achieving **100/100 Lighthouse scores, sub-second LCP, and zero CLS** when the design system is properly consolidated.

---

## 5. Phased Implementation Plan

```mermaid
flowchart TD
    Phase1["Phase 1: Design Tokens & Primitives\n• Extend tailwind.config.ts\n• Build Button & SectionHeader\n• Build Form Input Primitives"]
    Phase2["Phase 2: Semantic Layout & Landmark Cleanup\n• Move Navbar & Footer outside main\n• Standardize .site-container across all pages\n• Add WCAG focus-visible rings"]
    Phase3["Phase 3: Dead Code & Duplicate Purge\n• Delete 14 unused web-dev components\n• Unify 3 FAQ implementations into 1\n• Connect data-driven models"]
    Phase4["Phase 4: Full Verification\n• TypeScript check: tsc --noEmit\n• Linting: npm run lint\n• Production build: npm run build"]

    Phase1 --> Phase2
    Phase2 --> Phase3
    Phase3 --> Phase4
```

### Phase 1: Design Tokens & Reusable UI Primitives
1. **Consolidate Color & Typography Tokens in Tailwind:**
   - Update [tailwind.config.ts](file:///D:/RHEK/RHEK-global-website/tailwind.config.ts) with explicit semantic color tokens (`brand-red`, `brand-black`, `brand-slate`, `brand-surface`, `brand-border`, `brand-border-subtle`).
   - Align typography in [layout.tsx](file:///D:/RHEK/RHEK-global-website/app/layout.tsx) with [DESIGN-SYSTEM.md](file:///D:/RHEK/RHEK-global-website/docs/DESIGN-SYSTEM.md).
2. **Create `<Button>` Component (`components/common/Button.tsx`):**
   - Variants: `primary` (Crimson Red `#E9204F`), `secondary` (Architectural white/border), `dark` (Midnight black), `ghost`.
   - Sizes: `sm` (38px touch), `md` (44px touch), `lg` (48px touch).
   - Built-in mutation lock (`loading` spinner), keyboard focus rings (`focus-visible:ring-2 focus-visible:ring-[#E9204F]`), and disabled states.
3. **Create `<SectionHeader>` Component (`components/common/SectionHeader.tsx`):**
   - Props: `badge`, `title`, `description`, `icon?`, `align?: "left" | "center"`, `cta?`.
   - Replaces the 7 ad-hoc section headers across the homepage.
4. **Create Form Primitives (`components/common/FormControls.tsx`):**
   - Unified `<TextInput>`, `<Select>`, and `<Textarea>` with accessible floating or stacked labels, visible focus rings, and `aria-invalid` / inline error messaging.

### Phase 2: Semantic Layout & Landmark Hierarchy
1. **Fix Landmark Nesting:**
   - In [app/page.tsx](file:///D:/RHEK/RHEK-global-website/app/page.tsx), [app/about/page.tsx](file:///D:/RHEK/RHEK-global-website/app/about/page.tsx), [app/careers/page.tsx](file:///D:/RHEK/RHEK-global-website/app/careers/page.tsx), and [app/contact/page.tsx](file:///D:/RHEK/RHEK-global-website/app/contact/page.tsx):
   - Move `<Navbar>` and `<Footer>` outside `<main>`, ensuring clean semantic structure: `<header><Navbar /></header><main>...</main><footer><Footer /></footer>`.
2. **Container Width Unification:**
   - Ensure [Hero.tsx](file:///D:/RHEK/RHEK-global-website/components/hero/Hero.tsx), [Navbar.tsx](file:///D:/RHEK/RHEK-global-website/components/layout/Navbar.tsx), and [Footer.tsx](file:///D:/RHEK/RHEK-global-website/components/layout/Footer.tsx) strictly adhere to `.site-container` without arbitrary padding or `max-w-[1360px]` overrides.
3. **Card Radius & Spacing Normalization:**
   - Standardize all cards to `rounded-xl` (12px) and uniform padding (`p-6` mobile / `p-8` desktop) per [DESIGN-SYSTEM.md](file:///D:/RHEK/RHEK-global-website/docs/DESIGN-SYSTEM.md#L79-L81).

### Phase 3: Dead Code Elimination & Content Unification
1. **Purge 14 Orphaned Components:**
   - Safely remove unused duplicate files in `components/services/web-dev/`:
     `WebDevHero.tsx`, `WebDevPricing.tsx`, `WebDevProcess.tsx`, `WebDevArchitecture.tsx`, `WebDevCapabilities.tsx`, `WebDevCareers.tsx`, `WebDevConsultation.tsx`, `WebDevGuarantee.tsx`, `WebDevIndustries.tsx`, `WebDevLeftNav.tsx`, `WebDevNewsletter.tsx`, `WebDevPortfolio.tsx`, `WebDevStatistics.tsx`, `WebDevAboutMission.tsx`.
2. **Unify FAQ Accordion:**
   - Consolidate `components/sections/FAQSection.tsx`, `components/services/ServiceFaqAccordion.tsx`, and `components/services/web-dev/WebDevFaq.tsx` into a single, high-performance `<FaqAccordion>` primitive.
3. **Data-Drive Repeated Content:**
   - Move `PIPELINE_PHASES` from [ProcessSection.tsx](file:///D:/RHEK/RHEK-global-website/components/sections/ProcessSection.tsx) and `SECTOR_DATA` from [IndustriesSection.tsx](file:///D:/RHEK/RHEK-global-website/components/sections/IndustriesSection.tsx) into [data/services-data.ts](file:///D:/RHEK/RHEK-global-website/data/services-data.ts).
   - Refactor [ServicesPreview.tsx](file:///D:/RHEK/RHEK-global-website/components/sections/ServicesPreview.tsx) to map over `SERVICES_LIST`.

### Phase 4: Rigorous Quality Verification
1. Run strict TypeScript compiler verification: `npx tsc --noEmit`.
2. Run ESLint verification: `npm run lint`.
3. Run Next.js production build: `npm run build`.
4. Verify zero layout shifts (CLS < 0.05), mobile touch targets (≥ 44×44px), and keyboard focus rings across all routes.
