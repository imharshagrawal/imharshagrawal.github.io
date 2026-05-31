# Harsh Agrawal — Portfolio

A vibrant, fully responsive personal portfolio built with **React + Vite**, featuring:
- ⚡ Electric indigo/violet color palette with dark/light mode (auto + manual toggle)
- 📬 Contact form → Gmail via EmailJS (no backend needed)
- 🚀 One-command deploy to Bitbucket Pages (free hosting)

---

## Project Structure

```
portfolio/
├── index.html
├── vite.config.js
├── package.json
├── public/
│   └── resume.pdf          ← Drop your resume PDF here
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── styles/
    │   └── global.css
    ├── hooks/
    │   └── useTheme.jsx     ← Dark/light mode (system + manual)
    ├── data/
    │   └── portfolio.js     ← All your content lives here
    └── components/
        ├── Navbar.jsx / .module.css
        ├── Hero.jsx / .module.css
        ├── About.jsx / .module.css
        ├── Experience.jsx / .module.css
        ├── Projects.jsx / .module.css
        ├── Contact.jsx / .module.css
        ├── Footer.jsx / .module.css
        └── ScrollTop.jsx / .module.css
```

---

## 1. Local Development

```bash
npm install
npm run dev
# → http://localhost:5173
```

---

## 2. EmailJS Setup (Contact Form → Gmail)

1. Sign up free at **https://www.emailjs.com** (free tier = 200 emails/month)
2. Click **Add New Service** → choose **Gmail** → connect your Gmail account
3. Click **Email Templates** → **Create New Template**
4. Set the template body using these variables:
   ```
   From: {{from_name}} <{{from_email}}>
   Subject: {{subject}}
   
   {{message}}
   ```
5. Save and note your **Service ID**, **Template ID**, and **Public Key**
6. Open `src/components/Contact.jsx` and replace:
   ```js
   const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID'   // e.g. 'service_abc123'
   const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'  // e.g. 'template_xyz456'
   const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY'   // e.g. 'abcDEF123...'
   ```

That's it — no backend, no server, messages land directly in your Gmail inbox.

---

## 3. Update Your Content

All your data is centralized in **`src/data/portfolio.js`** — edit:
- `STATS` — hero numbers
- `SKILLS` — skill groups and chips
- `EXPERIENCE` — roles, highlights, tags
- `PROJECTS` — project cards
- `CERTIFICATIONS`, `SOCIAL` — certs and social links

Update LinkedIn/GitHub URLs in `SOCIAL` and `CONTACT_ITEMS` in `Contact.jsx`.

---

## 4. Add Your Resume PDF

Drop your resume file at:
```
public/resume.pdf
```
The **Download Resume** button in the navbar will serve it automatically.

---

## 5. Deploy to Bitbucket Pages (Free)

### Step 1 — Create a Bitbucket repository

```
Repo name: <your-username>.bitbucket.io
```
This exact naming convention activates Bitbucket Pages automatically.

### Step 2 — Update vite.config.js

If your repo is NOT the root pages repo (e.g. it's `my-portfolio`), set the base:
```js
// vite.config.js
export default defineConfig({
  plugins: [react()],
  base: '/my-portfolio/',   // only if NOT <username>.bitbucket.io
})
```

### Step 3 — Build and push

```bash
# Build
npm run build

# Init git (first time)
git init
git remote add origin https://bitbucket.org/<your-username>/<your-username>.bitbucket.io.git

# Push the dist folder contents as your main branch
git add dist -f
git commit -m "Deploy portfolio"
git subtree push --prefix dist origin main
```

### Alternative — use gh-pages package (already in devDependencies)

```bash
npm run deploy
# This runs: npm run build && npx gh-pages -d dist
```

> ⚠️ `gh-pages` pushes to a `gh-pages` branch. In Bitbucket, go to
> **Repository Settings → Websites → Branch** and select `gh-pages`.

Your site will be live at:
```
https://<your-username>.bitbucket.io
```

---

## 6. Dark / Light Mode

- **Auto**: Reads `prefers-color-scheme` on first visit
- **Manual**: Moon/sun toggle button in the navbar — persists in localStorage
- **Override**: Manually picking a theme disables auto-switch

---

## 7. Customisation Tips

| What to change | Where |
|---|---|
| Colors / theme | `src/styles/global.css` → `:root` and `[data-theme="dark"]` |
| Fonts | `index.html` Google Fonts link + `global.css` `--font-display` / `--font-body` |
| All content | `src/data/portfolio.js` |
| EmailJS keys | `src/components/Contact.jsx` top constants |
| Profile photo | Replace `HA` initials div in `Hero.jsx` with `<img src="..." />` |

---

## Tech Stack (all free)

| Tool | Purpose | Cost |
|---|---|---|
| React 18 | UI framework | Free |
| Vite 6 | Build tool + dev server | Free |
| CSS Modules | Scoped styles | Free |
| EmailJS | Contact form → Gmail | Free (200/mo) |
| Bitbucket Pages | Static hosting | Free |
| Google Fonts (Syne + DM Sans) | Typography | Free |
