# Zona 20 Pizzeria e Osteria — sajt

Next.js 16 · React 19 · TypeScript · Tailwind CSS 4 · Framer Motion

```
npm install
npm run dev      # http://localhost:3000
npm run build    # produkcijski build
```

## Šta se menja pre objave

| Fajl | Šta |
|---|---|
| `data/business.ts` | dve lokacije, telefoni, radno vreme, Wolt linkovi, rezervacije, `siteUrl` (pravi domen) |
| `data/menu.ts` | proizvodi i sastojci (štampani jelovnik + Wolt). Cene se namerno ne prikazuju — vode na Wolt |
| `assets/images/` | fotografije sa @zona20_pizzeriaeosteria i Wolt-a, logo (tamni i svetli) |

## Deploy

Vercel: importovati repozitorijum, bez dodatnih podešavanja.
