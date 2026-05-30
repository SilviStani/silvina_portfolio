import React from 'react';
import "./Banner.scss";


const skills = [
    {id: 1, name: "QA Automation Engineer", description: "Selenium • Javascript • C# • Postman"},
    {id: 2, name: "Full Stack Developer", description: "React • Node.js • Javascript • SQL • C#"},
    {id: 3, name: "Quality Mindset", description: "Testing Strategy • Test Design • Quality First • CI/CD"},
    {id: 4, name: "Leadership", description: "Leading Teams • Mentoring • Communication • Problem Solving"},
]
const Banner = () => {
  return (
    <section className="Component">
      <ul className="skillsList">
        {skills.map((skill) => (
          <li key={skill.id} className="skillItem">
            <span className="icon">★</span>
            <span className="name">{skill.name}</span>
            <span className="description">{skill.description}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Banner;