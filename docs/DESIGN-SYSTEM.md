# Rate Global — Design System & Visual Specification

## 1. Color System & Theme Balancing (60-30-10 Rule)

Use the 60-30-10 color balance principle across all pages and components:
- **60% — Dominant (Neutral Backgrounds):** Clean, crisp surfaces such as pure white (`#FFFFFF`) and subtle off-white/slate tints (`#F8FAFC`, `#F8FAFD`).
- **30% — Supporting (Structural Surfaces & Typography):** Navigation bars, container cards, dark slate borders (`#E2E8F0`), and charcoal typography (`#0F172A`, `#1E293B`, `#334155`).
- **10% — Accent (Key Actions & Highlights):** Rate Global primary blue (`#2563EB` / `#1D4ED8`), interactive states, badges, and primary call-to-actions.

---

## 2. Spacing Scale (8px-Based System)

We use an 8px base spacing scale with 4px micro-adjustments for precise layout harmony.

| Token | Size | Category | Usage Examples |
|---|---|---|---|
| `--space-1` | 4px | Micro spacing | Icon-to-text gaps, tiny badge adjustments |
| `--space-2` | 8px | Tight spacing | Related labels, micro copy, dense chip gaps |
| `--space-3` | 12px | Compact spacing | Form input padding, small button gaps |
| `--space-4` | 16px | Standard spacing | Card internal gaps, buttons, paragraph margins |
| `--space-6` | 24px | Component spacing | Spacing between related content blocks |
| `--space-8` | 32px | Large component spacing | Spacing between cards or content blocks |
| `--space-12` | 48px | Section sub-spacing | Spacing between headings and content groups |
| `--space-16` | 64px | Section spacing | Section vertical padding on mobile/tablet |
| `--space-24` | 96px | Major section spacing | Section vertical padding on desktop |
| `--space-32` | 128px | Hero spacing | Hero desktop vertical separation |

---

## 3. Element Spacing Reference

| Website Element | Recommended Spacing |
|---|---|
| Header height | 72–88px (Navbar container locked at max 1080px) |
| Header horizontal padding | 24px mobile, 32–64px desktop |
| Hero top/bottom padding | 64–96px mobile, 96–144px desktop |
| Hero heading to paragraph | 16–24px |
| Paragraph to CTA buttons | 24–32px |
| Between CTA buttons | 12–16px |
| Section top/bottom padding | 64–80px mobile, 96–120px desktop |
| Section heading to description | 12–16px |
| Heading block to card grid | 32–48px |
| Card internal padding | 24–32px |
| Gap between cards | 24–32px |
| Footer top padding | 48–64px mobile, 64–96px desktop |

---

## 4. Alignment & Grid Architecture

For corporate agency credibility, adhere to a structured grid:
- **Max Content Container Width:** 1080px – 1200px max width for readability and tight editorial focus.
- **Desktop Grid:** 12-column layout with 24px gutters.
- **Mobile Grid:** 4-column layout with 16–20px page gutters.

### Component Alignment Standards
- **Header:** Logo left-aligned, navigation centered or right-aligned, primary CTA at the far right.
- **Hero:** Left-aligned headline and body copy, paired with visual proof card or split layout.
- **Services:** Align cards to a shared top edge with equalized padding and heights.
- **Case Studies & Portfolio:** Align previews, badges, and outcome statistics to common grid baselines.
- **Footer:** Multi-column layout with structured category groupings and semantic copyright bar.

---

## 5. Responsive Spacing Breakpoints

| Property | Mobile (320–767px) | Tablet (768–1023px) | Desktop (1024px+) |
|---|---|---|---|
| Page Side Gutter | 16–24px | 24–32px | 32–64px |
| Hero Vertical Padding | 64–80px | 80–100px | 100–144px |
| Section Vertical Padding | 64px | 80px | 96–120px |
| Card Grid Gap | 16px | 20px | 24–32px |
| Card Internal Padding | 20–24px | 24px | 28–32px |

---

## 6. Implementation CSS Tokens

```css
:root {
  /* Spacing Scale */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-6: 24px;
  --space-8: 32px;
  --space-12: 48px;
  --space-16: 64px;
  --space-24: 96px;
  --space-32: 128px;

  /* Layout */
  --container-width: 1080px;
  --page-gutter: 24px;
  --grid-gap: 24px;

  /* Components */
  --header-height: 80px;
  --card-padding: 32px;
  --section-padding: 96px;
}
```
