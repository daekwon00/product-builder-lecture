# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

A static website (no build step) for the "AI Product Builder, 1인 창업가 부트캠프" bootcamp that demonstrates a dinner menu recommendation app. The site is bilingual with mirrored Korean and English versions.

## Run locally

```sh
python3 -m http.server 8000
```

- Korean: http://localhost:8000/index.html
- English: http://localhost:8000/index_en.html

## Build/lint/tests

None configured. This is a pure static site.

## Architecture

### File structure

| Korean | English | Purpose |
|--------|---------|---------|
| `index.html` | `index_en.html` | Main menu recommendation UI |
| `main.js` | `main_en.js` | Menu data and client logic |
| `contact.html` | `contact_en.html` | Contact form (Formspree) |

Shared: `style.css` for all styling and theming.

### Key patterns

- **Bilingual duplication**: KR and EN versions are mirrors. Changes to core behavior must be applied to both language versions.
- **Theme toggle**: Uses `body.light-mode` class + CSS variables. Persists via `localStorage` key `theme`.
- **Menu images**: Loaded from external Unsplash URLs in the JS menu arrays.
- **Contact forms**: Submit to Formspree endpoint `https://formspree.io/f/mojdrwry`.
- **Contact page theme script**: Duplicated inline in both contact pages (not shared).

### External dependencies

- Google Fonts (Noto Sans KR)
- Unsplash (menu images)
- Formspree (contact form backend)
