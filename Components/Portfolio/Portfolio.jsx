'use client';
import { useState, useMemo } from 'react';
import { data } from './data.js';
import './Portfolio.scss';

const CATEGORIES = ['All', 'Frontend', 'Full Stack', 'QA Automation', 'Vanilla JS'];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = useMemo(
    () => (activeCategory === 'All' ? data : data.filter((p) => p.category === activeCategory)),
    [activeCategory]
  );

  return (
    <section className="projectsPage" data-testid="portfolio-section">
      <div className="projectsHeader" data-testid="portfolio-header">
        <p className="projectsSubtitle" data-testid="portfolio-subtitle">
          MY WORK
        </p>
        <h1 className="projectsTitle" data-testid="portfolio-title">
          Projects <span>&</span> Case Studies
        </h1>
        <p className="projectsDesc" data-testid="portfolio-description">
          A selection of projects built with care, tested with rigor.
        </p>
      </div>

      <div className="filterBar" data-testid="filter-bar">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            className={`filterBtn ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
            data-testid={`filter-btn-${cat.toLowerCase().replace(/\s+/g, '-')}`}
            aria-pressed={activeCategory === cat}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="projectsGrid" data-testid="projects-grid">
        {filtered.map((project) => (
          <article
            key={project.id}
            className="projectCard"
            data-testid={`project-card-${project.id}`}
            id={`project-${project.id}`}
          >
            <div className="cardImage" data-testid={`project-image-${project.id}`}>
              <img
                src={project.image}
                alt={project.title}
                data-testid={`project-img-${project.id}`}
              />
              <div className="cardOverlay" data-testid={`project-overlay-${project.id}`}>
                {project.srcGit && (
                  <a
                    href={project.srcGit}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="overlayLink"
                    data-testid={`project-github-link-${project.id}`}
                  >
                    <img src="/icons/github.png" alt="GitHub" />
                    Code
                  </a>
                )}
                {project.srcWeb && (
                  <a
                    href={project.srcWeb}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="overlayLink"
                    data-testid={`project-live-link-${project.id}`}
                  >
                    <span className="overlayIcon">↗</span>
                    Live
                  </a>
                )}
              </div>
            </div>
            <div className="cardBody" data-testid={`project-body-${project.id}`}>
              <div className="cardMeta" data-testid={`project-meta-${project.id}`}>
                <span className="cardCategory" data-testid={`project-category-${project.id}`}>
                  {project.category}
                </span>
              </div>
              <h2 className="cardTitle" data-testid={`project-title-${project.id}`}>
                {project.title}
              </h2>
              <p className="cardDesc" data-testid={`project-desc-${project.id}`}>
                {project.desc}
              </p>
              <div className="cardTags" data-testid={`project-tags-${project.id}`}>
                {project.tags.map((tag) => (
                  <span key={tag} className="tag" data-testid={`project-tag-${project.id}-${tag}`}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
