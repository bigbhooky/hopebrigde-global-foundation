# Hopebrigde Global Foundation — website starter

A responsive, premium-style static website built with HTML, CSS and vanilla JavaScript.

## Files
- `index.html` — main website and all primary sections
- `styles.css` — responsive design, typography, animations and layouts
- `script.js` — navigation, scroll reveals and contact form email preparation
- `privacy.html` — privacy notice drafting placeholder
- `safeguarding.html` — safeguarding policy placeholder

## Publish free with GitHub Pages
1. Create or sign in to a GitHub account.
2. Create a new **public** repository, for example `hopebrigde-global-foundation`.
3. Upload all files in this folder to the repository root (not inside another nested folder).
4. Open repository **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Choose branch `main` and folder `/ (root)`, then save.
7. Wait for GitHub Pages to publish and open the URL shown in Settings → Pages.

## Before publishing
- Confirm the foundation's actual legal name, legal status, registered address and whether it is registered in England and Wales, Scotland, Northern Ireland or elsewhere. Wales and London are different locations; do not publish them as one address.
- Confirm the real contact email and configure `FOUNDATION_EMAIL` in `script.js`.
- Replace image URLs with photographs the foundation owns or has permission to use. Current remote Unsplash images are illustrative.
- Add verified contact details, governance information and official social accounts.
- Have privacy, safeguarding, complaints, donation and grant policies reviewed for the organisation's actual jurisdiction and activities.
- Do not claim registration, offices, donors, awards, partnerships, projects, beneficiaries or impact statistics unless verified.

## Important technical limitations
GitHub Pages hosts static files. It does **not** provide a secure server, database, admin dashboard, authentication, form processing or payment processing. The current contact form validates fields and prepares an email in the visitor's email app; it does not submit to a server or store data.

For production functionality:
- Connect forms to a trusted form service or your own backend.
- Implement admin login and role-based access on a secure server; never put admin passwords or secret API keys in browser JavaScript.
- Integrate donations using a supported payment provider's hosted checkout and server-side verification. Do not collect card details directly in this static site.
- Use HTTPS and configure appropriate spam protection, privacy notices and retention rules.

## Images and external services
Google Fonts and the image URLs are loaded from third-party services and therefore require an internet connection. Replace remote images with properly licensed, optimised local files if preferred.
