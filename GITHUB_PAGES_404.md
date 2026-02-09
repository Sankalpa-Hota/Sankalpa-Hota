# Why you see "There isn't a GitHub Pages site here" (404)

That message is **GitHub’s default 404**, not your custom 404 page. It usually means one of the following.

---

## 1. GitHub Pages is not enabled

Your repo might not have Pages turned on.

**Fix:**

1. Open your repo on GitHub.
2. Go to **Settings** → **Pages** (left sidebar).
3. Under **Build and deployment**:
   - **Source**: choose **Deploy from a branch**.
   - **Branch**: e.g. `main` (or your default branch).
   - **Folder**: **/ (root)** if your site files are in the repo root.
4. Click **Save**.

Wait a few minutes, then open the URL again.

---

## 2. Wrong URL

For a **project site** (repo name is not `USERNAME.github.io`), the URL must include the repo name:

- **Correct:** `https://USERNAME.github.io/REPO_NAME/`  
  Example: `https://sankalpahota.github.io/Sankalpa-Hota/`
- **Wrong:** `https://USERNAME.github.io/` (this is for a *user* site, not this repo)

If you use the wrong URL, GitHub will show "There isn't a GitHub Pages site here."

---

## 3. Branch or folder is wrong

In **Settings → Pages**, make sure:

- The selected **branch** is the one where your site files live (e.g. `main`).
- The **folder** is the one that contains `index.html` (usually **/ (root)**).

If the site is in a subfolder (e.g. `website/`), choose that folder instead of root.

---

## 4. After enabling Pages

Once Pages is set up and the URL is correct:

- The **custom 404** (`404.html` in this repo) will be used when someone hits a *missing* page (e.g. a typo).
- The message **"There isn't a GitHub Pages site here"** should no longer appear for your site; you’ll see your own 404 page for bad links.

---

## Quick checklist

| Check | Action |
|--------|--------|
| Pages enabled? | Settings → Pages → Source: Deploy from a branch |
| Branch & folder | Branch = e.g. `main`, Folder = `/ (root)` or your site folder |
| URL | Use `https://USERNAME.github.io/REPO_NAME/` for a project site |
| Wait | After saving, wait 1–2 minutes and refresh |
