# Recurrex Homepage — Build Plan

A single-page, responsive site for the Recurrex collective, structured to match the reference layout (centered logo header, splatter-portrait hero, rotating-text badge bottom-left, glowing lightbulb bottom-right). Dark mode by default with an instant light-mode toggle.

## Design Direction

- **Palette**: Dark charcoal base (`#0B0B0F` background, `#15151B` surfaces), white/near-white text, muted gray for secondary copy. Light mode: `#FAFAF7` background, `#0B0B0F` text.
- **Accent gradient**: Cyan → indigo → magenta (`#22d3ee → #6366f1 → #a855f7 → #ec4899`). Used for the watercolor splatter behind the hero image, gradient borders on hover, the rotating ring stroke, and the lightbulb glow. Same gradient in both themes.
- **Typography**: Space Grotesk for headlines (distinct, portfolio-grade) + Inter for body. Loaded from Google Fonts.
- **Motion**: Subtle fade-in on scroll, hover lift + gradient border on cards, smooth 200ms theme transition, slow continuous spin on the badge.

## Page Structure

```text
┌─ Header (sticky, blurred) ────────────────────────┐
│  [Nav links]      [Recurrex logo]   [Social ◯◯◯◯◯] │
├───────────────────────────────────────────────────┤
│  HERO                                              │
│  ┌──────────────┐    Recurrex is a dynamic         │
│  │  splatter +  │    collective of innovators,     │
│  │  hero image  │    engineers, and creators.      │
│  └──────────────┘    ↓ scroll                      │
├───────────────────────────────────────────────────┤
│  CREW   (5 horizontal cards in a row)              │
├───────────────────────────────────────────────────┤
│  PROJECTS  (3-col grid of cards)                   │
├───────────────────────────────────────────────────┤
│  ACHIEVEMENTS  (clean list)                        │
├───────────────────────────────────────────────────┤
│  FOOTER — Connect Us                               │
│  Socials · Email · © 2026 Recurrex                 │
└───────────────────────────────────────────────────┘
   ◉ rotating-text badge (bottom-left)   💡 (bottom-right)
```

## Sections

### 1. Header
- Sticky, semi-transparent with backdrop blur.
- Left: nav links — Home, Crew, Projects, Achievements, Gallery, Posts, Connect, About (smooth-scroll for in-page anchors; placeholder routes for the rest).
- Center: Recurrex wordmark/monogram with gradient accent.
- Right: 5 circular icon buttons (GitHub, LinkedIn, Instagram, X, Facebook) linking to the provided URLs, opening in a new tab.
- Mobile: collapses to a hamburger sheet.

### 2. Hero
- Two columns on desktop, stacked on mobile.
- Left: image placeholder (`/placeholder.svg` for now, swap-ready) sitting on top of a vibrant watercolor/splatter SVG built from the accent gradient with blur + blend modes — same energy as the reference.
- Right: large headline "Recurrex is a dynamic collective of innovators, engineers, and creators." with a small "↓ Scroll to explore" cue below. No buttons.

### 3. Crew
- Section title + 5 horizontal rectangular cards in a responsive row (wraps to 2-col / 1-col on smaller screens).
- Each card: circular avatar placeholder, name, muted role.
- Hover: gradient border + slight lift. Whole card links to `/crew/[slug]` (placeholder detail page).
- Order: Aritraa Chakraborty (AI Engineer), Joy Mukherjee (Software Engineer), Ankit Kabiratna (Frontend Developer), Abir Banik (Robotics and IoT Engineer), Mainak Saha (Backend Developer).

### 4. Projects
- 3-column responsive grid (1-col mobile, 2-col tablet).
- Each card: image placeholder, bold project name, one-line description.
- Hover: gradient glow + lift. Whole card links to `/projects/[slug]` placeholder.
- Initial entries: Deep Shield 360 (AIML Driven Video Analysis Software), Velo (Rapid Crisis Response Requirement for Pros), Silence Game (HTML CSS Game).

### 5. Achievements
- Clean vertical list with a subtle gradient accent bar on the left of each row.
- Initial entry: IEEE EDS Code2Console Game Development Competition 2026 — 1st Runner-Up.

### 6. Footer (Connect Us)
- Top row: social icons (same set as header) with "Connect on social" label, and the contact email `recurrex.ofc@gmail.com` as a `mailto:` link.
- Bottom: "© 2026 Recurrex. All Rights Reserved." centered.

### 7. Floating Elements
- **Bottom-right** — minimalist lightbulb icon (Lucide `Lightbulb`) with a soft gradient glow. Click toggles `dark` class on `<html>`, persists in `localStorage`, defaults to dark. 200ms color/background transition for a smooth fade.
- **Bottom-left** — circular badge: Recurrex mark in the center, encircled by SVG `textPath` rotating text "TURNING VISION INTO CODE • TURNING VISION INTO CODE •". Slow continuous rotation, gradient stroke ring matching the accent. Same scale/placement as the reference's "Hire Me" badge.

## Technical Notes

- **Files**:
  - `src/pages/Index.tsx` — composes all sections.
  - `src/components/site/Header.tsx`, `Hero.tsx`, `Crew.tsx`, `Projects.tsx`, `Achievements.tsx`, `Footer.tsx`, `ThemeToggle.tsx`, `RotatingBadge.tsx`, `SocialIcons.tsx`, `SplatterBackdrop.tsx`.
  - `src/hooks/useTheme.ts` — dark/light state + `localStorage` persistence, defaults to dark.
  - `src/pages/CrewMember.tsx`, `src/pages/ProjectDetail.tsx` — minimal placeholder detail pages.
  - Routes added to `src/App.tsx`: `/crew/:slug`, `/projects/:slug`.
- **Design system**: extend `src/index.css` with HSL tokens for charcoal surfaces, gradient stops, and a `.bg-brand-gradient` utility. Extend `tailwind.config.ts` with the gradient colors, `Space Grotesk` + `Inter` font families, and `fade-in` / `slow-spin` keyframes.
- **Fonts**: loaded via `<link>` in `index.html` from Google Fonts.
- **Splatter**: pure SVG with feGaussianBlur + radial gradients (no image asset needed) so it scales and recolors cleanly in both themes.
- **Rotating text**: SVG `<path>` + `<textPath>` with `animation: spin 18s linear infinite`.
- **Accessibility**: social icons get `aria-label`s, theme toggle gets `aria-pressed`, `prefers-reduced-motion` disables the spin and scroll fade-ins.

## Out of Scope (for this pass)

- Real content for `/crew/:slug` and `/projects/:slug` beyond a styled placeholder.
- Gallery, Posts, Connect, About pages — nav links scroll to anchors where present, otherwise route to a simple "Coming soon" page.
- CMS/backend wiring.
