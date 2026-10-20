# Nisha Pant’s website

React and TypeScript personal website, published at https://nishapant.github.io through the `gh-pages` branch.

## Local development

Run `npm start` for the development server, or `npm run build` to produce the static site in `build/`.

- About: `src/Home.tsx`
- Shared navigation, photo loader, and writing titles: `src/Site.tsx`
- Photo archive: `src/Photos.tsx`
- Writing and article pages: `src/Writing.tsx`
- Styles: `src/index.css`
- Responsive WebP photos: `public/photos/`

The two essays currently have placeholder text. Add their content in `src/Writing.tsx` before treating them as complete articles.

## Publishing

Run `npm run deploy`. This builds the site and publishes `build/` to the existing GitHub Pages branch. The build script creates directory entry points for each route so direct links and refreshes work without a server-side router. Add new article paths to `scripts/prepare-pages.cjs` when adding essays.

The original full-resolution photos remain in `src/photos/`. Pages display optimized 480px and 960px WebP versions with a subtle loading placeholder, fade-in, lazy loading in the archive, and reduced-motion support.

`design-explorations/` contains local design drafts and is not part of the production build.
