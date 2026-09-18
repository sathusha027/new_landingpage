# Sharaly - Food Delivery Platform

Idhu unga modern food delivery website oda full React + Vite + Tailwind project (plain JavaScript/JSX - TypeScript illama).

## Setup pannurathu eppadi?

1. **Node.js install pannunga** (illana https://nodejs.org la irundhu download pannunga, version 18+ better)
2. Idha unpack panniti, terminal la project folder ku poyi idha run pannunga:

```bash
npm install
```

3. Local server start panna:

```bash
npm run dev
```

4. Browser la `http://localhost:5173` open pannunga - unga site vandhurum!

## Production build (deploy panna)

```bash
npm run build
```

Idhu `dist/` folder ah create pannum, adha ethana hosting (Netlify, Vercel, GitHub Pages) la upload panniduvanga.

## Project structure

```
sharaly-delivery-app/
├── index.html          # Main HTML entry
├── package.json        # Dependencies list
├── vite.config.js      # Vite config
├── tailwind.config.js  # Tailwind CSS config (custom animations um add panniten)
├── postcss.config.js   # PostCSS config
└── src/
    ├── main.jsx         # React entry point
    ├── App.jsx          # Unga full website code (idhu than original file)
    └── index.css        # Tailwind CSS imports + custom scrollbar styles
```

## Notes

- Icons kaaga `lucide-react` package use panniruken.
- Tailwind CSS use panni styling panniruken.
- Custom animations (`fade-in`, `scale-up`, `slide-left`) tailwind.config.js la add panniten, site la already use aagirukku.
- Menu images Unsplash la irundhu vandhudhu (`src/App.jsx` file la `FOOD_ITEMS` array la mathikkalam).
- Cart la already 2 items default ah add pannirukanga (`cartItems` state) - venaandi remove pannikalam.
