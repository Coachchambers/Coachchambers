# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

A static site (plain HTML/CSS/JS, no build step, no framework) for CP Coach Chambers / chambers.body.performance, a hybrid training & nutrition coaching business based in Schwerte.

## Structure

- `index.html` — single-page site with sections (`#about`, `#services`, `#contact`)
- `css/style.css` — all styling, uses CSS custom properties defined in `:root`
- `js/main.js` — site behavior (currently empty)
- `images/` — static assets

## Running locally

No build tooling is configured. Serve the directory with any static file server, e.g.:

```
python3 -m http.server
```

Then open `index.html` in a browser.
