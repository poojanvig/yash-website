# Yash Website

A React-based marketing site showcasing ZEE5 ad formats, entertainment offerings, and brand experiences.

## Tech Stack

- **React 19** — UI library
- **Create React App (react-scripts 5)** — build tooling, dev server, and bundling
- **Motion (`motion`)** — animations and transitions
- **React Transition Group** — mount/unmount transitions
- **Testing Library** (`@testing-library/react`, `jest-dom`, `user-event`) — component and DOM testing on top of Jest (provided by CRA)
- **Web Vitals** — performance metric reporting
- **Plain CSS** — per-component stylesheets in [src/components/](src/components/)

## Project Structure

```
yash-website/
├── public/              # Static assets and index.html
├── src/
│   ├── assets/          # Images, videos, and other media
│   ├── components/      # Page sections (Hero, Navbar, AdFormats, etc.)
│   ├── App.js           # Root component
│   └── index.js         # Entry point
├── package.json
└── README.md
```

## Prerequisites

- **Node.js** 18+ and **npm** 9+ (recommended for React 19 / CRA 5)

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm start
   ```

   The app will be served at [http://localhost:3000](http://localhost:3000) and will hot-reload on changes.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm start` | Run the dev server at `http://localhost:3000` |
| `npm test` | Run tests in interactive watch mode |
| `npm run build` | Produce an optimized production build in `build/` |
| `npm run eject` | Eject CRA configuration (one-way operation) |

## Production Build

```bash
npm run build
```

The output in `build/` is minified and content-hashed, ready to be served by any static host (Netlify, Vercel, S3 + CloudFront, Nginx, etc.).
