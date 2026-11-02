import { notFound } from 'next/navigation';
import { dictionaries, isLocale } from '@/lib/i18n';
import { pageMetadata } from '@/lib/metadata';
import { ProjectGallery } from '@/components/project-gallery';
import { projects } from '@/lib/projects';
import { Arrow } from '@/components/icons';
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return pageMetadata(locale, '/projects');
}
export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = dictionaries[locale].projects;
  return (
    <main id="main" className="archive container">
      <a className="text-link" href={`/${locale}#work`}>
        ← {t.back}
      </a>
      <header className="section-heading">
        <p className="eyebrow">{t.eyebrow}</p>
        <h1>
          {t.archiveTitle} <em>{t.archiveItalic}</em>
        </h1>
        <p>{t.archiveIntro}</p>
      </header>
      <ProjectGallery locale={locale} projects={projects} />
      <section className="resources" aria-labelledby="resources-title">
        <div>
          <h2 id="resources-title">{t.resources}</h2>
          <p>{t.resourcesDescription}</p>
        </div>
        <div className="resource-links">
          {[
            { file: 'Brief_Guide_E2E_Testing_Key_Takeaways.pptx', label: t.brief },
            { file: 'E2E_Testing_Best_Practices.pptx', label: t.practices },
          ].map(({ file, label }) => (
            <a key={file} href={`/assets/${file}`} download aria-label={`${t.download}: ${label}`}>
              <span>
                {label}
                <small>{t.sourceLanguage} · PPTX</small>
              </span>
              <Arrow />
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
