# AYVRIS

Clothing brand website built with React, Vite and Tailwind CSS v4.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Where to edit

- `src/index.css`: brand colors and fonts (`@theme`)
- `src/data/products.js`: products, prices, sizes, categories
- `src/components/ProductImage.jsx`: temporary illustrations (replace with real photos)
- `src/lib/config.js`: brand name, Instagram link, contact email
- `src/lib/format.js`: currency
- `src/pages/Contact.jsx`: connect the form to a backend
- `src/components/CartDrawer.jsx`: connect checkout to a payment provider

## Blank page?

- Run `npm install` first, then `npm run dev` and open the address it prints (http://localhost:5173). Opening `index.html` or `dist/index.html` by double-clicking will show a blank page, because browsers block module scripts on `file://`.
- Node 20 or newer is required (`node -v`).
- To preview the production build, use `npm run build` then `npm run preview`.
- If it's still blank, open the browser console (F12) and check for a red error.

## Adding products

Put the image in `public/products/` and add an entry to `src/data/products.js` with `image: "/products/your-file.jpg"`.
