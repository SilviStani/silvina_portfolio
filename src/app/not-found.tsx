import { headers } from 'next/headers';
import { dictionaries, isLocale } from '@/lib/i18n';
export default async function NotFound() {
  const value = (await headers()).get('x-site-locale') || 'en';
  const locale = isLocale(value) ? value : 'en';
  const t = dictionaries[locale].error;
  return (
    <main id="main" className="message-page container">
      <p className="eyebrow">404</p>
      <h1>{t.title}</h1>
      <p>{t.description}</p>
      <a className="button primary" href={`/${locale}`}>
        {t.back}
      </a>
    </main>
  );
}
