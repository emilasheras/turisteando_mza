# Turisteando MZA

Turisteando MZA is a tourism web app focused on the province of Mendoza, Argentina. It uses **React** with **Vite** and **MUI** for the front‑end. Data is stored in **Supabase** and points of interest are fetched from **OpenTripMap**.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```

Environment variables are required for API access:

- `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`
- `VITE_OPENTRIPMAP_API_KEY` and related `VITE_OPENTRIPMAP_*` options

## Documentation

Planning and requirements documentation can be found in the [llm-context](./llm-context/README.md) folder.

### Routes

The SPA uses React Router. Each POI on the map links to `/place/:placeId`, which renders a detailed view for that location.

### Routes (GPX Tracks)

There is a basic prototype for uploading and listing GPS tracks. Use `/routes` to view existing routes and `/routes/upload` to upload a GPX file. Uploaded tracks are stored in the new `route` table in Supabase.
