'use client';
import React from 'react';
import './MyProjects.scss';
import Link from 'next/link';
import { data } from '../Portfolio/data.js';

// Select 3 featured projects: Full Stack, QA Automation, and Frontend
const featuredProjects = [
  data.find((p) => p.id === 'henryapp'), // Full Stack
  data.find((p) => p.id === 'pom-selenium'), // QA Automation
  data.find((p) => p.id === 'walter'), // Frontend
].filter(Boolean);

const MyProjects = () => {
  return (
    <section className="myProjectsSection" data-testid="my-projects-section" id="my-projects">
      <div className="projectsContainer" data-testid="my-projects-container">
        {/* Header */}
        <div className="projectsHeader" data-testid="my-projects-header">
          <p className="projectsSubtitle" data-testid="my-projects-subtitle">
            FEATURED WORK
          </p>
          <h2 className="projectsMainTitle" data-testid="my-projects-main-title">
            My <span data-testid="my-projects-highlight">Latest Projects</span>
          </h2>
          <p className="projectsHeadDescription" data-testid="my-projects-head-description">
            A selection of my most recent and relevant work, showcasing my expertise in full-stack
            development, QA automation, and modern web technologies.
          </p>

          {/* View All Projects Button */}
          <div className="viewAllProjectsSection" data-testid="view-all-projects-section">
            <Link
              href="/projects"
              className="viewAllButton"
              data-testid="view-all-projects-button"
              id="view-all-projects-link"
            >
              <span data-testid="view-all-projects-text">View All Projects</span>
              <span data-testid="view-all-projects-arrow">→</span>
            </Link>
          </div>
        </div>

        {/* Featured Projects Grid */}
        <div className="featuredProjectsGrid" data-testid="featured-projects-grid">
          {featuredProjects.map((project) => (
            <Link
              key={project.id}
              href={`/projects#project-${project.id}`}
              className="projectCardLink"
              data-testid={`featured-project-link-${project.id}`}
            >
              <article
                className="projectCard"
                data-testid={`featured-project-card-${project.id}`}
                id={`featured-project-${project.id}`}
              >
                {/* Card Image */}
                <div
                  className="projectCardImage"
                  data-testid={`featured-project-image-${project.id}`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    data-testid={`featured-project-img-${project.id}`}
                  />
                  <div
                    className="imageOverlay"
                    data-testid={`featured-project-overlay-${project.id}`}
                  >
                    <p data-testid={`featured-project-overlay-text-${project.id}`}>View Project</p>
                  </div>
                </div>

                {/* Card Content - Simplified */}
                <div
                  className="projectCardContent"
                  data-testid={`featured-project-content-${project.id}`}
                >
                  <div className="projectMeta" data-testid={`featured-project-meta-${project.id}`}>
                    <span
                      className="projectCategory"
                      data-testid={`featured-project-category-${project.id}`}
                    >
                      {project.category}
                    </span>
                  </div>

                  <h3
                    className="projectCardTitle"
                    data-testid={`featured-project-title-${project.id}`}
                  >
                    {project.title}
                  </h3>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyProjects;
