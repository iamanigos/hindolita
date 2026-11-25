# Hindolita Chakraborty: *Where Poetry Finds a Voice*

The personal music website of **Hindolita Chakraborty**, a vocalist rooted in the musical heritage of Bengal: ghazal, thumri, semi-classical and Ragpradhan songs, fusion, Rabindrasangeet, Nazrulgeeti and Indian folk.

**🌐 Live at [raginibyhindolita.com](https://raginibyhindolita.com/)**

It's a hand-built static site: plain HTML, CSS and a little vanilla JavaScript. There's no framework, no build step, no database and nothing to pay for. It's hosted free on GitHub Pages.

---

## Contents

- [What's on the site](#whats-on-the-site)
- [Design](#design)
- [Project structure](#project-structure)
- [Preview locally](#preview-locally)
- [Common edits](#common-edits)
- [Publishing](#publishing)
- [Domain & hosting](#domain--hosting)
- [Accessibility & privacy](#accessibility--privacy)
- [Rights](#rights)

---

## What's on the site

The page is a single scroll, with sections that alternate between light and dark:

| # | Section | Background | What it holds |
|---|---|---|---|
| 1 | **Hero** | ivory | Her name, *"Where Poetry Finds a Voice, and Melodies Find a Home"*, main portrait |
| 2 | **About**: *Music is a way of being.* | dark chocolate | Introduction to her musical world |
| 3 | **The Roots** | ivory | Childhood and present-day photos with her parents and first gurus |
| 4 | **The Performer** | charcoal | Live concert photo, stage photo, *"A graceful voice and captivating stage presence."* |
| 5 | **Music**: *Music, in moments.* | beige | Two recordings in custom dark-brown audio players |
| 6 | **A musical journey** | aubergine | Seven traditions, from Ghazal to Indian folk |
| 7 | **Beyond music** | champagne | Her geology & marine research, link to Google Scholar |
| 8 | **Contact** | maroon | Email, phone, Instagram, Facebook |

**Small touches:**
- 🪕 **Tanpura menu icon** on phones. It sways gently every few seconds.
- 🎵 **Background music** (a one-minute *Jog* loop). It starts on the visitor's first tap, with a mute button in the bottom-right corner. It steps aside while her songs play, and remembers if a visitor turns it off.
- ✨ Sections fade in softly on scroll. All motion is switched off for visitors who ask their device to reduce motion.

---

## Design

| | |
|---|---|
| **Feel** | Quiet, warm and minimal, with generous whitespace |
| **Serif** | Iowan Old Style → Baskerville → Palatino → Georgia (each visitor's own installed fonts, no web fonts) |
| **Sans** | Inter → system UI fonts |
| **Accent** | Champagne gold on dark sections, warm brown on light ones |

All colours are CSS variables at the top of [`assets/css/style.css`](assets/css/style.css):

| Variable | Colour | Used for |
|---|---|---|
| `--paper` | `#f4f0e8` | Ivory sections |
| `--paper2` / `--paper3` | `#ebe5da` / `#e9e3d8` | Champagne / beige sections |
| `--choc` | `#2c2019` | About section |
| `--dark` | `#292923` | Performer section |
| `--plum` | `#2a2130` | Journey section |
| `--wine` / `--wine-deep` | `#3a1a20` / `#2e1418` | Contact / footer |
| `--ink` | `#282722` | Body text on light sections |

Text colours were chosen to meet the WCAG contrast guidelines on every background.

---

## Project structure

```
index.html                  The whole page: all text lives here
CNAME                       Custom domain for GitHub Pages (don't delete)
.nojekyll                   Tells GitHub Pages to serve files as-is

assets/
  css/style.css             All styling (colours and fonts at the top)
  js/main.js                Menu, scroll effects, audio players, background music
  images/                   Optimised WebP images the page actually loads
    upbringing/             Original family photos (source files)
    performer/              Original stage photos (source files)
  music/                    MP3 recordings + background loop

images/                     Original photographs & artwork, kept for safekeeping
```

The page loads only the optimised files in `assets/images/`. The originals are kept so new sizes can be made later.

---

## Preview locally

From this folder, in the VS Code terminal:

```bash
python3 -m http.server 8000
```

Open **<http://localhost:8000/>**. Press `Ctrl+C` to stop the server.

> **Tip:** after changing CSS or JS, refresh with **Cmd+Shift+R** (Mac) or **Ctrl+Shift+R** (Windows) so the browser doesn't use an old cached copy.

VS Code's **Live Server** extension works too: right-click `index.html` → *Open with Live Server*.

---

## Common edits

### ✏️ Change text
All words on the site are in [`index.html`](index.html), and each section is marked with a comment like `<!-- ===== THE ROOTS ===== -->`. Edit the text, save and refresh.

### 🎨 Changed CSS or JavaScript? Bump the version number
Near the top and bottom of `index.html`, the stylesheet and script are loaded with version numbers:

```html
<link rel="stylesheet" href="assets/css/style.css?v=21">
<script src="assets/js/main.js?v=5" defer></script>
```

**Add 1 to the number** whenever you change that file (`?v=21` → `?v=22`). This makes every visitor's browser download the new version. Without it, returning visitors can see a half-updated page.

### 🎵 Add a song
1. Put the MP3 in `assets/music/`, with a simple name with no spaces, e.g. `ami-chini-go-chini.mp3`.
2. In `index.html`, find the Music section and copy a whole `<article class="track">…</article>` block.
3. In the copy, change:
   - the title (`track-title`) and caption (`music-caption`; Bengali text goes in `<span lang="bn">…</span>`)
   - the file path in `<audio … src="…">`
   - `aria-label="Play …"` and `aria-label="Seek — …"`
   - the duration in `ap-duration`, and `max="…"` (length in seconds) on the seek bar

To find a song's length on a Mac, run `afinfo assets/music/your-song.mp3 | grep duration`.

### 🖼️ Replace or add a photo
1. Make a web-sized copy, about 1200–1500 px wide, ideally as `.webp`. Any image tool can do this, or `sips -Z 1500 photo.jpg --out photo-1500.jpg` on a Mac.
2. Save it in `assets/images/` and keep the original in `images/` or a subfolder.
3. Update the `src`, `srcset`, `width` and `height` of the `<img>` in `index.html`.
4. Write a short, factual `alt` description of what's in the photo.

### 🎶 Change the background music
Replace `assets/music/background-jog.m4a` with another short loop under the same name, or update the `<audio id="bgMusic">` line near the end of `index.html`. Loops of 30–90 seconds work best. The volume is set by `BG_VOLUME` in `main.js`.

### 📇 Update contact details
They're in the Contact section of `index.html`. Each detail appears twice, in the link (`mailto:`, `tel:`, `https://…`) and in the visible text, so update both.

---

## Publishing

Every push to `main` goes live automatically within a minute or two:

```bash
git add -A
git commit -m "Describe what changed"
git push origin main
```

Before pushing:
- [ ] Previewed locally, on both a wide and a phone-width window
- [ ] Bumped `?v=` if CSS or JS changed
- [ ] `git status` shows only the files you meant to change
- [ ] Nothing private is being added. **This repository is public.**

Original files you want to keep but **not** publish can be listed in [`.gitignore`](.gitignore).

---

## Domain & hosting

| | |
|---|---|
| **Hosting** | GitHub Pages, from the `main` branch, root folder |
| **Domain** | `raginibyhindolita.com`, registered at GoDaddy |
| **HTTPS** | Free certificate from GitHub, renewed automatically, *Enforce HTTPS* on |
| **Old address** | `iamanigos.github.io/hindolita` redirects to the domain |

**GoDaddy DNS records** (leave these as they are):

| Type | Name | Value |
|---|---|---|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `iamanigos.github.io` |
| TXT | `_github-pages-challenge-iamanigos` | *(GitHub domain verification)* |

Keep **auto-renew** on in GoDaddy. If the domain lapses, the site goes offline and someone else could register the name.

---

## Accessibility & privacy

- Semantic HTML with a skip link, visible keyboard focus and descriptive alt text for every photo
- Mobile menu and audio players work with a keyboard and screen readers
- Text contrast meets WCAG guidelines on every section colour
- Motion is disabled for visitors who choose *reduce motion*
- **No cookies, no trackers, no analytics, no third-party scripts.** Only the background music choice is remembered, and only in the visitor's own browser.

---

## Rights

The photographs, recordings, artwork and written content on this site belong to Hindolita Chakraborty. **All rights reserved.** Please don't reuse them without permission.
