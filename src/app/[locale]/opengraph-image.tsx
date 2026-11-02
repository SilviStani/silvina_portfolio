import { createOgImage } from '@/lib/og-image';
import { isLocale } from '@/lib/i18n';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export default async function Image({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return createOgImage(isLocale(locale) ? locale : 'en');
}
