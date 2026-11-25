# Hindolita Chakraborty — personal music website

A small static website: plain HTML, CSS and JavaScript. No framework, no build step, no server code, no paid services.

## Folder structure

```
index.html              ← the whole page (edit text here)
assets/css/style.css    ← all styling (colours are at the top, in :root)
assets/js/main.js       ← mobile menu, scroll effects, footer year
assets/images/          ← optimised WebP images used by the site, favicon, social-share image
images/                 ← original photographs (kept untouched, not used directly by the page)
.nojekyll               ← tells GitHub Pages to serve files as-is
```

## Preview locally

**Option A — VS Code Live Server** (if the extension is installed): right-click `index.html` → **Open with Live Server**.

**Option B — built-in Python server** (works on any Mac). In the VS Code terminal, from this folder:

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000/>. Press `Ctrl+C` in the terminal to stop it.

**Option C** — double-click `index.html`. It works because every path is relative.

## Editing content

Search `index.html` for `TODO` to find the places waiting for real content. Only add facts that Hindolita has confirmed.

To replace a photo: put the new image in `assets/images/`, then update the `src` and `srcset` on the matching `<img>` in `index.html`. Keep the `width` and `height` attributes equal to the image's real pixel size.

## Publish free with GitHub Pages (recommended)

The site is already in the GitHub repository `iamanigos/hindolita`.

1. Commit and push your changes:
   ```bash
   git add -A
   git commit -m "Describe the change"
   git push origin main
   ```
2. On GitHub, open the repository → **Settings** → **Pages**.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**, **Branch** to `main`, and **Folder** to `/ (root)`. Click **Save**.
4. Wait 1–2 minutes. Refresh the Pages settings page to see the live address:
   **https://iamanigos.github.io/hindolita/**
5. Open it, check every section on a phone and a computer, and tap each contact link.

Every later `git push` updates the live site automatically, usually within a minute or two.

> GitHub Pages on a free account requires the repository to be **public**. Anything in the repository, including its history, can be seen by anyone.

## Alternative: Vercel (Hobby, free)

1. Sign in at vercel.com with GitHub → **Add New… → Project** → import `iamanigos/hindolita`.
2. Set **Framework Preset** to **Other**. Leave the **Build Command** empty, set **Output Directory** to `.` (or leave it empty), and leave **Root Directory** as `./`.
3. Click **Deploy**. Vercel shows a `*.vercel.app` address. Open it and check the site.
4. If you use Vercel, update the `canonical`, `og:url` and `og:image` addresses at the top of `index.html` to match.

## Custom domain (later, optional)

Hosting is free, but a domain such as `hindolitachakraborty.com` costs an annual registration fee at a registrar.

1. Buy the domain from a registrar.
2. **GitHub Pages:** Settings → Pages → **Custom domain** → enter the domain → Save. **Vercel:** Project → Settings → Domains → Add.
3. At the registrar, add **exactly** the DNS records that GitHub or Vercel shows you. Don't copy values from elsewhere.
4. DNS changes can take from minutes to 48 hours to spread. When they're active, enable **Enforce HTTPS** (GitHub) or confirm the SSL certificate is issued (Vercel).
5. Update the `canonical`, `og:url` and `og:image` addresses in `index.html` to the new domain.

## Before each publish

- Preview locally and check the page on a phone-width window.
- Don't commit anything private (documents, passwords, API keys, personal notes).
- Check `git status` so you know exactly what will be pushed.
