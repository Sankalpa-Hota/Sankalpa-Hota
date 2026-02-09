# Host this site on GitHub Pages

Follow these steps to put your site live on `https://<username>.github.io/<repo>/` (or `https://<username>.github.io/` if the repo is named `username.github.io`).

---

## 1. Create a GitHub repository

1. Go to [github.com/new](https://github.com/new).
2. **Repository name**: e.g. `portfolio` or `sankalpa-hota` (or `YOUR_USERNAME.github.io` for a root site like `https://YOUR_USERNAME.github.io`).
3. Choose **Public**.
4. Do **not** add a README, .gitignore, or license (you already have files).
5. Click **Create repository**.

---

## 2. Push this folder to the repo

From your computer, in the folder that **contains** the `website` folder (e.g. `MIMO`), run:

```bash
# If you haven’t used git here yet:
cd /path/to/MIMO
git init
git add website/
git commit -m "Add personal site"

# Add GitHub as remote (replace YOUR_USERNAME and REPO_NAME with yours)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Push (use main or master depending on your default branch)
git branch -M main
git push -u origin main
```

**If the site lives in a subfolder (e.g. `MIMO/website`)** and you want GitHub Pages to serve **only** the site:

- Either push **only** the contents of `website` into the **root** of the repo:
  - Create a new repo, then:
  ```bash
  cd /path/to/MIMO/website
  git init
  git add .
  git commit -m "Initial commit"
  git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
  git branch -M main
  git push -u origin main
  ```
- Or keep the repo as-is and set the Pages source to the `website` folder (see step 3).

---

## 3. Turn on GitHub Pages

1. In your repo on GitHub, go to **Settings** → **Pages** (left sidebar).
2. Under **Build and deployment**:
   - **Source**: **Deploy from a branch**.
   - **Branch**: `main` (or your default branch).
   - **Folder**:
     - If you pushed only the site files to the repo root → choose **/ (root)**.
     - If the site is in a subfolder (e.g. `website`) → choose **/website** (or that folder).
   - Click **Save**.

---

## 4. Wait and open the site

- GitHub will build and deploy. Wait 1–2 minutes.
- Your site URL will be:
  - **Repo named `USERNAME.github.io`**: `https://USERNAME.github.io`
  - **Any other repo name**: `https://USERNAME.github.io/REPO_NAME/`

If you used a subfolder (e.g. `website`), the URL is still `https://USERNAME.github.io/REPO_NAME/` and GitHub serves the folder you selected.

---

## 5. Optional: custom domain

In **Settings → Pages**, under **Custom domain**, enter your domain (e.g. `sankalpa.dev`), then add the CNAME record at your DNS provider as GitHub instructs.

---

## Summary

| Step | Action |
|------|--------|
| 1 | Create a new public repo (e.g. `portfolio` or `USERNAME.github.io`). |
| 2 | Push this site’s files (either from `website/` only into repo root, or push parent repo and set folder in Pages). |
| 3 | Settings → Pages → Source: **Deploy from a branch** → Branch **main** → Folder **/ (root)** or **/website** → Save. |
| 4 | Open `https://USERNAME.github.io` or `https://USERNAME.github.io/REPO_NAME/`. |

No build step is required; the site is static HTML, CSS, and JS.

---

## 6. Custom 404 (included)

The repo includes a **404.html** in the root. GitHub Pages will serve it when a visitor hits a URL that doesn’t exist (e.g. a typo or old link), so they see your branded “Page not found” and a link back to the home page instead of the default GitHub 404.
