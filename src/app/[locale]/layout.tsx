import { notFound } from 'next/navigation';
import { dictionaries, isLocale } from '@/lib/i18n';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Reveal } from '@/components/reveal';
export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return (
    <>
      <a className="skip-link" href="#main">
        {dictionaries[locale].nav.skip}
      </a>
      <Navigation locale={locale} />
      <Reveal>{children}</Reveal>
      <Footer locale={locale} />
    </>
  );
}
