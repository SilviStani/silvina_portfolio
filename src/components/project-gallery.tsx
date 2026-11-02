'use client';
import Image from 'next/image';
import { useState } from 'react';
import { dictionaries, type Locale } from '@/lib/i18n';
import type { Project, ProjectCategory } from '@/lib/projects';
import { Arrow } from './icons';

export function ProjectGallery({ locale, projects }: { locale: Locale; projects: Project[] }) {
  const t = dictionaries[locale].projects;
  const [filter, setFilter] = useState<'all' | ProjectCategory>('all');
  const filtered = projects.filter((project) => filter === 'all' || project.category === filter);
  return (
    <div className="gallery">
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
        {filtered.map((project) => (
          <article
            className={`project-card project-${project.id}`}
            key={project.id}
            data-category={project.category}
            data-testid={`project-${project.id}`}
          >
            <div className="project-image">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={`${t.screenshot} ${project.title}`}
                  fill
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                />
              ) : (
                <div className="project-placeholder">
                  <span aria-hidden="true">✳</span>
                  {t.noScreenshot}
                </div>
              )}
              <span className="project-number" aria-hidden="true">
                {String(projects.indexOf(project) + 1).padStart(2, '0')}
              </span>
            </div>
            <div className="project-body">
              <p className="project-category">
                {project.category === 'qa' ? t.qa : t.development}
                {project.id === 'mi-terra' ? ` · ${t.inProgress}` : ''}
              </p>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description[locale]}</p>
              <ul className="tags" aria-label={locale === 'es' ? 'Tecnologías' : 'Technologies'}>
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <div className="project-links">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${t.live}: ${project.title}`}
                  >
                    {t.live}
                    <Arrow diagonal />
                  </a>
                )}
                {project.code && (
                  <a
                    href={project.code.startsWith('/') ? `/${locale}${project.code}` : project.code}
                    target={project.code.startsWith('/') ? undefined : '_blank'}
                    rel={project.code.startsWith('/') ? undefined : 'noopener noreferrer'}
                    aria-label={`${project.code.startsWith('/') ? t.private : t.code}: ${project.title}`}
                  >
                    {project.code.startsWith('/') ? t.private : t.code}
                    <Arrow diagonal />
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
