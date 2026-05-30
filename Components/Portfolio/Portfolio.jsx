"use client";
import { useState, useMemo } from "react";
import { data } from "./data.js";
import "./Portfolio.scss";

const CATEGORIES = ["All", "Frontend", "Full Stack", "QA Automation", "Vanilla JS"];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = useMemo(
    () =>
      activeCategory === "All"
        ? data
        : data.filter((p) => p.category === activeCategory),
    [activeCategory]
  );

  return (
    <section className="projectsPage">
      <div className="projectsHeader">
        <p className="projectsSubtitle">MY WORK</p>
        <h1 className="projectsTitle">
          Projects <span>&</span> Case Studies
        </h1>
        <p className="projectsDesc">
          A selection of projects built with care, tested with rigor.
        </p>
      </div>

      <div className="filterBar">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            className={`filterBtn ${activeCategory === cat ? "active" : ""}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="projectsGrid">
        {filtered.map((project) => (
          <article key={project.id} className="projectCard">
            <div className="cardImage">
              <img src={project.image} alt={project.title} />
              <div className="cardOverlay">
                {project.srcGit && (
                  <a
                    href={project.srcGit}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="overlayLink"
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
                  >
                    <span className="overlayIcon">↗</span>
                    Live
                  </a>
                )}
              </div>
            </div>
            <div className="cardBody">
              <div className="cardMeta">
                <span className="cardCategory">{project.category}</span>
              </div>
              <h2 className="cardTitle">{project.title}</h2>
              <p className="cardDesc">{project.desc}</p>
              <div className="cardTags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">
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
