# Silvina.Dev redesign

The existing Next.js 16.4.4 / React 19 App Router application now uses shared TypeScript components for the active portfolio. Original project data, assets, and legacy components are retained.

## Run locally

```sh
npm install
npm run dev
```

Open `/en` or `/es`. Use Node.js 22.13 or newer to satisfy all development-tool engine requirements. The installed Node 22.12 can run the application, but a transitive lint dependency declares a newer minimum.

## Content and architecture

- `src/lib/i18n.ts`: English and Spanish copy, locale types, and verified homepage contact destinations.
- `src/lib/projects.ts`: translated project descriptions and typed project records. Original links, technologies, and screenshot paths come from `Components/Portfolio/data.js`.
- `src/components/`: shared navigation, hero composition, homepage sections, project gallery, footer, decorative SVGs, and progressive reveal enhancement.
- `src/app/[locale]/`: the shared homepage, full project collection, private repository explanation, and localized Open Graph image.
- `src/app/globals.css`: responsive design tokens and styles. `src/app/reset.css` is the small CSS reset.
- `src/proxy.ts`: locale resolution, preference cookie, and redirects from legacy URLs.
- `src/lib/metadata.ts`: translated titles/descriptions, canonical URLs, language alternatives, and social metadata.

The original SCSS and components remain for reference; they are no longer imported by the active pages. No animation library was added: CSS and IntersectionObserver handle motion, with reduced-motion support and visible content when JavaScript is disabled.

## Language behavior

An explicit `/en` or `/es` URL determines the rendered language. The server renders the translated content, metadata, and HTML `lang` attribute together. Language selection uses ordinary navigation so the entire document, including its language, changes together without client-side language replacement.

The `silvina-language` cookie lasts one year. A visit to `/` uses that preference or defaults to English, regardless of browser language. Explicit language URLs override a previous preference. The switcher preserves the current page and fragment. Assets and image optimization are excluded from locale redirects.

Legacy `/projects` and `/private-repo` URLs redirect to the saved language. `/contact` redirects to the localized contact section; its existing WhatsApp destination remains available in the freelance contact path. These redirects are private and non-cacheable because they depend on the preference cookie.

## Content provenance

- All 17 existing projects are preserved, including the unfinished Mi Terra project, which is explicitly marked in development and has no fabricated screenshot.
- The desktop hero uses the original `Walter-tapizados.png`. The phone uses `walter-mobile.png`, captured from the actual live Walter website at 390 × 844 using `scripts/capture-project.mjs`.
- The hero QA card displays career achievements supplied in the redesign brief. It is labeled as career impact, not a project test-run report.
- The four professional metrics and Senior QA role come from the brief. No Scrum Master certification was added because the existing repository did not substantiate one.
- Contact links use the destinations in the previously active homepage's `Components/Skills/Social.js`. An older, unused contact component contains a different email; that historical component is preserved but is not used by the new site.
- Project screenshots and downloadable presentations are original artifacts. Their embedded text stays in its original language; surrounding descriptions, image alternatives, download labels, and the entire portfolio interface are translated.
- The old placeholder Google verification code and inaccurate LinkedIn schema URL are no longer rendered.

## Validation

```sh
npm run lint
npm run typecheck
npm run build
npm run test:e2e
node scripts/check-links.mjs
```

The browser suite runs against the production build on port 4174 using locally installed Google Chrome. If Chrome is unavailable, install a Playwright browser and adjust the channel in `playwright.config.ts`. It checks both languages at 320, 375, 425, 768, 1024, and 1440 pixels, filters, the complete project archive, language persistence across restored browser sessions, metadata, mobile menu interactions, keyboard access, missing images, overflow, reduced motion, and automated WCAG AA accessibility rules. Screenshots and the browser report are saved in ignored `test-results/` and `playwright-report/` directories.

Automated accessibility scans supplement human review; they do not establish complete WCAG conformance. The external link script checks HTTP availability rather than access behind login or the behavior of external sites. No contact message is sent during validation.

`next/font` downloads the selected Cormorant Garamond and Manrope fonts at build time and serves them locally at runtime; the initial build requires access to Google Fonts.

No commit, push, or deployment is part of this work.

## Verification results — November 2, 2026

- ESLint: passed with no errors or warnings.
- `tsc --noEmit`: passed.
- Next.js production build: passed.
- Playwright: 18 tests passed against the production build in Chrome.
- Both locales passed all six requested viewport widths, including the project archive overflow checks.
- Language switching, default English, saved preference, restored browser sessions, server HTML language, filters, navigation, contacts, keyboard access, and reduced motion passed.
- No browser console or hydration errors were observed in the language-switching flow.
- Automated WCAG A/AA checks reported zero violations on both localized homepages and project archives.
- All 26 original external project destinations returned HTTP 200.
- Both localized Open Graph image routes returned PNG responses; the sitemap returned XML successfully.
- Desktop and mobile screenshots in both languages were visually reviewed.
- Production dependency audit: zero reported vulnerabilities. Installation reported a Node engine warning for a transitive development dependency; use Node 22.13+ as noted above.

Browser coverage is Chrome only. External HTTP checks cannot verify message delivery, authenticated destinations, or continued availability of third-party sites.
