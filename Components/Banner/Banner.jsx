import React from 'react';
import './Banner.scss';

const skills = [
  { id: 1, name: 'QA Automation Engineer', description: 'Selenium • Javascript • C# • Postman' },
  { id: 2, name: 'Full Stack Developer', description: 'React • Node.js • Javascript • SQL • C#' },
  {
    id: 3,
    name: 'Quality Mindset',
    description: 'Testing Strategy • Test Design • Quality First • CI/CD',
  },
  {
    id: 4,
    name: 'Leadership',
    description: 'Leading Teams • Mentoring • Communication • Problem Solving',
  },
];
const Banner = () => {
  return (
    <section className="Component" data-testid="banner-section">
      <ul className="skillsList" data-testid="skills-list">
        {skills.map((skill) => (
          <li
            key={skill.id}
            className="skillItem"
            data-testid={`banner-skill-${skill.id}`}
            id={`skill-${skill.id}`}
          >
            <span className="icon" data-testid={`banner-skill-icon-${skill.id}`}>
              ★
            </span>
            <span className="name" data-testid={`banner-skill-name-${skill.id}`}>
              {skill.name}
            </span>
            <span className="description" data-testid={`banner-skill-desc-${skill.id}`}>
              {skill.description}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Banner;
