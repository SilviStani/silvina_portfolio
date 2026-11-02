import type { MetadataRoute } from 'next';
import { locales, siteUrl } from '@/lib/i18n';
export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) =>
    ['', '/projects'].map((path) => ({
      url: `${siteUrl}/${locale}${path}`,
      changeFrequency: 'monthly' as const,
      priority: path ? 0.8 : 1,
      alternates: { languages: { en: `${siteUrl}/en${path}`, es: `${siteUrl}/es${path}` } },
    }))
  );
}
