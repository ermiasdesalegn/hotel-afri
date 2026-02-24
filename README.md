# African Hotels

React (JavaScript) app built with [Vite](https://vitejs.dev/). No Next.js.

## Project structure

```
African-Hotels/
├── public/                 # Static assets (served at /)
│   ├── assets/             # Images (e.g. logo.png, sheraton.jpg)
│   ├── file.svg
│   ├── globe.svg
│   └── window.svg
├── src/
│   ├── App.jsx             # Root component
│   ├── main.jsx             # Entry point, mounts React
│   ├── index.css            # Global styles (Tailwind)
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Destinations.jsx
│   │   ├── Hero.jsx
│   │   ├── HotDeals.jsx
│   │   ├── Nav.jsx
│   │   ├── Popular.jsx
│   │   ├── PrimePage.jsx
│   │   └── TimePrice.jsx
│   └── lib/
│       └── data.js         # cities, destinations data
├── index.html              # HTML entry (Vite)
├── vite.config.js          # Vite config, path alias @ → src
├── tailwind.config.js
├── postcss.config.mjs
├── package.json
└── README.md
```

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Scripts

- **`npm run dev`** – start dev server (Vite)
- **`npm run build`** – production build to `dist/`
- **`npm run preview`** – serve the production build locally

## Tech

- React 18 + JavaScript (JSX)
- Vite
- Tailwind CSS
- react-datepicker, react-icons
