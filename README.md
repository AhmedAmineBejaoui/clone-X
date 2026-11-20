# Clone X — React social feed demo

A frontend prototype inspired by a social-media timeline, built with **React 18**, **Vite 6** and **Tailwind CSS 3**.

## Features in the source

- Timeline with sample posts, likes and repost counters.
- Compose posts with text and optional local image/video previews.
- Add comments to posts during the current browser session.
- Sidebar, search, trending topics and suggested accounts UI.

**Scope:** This is a frontend demonstration, not a production social network. Posts and interactions are held in React state; refreshing resets them. There is no backend, authentication, persistent storage or real subscription billing.

## Run locally

Install a Node.js/npm version compatible with Vite 6, then:

```bash
npm ci
npm run dev
```

Open the local URL printed by Vite.

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## Code map

- `src/App.jsx` — sample timeline and in-memory interaction state.
- `src/PostInput.jsx` — composer and media selection.
- `src/Tweet.jsx` — post presentation and actions.
- `src/Sidebar.jsx`, `src/TrendingList.jsx`, `src/FollowList.jsx` — navigation and discovery.
- `src/main.jsx` — React entry point.

## Known limitations

- Data is illustrative, not persisted or synchronized.
- Media previews use local browser object URLs, not uploads.
- `src/PostInput.jsx` imports `prop-types`, but `package.json` does not declare it. Dependency resolution needs correction and `npm run build` verification before deployment.
- No automated test script is defined in `package.json`.

This README documents inspected source, not a verified build or browser test.
