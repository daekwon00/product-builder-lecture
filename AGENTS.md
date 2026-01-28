# AGENTS.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## What this repo is
A small static website (no build step) that recommends a random dinner menu item, with:
- Korean UI: `index.html` + `main.js`
- English UI: `index_en.html` + `main_en.js`
- Contact forms: `contact.html` / `contact_en.html` (posts to Formspree)
- Shared styling/theme: `style.css`

## Common commands
### Run locally (static server)
This repo is designed to be served as plain static files.

```sh
python3 -m http.server 8000
```

Then open:
- `http://localhost:8000/index.html` (KR)
- `http://localhost:8000/index_en.html` (EN)

Note: The repo includes an IDX config (`.idx/dev.nix`) that runs a similar command (`python3 -m http.server $PORT --bind 0.0.0.0`) for web previews.

### Build / lint / tests
There is no configured build system, linter, or test runner in this repository.

## High-level architecture
### Page structure
- `index.html` / `index_en.html`
  - Renders the main “menu recommendation” UI: header (language switch + theme toggle), a card area to display the chosen menu, a category `<select>`, and a “recommend” button.
  - Loads the language-specific JS (`main.js` or `main_en.js`) at the bottom of the page.
- `contact.html` / `contact_en.html`
  - A simple HTML form that submits to Formspree (`action="https://formspree.io/f/mojdrwry"`).
  - Contains an inline theme-toggle script (duplicated across both contact pages).

### Client-side logic (no framework)
- `main.js` / `main_en.js`
  - Holds the `dinnerMenus` array (same categories across languages) and picks a random menu item filtered by the selected category.
  - Updates `.menu-display` by clearing it and then inserting:
    - A `.menu-item` div for the selected menu name
    - An image element for the selected menu image (adds `.loaded` on `onload` for fade-in)
  - Theme toggle:
    - Toggles `body.light-mode`
    - Persists the preference via `localStorage` key `theme=light-mode`

Because the KR and EN versions are largely copy/paste mirrors, changes to core behavior should usually be applied to both `main.js` and `main_en.js` (and likewise both contact pages’ inline theme scripts).

### Styling and theming
- `style.css`
  - Uses CSS variables for colors; `body.light-mode` overrides the variables.
  - Contains styles for the main card, menu image fade-in (`.menu-image.loaded`), responsive layout, and contact form components.

### Assets
- `images/` contains a small set of local images used by the site (currently `now.png` and `target.png`).
- Menu images in the recommender are loaded from external Unsplash URLs embedded in the JS menu arrays.
