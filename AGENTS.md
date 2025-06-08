# Codex Guidance
Turisteando MZA is a Vite/React SPA with Supabase and OpenTripMap data.

## Build & Run
- Install deps: `npm install`
- Dev server: `npm run dev`
- Lint: `npm run lint` (must pass before commit)

## Code Style Rules
- Use `eslint.config.js`
- Avoid unused variables; prefer const/let over var

## Repository Tour
- `src/` – application code
- `llm-context/` – planning and docs

## PR Message
- Title: short summary
- Body: 1-sentence overview, bullet list of changes, testing notes

## Programmatic Checks
```bash
npm run lint
```
Codex must run the command above and only commit if it succeeds.

## Sandbox Constraints
Do not commit `dist/` or `llm-context-*` snapshot files.
