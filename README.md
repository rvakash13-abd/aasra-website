# AASRA — Website

A Next.js + Tailwind CSS + TypeScript landing page for AASRA, the disaster
relief and rescue coordination platform, featuring a scroll-driven hero
(via `framer-motion`) and sections covering every feature of the Android app.

## Structure

```
app/
  layout.tsx        Root layout + metadata
  page.tsx           Home page — wires the hero + all sections together
  globals.css         Tailwind directives + base dark theme
components/
  ui/
    scroll-expansion-hero.tsx   The scroll-expand hero component
  sections/
    About.tsx          Overview blurb
    Features.tsx        8-feature grid (shelters, safety loop, SMS, etc.)
    Phases.tsx           Before / During / After disaster-cycle breakdown
    TechStack.tsx         Tech badges (Kotlin, Firebase, Maps, etc.)
    CTA.tsx                Closing call-to-action + GitHub link
    Footer.tsx              Simple footer
```

## Setup

This project already has `/components/ui` set up (shadcn's default
components path), Tailwind CSS, and TypeScript configured — no extra CLI
setup is required. Just install and run:

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Notes

- Hero images are pulled from Unsplash via `next/image` — remote image
  domains are already whitelisted in `next.config.js`.
- Update the GitHub link in `components/sections/CTA.tsx` if your repo URL
  changes.
- The color palette (`aasra` / `aasra-light` / `aasra-dark` in
  `tailwind.config.ts`) matches the blue theme used in the Android app for
  brand consistency — edit there to re-theme the whole site.
- To swap the hero's `mediaType` to `"video"`, pass a `mediaSrc` pointing to
  an `.mp4` (or YouTube URL) in `app/page.tsx` — the component already
  supports both, see `mediaType?: "video" | "image"` in
  `scroll-expansion-hero.tsx`.
