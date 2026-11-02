import { notFound } from 'next/navigation';
import { dictionaries, isLocale } from '@/lib/i18n';
import { pageMetadata } from '@/lib/metadata';
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return pageMetadata(locale, '/private-repo');
}
export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = dictionaries[locale].private;
  return (
    <main id="main" className="message-page container">
      <p className="eyebrow">{t.eyebrow}</p>
      <h1>{t.title}</h1>
      <p>{t.description}</p>
      <div className="button-row">
        <a className="button primary" href={`/${locale}#contact`}>
          {t.cta}
        </a>
        <a className="button secondary" href={`/${locale}/projects`}>
          {t.back}
        </a>
      </div>
    </main>
  );
}
