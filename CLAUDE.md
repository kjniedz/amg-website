# AMG Website

Marketing website for Anchor Mill Group — a global asset protection and risk management firm serving UHNW families, family offices, and global executives.

## Project Structure

```
src/
├── app/                           # Next.js App Router pages
│   ├── layout.tsx                 # Root layout (fonts, theme, metadata)
│   ├── page.tsx                   # Home page (dynamic-loaded sections)
│   ├── globals.css                # Theme variables, animations, base styles
│   ├── about/page.tsx             # About page
│   ├── contact/page.tsx           # Contact + FAQ page
│   ├── strategies/page.tsx        # Service domains detail page
│   └── how-we-serve/page.tsx      # Client profiles + case studies page
├── components/
│   ├── ui/                        # shadcn/Radix base components
│   ├── layout/                    # Navbar, Footer, ScrollProgress
│   ├── effects/                   # Visual effects (Spotlight)
│   ├── providers/                 # ThemeProvider (next-themes)
│   └── sections/                  # Page content sections
│       ├── home/                  # 10 home page sections
│       ├── about/                 # 4 about page sections
│       ├── strategies/            # 2 strategies sections
│       ├── contact/               # ContactForm, ContactFAQ
│       └── how-we-serve/          # ClientProfiles, JourneyDetail, CaseStudies
└── lib/                           # Utilities and config
    ├── utils.ts                   # cn() helper
    ├── site-config.ts             # Site metadata, URLs, email
    ├── nav-data.ts                # Navigation link data
    └── animations.ts              # Shared motion variants
```

## Tech Stack

- **Next.js 16** / React 19 / TypeScript 5
- **Tailwind CSS v4** (PostCSS, `@theme inline` in globals.css)
- **shadcn/ui** + Radix UI primitives
- **Motion 12** (`motion/react`, not `framer-motion`)
- **next-themes** (dark-first, class-based)
- **Zod 4** (contact form validation)
- **Lucide React** (icons)

## Organization Rules

- Pages → `src/app/<route>/page.tsx`, one file per route
- Sections → `src/components/sections/<page>/`, one component per file
- UI primitives → `src/components/ui/` (shadcn-managed)
- Layout shells → `src/components/layout/`
- Config/data → `src/lib/`
- Named exports on all section components (for `next/dynamic`)
- Client components only where needed (`"use client"` directive)

## Design Conventions

- **Dark-first**: `:root` = dark values, `.light` = light override
- **Typography**: `font-mono` (IBM Plex Mono) for headings/labels, `font-sans` (Geist) for body
- **Headings**: `font-mono uppercase tracking-tight font-bold`
- **Labels**: `font-mono text-xs uppercase tracking-widest text-primary`
- **Container**: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- **Section padding**: `py-24 lg:py-32`
- **Primary color**: gold/sand (`#d4c9a8` dark, `#8b7d5e` light)
- **Animations**: CSS `scroll-animate`/`in-view` via IntersectionObserver; Motion for hero, counters, scroll progress
- All animations respect `prefers-reduced-motion`

## Code Quality

After editing ANY file, run:

```bash
npm run typecheck && npm run lint && npm run build
```

Fix ALL errors before continuing. Zero tolerance for type errors, lint warnings, or build failures.
