# Red-X Official Website

Digital home for **Red-X, MIT Manipal**.  
Built to showcase events, members, stories, partnerships, and the visual identity of the club with a fast, modern React stack.

## Highlights

- Multi-page React experience with smooth navigation
- Rich media sections for events, team, and partner ecosystem
- 3D-enhanced visual layers for hero and highlight sections
- Production-ready deployment configuration for Vercel

## Tech Stack

- React + TypeScript
- Vite
- Tailwind CSS
- shadcn/ui component system
- ESLint for code quality

## Quick Start

### 1. Install dependencies

```bash
npm install
```

### 2. Start development server

```bash
npm run dev
```

### 3. Build production bundle

```bash
npm run build
```

### 4. Preview production build locally

```bash
npm run preview
```

## Available Scripts

- `npm run dev` - Run Vite dev server
- `npm run build` - Create production build
- `npm run preview` - Preview built app
- `npm run lint` - Run ESLint checks

## Project Layout

- `src/` - Application source code
- `src/pages/` - Route-level pages (Home, Events, Team, Partners, etc.)
- `src/components/` - Shared UI + 3D visual components
- `public/uploads/` - Static media assets grouped by section
- `vercel.json` - Deployment and route fallback behavior

## Deployment

This project is configured for **Vercel**.

- Build command: `npm run build`
- Output directory: `dist`
- SPA routes should resolve through `index.html` fallback (configured in `vercel.json`)

## Contributing

1. Create a feature branch.
2. Make focused changes with clear commit messages.
3. Run `npm run lint` before pushing.
4. Open a pull request with context and screenshots for UI updates.

---

Crafted for the Red-X community at MIT Manipal.
