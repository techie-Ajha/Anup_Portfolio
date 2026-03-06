import React from "react";
import "./Skills.css";

const skillGroups = [
  {
    title: "Frontend",
    skills: ["React.js", "HTML", "CSS", "Tailwind CSS", "Bootstrap"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js"],
  },
  {
    title: "Database",
    skills: ["MongoDB", "SQL"],
  },
  {
    title: "Programming",
    skills: ["Java", "JavaScript", "Python", "C", "C++"],
  },
  {
    title: "Tools",
    skills: ["Git & GitHub", "Vercel", "Netlify", "VS Code", "Stripe API", "Figma", "Canva"],
  },
  {
    title: "Core Subjects",
    skills: ["OOP", "DBMS", "Operating Systems", "Computer Networks", "Data Structures & Algorithms"],
  },
];

const Skills = () => {
  return (
    <div className="skills-section" id="skills">
      <h2>My Skills</h2>
      <div className="skills-groups">
        {skillGroups.map((group) => (
          <section className="skills-group" key={group.title}>
            <h3 className="skills-group-title">{group.title}</h3>
            <div className="skills-grid">
              {group.skills.map((skill) => (
                <div className="skill-card" key={`${group.title}-${skill}`}>
                  <h4>{skill}</h4>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Skills;
