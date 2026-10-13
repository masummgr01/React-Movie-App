# Movie App

A React app for discovering popular movies, searching for titles, and saving favorites.

## Features

- Browse popular movies from The Movie Database (TMDB).
- Search for movies by title.
- Add and remove movies from your favorites.
- Keep favorites in browser `localStorage` between visits.
- Navigate between the home page and favorites page.

## Requirements

- Node.js and npm
- A TMDB API key

## Getting started

1. Open a terminal in the `frontend` directory:

   ```sh
   cd frontend
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Configure your TMDB API key in `src/services/api.js`.

4. Start the development server:

   ```sh
   npm run dev
   ```

   Open the local URL printed by Vite in your browser.

## Available scripts

Run these commands from the `frontend` directory:

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create a production build in `frontend/dist` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## Project structure

```text
frontend/
  src/
    components/   Shared navigation and movie-card components
    contexts/     Shared movie favorites state
    css/          App and component styles
    pages/        Home and favorites pages
    services/     TMDB API requests
```

## Movie data

Movie listings and searches are provided by [The Movie Database (TMDB)](https://www.themoviedb.org/). The API key is used by the frontend in `src/services/api.js`; do not put private credentials in client-side code for a production deployment.
