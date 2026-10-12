# Kollektiv26 — Website

Corporate website for Kollektiv26, a contemporary cultural platform founded in Istanbul.

**Live:** [kollektiv26.com](https://kollektiv26.com)

---

## Stack

- **Next.js 15** — App Router
- **TypeScript**
- **Tailwind CSS v4** — tokens defined in `app/globals.css`
- **Framer Motion** — scroll and mount animations
- **DM Sans + DM Mono** — Google Fonts (loaded via `next/font`)

---

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Project Structure

```
app/
  layout.tsx          # Root layout, fonts, global metadata
  page.tsx            # Homepage
  globals.css         # Tailwind tokens + brand colors + keyframes
  about/              # About page
  contact/            # Contact page
  entertainment/      # Entertainment + Events / Label / Venues subpages
  tourism/            # Tourism + Concierge / Approach subpages
  innovation/         # Innovation page
  components/         # Shared components (Hero, Navbar, CollaboratorsStrip...)

lib/
  translations.ts     # All EN/TR copy — single source of truth
  LanguageContext.tsx # Language switcher context

public/
  favicon.png         # K26 mark
  site.webmanifest
  images/             # All page images
    partners/         # Collaborator logos (About page)
```

---

## Updating Content

### Text (EN / TR)

All page copy lives in `lib/translations.ts`.
Find the key you want, edit the `en` and `tr` values, save, push.

### Images

Drop the file into `public/images/` and reference it as `/images/filename.ext` in the page component.

### Partner Logos (About > Collaborators)

1. Add the logo PNG to `public/images/partners/`
2. Open `app/components/CollaboratorsStrip.tsx`
3. Add a line to the `logos` array:
   ```ts
   { src: '/images/partners/your-logo.png', alt: 'Brand Name' },
   ```

---

## Deployment

Automatic — every push to `main` triggers a Vercel build.

```bash
git add .
git commit -m "your message"
git push
```

No environment variables required.

---

## Brand Tokens

Defined in `app/globals.css` under `@theme`:

| Token     | Value     | Usage                  |
|-----------|-----------|------------------------|
| `black`   | `#0A0A0A` | Primary text           |
| `dark`    | `#1A1A1A` | Body text              |
| `mg`      | `#8C8C8C` | Muted text, eyebrows   |
| `lg`      | `#D8D4CC` | Borders                |
| `offwhite`| `#F8F5EF` | Section backgrounds    |
| `yellow`  | `#E8C832` | Accent, CTAs           |
| `saffron` | `#C8A96E` | Warm accent            |
