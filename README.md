# Paalam 

**Paalam** is a fictional coffin/casket store website. It presents a fully-designed, static multi-page site — services, a product catalog, contact information, and a client account flow.

> **Disclaimer:** Paalam is fictional and developed solely as a school project. It does not represent an actual business or offer real services.

---

## Features

- **Multi-page static site** — Home, Store, Contact, About, Sign In, and Sign Up, all sharing a consistent header/footer
- **Custom design system** ("Quiet Mourning v2") — a dark charcoal palette with bronze and maroon accents, defined as CSS custom properties
- **Client-side authentication**
  - Google Sign-In via `google.accounts.id` (ID token flow)
  - Manual email/password sign-up and sign-in forms
  - Logged-in state persisted in `localStorage` (`paalam_user`)
  - Dynamic header that swaps the account icon for a profile avatar + dropdown (with sign-out) once a user is "signed in"
- **Service catalog** on the Home page (caskets, embalming, memorial packages, documentation assistance, etc.)
- **Store page** with a product grid for caskets/urns, pricing in both PHP and USD
- **Contact page** with social links and direct contact details
- **Clean URLs** (`/home`, `/store`, `/contact`, `/about`, `/signup`, `/signin`) via Vercel rewrites and a matching Vite dev-server plugin

---

## Project Structure

```
.
├── index.html                 # Landing page
├── sections/
│   ├── home.html               # Services overview
│   ├── store.html               # Product catalog
│   ├── contact.html            # Contact details
│   ├── about.html               # Project/author info
│   ├── signup.html              # Account creation (Google OAuth + manual form)
│   └── signin.html              # Sign in (Google OAuth + manual form)
├── src/
│   ├── style.css                # Shared base styles, header, footer, palette
│   ├── normalize.css            # CSS reset baseline
│   ├── index.css / home.css / store.css
│   ├── contact.css / about.css
│   ├── signin.css / signup.css
│   └── assets/                  # Icons, backgrounds, product images
├── public/
│   ├── favicon.svg
│   └── account.svg
├── notes/
│   └── color-scheme.md          # "Quiet Mourning v2" palette reference
├── vite.config.js               # Multi-page build config + dev/preview rewrites
├── vercel.json                  # Production clean-URL rewrites
└── package.json
```

---

## Color Pallete

| Role | Color |
|---|---|
| Background (deepest) | `#0F1115` |
| Header / Surface | `#191C22` |
| Card / Elevated surface | `#20242C` |
| Primary accent (bronze) | `#A8875C` |
| Secondary accent (maroon) | `#6B2E2E` |
| Text (primary) | `#F2EFE9` |
| Text (muted) | `#A9A49C` |
| Borders / dividers | `#2B2F38` |
| Hover / active state | `#C4A57A` |

Defined as CSS custom properties in `src/style.css`, so all page-level stylesheets pull from a single source of truth. See `notes/color-scheme.md` for the full reference.

---

## Authentication

Authentication is entirely **client-side** — appropriate for a class demo, not for production use.

- **Google Sign-In**: Uses the `google.accounts.id` library (`renderButton` + ID-token callback). On success, `name`, `email`, and `picture` are decoded from the JWT and stored under `localStorage.paalam_user`.
- **Manual sign-up/sign-in**: Stores the entered name/email under the same key, with `isDefaultIcon: true` so the fallback account icon (rather than a broken image) is shown and correctly tinted.
- **Header state**: Every page runs a `renderHeaderAuth()` function on load that checks `localStorage` and, if a user is present, replaces the header's sign-up link with an avatar + dropdown menu (name + sign-out).

No passwords or tokens are validated against a backend — this is a front-end simulation only.

---

## Deployment

The site is deployed on **Vercel**. `vercel.json` rewrites clean URLs to their corresponding HTML files:

| Route | Destination |
|---|---|
| `/home` | `/sections/home.html` |
| `/store` | `/sections/store.html` |
| `/contact` | `/sections/contact.html` |
| `/about` | `/sections/about.html` |
| `/signup` | `/sections/signup.html` |
| `/signin` | `/sections/signin.html` |

No build command or output directory is required beyond the default — push to `main` and Vercel handles the rest.

---

## Built With

- **Core:** HTML5, CSS3, JavaScript
- **Libraries:** [normalize.css](https://necolas.github.io/normalize.css/), Google Identity Services
- **Bundler:** [Vite](https://vitejs.dev/) (multi-page config, no framework)
- **Design:** Figma
- **Deployment:** Vercel

---

## Author

- GitHub: [github.com/adAstra144](https://github.com/adAstra144)

---

*Submitted as a 1st year, 1st semester prelim exam project — August 2026.*