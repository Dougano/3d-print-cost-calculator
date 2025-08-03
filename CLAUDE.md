# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **single-file Progressive Web Application** for calculating 3D printing costs, specifically designed for the South African market. The entire application is contained in `index.html` with no build tools or external dependencies.

## Architecture

- **Single HTML file**: All functionality is in `index.html` (HTML + embedded CSS + embedded JavaScript)
- **No build system**: Direct browser execution, no compilation or bundling required
- **State management**: Simple global `state` object with manual DOM updates via `render()` function
- **Data persistence**: Browser LocalStorage for saved products
- **PWA features**: Service worker for offline functionality, installable via manifest.json

## Key Components in index.html

1. **Global State** (line ~50): Central `state` object containing all application data
2. **Calculation Functions** (lines ~100-200): Pure functions for cost calculations
3. **Render Function** (line ~250): Main UI rendering logic that updates innerHTML
4. **Event Handlers** (throughout): Global functions handling user interactions
5. **Service Worker** (line ~650): Inline PWA service worker for offline support

## Development Commands

Since this is a vanilla JavaScript application with no build tools:

- **Run locally**: Open `index.html` directly in a browser or use a local server:
  ```bash
  python -m http.server 8000
  # or
  npx serve .
  ```
- **Deploy**: Push to GitHub main branch (automatically deployed via GitHub Pages)
- **Test**: Manual testing in browser (no test framework)
- **Lint/Format**: No linting setup (consider using Prettier on the HTML file if needed)

## Important Considerations

1. **Single-file constraint**: All changes must be made within `index.html`. Avoid creating separate JS/CSS files.
2. **South African localization**: Currency is in ZAR, default rates are for SA market
3. **Mobile-first**: Ensure all UI changes work on mobile devices
4. **No external dependencies**: Use only browser APIs and Tailwind CSS (loaded via CDN)
5. **State updates**: After modifying `state`, always call `render()` to update the UI
6. **LocalStorage**: Products are saved to localStorage with key 'products'

## Common Tasks

- **Add new material type**: Update the material density map in the calculation functions
- **Modify calculations**: Edit the `calculateCosts()` function
- **Update UI**: Modify the `render()` function's template literals
- **Add features**: Extend the state object and update render logic accordingly