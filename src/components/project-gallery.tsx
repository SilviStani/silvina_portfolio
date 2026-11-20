'use client';
import Image from 'next/image';
import { useState } from 'react';
import { dictionaries, type Locale } from '@/lib/i18n';
import type { Project, ProjectCategory } from '@/lib/projects';
import { Arrow } from './icons';

export function ProjectGallery({
  locale,
  projects,
  showcase = false,
}: {
  locale: Locale;
  projects: Project[];
  showcase?: boolean;
}) {
  const t = dictionaries[locale].projects;
  const labels =
    locale === 'es'
      ? { live: 'Ver demo', code: 'Código', quality: 'Calidad y pruebas' }
      : { live: 'Live Demo', code: 'Code', quality: 'Quality & Testing' };
  const [filter, setFilter] = useState<'all' | ProjectCategory>('all');
  const filtered = projects.filter((project) => filter === 'all' || project.category === filter);
  return (
    <div className={showcase ? 'gallery project-showcase' : 'gallery'}>
      <div className="gallery-toolbar">
        <div className="filter-bar" role="group" aria-label={t.filters}>
          {(['all', 'qa', 'development'] as const).map((category) => (
            <button
              key={category}
              type="button"
              aria-pressed={filter === category}
              onClick={() => setFilter(category)}
              data-testid={`filter-${category}`}
            >
              {t[category]}
            </button>
          ))}
        </div>
        <p className="project-count" role="status" aria-live="polite" aria-atomic="true">
          {filtered.length} {t.count}
        </p>
      </div>
      <div className="project-grid">
        {filtered.map((project) => {
          const title = locale === 'en' ? (project.englishTitle ?? project.title) : project.title;
          const openCodeInNewTab = showcase || !project.code.startsWith('/');
          return (
            <article
              className={`project-card project-${project.id}${showcase && project.mobileImage ? ' project-card-devices' : ''}`}
              key={project.id}
              data-category={project.category}
              data-testid={`project-${project.id}`}
            >
              <div className="project-image">
                {showcase && project.image && project.mobileImage ? (
                  <>
                    <div className="showcase-laptop">
                      <div className="showcase-screen">
                        <Image
                          src={project.image}
                          alt={project.imageAlt ?? `${t.screenshot} ${title}`}
                          fill
                          sizes="(max-width: 639px) 75vw, 820px"
                        />
                      </div>
                    </div>
                    <div className="showcase-phone">
                      <Image
                        src={project.mobileImage}
                        alt={project.mobileImageAlt ?? `${t.screenshot} ${title}`}
                        fill
                        sizes="(max-width: 639px) 25vw, 250px"
                      />
                    </div>
                  </>
                ) : project.image ? (
                  <Image
                    src={project.image}
                    alt={`${t.screenshot} ${title}`}
                    fill
                    sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                  />
                ) : (
                  <div className="project-placeholder">
                    <span aria-hidden="true">✳</span>
                    {t.noScreenshot}
                  </div>
                )}
                {!showcase && (
                  <span className="project-number" aria-hidden="true">
                    {String(projects.indexOf(project) + 1).padStart(2, '0')}
                  </span>
                )}
              </div>
              <div className="project-body">
                <div className={showcase ? 'showcase-heading' : undefined}>
                  {showcase && <h3>{title}</h3>}
                  <p className="project-category">
                    {project.category === 'qa' ? t.qa : t.development}
                    {project.id === 'mi-terra' ? ` · ${t.inProgress}` : ''}
                  </p>
                </div>
                {!showcase && <h3>{title}</h3>}
                <p className="project-description">{project.description[locale]}</p>
                <ul className="tags" aria-label={locale === 'es' ? 'Tecnologías' : 'Technologies'}>
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                {showcase && project.quality && (
                  <div className="showcase-quality">
                    <h4>{labels.quality}</h4>
                    <p>{project.quality[locale]}</p>
                  </div>
                )}
                {(project.live || project.code) && (
                  <div className="project-links">
                    {project.live && (
                      <a
                        className={showcase ? 'showcase-demo' : undefined}
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${showcase ? labels.live : t.live}: ${title}`}
                      >
                        {showcase ? labels.live : t.live}
                        {!showcase && <Arrow diagonal />}
                      </a>
                    )}
                    {project.code && (
                      <a
                        href={
                          project.code.startsWith('/') ? `/${locale}${project.code}` : project.code
                        }
                        target={openCodeInNewTab ? '_blank' : undefined}
                        rel={openCodeInNewTab ? 'noopener noreferrer' : undefined}
                        aria-label={
                          showcase
                            ? `${labels.code}: ${title}${project.code.startsWith('/') ? ` · ${t.private}` : ''}`
                            : `${project.code.startsWith('/') ? t.private : t.code}: ${title}`
                        }
                      >
                        {showcase ? labels.code : project.code.startsWith('/') ? t.private : t.code}
                        {!showcase && <Arrow diagonal />}
                      </a>
                    )}
                  </div>
                )}
              </div>
              {showcase && project.demoPreviews && (
                <section className="showcase-previews" aria-labelledby={`${project.id}-previews`}>
                  <h4 id={`${project.id}-previews`}>
                    {locale === 'es' ? 'Explorá las demos' : 'Explore the demos'}
                  </h4>
                  <div className="showcase-previews-grid">
                    {project.demoPreviews.map(({ label, href, screenshot }) => (
                      <a
                        className="showcase-preview"
                        key={href}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="showcase-preview-frame">
                          <Image src={screenshot} alt="" width={780} height={1688} unoptimized />
                        </span>
                        <span className="showcase-preview-button">{label[locale]}</span>
                      </a>
                    ))}
                  </div>
                </section>
              )}
            </article>
          );
        })}
      </div>
    </div>
  );
}
