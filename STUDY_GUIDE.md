# 📘 Red-X Official Website — Comprehensive Study Guide

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Tech Stack Deep Dive](#2-tech-stack-deep-dive)
3. [Project Architecture & Folder Structure](#3-project-architecture--folder-structure)
4. [Build Tooling & Configuration Files](#4-build-tooling--configuration-files)
5. [Application Entry Point & Bootstrapping](#5-application-entry-point--bootstrapping)
6. [Routing & Navigation (React Router)](#6-routing--navigation-react-router)
7. [Layout System & Component Composition](#7-layout-system--component-composition)
8. [Page Components — In-Depth Breakdown](#8-page-components--in-depth-breakdown)
9. [3D Graphics with React Three Fiber](#9-3d-graphics-with-react-three-fiber)
10. [UI Component Library (shadcn/ui)](#10-ui-component-library-shadcnui)
11. [Styling Architecture — Tailwind CSS & Custom CSS](#11-styling-architecture--tailwind-css--custom-css)
12. [Custom Hooks](#12-custom-hooks)
13. [State Management Patterns](#13-state-management-patterns)
14. [Performance Optimizations](#14-performance-optimizations)
15. [SEO & Meta Tags](#15-seo--meta-tags)
16. [Deployment with Vercel](#16-deployment-with-vercel)
17. [TypeScript Configuration](#17-typescript-configuration)
18. [Code Quality — ESLint](#18-code-quality--eslint)
19. [Static Assets & Media Management](#19-static-assets--media-management)
20. [Important Code Snippets & Patterns](#20-important-code-snippets--patterns)
21. [Key Terminologies & Glossary](#21-key-terminologies--glossary)

---

## 1. Project Overview

**Red-X Official** is a multi-page, production-grade React website built for **Red-X**, MIT Manipal's premier socio-adventure club. The club operates with two wings:

- **Adventure-X** — Organizes treks, expeditions, rock climbing, and outdoor adventures.
- **DISHA** — The social service wing handling donation drives, awareness campaigns, and NGO collaborations.

The website serves as the digital home for the club, showcasing:
- **Events** — Treks, DISHA drives, membership drives, and speaker series ("Interact")
- **Team** — Executive board, departmental board members, advisory committee
- **Partners** — 25+ local business partners offering exclusive discounts to members
- **Membership** — A ₹349 annual membership with partner discounts and event access

### What Makes This Project Technically Interesting

| Aspect | Detail |
|---|---|
| **3D Visuals** | Uses `three.js` via `@react-three/fiber` for interactive hero scenes, floating particles, DNA helixes, wave grids, and animated torus knots |
| **Component Architecture** | shadcn/ui component system with Radix UI primitives |
| **Styling** | Tailwind CSS with a fully custom HSL-based design token system |
| **Performance** | React `lazy()` + `Suspense` for code splitting of heavy 3D components |
| **Deployment** | Production-ready Vercel config with SPA fallback routing |
| **Type Safety** | Full TypeScript throughout |

---

## 2. Tech Stack Deep Dive

### 2.1 React 18

React is a JavaScript library for building user interfaces using a **component-based architecture**. This project uses React 18 (`^18.3.1`).

> **Think of it like this:** React lets you build a website like LEGO blocks. Each block (component) is independent and reusable — a navbar block, a card block, a footer block. You snap them together to build the full page. If you need to change the footer, you only touch the footer block — everything else stays the same.

**Key React Concepts Used in This Project:**

- **Functional Components** — Every component is a function, not a class. You write a JavaScript function that returns what the UI should look like.
- **JSX** — HTML-like syntax embedded in JavaScript/TypeScript. Instead of creating elements with code like `document.createElement('div')`, you just write `<div>` directly in your JS file. The build tool converts this into real JavaScript behind the scenes.
- **Hooks** — Special functions (always start with `use`) that give your components superpowers: remembering data (`useState`), running code at specific times (`useEffect`), referencing DOM elements (`useRef`), and caching expensive work (`useMemo`).
- **Props** — Data that flows from a parent component to a child component. Think of it like arguments to a function — the parent "calls" the child component and passes in data.
- **Conditional Rendering** — Showing or hiding parts of the UI based on some condition (like showing a menu only when a button is clicked).
- **List Rendering** — Using `.map()` on arrays to create a list of UI elements from data (like turning an array of team members into a list of team cards).

```tsx
// Functional component with hooks
const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);  // State hook — remembers which slide we're on
  
  useEffect(() => {  // Effect hook — runs code "on the side" (not during rendering)
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
    }, 4000);
    return () => clearInterval(timer);  // Cleanup: stop timer when component is removed
  }, [galleryImages.length]);  // Dependency array: re-run only if this value changes

  return <div>...</div>;  // JSX: what the component looks like
};
```

### 2.2 TypeScript

TypeScript is a **typed superset of JavaScript**. It adds static type checking at compile time, catching errors before runtime.

> **Think of it like this:** JavaScript is like writing with a pen — fast, but if you make a mistake you only find out when you run the code. TypeScript is like writing with spell-check on — it catches mistakes (like passing a number where a string is expected) *as you type*, before you even run anything.

**Key TypeScript features used:**

```tsx
// Interface — defines the "shape" of an object
// Think of it as a blueprint: "anything claiming to be LayoutProps must have a 'children' field"
interface LayoutProps {
  children: React.ReactNode;
}

// Generics — React.FC<LayoutProps> means "this is a Functional Component that accepts LayoutProps"
// Think of it like a fill-in-the-blank: React.FC<___> says "this component takes ___ as props"
// Just like a vending machine<Drink> gives you Drinks, React.FC<LayoutProps> gives you a component
// that knows it receives LayoutProps
const Layout: React.FC<LayoutProps> = ({ children }) => { ... };

// Union types — a value can be one of several types
// Think of it as "this locker can hold EITHER a number OR nothing at all (null)"
const [openFaq, setOpenFaq] = React.useState<number | null>(null);

// Non-null assertion (!) — tells TypeScript "trust me, this exists"
// document.getElementById might return null if the element doesn't exist,
// but we KNOW #root exists in our HTML, so we use ! to silence the warning
createRoot(document.getElementById("root")!).render(...);

// Tuple types — fixed-length arrays with specific types per position
// Like a coordinate: first slot is always x, second is y, third is z
position: [number, number, number]  // e.g., [3, 5, -2]

// `as const` — freezes values as exact literal types, not just "string"
// Without it: ADD_TOAST is type "string". With it: ADD_TOAST is literally "ADD_TOAST" and nothing else
const actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
} as const;
```

### 2.3 Vite

**Vite** (French for "fast") is a modern build tool and dev server. It replaces older tools like Webpack and Create React App.

> **Think of it like this:** Imagine you're a chef. Webpack is like cooking an entire buffet before serving — slow, even if the customer only ordered soup. Vite is like cooking each dish only when ordered — the soup arrives instantly while the dessert is still being prepared in the background. This is why the dev server starts in milliseconds instead of 30+ seconds.

**Why Vite over Webpack or Create React App (CRA)?**
- **Instant server start** — Uses ESBuild (a super-fast tool written in Go) for pre-bundling.
- **Lightning-fast HMR** — When you save a file, only that specific component refreshes on screen, not the whole page. Your state (like what tab you're on) is preserved.
- **Optimized production builds** — Uses Rollup to create the smallest possible files for deployment.

This project uses `@vitejs/plugin-react-swc`, which uses **SWC** (a Rust-based compiler) instead of Babel for even faster JSX/TypeScript transformation. Think of SWC as a faster translator — it converts your modern TypeScript+JSX code into regular JavaScript that browsers understand.

```ts
// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(() => ({
  server: {
    host: "::",     // Listen on all network interfaces (allows access from other devices on your WiFi)
    port: 8080,     // Dev server URL: http://localhost:8080
  },
  plugins: [
    react(),         // Enables JSX and React Fast Refresh
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),  // Shortcut: "@/" means "src/" folder
    },
  },
}));
```

**The `@` alias** is a convenience shortcut. Instead of writing confusing relative paths like `import X from '../../../../components/Button'`, you can write `import X from '@/components/Button'`. The `@` always points to the `src/` folder, no matter how deep you are in the file tree. This is configured in both `vite.config.ts` (so Vite knows where to find files) and `tsconfig.json` (so TypeScript knows the types).

### 2.4 Tailwind CSS

Tailwind CSS is a **utility-first CSS framework**. Instead of writing custom CSS classes with made-up names, you compose styles directly in your HTML/JSX using pre-defined tiny utility classes.

> **Think of it like this:** Traditional CSS is like painting a wall — you pick a color, name it ("living-room-wall"), and apply it. Tailwind is like using stickers — there are pre-made stickers for every color, size, spacing, and effect. You just stick them on directly. No naming, no separate file, no guessing where a style is defined.

```html
<!-- Traditional CSS approach: you write CSS in a separate file -->
<div class="card"> ... </div>
<!-- In styles.css: .card { padding: 2rem; background: #1f2937; border-radius: 1rem; } -->

<!-- Tailwind approach: styles are right in the markup, no separate file needed -->
<div className="p-8 bg-gray-800 rounded-2xl"> ... </div>
<!-- p-8 = padding 2rem, bg-gray-800 = dark gray background, rounded-2xl = very rounded corners -->
```

**Why utility-first?**
- No context switching between CSS and HTML files — everything is in one place.
- No naming collisions — you never have two `.card` classes fighting each other.
- Unused CSS is automatically removed in production (your CSS file is tiny).

### 2.5 Three.js via React Three Fiber

**Three.js** is a JavaScript library for creating 3D graphics in the browser using WebGL (the browser's connection to your graphics card/GPU). **React Three Fiber** (`@react-three/fiber`) lets you build 3D scenes using the same JSX and component patterns you already know from React.

> **Think of it like this:** Three.js is like giving a sculptor (the GPU) instructions to shape 3D objects. Normally you'd write step-by-step instructions ("create a sphere, paint it red, put it here"). React Three Fiber lets you write those instructions as React components, so it feels just like building a regular webpage, except the "page" is a 3D world.

```tsx
// Imperative Three.js (traditional way — step-by-step instructions)
const geometry = new THREE.SphereGeometry(1, 32, 32);
const material = new THREE.MeshBasicMaterial({ color: '#ff0000' });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Declarative React Three Fiber (this project's approach — describe what you want)
<mesh>
  <sphereGeometry args={[1, 32, 32]} />
  <meshBasicMaterial color="#ff0000" />
</mesh>
// Same result, but reads like HTML. React handles the creation/cleanup automatically.
```

---

## 3. Project Architecture & Folder Structure

```
RedX_Official/
├── public/                      # Static assets (served as-is, not processed by the build tool)
│   ├── favicon.ico              # Browser tab icon
│   ├── robots.txt               # SEO: tells search engine crawlers what to index
│   ├── placeholder.svg          # Placeholder image
│   └── uploads/                 # All media organized by section
│       ├── 551e6dc7-...png      # Red-X logo (UUID-named)
│       ├── stories/             # 10 gallery images (1.jpeg – 10.jpeg)
│       ├── treks/               # Trek event photos
│       ├── disha/               # DISHA event photos
│       ├── membership/          # Membership drive photos
│       ├── interact/            # Speaker series photos
│       ├── team/                # 16 team member photos
│       └── partners/            # Partner business logos
│
├── src/                         # Application source code (everything the build tool processes)
│   ├── main.tsx                 # Entry point — the FIRST file that runs, mounts React
│   ├── App.tsx                  # Root component — sets up routing and wraps everything
│   ├── App.css                  # Legacy Vite CSS (mostly unused, came with the template)
│   ├── index.css                # Global styles — Tailwind base + all custom animations
│   ├── vite-env.d.ts            # Tells TypeScript about Vite-specific types
│   │
│   ├── pages/                   # One file per "page" of the website
│   │   ├── Index.tsx            # Just re-exports Home (a shortcut file)
│   │   ├── Home.tsx             # Landing page — hero, gallery, mission
│   │   ├── Events.tsx           # Events showcase — treks, DISHA, etc.
│   │   ├── Team.tsx             # Team members display
│   │   ├── Partners.tsx         # Partner network with discount info
│   │   ├── Membership.tsx       # Membership purchase page + FAQ
│   │   └── NotFound.tsx         # 404 error page (shown for invalid URLs)
│   │
│   ├── components/              # Reusable building blocks
│   │   ├── Layout.tsx           # Page wrapper — puts Nav on top, Footer on bottom
│   │   ├── Navigation.tsx       # Sticky navbar with mobile hamburger menu
│   │   ├── Footer.tsx           # Site footer with social links and contact
│   │   ├── 3d/                  # Three.js / React Three Fiber 3D components
│   │   │   ├── HeroScene.tsx    # Home page 3D background (spheres, DNA helix, wave)
│   │   │   ├── FloatingParticles.tsx  # Configurable particle system used on many pages
│   │   │   └── AnimatedTorus.tsx      # Spinning donut-knot decoration
│   │   └── ui/                  # shadcn/ui primitive components (49 pre-built UI components)
│   │       ├── button.tsx       # Button with multiple visual variants
│   │       ├── toast.tsx        # Pop-up notification component
│   │       ├── dialog.tsx       # Modal/popup window
│   │       └── ... (46 more)
│   │
│   ├── hooks/                   # Custom React hooks (reusable logic)
│   │   ├── use-mobile.tsx       # Detects if user is on a phone-sized screen
│   │   └── use-toast.ts         # Toast notification state management
│   │
│   └── lib/                     # Utility functions
│       └── utils.ts             # cn() — a helper for merging CSS classes smartly
│
├── index.html                   # The ONE HTML file — React renders everything inside <div id="root">
├── package.json                 # Project manifest — lists all dependencies and scripts
├── vite.config.ts               # Vite build/dev configuration
├── tailwind.config.ts           # Tailwind CSS customization (colors, animations, etc.)
├── tsconfig.json                # Root TypeScript config (shared settings)
├── tsconfig.app.json            # TypeScript config for the React app code
├── tsconfig.node.json           # TypeScript config for build scripts (Vite config itself)
├── postcss.config.js            # CSS processing pipeline config
├── eslint.config.js             # Code quality rules
├── components.json              # shadcn/ui configuration (tells CLI where to put components)
└── vercel.json                  # Vercel deployment settings (URL rewrites)
```

### Architecture Pattern

This project follows the **"Pages + Shared Components"** architecture pattern:

> **Think of it like a building:** Pages are the rooms (bedroom, kitchen, bathroom). Components are the things shared across rooms (doors, windows, lights). Hooks are the building's systems (electricity, plumbing) — they provide functionality that any room can plug into. Lib is the toolbox (screwdrivers, hammers) — simple tools used everywhere.

```
Pages (route-level)  →  import  →  Shared Components (layout, 3D, UI)
       ↓                                      ↓
  Use hooks/lib                        Use hooks/lib
```

---

## 4. Build Tooling & Configuration Files

### 4.1 `package.json` — Project Manifest

> **Think of it like this:** `package.json` is the project's ID card + shopping list. It tells the world the project's name, version, and how to run it. The `dependencies` section is the shopping list — all the external code libraries the project needs.

**NPM Scripts:**

| Script | Command | Purpose |
|---|---|---|
| `dev` | `vite` | Start development server with HMR at `localhost:8080` |
| `build` | `vite build` | Create optimized production bundle in `dist/` folder |
| `build:dev` | `vite build --mode development` | Development build (no minification, easier to debug) |
| `preview` | `vite preview` | Serve the `dist/` folder locally to preview what production looks like |
| `lint` | `eslint .` | Check for code quality issues across the entire project |

**Key Dependencies Explained:**

| Package | What It Does (Simple) |
|---|---|
| `react`, `react-dom` | The core React library + the part that connects React to the browser's DOM |
| `react-router-dom` | Lets you have multiple "pages" in a single-page app (maps URLs to components) |
| `@tanstack/react-query` | Makes fetching data from APIs easy — handles loading states, caching, retries automatically |
| `three`, `@react-three/fiber`, `@react-three/drei` | 3D graphics engine + React wrapper + helper utilities for 3D |
| `@radix-ui/react-*` | Pre-built accessible UI behaviors (like dropdowns, dialogs, tabs) without any styling — you add your own look |
| `class-variance-authority` (CVA) | Lets you define component "variants" (like button sizes: small, medium, large) in a type-safe way |
| `clsx` | A tiny helper that builds CSS class strings conditionally: `clsx('base', isActive && 'active')` → `"base active"` |
| `tailwind-merge` | Smartly merges Tailwind classes — if you have `px-4` and `px-8`, it knows `px-8` should win (not have both) |
| `lucide-react` | A library of 1000+ beautiful, consistent SVG icons as React components |
| `sonner` | Shows toast notifications (those little pop-up messages like "Copied!" or "Saved!") |
| `zod` | Validates data shapes — ensures "this object has a name (string) and age (number)" at runtime |
| `react-hook-form` | Handles form inputs efficiently — tracks values, validation, errors with minimal re-renders |
| `@vercel/analytics` | Automatically tracks how many people visit the site and which pages they view |
| `recharts` | Creates charts and graphs (bar charts, line charts, pie charts) as React components |
| `date-fns` | A modern utility library for working with dates (formatting, comparing, calculating) |

### 4.2 `postcss.config.js` — CSS Processing Pipeline

> **Think of it like this:** PostCSS is like a car wash for your CSS. Your raw CSS goes in one end, passes through different "stations" (plugins), and comes out polished on the other end.

```js
export default {
  plugins: {
    tailwindcss: {},    // Station 1: Convert Tailwind shorthand into real CSS
    autoprefixer: {},   // Station 2: Add browser-specific prefixes so CSS works everywhere
  },
}
```

**How CSS flows through the pipeline:**

```
Your index.css  →  [Tailwind: expands @tailwind directives]  →  [Autoprefixer: adds -webkit- etc.]  →  Final CSS
```

### 4.3 `components.json` — shadcn/ui Configuration

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",         // Visual style preset
  "rsc": false,               // Not using React Server Components (this is a client-only SPA)
  "tsx": true,                // Components are in TypeScript + JSX
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "src/index.css",
    "baseColor": "slate",     // The base gray color palette used throughout
    "cssVariables": true,     // Colors are defined as CSS variables (easy to theme)
    "prefix": ""              // No prefix added to class names
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  }
}
```

This file is used by the `shadcn-ui` CLI tool. When you run a command like `npx shadcn-ui add button`, it reads this file to know where to place the generated `button.tsx` file and how to write the imports.

---

## 5. Application Entry Point & Bootstrapping

### 5.1 `index.html` — The HTML Shell

The browser first loads `index.html`. This is a **Single Page Application (SPA)**, meaning the entire website is just ONE HTML file.

> **Think of it like this:** A traditional website is like a book — each page is a separate piece of paper. An SPA is like a magic book with one page — the content changes in front of your eyes as you "flip pages" (click links), but you never actually leave the single page.

```html
<body>
  <div id="root"></div>                          <!-- An empty box — React fills it with the UI -->
  <script type="module" src="/src/main.tsx"></script>  <!-- The JavaScript that makes it all work -->
</body>
```

Key observations:
- `type="module"` — Tells the browser this is a modern ES Module (required by Vite).
- The `<head>` has extensive **SEO meta tags** (Open Graph for Facebook sharing, Twitter Cards, keywords).
- **Google Fonts** (Inter) is loaded with `preconnect` — this tells the browser to start connecting to Google's font servers early, before it actually needs the fonts, reducing wait time.

### 5.2 `main.tsx` — React Bootstrapping

```tsx
import { createRoot } from 'react-dom/client'
import { Analytics } from '@vercel/analytics/react'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById("root")!).render(
  <>
    <App />
    <Analytics />
  </>
);
```

**Step-by-step what happens when you visit the website:**

1. Browser downloads and runs `main.tsx`.
2. `document.getElementById("root")` finds the empty `<div id="root">` in the HTML.
3. `createRoot()` tells React: "This div is where you should render the app."
4. `.render()` starts React, which builds the entire UI inside that div.
5. `<App />` is your entire application — all pages, navigation, everything.
6. `<Analytics />` silently tracks page views (invisible to users).
7. `import './index.css'` loads all the global styles.
8. The `<>...</>` (called a Fragment) wraps multiple elements without creating an extra `<div>` in the HTML. It's like an invisible container.
9. The `!` after `getElementById("root")` is TypeScript's way of saying "I promise this element exists, don't warn me about it being null."

> [!NOTE]
> **Why no `<StrictMode>`?** React's StrictMode intentionally runs some code twice during development to help find bugs. It's probably omitted here to avoid double-running the 3D animation frames, which could cause visual glitches or lag.

### 5.3 `App.tsx` — The Root Component (Provider Tree)

```tsx
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/team" element={<Team />} />
            <Route path="/events" element={<Events />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);
```

This demonstrates the **Provider Pattern** — wrapping the app in layers, like Russian nesting dolls. Each wrapper adds a "superpower" that all components inside can use.

> **Think of it like this:** Imagine a building. `QueryClientProvider` is the internet connection — any room can access data. `TooltipProvider` is the intercom system — any room can show tooltips. `BrowserRouter` is the hallway system — allows navigation between rooms. `Layout` is the building frame — puts the roof (nav) and floor (footer) on every room.

```
QueryClientProvider          ← Makes data-fetching tools available everywhere
  └── TooltipProvider        ← Makes tooltip behavior available everywhere
      ├── Toaster            ← Renders toast notifications (pop-up messages)
      ├── Sonner             ← Another toast system (sonner library)
      └── BrowserRouter      ← Enables URL-based navigation
          └── Layout         ← Wraps every page with Navigation + Footer
              └── Routes     ← Decides which page to show based on URL
```

---

## 6. Routing & Navigation (React Router)

### 6.1 How React Router Works

> **Think of it like this:** Imagine a TV remote. When you press Channel 1, the TV shows Channel 1 content. Press Channel 5, it shows Channel 5. The TV itself never changes — only the content does. React Router works the same way: the URL is the "channel number," and React swaps the content without reloading the entire page.

React Router is a **client-side routing** library. Unlike traditional websites where clicking a link makes the browser load an entirely new page from the server, React Router just swaps the component — it's instant and smooth.

**Route Definitions:**

| Path | Component | Description |
|---|---|---|
| `/` | `<Home />` | Landing page |
| `/partners` | `<Partners />` | Partner discounts catalog |
| `/membership` | `<Membership />` | Membership purchase + FAQ |
| `/team` | `<Team />` | Team members showcase |
| `/events` | `<Events />` | Events showcase |
| `*` | `<NotFound />` | Catch-all for unknown URLs (shows a 404 page) |

The `*` wildcard route is like a "default case" — if someone types `redx.com/xyz` and `/xyz` doesn't match any defined route, the `*` catches it and shows `<NotFound />`.

### 6.2 `<BrowserRouter>` vs `<HashRouter>`

`<BrowserRouter>` creates clean URLs like `/team` using the browser's **History API**. The alternative, `<HashRouter>`, would create URLs like `/#/team` (with a `#`). Clean URLs look more professional and are better for SEO, but they require the server to be configured to serve `index.html` for all routes (which is done in `vercel.json`).

### 6.3 Navigation with `<Link>`

```tsx
// ❌ DON'T do this — it causes a FULL page reload (defeats the SPA purpose)
<a href="/events">Events</a>

// ✅ DO this — it navigates without reloading the page (instant, smooth)
<Link to="/events">Events</Link>
```

`<Link>` intercepts the click, updates the URL in the browser's address bar, and tells React Router to render the matching component — all without a network request or page reload.

### 6.4 Active Route Detection

The Navigation component highlights which page you're currently on:

```tsx
const location = useLocation();  // Hook: "What URL am I on right now?"

const isActive = (path: string) => location.pathname === path;
// If the user is on /team, isActive('/team') returns true, isActive('/events') returns false

// The active link gets brighter styles:
className={`... ${
  isActive(item.path)
    ? 'text-white bg-red-600/30 border border-red-600/70'   // Bright: "you are here"
    : 'text-gray-300 hover:text-white hover:bg-red-600/20'  // Dimmed: other pages
}`}
```

---

## 7. Layout System & Component Composition

### 7.1 The Layout Component

```tsx
interface LayoutProps {
  children: React.ReactNode;  // "children" can be anything React can render — components, text, etc.
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);  // Scroll to top when the page changes
  }, [location.pathname]);  // This effect re-runs every time the URL path changes

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};
```

**Key Concepts:**

1. **`children` prop** — This is React's way of saying "whatever content is placed between my opening and closing tags." When we write `<Layout><Home /></Layout>`, the `<Home />` becomes `children` inside Layout.

   > **Think of it like this:** `Layout` is a picture frame. `children` is whatever photo you put inside it. The frame (Nav + Footer) stays the same, but the photo (current page) changes.

2. **Scroll restoration** — Without the `useEffect`, navigating from a long page (scrolled to the bottom) to a new page would keep the scroll position. The `window.scrollTo(0, 0)` resets to the top of the page every time you navigate.

3. **Flexbox layout** — `min-h-screen flex flex-col` creates a layout where:
   ```
   ┌─────────────────────────┐
   │      <Navigation />     │  ← Fixed height navbar
   ├─────────────────────────┤
   │                         │
   │    <main> (flex-1)      │  ← Grows to fill ALL remaining space
   │       {children}        │     (so footer is always at the bottom,
   │                         │      even on short pages)
   ├─────────────────────────┤
   │       <Footer />        │  ← Fixed height footer, always at bottom
   └─────────────────────────┘
   ```

### 7.2 The Navigation Component

The Navigation implements a **responsive navbar** — it looks different on phones vs. computers:
- **Desktop (≥768px):** Horizontal row of links
- **Mobile (<768px):** Hamburger menu icon that opens a dropdown

```tsx
const [isOpen, setIsOpen] = useState(false);  // Tracks whether the mobile menu is open

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Events', path: '/events' },
  { name: 'Partners', path: '/partners' },
  { name: 'Membership', path: '/membership' },
  { name: 'Team', path: '/team' },
];
```

**Responsive design pattern using Tailwind breakpoints:**

```tsx
{/* Desktop navigation — hidden on small screens, visible on medium and up */}
<div className="hidden md:flex items-center space-x-8">
  {navItems.map((item) => <Link ... />)}
</div>

{/* Mobile menu button — visible on small screens, hidden on medium and up */}
<div className="md:hidden">
  <button onClick={() => setIsOpen(!isOpen)}>
    {isOpen ? <X size={24} /> : <Menu size={24} />}
    {/* Shows ✕ when menu is open, ☰ (hamburger) when closed */}
  </button>
</div>
```

> **Think of it like this:** `hidden md:flex` means "hide this by default, but show it as a flex container on screens 768px wide or larger." It's like saying "this furniture is only for the living room (big screen), not the closet (phone screen)."

**Sticky navbar:** `sticky top-0 z-50` — The nav sticks to the top of the screen as you scroll down. `z-50` gives it a high "stacking order" so it always appears on top of other content (like images or 3D elements).

**Backdrop blur:** `bg-black/95 backdrop-blur-sm` — The `/95` means 95% opacity (slightly see-through). `backdrop-blur-sm` blurs whatever is behind the nav, creating a frosted glass effect.

### 7.3 The Footer Component

The footer uses a **responsive grid** that automatically adjusts columns:

```tsx
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  {/* Column 1: Logo + Description */}
  {/* Column 2: Contact Info */}
  {/* Column 3: Social Links */}
</div>
```

- On phones (`grid-cols-1`): All 3 sections stack vertically (1 column).
- On desktops (`md:grid-cols-3`): All 3 sections sit side-by-side (3 columns).

**Staggered animations** — Each column fades in slightly after the previous one:

```tsx
<div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
  {/* This fades in 0.2 seconds AFTER the page loads */}
</div>
<div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
  {/* This fades in 0.4 seconds after — creating a domino effect */}
</div>
```

---

## 8. Page Components — In-Depth Breakdown

### 8.1 Home Page (`Home.tsx`) — 506 Lines

The most complex page, divided into 4 major sections:

#### Section 1: Hero Section

A full-viewport-height hero with multiple layered effects stacked on top of each other:

> **Think of it like this:** Imagine 6 transparent sheets of paper stacked on top of each other, each with different elements drawn on them. Together they create a rich, layered visual. That's what's happening here — 3D scenes, floating shapes, gradients, and text are all separate "layers" stacked with CSS.

```
Layer 1 (back):  3D HeroScene (Canvas with glowing spheres, DNA helix, wave grid)
Layer 2:         Floating geometric shapes (CSS animated divs — squares, circles, lines)
Layer 3:         Light rays (thin gradient lines that pulse)
Layer 4:         Radial gradient backgrounds with parallax scroll effect
Layer 5 (front): Text content (logo, tagline, description)
Layer 6:         Scroll indicator (bouncing mouse-shaped element at the bottom)
```

**Parallax Scrolling — making backgrounds move at different speeds:**

```tsx
const [scrollY, setScrollY] = useState(0);  // Tracks how far the user has scrolled

useEffect(() => {
  const handleScroll = () => setScrollY(window.scrollY);  // Update on every scroll
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);  // Cleanup
}, []);

// Applied to the background — it moves at 30% of scroll speed
style={{
  transform: `translateY(${scrollY * 0.3}px) scale(${1 + scrollY * 0.0005})`
}}
```

> **Think of it like this:** When you're in a car, trees close to the road zoom past, but mountains in the distance barely move. That's parallax. Here, the background moves at 30% of the page scroll speed (`scrollY * 0.3`), making it feel further away and creating depth. The `scale` also increases slightly as you scroll, adding a subtle zoom effect.

#### Section 2: Explore Red-X (CTA Grid)

A 4-column grid of navigation cards linking to Partners, Membership, Team, and Events.

**The `group` and `group-hover:` pattern — hover a parent, style the children:**

```tsx
<Link className="group ...">                              {/* ← Parent has "group" class */}
  <div className="... group-hover:bg-red-600 ...">         {/* ← Child changes when parent is hovered */}
    <Users className="text-red-400 group-hover:text-white" />  {/* ← Icon also changes */}
  </div>
</Link>
```

> **Think of it like this:** Normally in CSS, you can only style an element when *that element* is hovered. With `group`/`group-hover:`, you can say "when the whole card is hovered, change the icon color." It's like saying "when I walk into the room (hover the card), turn on all the lights (change child styles)."

#### Section 3: Image Gallery / Carousel

A custom auto-advancing image slideshow that changes every 4 seconds:

```tsx
const [currentSlide, setCurrentSlide] = useState(0);

// Auto-advance every 4 seconds
useEffect(() => {
  const timer = setInterval(() => {
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
  }, 4000);
  return () => clearInterval(timer);  // Stop the timer when leaving the page
}, [galleryImages.length]);
```

**Circular navigation with modulo (%) — wrapping around:**

```tsx
// Next: 0 → 1 → 2 → ... → 9 → 0 (wraps back to start)
const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % galleryImages.length);

// Previous: 0 → 9 → 8 → ... → 1 → 0 (wraps to end)
const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
```

> **Think of it like this:** The modulo operator `%` is like a clock. After 12 comes 1, not 13. With 10 images: after image 9 (the last), `(9 + 1) % 10 = 0` — we go back to the first. For going backward: `(-1 + 10) % 10 = 9` — we wrap to the last.

**CSS crossfade transition — how the image change looks smooth:**

```tsx
className={`absolute inset-0 transition-all duration-1000 ${
  index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
}`}
```

All 10 images are stacked on top of each other (`absolute inset-0` makes each one fill the full container). Only the current slide has `opacity-100` (visible). The rest have `opacity-0` (invisible). `transition-all duration-1000` makes the opacity change animate over 1 second, creating a smooth crossfade. The `scale-105 → scale-100` adds a subtle zoom-out effect.

#### Section 4: Our Mission

Two-column layout with the mission statement on the left and value cards on the right. Uses custom CSS classes like `hover-lift` (card floats up when hovered) and `glow-effect` (card has a soft red glow).

### 8.2 Events Page (`Events.tsx`)

Features a **per-section image carousel** — each event section (Treks, DISHA, Membership Drive, Interact) has its own independent image slider.

**Single state object for multiple carousels:**

```tsx
const [currentImageIndex, setCurrentImageIndex] = useState({
  treks: 0,       // Treks section is showing image 0
  disha: 0,       // DISHA section is showing image 0
  membership: 0,  // Membership section is showing image 0
  interact: 0,    // Interact section is showing image 0
});
```

> **Think of it like this:** Instead of having 4 separate sticky notes for "what image is each section showing," we use 1 sticky note with 4 labeled fields. This is cleaner and easier to manage.

**Alternating layout pattern (zigzag):**

```tsx
<div className={`grid ... ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
    {/* Text content */}
  </div>
  <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
    {/* Image */}
  </div>
</div>
```

Even-numbered sections (0, 2): text on left, image on right.
Odd-numbered sections (1, 3): image on left, text on right.
This zigzag creates visual variety and keeps the page interesting.

**Dynamic component rendering from data:**

```tsx
const eventSections = [
  { id: 'treks', title: 'Treks & Adventures', icon: Mountain, ... },
  // Mountain is a component from lucide-react, stored as a VALUE in the data
];

// Later, render it dynamically:
<section.icon className="text-white" size={24} />
// This is like saying: "whatever component is stored in section.icon, render it here"
```

> **Think of it like this:** Imagine you have a box with a label "icon" and you put different tools in different boxes (a hammer in one, a screwdriver in another). When you open the box, whatever tool is inside gets used. Here, `section.icon` could be `Mountain`, `Heart`, `Users`, or `Mic` — and React renders whichever one it finds.

### 8.3 Team Page (`Team.tsx`)

Organizes members into three hierarchical groups:

1. **Executive Board** (5 members) — Displayed in a centered 3-2 pyramid layout (3 on top row, 2 on bottom)
2. **Board Members** (9 members) — Grouped by department (Adventure, Disha, Media, Business)
3. **Advisory Committee** (2 members)

**Avatar fallback using an external API:**

```tsx
const getAvatar = (name: string) =>
  `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=111827&color=ef4444&size=300&bold=true`;

const getTeamPhoto = (index: number) => teamPhotos[index] ?? getAvatar('Red-X');
```

> **Think of it like this:** `??` is the **nullish coalescing operator** — it means "use the left value, BUT if it's missing (`null` or `undefined`), use the right value instead." So: "show the team photo, but if it doesn't exist, generate a letter avatar as a fallback." It's like a restaurant saying "we'll serve your order, but if we're out of stock, here's the next best thing."

**Reusable component defined inside another component:**

```tsx
const SocialLink = ({ href, icon: Icon, label }: { href: string; icon: any; label: string }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="..." aria-label={label}>
    <Icon size={18} />
  </a>
);
```

The `{ icon: Icon }` syntax means: "take the `icon` prop and rename it to `Icon` (with a capital I)." This renaming is needed because React requires component names to start with a capital letter. If you wrote `<icon />`, React would think it's an HTML tag, not a component.

### 8.4 Partners Page (`Partners.tsx`)

Displays partner businesses organized by category (Food & Dining, Gaming, Gyms, Saloons, Desserts, Repairs & Clothing).

**Memoized random values with `useMemo`:**

```tsx
const heroDots = useMemo(
  () => [...Array(18)].map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: `${Math.random() * 3}s`,
    duration: `${2 + Math.random() * 2}s`,
  })),
  []  // Empty array = calculate this ONCE and remember it forever
);
```

> **Think of it like this:** `useMemo` is like writing an answer on a sticky note so you don't have to solve the math problem again every time someone asks. Without `useMemo`, every time React re-renders (which can happen dozens of times per second), `Math.random()` would generate NEW positions, and the dots would visibly jump around. With `useMemo`, the positions are calculated once and remembered.

### 8.5 Membership Page (`Membership.tsx`)

Features a pricing section and a **custom FAQ accordion** (click a question, the answer expands):

```tsx
const [openFaq, setOpenFaq] = React.useState<number | null>(null);
// Stores WHICH FAQ is open (by index number), or null if none are open

<button onClick={() => setOpenFaq(openFaq === index ? null : index)}>
  {/* If this FAQ is already open, close it (set to null). Otherwise, open it (set to this index). */}
  <div className={`transform transition-transform ${openFaq === index ? 'rotate-45' : ''}`}>
    +
  </div>
</button>
{openFaq === index && (
  <div className="px-8 pb-6">
    <p>{faq.answer}</p>
  </div>
)}
```

> **Think of it like this:** The `+` symbol becomes `×` by rotating 45 degrees! Look at a `+` and tilt your head 45° — it looks like `×`. The CSS `rotate-45` does exactly this. It's a clever visual trick that avoids needing two separate icons.

### 8.6 NotFound Page (`NotFound.tsx`)

A minimal 404 page shown when someone visits a URL that doesn't exist:

```tsx
useEffect(() => {
  console.error("404 Error: User attempted to access non-existent route:", location.pathname);
}, [location.pathname]);
```

This logs the bad URL to the browser console — useful for debugging and tracking broken links.

---

## 9. 3D Graphics with React Three Fiber

### 9.1 Core Concepts

> **Think of building a 3D scene like setting up a stage play:**
> - The **Canvas** is the stage itself (the area where 3D stuff appears)
> - The **Camera** is the audience's seat (where you're looking from)
> - **Meshes** are the actors (visible objects) — each made of a body shape (**Geometry**) wearing a costume (**Material**)
> - **Groups** are like "blocking" — they organize multiple actors together so they can move as one unit
> - **Points** are like confetti — lots of tiny dots scattered around

**Scene Graph Hierarchy (the tree of 3D objects):**

```
Canvas (the stage)
├── Camera (your viewpoint — position, zoom level)
├── Lights (not used here — we use meshBasicMaterial which glows on its own)
└── Objects
    ├── Mesh = Geometry (shape) + Material (appearance/color)
    ├── Points = A cloud of many small dots (particle system)
    └── Group = An invisible container that holds multiple objects together
```

**The `useFrame` hook — the animation heartbeat:**

```tsx
useFrame((state) => {
  // This function runs ~60 times per second (every animation frame)
  // state.clock.elapsedTime = total seconds since the scene started
  ref.current.rotation.y += 0.003;  // Rotate the object a tiny bit each frame
  // 0.003 radians × 60fps ≈ a full rotation every ~35 seconds
});
```

> **Think of it like this:** `useFrame` is like a flipbook animation. You draw a slightly different picture on each page. When you flip through the pages fast enough (60 pages per second), it looks like smooth motion. Each "page flip" runs the code inside `useFrame`.

**The `useRef` hook for 3D objects:**

```tsx
const ref = useRef<THREE.Mesh>(null);
// Creates a "pointer" to the actual 3D object
// Unlike useState, changing ref.current does NOT cause a re-render
// This is critical for 3D: you want to change rotation 60x/sec without re-rendering React
```

> **Think of it like this:** `useRef` is like putting a name tag on a specific LEGO piece. You can find it and move it anytime by looking at the name tag, without having to rebuild the entire LEGO set.

### 9.2 HeroScene Component

The most complex 3D component, containing three sub-elements:

#### GlowingSphere — Pulsing transparent spheres

```tsx
const GlowingSphere = ({ position, color, size, pulseSpeed }) => {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    // Make the sphere pulse (grow and shrink smoothly)
    const scale = 1 + Math.sin(state.clock.elapsedTime * pulseSpeed) * 0.2;
    ref.current.scale.setScalar(scale);
    // Also make it bob up and down
    ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5 + position[0]) * 0.3;
  });

  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[size, 32, 32]} />
      {/* args: [radius, horizontal segments, vertical segments] */}
      {/* 32 segments = smooth sphere. Lower = more blocky/faceted */}
      <meshBasicMaterial color={color} transparent opacity={0.15} />
      {/* meshBasicMaterial: always looks the same regardless of lighting (it "glows") */}
      {/* opacity 0.15 = very transparent (15% visible) */}
    </mesh>
  );
};
```

> **Think of `Math.sin()` like this:** Imagine a ball on a spring bouncing up and down. `Math.sin()` produces a smooth wave pattern: it goes from 0 → 1 → 0 → -1 → 0, repeating forever. Multiply it by `0.2` and you get a gentle oscillation between -0.2 and +0.2. Add 1, and the scale smoothly varies between 0.8 and 1.2 — a subtle pulsing effect.

#### DNAHelix — A rotating double-helix structure

Creates 40 pairs of tiny spheres arranged in a spiral pattern:

```tsx
const spheres = useMemo(() => {
  return Array.from({ length: count }, (_, i) => {
    const t = (i / count) * Math.PI * 4;     // Angle: goes around the circle twice (4π radians)
    const y = (i / count) * 12 - 6;          // Height: evenly spaced from -6 to +6
    return {
      pos1: [Math.cos(t) * 2, y, Math.sin(t) * 2],           // First strand of DNA
      pos2: [Math.cos(t + Math.PI) * 2, y, Math.sin(t + Math.PI) * 2],  // Second strand (opposite side)
    };
  });
}, []);
```

> **Think of it like this:** Imagine wrapping two strings around a pole, one starting on the left and one on the right. As they spiral up, they're always on opposite sides. `Math.cos(t)` and `Math.sin(t)` trace a circle in the horizontal plane, while `y` moves upward. Adding `Math.PI` (180°) to the second strand puts it exactly opposite the first — just like real DNA's double helix.

#### WaveGrid — A 30×30 grid of dots that ripple like water

```tsx
// This creates a flat grid of 900 points (30 × 30)
// Then, every frame, it updates the Y (height) of each point to create a wave effect

useFrame((state) => {
  const arr = posAttr.array as Float32Array;  // Direct access to position data
  const time = state.clock.elapsedTime;

  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      const idx = (i * gridSize + j) * 3;    // Each point has 3 values: x, y, z
      arr[idx + 1] = Math.sin(i * 0.3 + time) * Math.cos(j * 0.3 + time) * 0.5;
      // arr[idx + 1] is the Y (height) of this point
      // sin × cos creates a rippling wave pattern that moves over time
    }
  }
  posAttr.needsUpdate = true;  // CRITICAL: tell the GPU "I changed the data, please re-upload it"
});
```

> **Think of `Float32Array` like this:** Normal JavaScript arrays are flexible — you can mix strings, numbers, objects. But the GPU (graphics card) needs a specific, compact data format. `Float32Array` is like a spreadsheet where every cell MUST be a decimal number — no text, no blanks. It's the language the GPU speaks. Each point's data occupies 3 cells: `[x, y, z]`.

> **Think of `needsUpdate` like this:** Imagine you update a Google Doc, but your friend can't see the changes until you click "Save." `needsUpdate = true` is clicking "Save" — it tells Three.js "hey, I changed the point positions, tell the GPU to re-render them." Without this line, your changes would be invisible.

### 9.3 FloatingParticles Component

A configurable particle system with different presets for each page:

```tsx
const configs = {
  home:       { particles: 300, color: '#ff2222', speed: 0.4, rings: 3, showX: true },
  events:     { particles: 200, color: '#ff4444', speed: 0.3, rings: 2, showX: false },
  partners:   { particles: 320, color: '#ff6666', speed: 0.35, rings: 3, showX: true },
  membership: { particles: 250, color: '#ff1111', speed: 0.5, rings: 3, showX: true },
  team:       { particles: 180, color: '#ff5555', speed: 0.25, rings: 2, showX: false },
};
// Each page gets a different "mood" — more/fewer particles, different colors, speeds
```

**Particle movement with boundary bounce:**

```tsx
for (let i = 0; i < count; i++) {
  arr[i * 3] += velocities[i * 3];          // Move particle by its velocity (x)
  arr[i * 3 + 1] += velocities[i * 3 + 1];  // Move particle (y)
  arr[i * 3 + 2] += velocities[i * 3 + 2];  // Move particle (z)

  for (let j = 0; j < 3; j++) {
    if (Math.abs(arr[i * 3 + j]) > 10) {    // If particle drifts beyond the boundary (10 units)
      velocities[i * 3 + j] *= -1;          // Reverse its direction (bounce!)
    }
  }
}
```

> **Think of it like this:** Each particle is a ball bouncing around inside an invisible box. When a ball hits a wall (goes beyond 10 units from center), multiplying its velocity by `-1` reverses its direction — like bouncing off the wall. This keeps all particles contained in the visible area.

**FloatingX — Creates the Red-X "X" logo in 3D:**

```tsx
<mesh rotation={[0, 0, Math.PI / 4]}>        {/* One thin rectangle, rotated 45° */}
  <boxGeometry args={[2.5, 0.15, 0.15]} />   {/* A long, thin, flat box = looks like a line */}
</mesh>
<mesh rotation={[0, 0, -Math.PI / 4]}>       {/* Another thin rectangle, rotated -45° */}
  <boxGeometry args={[2.5, 0.15, 0.15]} />
</mesh>
// Two lines crossing at 90° = X shape!
```

### 9.4 AnimatedTorus Component

Features a **torus knot** — imagine a donut that's been twisted into a knot:

```tsx
<torusKnotGeometry args={[2, 0.5, 128, 16]} />
{/* args: [overall radius, tube thickness, tubular detail, radial detail] */}
<meshBasicMaterial color={color} wireframe transparent opacity={0.15} />
{/* wireframe: true = shows only the edges, creating a see-through skeletal look */}
```

> **Think of wireframe like this:** Imagine a 3D object made of chicken wire instead of solid material. You can see through it, and it creates an elegant, technical-looking mesh pattern. That's wireframe rendering.

---

## 10. UI Component Library (shadcn/ui)

### 10.1 What is shadcn/ui?

> **Think of it like this:** Most UI libraries (like Material UI) are like ordering furniture from IKEA — you get a pre-built chair, and you can MAYBE change the color, but you can't redesign the legs. **shadcn/ui** is like IKEA giving you the blueprints + raw materials. The components are copied directly into YOUR code, so you can modify absolutely anything. You own the code.

**shadcn/ui** is NOT a traditional npm package. It's a **code generation system** — you run a CLI command (`npx shadcn-ui add button`) and it copies the full `button.tsx` source code into your project. This gives you:

1. **Full ownership** — You can modify any component's code directly.
2. **No version surprises** — Components don't auto-update and break your code.
3. **Only what you use** — 49 components are available, but unused ones add zero weight to your bundle.

### 10.2 Architecture: Radix UI + CVA + Tailwind

Each shadcn/ui component is built on three layers:

```
Layer 1: Radix UI       — The "brain" (handles click behavior, keyboard navigation, accessibility/ARIA)
Layer 2: CVA            — The "wardrobe" (defines visual variants: size, color, style)
Layer 3: Tailwind CSS   — The "makeup" (applies specific colors, spacing, rounded corners)
```

> **Think of it like this:** Radix UI is an actor who knows all their lines and blocking (behavior) but is wearing no costume. CVA is the costume department deciding "in this scene, wear the red jacket or the blue one?" (variants). Tailwind is the actual fabric and thread (the CSS that makes the costume look real).

### 10.3 The Button Component — Anatomy

```tsx
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

// cva() creates a function that returns different CSS classes based on variant props
const buttonVariants = cva(
  // Base classes — ALWAYS applied to every button
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium ...",
  {
    variants: {
      // "variant" controls the visual style
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",      // Solid red
        destructive: "bg-destructive text-destructive-foreground ...",           // Danger red
        outline: "border border-input bg-background hover:bg-accent ...",       // Outlined
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80", // Muted gray
        ghost: "hover:bg-accent hover:text-accent-foreground",                  // Invisible until hovered
        link: "text-primary underline-offset-4 hover:underline",               // Looks like a text link
      },
      // "size" controls the dimensions
      size: {
        default: "h-10 px-4 py-2",     // Normal size
        sm: "h-9 rounded-md px-3",     // Small
        lg: "h-11 rounded-md px-8",    // Large
        icon: "h-10 w-10",            // Square, for icon-only buttons
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
);

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
```

**Key Patterns Explained Simply:**

- **`cva()`** — "Give me a `variant` and `size`, and I'll return the right CSS classes." It's like a restaurant menu: you pick "spicy" and "large," and the kitchen knows exactly what to make.

- **`cn()`** — A helper function (explained below) that intelligently merges CSS classes without conflicts.

- **`React.forwardRef`** — Normally, you can't say "give me a handle to the actual HTML button inside this component." `forwardRef` makes this possible — it "forwards" the `ref` from the parent to the inner `<button>` element. This is needed for things like programmatic focus, accessibility tools, and animation libraries.

- **`asChild` + `Slot`** — This enables **polymorphic rendering**: "make this look and act like a button, but actually be a `<Link>` (or any other element)."
  > **Think of it like this:** Normally, `<Button>` creates a `<button>` HTML element. But what if you want a link that LOOKS like a button? With `asChild`, the Button's styling wraps around whatever child you pass in, without creating a redundant `<button>` tag.

### 10.4 The `cn()` Utility Function

```tsx
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

This tiny but **critical** function does two things:

1. **`clsx()`** — Builds a class string from mixed inputs, ignoring falsy values:
   ```tsx
   clsx('base', true && 'active', false && 'hidden', { 'disabled': false })
   // Result: "base active"
   // false, null, undefined, and 0 are silently ignored
   ```

2. **`twMerge()`** — Resolves conflicts between Tailwind classes intelligently:
   ```tsx
   twMerge('px-4 py-2', 'px-8')
   // Result: "py-2 px-8"  ← px-8 REPLACES px-4 (not both!)
   
   // Without twMerge, you'd get: "px-4 py-2 px-8" — a conflict!
   // The browser would apply whichever comes last in the CSS file, which is unpredictable.
   ```

> **Think of it like this:** `cn()` is a smart clothes picker. `clsx` says "wear a hat if it's sunny, a coat if it's cold, nothing if it's not raining." `twMerge` says "you can't wear two hats — if you have both a red hat and blue hat, keep the blue hat (the last one specified)."

---

## 11. Styling Architecture — Tailwind CSS & Custom CSS

### 11.1 Tailwind Configuration

The `tailwind.config.ts` extends Tailwind's defaults with a custom **design token system**:

```ts
theme: {
  extend: {
    colors: {
      border: 'hsl(var(--border))',
      background: 'hsl(var(--background))',
      foreground: 'hsl(var(--foreground))',
      primary: {
        DEFAULT: 'hsl(var(--primary))',
        foreground: 'hsl(var(--primary-foreground))',
      },
      // ... more semantic color tokens
    },
    borderRadius: {
      lg: 'var(--radius)',
      md: 'calc(var(--radius) - 2px)',
      sm: 'calc(var(--radius) - 4px)',
    },
  },
}
```

**Why CSS variables for colors?**

Colors are defined as CSS custom properties (variables) in HSL format:

```css
:root {
  --primary: 0 100% 50%;        /* Pure red */
  --background: 0 0% 0%;        /* Pure black */
}
```

Then used with `hsl(var(--primary))` in Tailwind config. This approach enables:
1. **Easy theming** — Change `--primary` in one place and every `bg-primary`, `text-primary`, `border-primary` in the entire app updates automatically.
2. **Opacity support** — Tailwind can generate `bg-primary/50` → `hsl(0 100% 50% / 0.5)` (50% transparent red).

### 11.2 The HSL Color Model

> **Think of HSL like this:** Imagine a color wheel at an art store.
> - **H (Hue)** = Which color on the wheel? 0° = red, 120° = green, 240° = blue. It's the "pure color."
> - **S (Saturation)** = How vivid? 100% = bright and bold, 0% = gray (no color at all).
> - **L (Lightness)** = How light/dark? 50% = pure color, 0% = black, 100% = white.
>
> So `0 100% 50%` means: Hue=red, fully saturated (vivid), pure (not light or dark) = **pure red (#ff0000)**.
>
> **Why HSL instead of hex (#ff0000)?** Because it's easier to create variations: want a darker red? Just lower the lightness. Want a muted red? Lower the saturation. With hex codes, creating related colors requires guessing or using a color picker.

### 11.3 The Red-X Color Palette

```css
:root {
  /* Core palette */
  --background: 0 0% 0%;           /* Pure black */
  --foreground: 0 0% 100%;         /* Pure white */
  --primary: 0 100% 50%;           /* Pure red (#ff0000) */

  /* Custom Red-X brand colors */
  --redx-red: 0 100% 50%;          /* Standard red */
  --redx-red-intense: 0 100% 45%;  /* Darker red (less lightness) */
  --redx-red-bright: 0 100% 55%;   /* Lighter red (more lightness) */
  --redx-dark: 0 0% 0%;            /* Black */
  --redx-light: 0 0% 100%;         /* White */
  --redx-card: 0 0% 8%;            /* Very dark gray for card backgrounds */
}
```

The entire design revolves around a **black + red + white** palette — bold, dramatic, and unmistakably Red-X.

### 11.4 Custom Component Classes

The project defines reusable component classes in `index.css` using Tailwind's `@layer components`:

```css
@layer components {
  /* Gradient backgrounds — a smooth blend between two reds */
  .redx-gradient {
    background: linear-gradient(135deg, hsl(var(--redx-red-intense)), hsl(var(--redx-red-bright)));
  }

  /* Gradient text — text filled with a gradient instead of a solid color */
  .redx-text-gradient {
    background: linear-gradient(135deg, ...);
    -webkit-background-clip: text;          /* Clip the gradient to the text shape */
    -webkit-text-fill-color: transparent;   /* Make the text itself transparent */
    background-clip: text;                  /* (so the gradient shows through) */
  }

  /* Hover lift — card floats up and glows when hovered */
  .hover-lift {
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .hover-lift:hover {
    transform: translateY(-8px) scale(1.02);   /* Float up 8px, grow 2% */
    box-shadow: 0 25px 50px -5px rgba(255, 0, 0, 0.4);  /* Red shadow underneath */
  }

  /* Glow effect — a soft red halo around elements */
  .glow-effect {
    box-shadow: 0 0 30px rgba(255, 0, 0, 0.3);  /* Soft 30px red glow */
  }
  .glow-effect:hover {
    box-shadow: 0 0 50px rgba(255, 0, 0, 0.6), 0 0 100px rgba(255, 0, 0, 0.3);
    /* TWO glows stacked: a bright inner glow + a wider dim outer glow */
  }
}
```

### 11.5 Custom Keyframe Animations

The project defines 8+ custom CSS animations:

| Animation | What It Looks Like | Duration |
|---|---|---|
| `fadeInUp` | Element fades in while sliding up from below | 0.8s |
| `scaleIn` | Element fades in while growing from 90% to 100% | 0.6s |
| `slideInRight` | Element slides in from the right side | 0.8s |
| `pulse-red` | A red ring expands outward from the element (like a radar ping) | 3s, repeats forever |
| `float` | Element gently bobs up and down like a boat on water | 6s, repeats forever |
| `spin-slow` | Element slowly rotates 360° | 8s, repeats forever |
| `fade-in` | Element fades in + slides up + scales up | 0.6s |
| `shine` | A shiny highlight slides across text left to right | 3s, repeats forever |

**Cubic-bezier timing — controlling animation speed curves:**

```css
transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
```

> **Think of cubic-bezier like this:** Imagine pushing a ball on a table.
> - **Linear** = the ball moves at constant speed the entire time (boring, robotic).
> - **Ease-out** = the ball starts fast and gradually slows to a stop (natural, like friction). This is what `cubic-bezier(0.4, 0, 0.2, 1)` does.
> - **Ease-in** = the ball starts slow and speeds up (like rolling downhill).
> - **Ease-in-out** = starts slow, speeds up in the middle, then slows down again (smooth and graceful).
>
> The four numbers are coordinates on a curve that maps time to progress. You don't need to memorize them — just know that `(0.4, 0, 0.2, 1)` gives a smooth, natural-feeling deceleration.

### 11.6 Scroll-Triggered Animations

```css
.animate-on-scroll {
  opacity: 0;                      /* Start invisible */
  transform: translateY(50px);     /* Start 50px below final position */
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.animate-on-scroll.animate {       /* When the ".animate" class is added: */
  opacity: 1;                      /* Become visible */
  transform: translateY(0);        /* Slide up to final position */
}
```

These are designed for elements that should animate when they scroll into view. An Intersection Observer (JavaScript API) would add the `.animate` class when the element enters the viewport.

---

## 12. Custom Hooks

### 12.1 `useIsMobile` — Responsive Breakpoint Detection

```tsx
const MOBILE_BREAKPOINT = 768;  // 768px = standard tablet/mobile boundary

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined);

  React.useEffect(() => {
    // Create a media query listener — more efficient than listening to every resize event
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);  // Listen for when the breakpoint is crossed
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);  // Set initial value
    return () => mql.removeEventListener("change", onChange);  // Cleanup on unmount
  }, []);

  return !!isMobile;  // Convert undefined → false (double negation trick)
}
```

> **Think of it like this:** Instead of checking the window width every single time the window is resized (which fires hundreds of events during a drag), `matchMedia` only fires when you actually cross the 768px boundary — like a speed camera that only triggers at exactly 60mph, not at every speed change. The `!!` (double negation) converts the initial `undefined` to `false`: `!!undefined` → `!true` → `false`.

### 12.2 `useToast` — Toast Notification State Management

This hook uses a **pub/sub (publish-subscribe)** pattern to manage toast notifications.

> **Think of pub/sub like this:** Imagine a school announcement system. The principal (publisher) makes an announcement over the PA system. All classrooms (subscribers) hear it simultaneously. Any teacher can walk to the office and make an announcement — they don't need to be in a classroom. In this code:
> - `toast()` is the "make an announcement" function — anyone can call it from anywhere.
> - `listeners` are the "classrooms" — React components that display the toast.
> - `dispatch` is the PA system — it broadcasts state changes to all listeners.

```tsx
// === GLOBAL STATE (lives OUTSIDE React, in plain JavaScript) ===
let memoryState: State = { toasts: [] };
const listeners: Array<(state: State) => void> = [];

// This function broadcasts state changes to all listening React components
function dispatch(action: Action) {
  memoryState = reducer(memoryState, action);  // Calculate new state
  listeners.forEach((listener) => {            // Tell every subscriber
    listener(memoryState);                     // (each listener is a setState function)
  });
}

// === THE HOOK (used by React components) ===
function useToast() {
  const [state, setState] = React.useState<State>(memoryState);

  React.useEffect(() => {
    listeners.push(setState);  // "Hey PA system, add my classroom to the announcement list"
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) listeners.splice(index, 1);  // "I'm leaving, remove me from the list"
    };
  }, [state]);

  return { ...state, toast, dismiss };
}
```

> **Why this pattern?** The `toast()` function can be called from ANYWHERE — even outside React components (like in an API error handler or a utility function). Normal React state (`useState`) only works inside components. This pub/sub pattern bridges the gap: external code calls `toast()`, which calls `dispatch()`, which updates ALL subscribed React components.

**The Reducer Pattern:**

```tsx
export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_TOAST":
      return { ...state, toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT) };
    case "UPDATE_TOAST":
      return { ...state, toasts: state.toasts.map(t =>
        t.id === action.toast.id ? { ...t, ...action.toast } : t
      ) };
    case "DISMISS_TOAST": { ... }
    case "REMOVE_TOAST": { ... }
  }
};
```

> **Think of a reducer like this:** Imagine a vending machine. You put in money (action) and the machine (reducer) gives you a new result (state). The machine itself never changes — given the same input, it always gives the same output. That's why reducers are called "pure functions." The `switch` statement says: "If the action is ADD_TOAST, add it to the list. If it's REMOVE_TOAST, remove it." The original state is never modified — a brand new state object is always returned (`{...state}` creates a copy).

---

## 13. State Management Patterns

This project uses **three levels** of state management:

### 13.1 Local Component State (`useState`)

For UI data that only one component cares about:

```tsx
const [isOpen, setIsOpen] = useState(false);          // Is the mobile menu open?
const [currentSlide, setCurrentSlide] = useState(0);  // Which gallery image is showing?
const [openFaq, setOpenFaq] = useState<number | null>(null);  // Which FAQ is expanded?
```

> **Think of it like this:** Each component has its own personal notebook. `useState` writes data in that notebook. Only that component can read or write to it. When the notebook changes, React re-draws just that component.

### 13.2 External Pub/Sub State (Toast System)

For state that needs to be triggered from outside the React component tree:

```tsx
// Can be called from API interceptors, utility functions, ANYWHERE
toast({ title: "Success!", description: "Membership purchased." });
```

### 13.3 React Query (`@tanstack/react-query`)

Configured via `QueryClientProvider` but not actively used for data fetching in the current codebase (the site uses hardcoded static data). However, the infrastructure is in place for future API integration:

```tsx
const queryClient = new QueryClient();

<QueryClientProvider client={queryClient}>
  {/* Any component inside here can now use useQuery() to fetch data */}
</QueryClientProvider>
```

> **Think of React Query like this:** Normally, if you want to fetch data from a server, you have to manually handle loading states, error states, caching, and re-fetching. React Query is like hiring an assistant who does all of that for you — you just say "get me the team list" and it handles the rest, including remembering the answer so it doesn't ask the server again unnecessarily.

---

## 14. Performance Optimizations

### 14.1 Code Splitting with `React.lazy()` + `Suspense`

The heaviest components (3D scenes containing Three.js) are **lazy-loaded**:

```tsx
const FloatingParticles = lazy(() => import('../components/3d/FloatingParticles'));
const HeroScene = lazy(() => import('../components/3d/HeroScene'));

// Usage with Suspense fallback
<Suspense fallback={null}>
  <HeroScene />
</Suspense>
```

> **Think of it like this:** Imagine a textbook. Code splitting is like separating the chapters into individual booklets. Instead of carrying the entire heavy textbook (one huge JavaScript file), you only pick up the booklet you're currently reading (the components currently on screen). The 3D chapter (Three.js ~600KB) isn't loaded until someone actually scrolls to a section with 3D content.

`fallback={null}` means "show nothing while loading." You could also use `fallback={<div>Loading...</div>}` to show a loading indicator.

### 14.2 `useMemo` for Expensive Computations

```tsx
// Compute 3D geometry ONCE, not on every render
const geometry = useMemo(() => {
  const pos = new Float32Array(count * 3);
  // ... heavy computation to fill positions ...
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  return geo;
}, [positions]);  // Only recompute if `positions` changes
```

> **Think of it like this:** Without `useMemo`, every time React re-renders the component (which can happen when ANY state changes — even unrelated state), it would re-calculate 900 point positions and create a new geometry from scratch. That's like rewriting your entire essay because you fixed one typo. `useMemo` says "I already calculated this; just use the saved answer unless the inputs change."

### 14.3 Lazy Image Loading

```tsx
<img
  src={partner.logo ?? getPartnerLogo(partner.name)}
  loading="lazy"        // Don't download this image until the user scrolls near it
  decoding="async"      // Decode the image in the background, not on the main thread
  className="..."
/>
```

> **Think of `loading="lazy"` like this:** Imagine a really long restaurant menu. A lazy waiter would only describe the dishes you can currently see. As you scroll down the menu, they describe more. This saves time because you're not loading images for sections the user hasn't scrolled to yet.

> **Think of `decoding="async"` like this:** Normally, the browser stops everything to process (decode) an image before displaying it. `async` says "process this image in the background while the rest of the page continues loading" — preventing that momentary freeze.

### 14.4 `will-change` and GPU Acceleration

```css
.parallax-bg {
  transform: translateZ(0);    /* Trick the browser into using the GPU for this element */
  will-change: transform;      /* Hint: "this element's transform will change, be ready" */
}
```

> **Think of it like this:** Your computer has two processors — the CPU (general purpose, good at math) and the GPU (specialized, amazing at graphics). `transform: translateZ(0)` tells the browser "treat this element as a 3D layer" — which promotes it to the GPU. The GPU then handles its animations, freeing the CPU to do other work. This makes animations much smoother.

### 14.5 `filter(Boolean)` Plugin Array Cleanup

```tsx
plugins: [
  react(),
  someCondition && optionalPlugin(),  // If condition is false, this becomes `false`
].filter(Boolean)  // Removes all false/null/undefined from the array
```

> **Think of it like this:** You're making a grocery list and some items are conditional: "eggs, IF it's Tuesday then milk, bread." Your list might become `['eggs', false, 'bread']`. `filter(Boolean)` cleans it up to `['eggs', 'bread']` — removing the `false`.

---

## 15. SEO & Meta Tags

The `index.html` implements comprehensive SEO (Search Engine Optimization):

```html
<!-- Basic SEO — tells Google what this page is about -->
<title>Red-X | MIT Manipal's Premier Socio-Adventure Club</title>
<meta name="description" content="Adventure. Service. Community. Join Red-X..." />
<meta name="keywords" content="Red-X, MIT Manipal, adventure club, social service, DISHA, treks" />

<!-- Open Graph — controls how the link looks when shared on Facebook/LinkedIn -->
<meta property="og:type" content="website" />
<meta property="og:title" content="Red-X | MIT Manipal's Premier Socio-Adventure Club" />
<meta property="og:description" content="Adventure. Service. Community..." />
<meta property="og:image" content="/favicon.ico?v=20260404" />

<!-- Twitter Card — controls how the link looks when shared on Twitter/X -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:site" content="@redxmanipal" />
```

> **Think of Open Graph like this:** When you paste a YouTube link into WhatsApp, it shows a preview with a title, description, and thumbnail. Open Graph meta tags tell social media platforms what that preview should look like for YOUR website.

**Cache busting with version query strings:**

```html
<link rel="icon" type="image/x-icon" href="/favicon.ico?v=20260404" />
```

> **Think of it like this:** Browsers are like a friend who never forgets. Once they download your favicon, they remember it and never check for updates. Adding `?v=20260404` is like changing the file name — the browser thinks it's a new file and downloads the latest version. When you update your favicon, you change the version number (`20260404` → `20260505`) to force a re-download.

---

## 16. Deployment with Vercel

### 16.1 `vercel.json` Configuration

```json
{
  "rewrites": [
    {
      "source": "/fevicon.ico",
      "destination": "/favicon.ico"
    },
    {
      "source": "/((?!.*\\..).*)",
      "destination": "/index.html"
    }
  ]
}
```

**Two rewrite rules:**

1. **Favicon typo fix** — Redirects `/fevicon.ico` (a common misspelling) to the correct `/favicon.ico`. Some browsers or tools request this misspelled version.

2. **SPA Fallback** — This is the most important rule. The regex `/((?!.*\\.).*)`  matches any URL that **doesn't contain a dot** (i.e., it's not a file like `.js`, `.css`, `.png`). These are rewritten to serve `index.html`.

   > **Think of it like this:** When someone visits `redx.com/team`, the server looks for a file called `/team`. But there IS no `/team` file — it's a React route that only exists in JavaScript! Without this rewrite, the server would return a 404 error. The rewrite says "for any URL that doesn't look like a file (no `.`), just serve the main HTML page and let React figure out what to show."

### 16.2 Deployment Flow

```
Developer pushes code to Git
    → Vercel automatically detects the change
    → Runs `npm run build` (creates optimized files)
    → Outputs to `dist/` folder
    → Serves the files from a global CDN (fast worldwide)
    → SPA rewrite rules ensure routing works
```

---

## 17. TypeScript Configuration

### 17.1 Project References Pattern

This project splits its TypeScript config into multiple files for different environments:

```
tsconfig.json          ← Root config (shared settings + references)
├── tsconfig.app.json  ← For React app code (needs JSX, DOM types)
└── tsconfig.node.json ← For build scripts (needs Node.js types)
```

> **Think of it like this:** You need different dress codes for different occasions. Your app code needs to know about browsers (DOM, window, document). Your build config needs to know about Node.js (file system, paths). Separate configs keep these concerns clean.

### 17.2 Key `tsconfig` Settings Explained

```json
{
  "compilerOptions": {
    "jsx": "react-jsx",           // New JSX transform: no need to write "import React" at top of every file
    "module": "ESNext",           // Use modern import/export syntax
    "moduleResolution": "bundler", // Resolve modules like a bundler (Vite) would
    "target": "ES2020",           // Output JavaScript that ES2020-compatible browsers can run
    "noEmit": true,               // TypeScript only CHECKS types; Vite/SWC does the actual compiling
    "strict": false,              // Relaxed type checking (more permissive, fewer errors)
    "skipLibCheck": true,         // Don't type-check library code (faster builds)
    "isolatedModules": true,      // Each file must work on its own (required by Vite/SWC)
    "paths": {
      "@/*": ["./src/*"]          // The @ shortcut: @/lib/utils → src/lib/utils
    }
  }
}
```

> [!IMPORTANT]
> **`"jsx": "react-jsx"`** — Before React 17, every file using JSX needed `import React from 'react'` at the top (even if you never wrote `React.` anywhere). The new JSX transform removed this requirement — the compiler automatically imports what it needs. That's why you'll see some files importing React and some not — with `"react-jsx"`, it's optional.

---

## 18. Code Quality — ESLint

```js
export default tseslint.config(
  { ignores: ["dist"] },  // Don't lint the production build output
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,  // Recognize browser globals (window, document, console, etc.)
    },
    plugins: {
      "react-hooks": reactHooks,        // Enforces the "Rules of Hooks"
      "react-refresh": reactRefresh,    // Ensures HMR works correctly
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
      "@typescript-eslint/no-unused-vars": "off",  // Allows unused variables (disabled for flexibility)
    },
  }
);
```

> **Think of ESLint like this:** It's a spell-checker, but for code logic instead of English. It reads your code and says things like: "You created a variable but never used it" or "You called a React hook inside an if-statement, which will cause bugs." It won't fix your logic, but it catches common mistakes before they become problems.

**Rules of Hooks** (enforced by the `react-hooks` plugin):
1. Only call hooks at the **top level** — never inside loops, conditions, or nested functions.
2. Only call hooks from **React function components** or **custom hooks** — never from regular functions.

> **Why?** React relies on the ORDER hooks are called to keep track of state. If a hook is inside an `if` statement, it might run on one render but not the next — React loses track and breaks.

---

## 19. Static Assets & Media Management

### 19.1 The `public/` Directory

Files in `public/` are served directly at the root URL without any processing:
- `public/favicon.ico` → accessible at `https://site.com/favicon.ico`
- `public/uploads/team/1.jpeg` → accessible at `https://site.com/uploads/team/1.jpeg`

> **Think of it like this:** The `public/` folder is like a filing cabinet in the lobby. Anyone (the browser) can walk up and grab any file directly by name. Vite doesn't touch these files — no renaming, no optimization, no bundling. They're served exactly as-is.

### 19.2 Asset Organization

```
uploads/
├── 551e6dc7-...png    ← Red-X logo (used in Nav, Footer, Home hero)
├── stories/           ← Home page gallery (1.jpeg – 10.jpeg)
├── treks/             ← Trek event images (1.jpeg – 3.jpeg)
├── disha/             ← DISHA event images (1.jpeg – 3.jpeg)
├── membership/        ← Membership drive images (1.jpeg – 3.jpeg)
├── interact/          ← Speaker series images (1.jpeg – 3.jpeg)
├── team/              ← Team member photos (1.jpeg – 16.jpeg)
└── partners/          ← Partner logos (1.png – 28.png, some .jpeg)
```

### 19.3 External API for Avatars

```tsx
const getAvatar = (name: string) =>
  `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=111827&color=ef4444&size=300&bold=true`;
```

The **UI Avatars API** is a free web service that generates letter-based avatars on-the-fly from a URL. Parameters in the URL control:
- `name` — The letters to show (e.g., "Anushka Harish" → "AH")
- `background=111827` — Dark gray background (hex color)
- `color=ef4444` — Red text (hex color)
- `size=300` — 300×300 pixel image

`encodeURIComponent` is necessary because URLs can't contain spaces or special characters directly. It converts "Anushka Harish" to "Anushka%20Harish" (space becomes %20).

---

## 20. Important Code Snippets & Patterns

### 20.1 Inline Styles with Double Curly Braces

```tsx
style={{
  animationDelay: `${index * 0.1}s`,
  animationDuration: `${8 + Math.random() * 4}s`,
}}
```

> **Why double `{{ }}`?** The outer `{ }` is JSX saying "here comes JavaScript." The inner `{ }` is a JavaScript object literal (like a dictionary). It's not special syntax — just two layers of braces for different reasons.

### 20.2 Creating an Array of N Elements

```tsx
[...Array(15)].map((_, i) => ( ... ))
```

> **What's happening:** `Array(15)` creates an array with 15 empty slots. But `.map()` skips empty slots! Spreading it with `[...]` fills them with `undefined`, which `.map()` can iterate over. The `_` variable name means "I don't care about this value, I only need the index `i`."

### 20.3 Conditional CSS Classes

```tsx
// Ternary: pick between two classes based on a condition
className={isActive ? 'bg-red-600' : 'bg-gray-800'}

// Short-circuit: add a class only if a condition is true
className={`base-class ${isOpen && 'extra-class'}`}

// cn() for complex conditional logic
className={cn(
  "base-class",                              // Always applied
  variant === "primary" && "bg-red-600",     // Only if variant is primary
  size === "lg" && "text-xl px-8",           // Only if size is large
  className                                   // Allow parent to add/override classes
)}
```

### 20.4 State Updater Function Pattern

```tsx
// ❌ Can be buggy with rapid updates:
setCount(count + 1)  // Uses stale value if called multiple times quickly

// ✅ Always safe:
setCount((prev) => prev + 1)  // Uses the LATEST value, guaranteed
```

> **Think of it like this:** `setCount(count + 1)` is like looking at a scoreboard and writing down a new score. But what if two people look at the same time? They both see "5" and both write "6" — missing one update. `setCount(prev => prev + 1)` is like telling the scorekeeper "add 1 to WHATEVER the current score is" — the scorekeeper handles the rest and never loses an update.

### 20.5 Cleanup in `useEffect`

```tsx
useEffect(() => {
  const timer = setInterval(() => { ... }, 4000);
  return () => clearInterval(timer);  // ← This runs when the component unmounts
}, []);
```

> **Think of it like this:** When you enter a room, you turn on a fan (setInterval). When you leave the room, you should turn it off (clearInterval). The cleanup function (the `return` statement) is your "exit instructions." Without it, the fan keeps running in an empty room — wasting resources and potentially causing errors.

### 20.6 Template Literal Expressions

```tsx
className={`w-4 h-4 rounded-full ${
  index === currentSlide
    ? 'bg-red-600 scale-125 glow-effect'   // Active dot: bright and enlarged
    : 'bg-gray-600 hover:bg-red-400'       // Inactive dot: dim
}`}
```

Backtick strings (`` ` ` ``) allow embedding JavaScript expressions with `${ }`. Here, a ternary operator inside the string dynamically changes CSS classes.

### 20.7 Security: `rel="noopener noreferrer"`

```tsx
<a href="..." target="_blank" rel="noopener noreferrer">
```

When opening links in a new tab (`target="_blank"`):
- `noopener` — Prevents the new page from accessing `window.opener` (your page). Without this, a malicious site could redirect your original tab.
- `noreferrer` — Prevents sending the current page's URL to the new page (privacy).

> **Think of it like this:** Without `noopener`, opening a link is like giving a stranger the keys to your house while you go visit their house. They could go back to YOUR house and change things. `noopener` says "I'll visit your house, but I'm keeping my keys."

### 20.8 Barrel Exports

```tsx
// Index.tsx — just re-exports Home
export { default } from './Home';
```

> **Think of it like this:** A barrel export is like a receptionist. Instead of visitors going directly to "Home's office," they stop at "Index" (the receptionist) who points them to Home. It's a convenience layer — sometimes you want to import from a simpler path, or rename things without changing the original file.

---

## 21. Key Terminologies & Glossary

### Core Web Concepts

| Term | Definition | Simple Analogy |
|---|---|---|
| **SPA (Single Page Application)** | A web app that loads ONE HTML page and dynamically updates content without full page reloads. | A magic book with one page — the content changes in front of your eyes, but you never turn the page. |
| **CSR (Client-Side Rendering)** | The browser downloads JavaScript, then JavaScript builds the HTML. The server sends an empty shell. | Getting flat-pack furniture — the box (HTML shell) arrives empty, and you assemble it (JS builds the UI) at home (in the browser). |
| **HMR (Hot Module Replacement)** | When you save a file, only that specific component updates on screen — no full page reload, and state is preserved. | Changing a tire on a moving car — the car keeps running, only the one tire gets swapped. |
| **DOM (Document Object Model)** | The browser's representation of your HTML as a tree of objects that JavaScript can read and modify. | The blueprint of your house — JavaScript can look at the blueprint and say "move this wall" or "add a window." |
| **Virtual DOM** | React's lightweight copy of the real DOM. React makes changes to the virtual copy first, compares it to the real one, and only updates what actually changed. | A draft version of an email — you edit the draft, then compare it to the sent version, and only send the changes. |

### React Concepts

| Term | Definition | Simple Analogy |
|---|---|---|
| **Component** | A reusable, self-contained piece of UI. A function that returns JSX describing what the UI should look like. | A LEGO block — independent, reusable, and snaps together with other blocks to build something bigger. |
| **Props** | Data passed from a parent component to a child component. Props are read-only — the child cannot modify them. | A permission slip from your parent — you can read it, but you can't change what it says. |
| **State** | Data managed within a component that can change over time. When state changes, React re-renders the component. | A whiteboard in a classroom — anyone in the room can update it, and everyone sees the new content. |
| **Hook** | A special function (prefixed with `use`) that lets functional components access React features like state and effects. | A power outlet — you "plug in" to React's features (state, effects, refs) through hooks. |
| **useEffect** | A hook for performing **side effects** — code that runs "outside" of rendering: API calls, timers, event listeners. | A post-it note saying "after you paint the room (render), also set up the furniture (side effect)." |
| **useState** | A hook that declares a **state variable**. Returns `[currentValue, setterFunction]`. Calling the setter triggers a re-render. | A labeled jar: `[whatIsInTheJar, putNewThingInJar]`. When you put something new in, everyone who looks at the jar sees the updated contents. |
| **useRef** | A hook that creates a mutable reference that persists across renders without causing re-renders when updated. | A name tag on a specific item — you can find and modify the item anytime without telling anyone else about the change. |
| **useMemo** | A hook that caches the result of an expensive computation. Only recomputes when its dependencies change. | Writing the answer to a hard math problem on a sticky note so you can look it up instantly instead of solving it again. |
| **useFrame** | A React Three Fiber hook that runs a callback ~60 times per second (every animation frame). | A flipbook — you draw a slightly different picture on each page; flipping fast creates smooth animation. |
| **React.lazy()** | Enables code splitting — the component is downloaded separately, only when first rendered. | A book chapter delivered separately by mail — you only receive it when you actually want to read it, not when you buy the book. |
| **Suspense** | A React component that displays a fallback (e.g., loading spinner) while lazy-loaded children are being downloaded. | A "Please wait while we prepare your order" sign shown until the food (component) is ready. |
| **Fragment (`<>...</>`)** | Groups multiple elements without adding an extra HTML element to the DOM. | An invisible rubber band that holds things together — it groups elements without adding any visible wrapper. |
| **JSX** | A syntax extension that lets you write HTML-like code in JavaScript. `<div>` compiles to `React.createElement("div")`. | Writing a letter in a mix of English and Spanish — the build tool "translates" the HTML-like parts into pure JavaScript. |
| **TSX** | TypeScript + JSX. The `.tsx` extension indicates a TypeScript file that contains JSX syntax. | Same as JSX, but with spell-check (type checking) enabled. |

### React Patterns

| Term | Definition | Simple Analogy |
|---|---|---|
| **Provider Pattern** | A React pattern where a context provider wraps the app tree, making data or tools available to all descendant components. | The WiFi router in a house — every device (component) in the house can connect to the internet (shared data) through it. |
| **Render Props / children** | Passing JSX content as the `children` prop, allowing a parent to control what appears inside a child component. | A picture frame — the frame is the component, and `children` is whatever photo (content) you put inside. |
| **forwardRef** | Allows a parent component to pass a `ref` through a wrapper component to reach the underlying DOM element inside. | Forwarding a phone call — the receptionist (wrapper component) forwards the caller (parent) directly to the person they need (inner DOM element). |
| **Barrel Export** | A file that re-exports from another module, creating a convenient import path. | A receptionist who redirects visitors — "looking for Home? Right this way." |
| **Pub/Sub (Publish-Subscribe)** | A messaging pattern where publishers emit events and subscribers listen for them, without knowing about each other. | A school PA system — the principal (publisher) announces something, and all classrooms (subscribers) hear it. No one needs to know who else is listening. |
| **Reducer** | A pure function `(currentState, action) → newState` that calculates the next state based on an action. Never modifies the original state. | A vending machine — you insert a coin and press a button (action), and the machine gives you a specific item (new state). Same input always gives same output. |

### TypeScript Concepts

| Term | Definition | Simple Analogy |
|---|---|---|
| **Interface** | Defines the "shape" of an object — what properties it must have and their types. | A job application form — it defines what fields need to be filled in (name: string, age: number). |
| **Generics** | Type parameters that make components/functions work with any type while maintaining type safety. `React.FC<Props>` means "a component that takes Props." | A shipping box with a label: `Box<Books>` ships books, `Box<Shoes>` ships shoes. The box is the same, but the contents are typed. |
| **Union Types** | A value that can be one of several types: `number \| null` means "either a number or null." | A parking spot that accepts either cars OR motorcycles — two allowed types. |
| **Non-Null Assertion (`!`)** | Tells TypeScript "I know this value is not null, trust me." Used when you're certain but TS can't prove it. | Telling your friend "YES, I locked the door, stop asking!" — overriding the safety check because you're confident. |
| **Nullish Coalescing (`??`)** | Returns the right-hand value if the left is `null` or `undefined`. | A backup plan: "Use plan A, but if plan A doesn't exist, use plan B." `photo ?? fallbackAvatar` |
| **Type Assertion (`as`)** | Tells TypeScript to treat a value as a specific type. Used when you know more than the compiler. | Telling customs "this package IS a book" when the scanner can't determine the contents. |
| **`as const`** | Makes object values literal types instead of general types. `"ADD_TOAST"` stays exactly `"ADD_TOAST"`, not just `string`. | Writing in permanent marker instead of pencil — the value is fixed and can't be generalized. |

### CSS & Styling

| Term | Definition | Simple Analogy |
|---|---|---|
| **Utility-First CSS** | A methodology where styles are applied via small, single-purpose classes (`p-4`, `text-red-500`) rather than custom semantic names. | Decorating with stickers (pre-made labels for each style) instead of painting custom murals for each element. |
| **CSS Custom Properties (Variables)** | Values defined with `--name: value` and used with `var(--name)`. Can be changed dynamically. | Variables in math: if `x = 5`, everywhere you write `x` equals `5`. Change `x = 10` and everything updates. |
| **HSL (Hue, Saturation, Lightness)** | A color model where you pick color (hue), vividness (saturation), and brightness (lightness). | A paint mixing system: pick the color (hue = red), how vivid (saturation = pastel vs. neon), how light/dark (lightness = tint vs. shade). |
| **@layer** | Tailwind directive that organizes styles into layers (`base`, `components`, `utilities`) controlling cascade priority. | Layers of paint — the base coat goes first, then components, then utilities on top. Top layer wins in conflicts. |
| **@apply** | Tailwind directive to use utility classes inside a custom CSS rule. | Copy-pasting a recipe into your own cookbook — you take Tailwind's pre-made styles and embed them in your custom class. |
| **Glassmorphism** | A UI design trend using frosted-glass-like backgrounds (`backdrop-blur` + semi-transparent colors). | Looking through a frosted shower door — you can vaguely see what's behind, but it's blurred and beautiful. |
| **Cubic-Bezier** | A mathematical curve that controls animation timing (acceleration/deceleration). | Imagine pushing a ball: linear = constant speed. Ease-out = starts fast, slows down (like friction). The 4 numbers shape the speed curve. |
| **Keyframe Animation** | Defines specific states at specific points during an animation (start, middle, end). | A choreography sheet for a dancer — "at 0% do this pose, at 50% do this, at 100% end here." |

### Build & Tooling

| Term | Definition | Simple Analogy |
|---|---|---|
| **Bundler** | A tool (Vite/Rollup) that combines all source files into optimized bundles for the browser. | A packing service — takes 200 loose items (files) and packs them efficiently into a few boxes (bundles) for shipping (deployment). |
| **Tree Shaking** | Removes unused code during the build. If you import only `Button` from a library, the rest isn't included. | Shaking a tree and only keeping the ripe apples that fall — everything else stays on the tree and isn't shipped. |
| **Code Splitting** | Breaking the app's JavaScript into smaller "chunks" loaded on demand, rather than one large file. | Instead of one giant textbook, you get separate chapter booklets — download only the chapter you need right now. |
| **Path Alias** | A shortcut for import paths. `@/components` maps to `src/components`, avoiding long relative paths. | A speed dial on your phone — press `@` instead of dialing the full number (`../../../src/...`). |
| **PostCSS** | A CSS processing tool that applies transformations via plugins. | A car wash with multiple stations — your CSS goes through Tailwind (station 1), then Autoprefixer (station 2), coming out polished. |
| **Autoprefixer** | Automatically adds vendor prefixes (`-webkit-`, `-moz-`) for browser compatibility. | A translator who automatically adds foreign subtitles so your CSS works in Safari (`-webkit-`), Firefox (`-moz-`), etc. |
| **ESLint** | A static analysis tool that finds code quality issues (bugs, bad practices, style violations). | A grammar checker for code — it reads your code and flags things like "you never used this variable" or "this might cause a bug." |
| **SWC** | A super-fast Rust-based compiler that transforms TypeScript/JSX into browser-ready JavaScript. | A high-speed translator — does the same job as Babel but 20-70x faster because it's written in Rust. |

### 3D Graphics

| Term | Definition | Simple Analogy |
|---|---|---|
| **WebGL** | A browser API for rendering 2D/3D graphics using the GPU. Three.js wraps WebGL in a friendlier API. | The raw engine under Three.js's hood — powerful but complex. Three.js adds a steering wheel and dashboard. |
| **Scene Graph** | The tree structure of all 3D objects. Parent objects' transformations affect their children. | An organizational chart — the CEO (root) affects all departments (child objects). Move the CEO's office and all departments follow. |
| **Mesh** | A 3D object = **Geometry** (shape) + **Material** (appearance). | A mannequin (geometry = body shape) wearing a shirt (material = color/texture). |
| **BufferGeometry** | Stores geometry data in compact typed arrays (`Float32Array`) for efficient GPU transfer. | A spreadsheet with strict column types — every cell is a number, tightly packed for the GPU to process quickly. |
| **Float32Array** | A JavaScript typed array where every element is a 32-bit floating-point number. Used for raw GPU data. | An Excel column formatted as "Number" — only decimal numbers allowed, no text. Compact and fast for the GPU. |
| **Wireframe** | Renders only the edges of a 3D mesh, creating a skeletal/blueprint look. | A 3D object made of chicken wire — you can see through it, showing only the structure lines. |
| **Canvas (R3F)** | React Three Fiber's entry component that creates a WebGL context and Three.js scene. | The TV screen — all 3D content appears inside this rectangle. Everything 3D must be a child of `<Canvas>`. |
| **needsUpdate** | A flag on buffer attributes that tells Three.js "the data changed, re-upload to GPU." | Clicking "Save" after editing a Google Doc — without it, your changes exist in memory but the screen won't update. |

### UI Libraries

| Term | Definition | Simple Analogy |
|---|---|---|
| **Headless UI / Radix UI** | UI components that handle behavior and accessibility (keyboard nav, ARIA) but have NO visual styling — you add your own. | A robot chef that knows all recipes but has no kitchen — you provide the kitchen (styling) and it does the cooking (behavior). |
| **CVA (Class Variance Authority)** | A library for defining type-safe component variants (e.g., button sizes, colors) that map to CSS classes. | A vending machine menu — you press "large" and "red" buttons, and it gives you the exact CSS combination for a large red button. |
| **Lucide** | An open-source icon library providing 1000+ consistent SVG icons as React components. | A sticker book of professional icons — need a heart? `<Heart />`. Need a menu? `<Menu />`. Clean and consistent. |
| **Sonner** | A minimal toast notification library. | A pop-up toaster — a small message "pops up" at the corner of the screen, then disappears. |
| **Zod** | TypeScript-first schema validation — ensures data matches an expected shape at runtime. | Airport security — checks that your "luggage" (data) contains only allowed items (correct types) before letting it through. |
| **React Query (TanStack Query)** | Manages server/async state — handles fetching, caching, syncing, and updating data from APIs. | A personal assistant for API calls — you say "get me the team list," and they handle fetching, remembering the answer, and refreshing it when needed. |

### Deployment & Networking

| Term | Definition | Simple Analogy |
|---|---|---|
| **Vercel** | A cloud platform for deploying frontend apps with automatic CI/CD, CDN, and custom domains. | A one-click publishing service — push your code, and it's live worldwide in seconds. |
| **CDN (Content Delivery Network)** | Servers distributed globally that cache and serve your website from locations closest to the user. | Pizza delivery chains — instead of one central kitchen (server), there are kitchens in every neighborhood (edge locations) so delivery is fast. |
| **SPA Fallback** | Server config that serves `index.html` for all non-file URLs, letting client-side routing handle paths. | A receptionist who directs all visitors to the main lobby (index.html), where the directory sign (React Router) tells them which room to go to. |
| **Rewrite** | Server-side URL transformation — maps one URL to another internally (invisible to the browser). | Mail forwarding — letters addressed to your old address are quietly delivered to your new one. |
| **`target="_blank"`** | HTML attribute that opens a link in a new browser tab. | "Open in a new window" — the original tab stays open. |
| **`preconnect`** | A `<link>` hint that tells the browser to connect to an external server early, before the files are needed. | Warming up a car engine before a trip — when you're ready to go, the car (connection) is already running. |
| **Cache Busting** | Adding version identifiers (`?v=20260404`) to URLs to force browsers to download fresh copies. | Changing the label on a jar so your friend doesn't think "oh, same jar, I already know what's in it" — forces them to look again. |
| **`rel="noopener noreferrer"`** | Security attributes on external links preventing the new page from accessing your page or sending referrer info. | Opening a link is like visiting someone's house — `noopener` means "I won't give them my house keys," and `noreferrer` means "I won't tell them where I live." |

---

> [!TIP]
> **How to run this project locally:**
> ```bash
> npm install        # Download all dependencies listed in package.json
> npm run dev        # Start dev server at http://localhost:8080 (with Hot Module Replacement)
> npm run build      # Create optimized production files in dist/ folder
> npm run preview    # Preview the production build locally before deploying
> npm run lint       # Check for code quality issues
> ```
