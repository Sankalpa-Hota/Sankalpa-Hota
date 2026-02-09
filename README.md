# Sankalpa Hota — Personal site

Modular, multi-page portfolio with old-money styling and a small FAQ chatbot. Ready for **GitHub Pages**.

## Structure

```
website/
├── index.html          # Home
├── about.html          # About & Startups
├── education.html      # Education + Skills
├── experience.html     # Work experience
├── projects.html       # Projects
├── github.html         # GitHub repos
├── reports.html        # Reports / PDFs
├── connect.html        # Contact (email, LinkedIn, GitHub, Instagram)
├── blog/
│   ├── index.html      # Blog listing (all posts)
│   └── posts/          # One .html file per post (e.g. welcome.html)
├── includes/
│   ├── header.html     # Shared header + nav (loaded by JS)
│   └── footer.html     # Shared footer
├── css/
│   ├── main.css        # Imports all below
│   ├── base.css        # Variables, reset, typography
│   ├── layout.css      # Page, header, footer
│   ├── components.css  # Hero, sections, cards, buttons
│   ├── blog.css         # Blog listing + single post
│   └── chatbot.css      # Chat widget
├── js/
│   ├── layout.js       # Loads header/footer, sets active nav
│   ├── chatbot.js      # Chat UI and logic
│   └── data/
│       └── knowledge.js # FAQ answers (education, experience, contact, LinkedIn, etc.)
├── DEPLOY.md           # Step-by-step GitHub Pages hosting
└── README.md
```

## Run locally

Serve the folder so that `fetch('includes/header.html')` works (same-origin). Opening `index.html` as a file may not load includes.

```bash
cd website
python3 -m http.server 8000 --directory .
# Open http://localhost:8000
```

## Host on GitHub

See **[DEPLOY.md](DEPLOY.md)** for full steps: create repo → push → Settings → Pages → choose branch and folder → done.

## Edit content

- **Nav / footer**: Edit `includes/header.html` and `includes/footer.html`; they appear on every page.
- **Page content**: Edit the corresponding `.html` file (e.g. `education.html`).
- **Chatbot answers**: Edit `js/data/knowledge.js` (keywords and reply text). The bot points to your LinkedIn profile link; LinkedIn has no public API for personal profiles, so the bot uses this static knowledge and links to LinkedIn for “latest” details.
- **Styles**: Edit `css/base.css`, `css/layout.css`, `css/components.css`, `css/blog.css`, or `css/chatbot.css` as needed.
- **Blog**: Add a new post by creating `blog/posts/your-slug.html` (copy from `blog/posts/welcome.html`), then add a card in `blog/index.html` inside the `<ul class="blog-list">` with the same structure (title, date, excerpt, link to `posts/your-slug.html`).

## Links

- Email: sankalpahota503@gmail.com  
- LinkedIn: [linkedin.com/in/sankalpa-hota-86937517a/](https://linkedin.com/in/sankalpa-hota-86937517a/)  
- GitHub: [github.com/Sankalpa-Hota](https://github.com/Sankalpa-Hota)  
- Instagram: [@sankalpa_hota_](https://instagram.com/sankalpa_hota_)
