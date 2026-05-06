# FarmBot Landing Page

FarmBot is a modern, production-ready landing page template for smart farming, IoT, AI, SaaS, and AgriTech startups. It is built with Next.js 14 App Router, TypeScript, Tailwind CSS 3.4, Framer Motion, and next-themes.

## Features

- Modern responsive landing page
- Dark mode with `next-themes`
- Smooth scroll navigation
- Framer Motion scroll animations
- Reusable `Button`, `Card`, and section components
- Centralized data in `constants/data.ts`
- Mock IoT dashboard with temperature, humidity, and soil condition
- Pricing, testimonials, FAQ accordion, CTA, navbar, and footer
- Clean open-source-ready folder structure

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS 3.4
- Framer Motion
- next-themes
- lucide-react

## Project Structure

```txt
frontend/
  app/
    globals.css
    layout.tsx
    page.tsx
  components/
    layout/
    sections/
    ui/
  constants/
    data.ts
  hooks/
    use-mounted.ts
  lib/
    utils.ts
  public/
    images/
  types/
    index.ts
```

## Installation

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

## Build

```bash
npm run build
npm run start
```

## Screenshots

Add screenshots to `public/images/` and reference them here.

```md
![FarmBot Hero](public/images/screenshot-hero.png)
![FarmBot Dashboard](public/images/screenshot-dashboard.png)
```

## Deployment

The easiest deployment target is Vercel.

1. Push this project to GitHub.
2. Import the repository in Vercel.
3. Set the project root to `frontend` if this lives inside a monorepo.
4. Deploy.

## License

This template is ready to adapt for open-source or commercial portfolio use.
