import type { Metadata } from 'next';
import { dictionaries, siteUrl, type Locale } from './i18n';
export function pageMetadata(locale: Locale, path = ''): Metadata {
  const t = dictionaries[locale];
  const title =
    path === '/projects'
      ? `${locale === 'es' ? 'Proyectos' : 'Projects'} | Silvina.Dev`
      : path === '/private-repo'
        ? `${t.private.title} | Silvina.Dev`
        : t.meta.title;
  const description =
    path === '/projects'
      ? t.projects.archiveIntro
      : path === '/private-repo'
        ? t.private.description
        : t.meta.description;
  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}${path}`,
      languages: { en: `/en${path}`, es: `/es${path}`, 'x-default': `/en${path}` },
    },
    openGraph: {
      title,
      description,
      type: 'website',
      url: `${siteUrl}/${locale}${path}`,
      siteName: 'Silvina.Dev',
      locale: locale === 'es' ? 'es_AR' : 'en_US',
      alternateLocale: locale === 'es' ? 'en_US' : 'es_AR',
      images: [{ url: `/${locale}/opengraph-image`, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`/${locale}/opengraph-image`],
    },
  };
}
