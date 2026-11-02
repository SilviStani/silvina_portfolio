import type { Metadata, Viewport } from 'next';
import { headers } from 'next/headers';
import { Cormorant_Garamond, Manrope } from 'next/font/google';
import { contact, isLocale, siteUrl } from '@/lib/i18n';
import './globals.css';

const serif = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
});
const sans = Manrope({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Silvina.Dev',
  authors: [{ name: 'Silvina Staniszewski' }],
  robots: { index: true, follow: true },
};
export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#FFF9F8' };

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const value = (await headers()).get('x-site-locale') || 'en';
  const locale = isLocale(value) ? value : 'en';
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Silvina Staniszewski',
    url: siteUrl,
    jobTitle: ['Senior QA Automation Engineer', 'Web Developer'],
    sameAs: [contact.github, contact.linkedin],
    knowsLanguage: ['en', 'es'],
  };
  return (
    <html
      lang={locale}
      className={`${serif.variable} ${sans.variable}`}
      data-scroll-behavior="smooth"
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }}
        />
        {children}
      </body>
    </html>
  );
}
