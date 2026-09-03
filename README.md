# Vegas Lounge & Bar

A karaoke bar & lounge site for Gelephu Mindfulness City, Bhutan — private
rooms, an open stage, cocktails, and a weekly lineup. Built with
[Next.js](https://nextjs.org) (App Router, TypeScript) from a
[Claude Design](https://claude.ai/design) mockup.

## Stack

- **Next.js 14** (App Router) + **TypeScript**, strict mode
- Plain **CSS Modules** — no CSS framework, design tokens live in
  `app/globals.css` (`:root` custom properties for color/type)
- **`next/font`** for Cormorant Garamond (display) + Outfit (body)
- **`next/image`** for the logo everywhere it appears
- Auto-generated **OG image**, **sitemap.xml**, **robots.txt**, and
  **JSON-LD** business schema — no manual assets to keep in sync
- Scroll-triggered entrance animations (`components/Reveal.tsx`, an
  `IntersectionObserver` wrapper) plus a CSS-only hero entrance —
  everything respects `prefers-reduced-motion`

No database, no backend, no auth. The reservation form is a client-only
stub (see [Known gaps](#known-gaps-before-launch) below).

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

## Project structure

```
app/
  layout.tsx          root layout: fonts, metadata, JSON-LD, skip link
  page.tsx             home — the full single-page site, every section
                        in order (hero through reserve), fully animated
  about/ karaoke/ drinks/ nights/ find-us/ reserve/
                        the SAME sections also get their own route, so
                        the nav (and shared links) can deep-link straight
                        to one topic instead of just anchor-scrolling home
  sitemap.ts robots.ts opengraph-image.tsx icon.jpg
  not-found.tsx error.tsx
  globals.css           design tokens, resets, shared button/eyebrow classes,
                        the .reveal scroll-animation framework

components/
  Hero, About, Karaoke, Drinks, Nights, Gallery, FindUs, Reserve
                        one section = one component + its .module.css;
                        each is mounted on both the home page and its own
                        route, so content only needs editing in one place
  Reveal                IntersectionObserver wrapper — fades/slides its
                        children up once as they scroll into view
  SiteHeader            sticky desktop nav used on every page except home
                        (home's nav lives inside the Hero's own overlay)
  MobileTopBar          sticky mobile header + slide-down menu
  MobileStickyBar        sticky mobile "Book a Table" bar
  PageShell             composes MobileTopBar + SiteHeader + <main> +
                        Footer + MobileStickyBar around a page's section
  ImagePlaceholder      styled stand-in for a real photo (see below)

lib/
  site-config.ts        single source of truth: business NAP (address,
                        phone, hours, socials), nav links, and the three
                        content toggles below
```

## Content toggles

`lib/site-config.ts` exports `siteConfig`:

| Field | Default | What it does |
|---|---|---|
| `showNightsMarquee` | `true` | Show/hide the scrolling nights ticker under the hero |
| `nightsView` | `"list"` | `"list"` or `"cards"` layout for the Nights page (desktop only — mobile is always a compact list) |
| `songCount` | `"12,000"` | The song-book count shown on the Karaoke page |

Business info (address, phone, email, hours, social links) lives in the
same file's `business` export and is used everywhere it appears (Footer,
Find Us, Hero, the JSON-LD schema) — change it once, it updates
everywhere.

## Photos

Every photo slot (hero background, gallery, rooms, drinks, map) is a
styled placeholder (`<ImagePlaceholder label="..." />`) — a dashed
frame with an icon and a caption naming the shot, not a real photo. Swap
one in by replacing the `<ImagePlaceholder>` with a real `next/image`
(or `<img>`) using the same `label` text as a guide for what to shoot.
The logo (`public/assets/vegas-logo.jpeg`) is the one real asset.

## Known gaps before launch

- **Reservation form** doesn't send anywhere yet — it flips to a "Sent"
  state locally on submit. Wire `handleSubmit` in `components/Reserve.tsx`
  to a real endpoint (email, a booking API, etc.) before going live.
- **Domain**: SEO metadata, the sitemap, and JSON-LD all resolve from
  `siteConfig.url`, which reads `NEXT_PUBLIC_SITE_URL` and falls back to
  a placeholder (`vegasloungebar.bt`). Set the real env var before
  deploying.
- **Social links** (Instagram/Facebook/TikTok) are `#` placeholders in
  `business.socials` — fill in real URLs when the accounts exist.
- **Favicon**: `app/icon.jpg` is the full logo photo, auto-scaled by
  Next.js. A properly cropped square icon would look sharper at 16–32px.
- **Map**: the Find Us page has a placeholder instead of an embedded map
  — swap in a real Google/Mapbox embed once you have an API key.
- **Duplicate content**: every section renders on both the home page and
  its own route (e.g. Drinks appears at `/` and at `/drinks`) so home
  reads as a complete single-page site while the nav still deep-links.
  That's a deliberate tradeoff, not a bug — but it means the same copy
  needs updating in only one place (the component), while search engines
  will see the same content at two URLs. Add a `canonical` tag pointing
  each subpage at `/#<section>` if that duplication ever needs cleaning up.

## Origin

This app was implemented from a Claude Design handoff. The original
mockup bundle (chat transcript + exported HTML prototypes) is preserved
in `chats/` and `project/` for reference — it's not part of the running
site.
