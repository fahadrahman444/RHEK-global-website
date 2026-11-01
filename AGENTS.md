# AGENTS.md — Rate Global Website Master Engineering Guide

## 1. Project Identity & Confirmed Tech Stack

- **Project:** Rate Global Company Profile Website
- **Repository:** `rate-global-website`
- **Purpose:** Build a professional, high-performing company website showcasing Rate Global's web development services, technical expertise, portfolio, and contact options.
- **Approved Tech Stack:**
  - **Framework:** Next.js (App Router)
  - **UI Library:** React
  - **Language:** TypeScript (Strict)
  - **Styling:** Tailwind CSS
  - **Animations:** Framer Motion

> [!IMPORTANT]
> **Strict Execution Gate:** Do NOT scaffold, build, or implement any code, features, or project structures until the user explicitly gives permission to start. Always plan, inspect, or propose first and await direct authorization before executing.

The website must communicate credibility, technical competence, and business value while generating qualified project inquiries.

---

## 2. Source of Truth Hierarchy

Before implementing any feature, inspect the existing codebase and read relevant documentation in this exact order:

1. `docs/SRS.md` — approved functional and non-functional requirements.
2. `docs/PROJECT-CONTEXT.md` — confirmed company information and business constraints.
3. `docs/DESIGN-SYSTEM.md` — visual design tokens and component standards.
4. Existing application architecture and established coding conventions.

**Integrity Rule:** Never invent company facts, clients, testimonials, certifications, performance metrics, contact information, or project outcomes. Use clearly labeled placeholders when approved content is unavailable.

---

## 3. Core Engineering Philosophy & Anti-Slop Quality Guard

### Ponytail Minimalist Philosophy
- **YAGNI (You Aren't Gonna Need It):** Never build speculative features or 50-line abstractions when a 5-line standard solution works.
- **Reuse Aggressively:** Search for and leverage existing utilities and components before writing new ones.
- **Minimal Diffs:** Keep changes targeted, surgical, and concise. The cleanest code is code you never have to write or maintain.

### Anti-Slop Code Quality Guard
- **No Dead Code:** Zero dead imports, unused variables, empty functions, or zombie commented-out code.
- **Strict Typing:** No loose `any` types in TypeScript. Model domain data accurately.
- **No Redundant Async:** Never use `async`/`await` on synchronous operations or wrap code in hollow `try-catch` blocks that just rethrow.
- **Doc Integrity:** Preserve relevant existing documentation and inline comments during edits.

### Dual-Process Thinking (System 1 vs. System 2)
- **System 1 (Intuitive & Fast):** Fast, automatic execution for trivial bug fixes, UI styling tweaks, and simple questions.
- **System 2 (Deliberate & Analytical):** Structured step-by-step reasoning for architectural modifications, state management, form submissions, security, and race conditions. Always plan first and evaluate edge cases before executing.

---

## 4. UI, Layout, & Animation Standards

- **Use Framer Motion:** Rely on declarative `motion.div` or native animations rather than fragile ad-hoc CSS keyframes.
- **Backdrop Blur Performance:** NEVER animate the `opacity` of elements with CSS `backdrop-filter: blur` (causes heavy browser composite lag). Animate a solid translucent overlay inside a static blur wrapper instead.
- **No Heavy Glassmorphism:** Favor clean borders, subtle shadows, and solid surfaces over heavy frosted-glass effects.
- **Mobile-First Touch & Typography:**
  - Minimum 44×44px touch targets for mobile interactive controls.
  - Safe line-heights (`leading-[1.15]`+) on mobile headings to avoid text collisions when titles wrap.
  - Use `overflow-x-clip` / `overflow-hidden` to prevent horizontal jitter on mobile swipes.

---

## 5. Async Resilience & Race Condition Prevention

- **Button Mutation Locks:** Always guard UI buttons initiating backend mutations (e.g. `if (loading) return;` or disabled state) to prevent double-click race conditions.
- **Cache Invalidation:** Always synchronize UI state after mutations via query invalidation or optimistic updates rather than manual fragile state juggling.

---

## 6. The 8 Core Project Skills & Priority Checklist

Every task must satisfy this priority hierarchy:

### 1. `frontend-design` (Highest Priority)
- Creates polished, distinctive website sections that match Rate Global's brand.
- **Rules:** Avoid generic AI card-grid tropes; follow design tokens; use meaningful whitespace; build composable, reusable components; ensure strong visual hierarchy.

### 2. `responsive-development`
- Ensures all pages and components work seamlessly across phones, tablets, laptops, and desktops.
- **Rules:** Mobile-first layouts; no accidental horizontal scroll overflow; comfortable interactive touch targets ($\ge 44\times 44\text{px}$); responsive images; touch-friendly navigation.

### 3. `accessibility`
- Target: **WCAG 2.2 Level AA**.
- **Rules:** Semantic HTML; visible focus indicators; keyboard navigation; accessible form labels and error announcements; sufficient color contrast; respect `prefers-reduced-motion`.

### 4. `seo-optimization`
- Builds search-friendly pages and metadata.
- **Rules:** Unique page titles and meta descriptions; logical heading hierarchy (`h1` $\rightarrow$ `h2` $\rightarrow$ `h3`); clean URLs; XML sitemap; `robots.txt`; canonical tags; accurate structured data.

### 5. `web-performance`
- Targets Core Web Vitals:
  - **LCP:** $\le 2.5\text{s}$
  - **INP:** $\le 200\text{ms}$
  - **CLS:** $\le 0.1$
- **Rules:** Next.js Image optimization; serve modern formats; minimize client-side JavaScript; avoid third-party bloat; lazy-load below-the-fold assets; eliminate layout shifts.

### 6. `form-development`
- Implements reliable, secure inquiry and contact forms.
- **Rules:** Client and server-side validation; double-submission locks; CSRF and spam protection; clear success and error states; no hardcoded fake submissions in production.

### 7. `testing-and-validation`
- Verifies that changes actually work before claiming completion.
- **Rules:** Run available lint checks (`npm run lint`), TypeScript checks (`npx tsc --noEmit`), unit/component tests, and production build (`npm run build`). Never report a test passed without execution evidence.

### 8. `code-review`
- Reviews implementation quality and catches regressions.
- **Rules:** Inspect git diffs surgically; ensure zero dead code or loose types; identify security risks; verify responsive layouts; report findings with file and line references.

---

## 7. Mandatory Task Workflow

For every task:
1. **Inspect:** Read relevant requirements and files in read-only mode.
2. **Propose:** Outline 2–4 options with trade-offs, affected components, and risks.
3. **Await Authorization:** Stop and await user approval before creating files or altering code.
4. **Implement:** Write the minimal complete, anti-slop solution.
5. **Verify:** Execute lint, type-check, tests, and production build commands.
6. **Report:** Deliver a concise summary of modified files, verification output, and commit status.

---

## 8. Definition of Quality

Prefer correct, maintainable, accessible, secure, and production-ready code over quick visual approximations. Do not optimize for code volume—optimize for user value, reliability, clarity, and long-term maintainability.
