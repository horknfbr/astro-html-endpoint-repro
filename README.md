# Astro `.html`-suffixed endpoint crash — minimal reproduction

Requesting a dynamic **endpoint** route with `.html` (or `/index.html`) appended
crashes `astro dev` with `TypeError: Missing parameter: <param>`.

Verified on `astro@7.0.6`.

## Run

```bash
npm install
npm run dev   # http://localhost:4321
```

## Reproduce

```bash
curl http://localhost:4321/api/items/123/status             # 200 {"ok":true}
curl http://localhost:4321/api/items/123/status.html        # 500 TypeError: Missing parameter: id
curl http://localhost:4321/api/items/123/status/index.html  # 500 TypeError: Missing parameter: id
```

## Why it matters

`netlify dev` (and other proxies) probe `<path>.html` and `<path>/index.html`
on any 404, so every 404 from a dynamic API endpoint during local dev triggers
this crash and paints the full-screen HMR error overlay.

The single route file is `src/pages/api/items/[id]/status.ts`.
