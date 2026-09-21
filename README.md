# Can Caramany

Premium private-estate website for **Can Caramany**, Mallorca — four landholdings offered individually for private purchase.

## Stack

- Next.js (App Router) with `en` / `de` locales
- React + TypeScript
- Tailwind CSS
- Framer Motion
- Mapbox (location map)

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (redirects to `/en` or `/de` from `Accept-Language`).

## Routes

- `/en` · `/de` — Sales homepage
- `/en/properties/property-i` … `property-iv` (and `/de/…`)
- `/en/imprint` · `/privacy` · `/legal` (and `/de/…`)
- `/api/enquiry` — private enquiry endpoint

## Assets

Production imagery belongs in `public/images/can-caramany/`. See that folder’s README for required filenames. Until assets are supplied, the UI shows explicit `IMAGE REQUIRED — …` placeholders.
