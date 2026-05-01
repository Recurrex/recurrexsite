---
name: Crew member portfolio page template
description: Spec for individual crew member portfolio pages opened from /crew/:slug — layout, sections, styling, exclusions
type: feature
---
When a visitor clicks a crew member name (route `/crew/:slug` → `src/pages/CrewMember.tsx`), render a modern responsive "Personal Portfolio" page.

**Layout: Bento-grid, minimalist.**
- Light soft-gradient background (lavender/blue) — but it MUST harmonize with the site's reddish brand gradient theme. Keep the soft lavender/blue tint as the portfolio surface, with brand-red accents (existing `--brand-*` tokens / `bg-brand-gradient`) for highlights, the rotating ring around the avatar, and section icon backgrounds. No raw hex like `#5A4EE5` — map the "vibrant purple/blue" requested in the original prompt to the project's brand-red tokens so it matches the website theme.
- Use semantic tokens from `index.css` / `tailwind.config.ts`. No hardcoded colors in components.

**Sections (in order):**
1. Profile sidebar/top: circular profile image, Name (bold sans-serif), Pronouns, Current Role, Social icon buttons (GitHub, LinkedIn, X, etc.) in muted gray circle style.
2. Professional Summary — prominent, with a "newspaper" Lucide icon heading.
3. Bento grid of white cards (soft rounded corners, subtle drop shadows):
   - **Skills** (dedicated section)
   - **Education** — horizontal/grid cards: Degree, Institution, small graduation-cap icon
   - **Experience** — chronological list of past roles and companies
   - **Projects** — highlighted cards with brief descriptions
   - **Interests** — small hobbies/passions section

**Styling:**
- Font: Inter or Roboto (clean sans-serif).
- Icons: Lucide React.
- Cards: white bg, very soft rounded corners, subtle shadow.

**Exclusions:**
- Do NOT include a "Download CV" button anywhere.

**Data flow:**
- Member details (photo, name, pronouns, role, summary, skills, education, experience, projects, interests, socials) are provided by the user one member at a time.
- Store per-member data keyed by slug so `CrewMember.tsx` can look up by `useParams().slug`.
- Include site `Header` and `Footer` for consistency.