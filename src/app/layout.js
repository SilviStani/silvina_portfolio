import { Roboto } from 'next/font/google';
import { PersonSchema, WebsiteSchema } from './schema';
import './globals.scss';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-principal',
});

const siteUrl = 'https://silvina-portfolio.vercel.app';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Silvina Staniszewski · Web Developer & QA Automation Engineer',
  description:
    'Portfolio de Silvina Staniszewski — desarrollo web con Next.js, React y testing con Selenium y Playwright.',
  keywords: [
    'Web Developer',
    'QA Automation',
    'Next.js',
    'React',
    'Selenium',
    'Playwright',
    'freelancer',
    'Argentina',
  ],
  authors: [
    {
      name: 'Silvina Staniszewski',
      url: siteUrl,
    },
  ],
  creator: 'Silvina Staniszewski',
  publisher: 'Silvina.Dev',
  formatDetection: {
    email: true,
    telephone: true,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  canonical: siteUrl,
  alternates: {
    canonical: siteUrl,
    languages: {
      es: siteUrl,
      en: `${siteUrl}/en`,
    },
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'Silvina Staniszewski · Web Developer & QA Automation Engineer',
    description:
      'Portfolio de Silvina Staniszewski — desarrollo web con Next.js, React y testing con Selenium y Playwright.',
    siteName: 'Silvina.Dev',
    locale: 'es_AR',
    alternateLocale: 'en_US',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Silvina.Dev Portfolio',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Silvina Staniszewski · Web Developer & QA Automation Engineer',
    description:
      'Portfolio de Silvina Staniszewski — desarrollo web con Next.js, React y testing con Selenium y Playwright.',
    images: ['/opengraph-image'],
    creator: '@SilviStani',
  },
  verification: {
    google: 'google-site-verification-code', // Add your actual verification code
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" data-scroll-behavior="smooth">
      <head>
        {/* JSON-LD Structured Data */}
        <PersonSchema />
        <WebsiteSchema />
        
        {/* Additional SEO Meta Tags */}
        <link rel="canonical" href={siteUrl} />
        <meta name="theme-color" content="#ec4899" />
      </head>
      <body className={roboto.variable}>{children}</body>
    </html>
  );
}
