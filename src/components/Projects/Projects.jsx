import React from "react";
import "./Projects.css";
import { FaUserCircle, FaUtensils, FaShoppingCart } from "react-icons/fa";

const projects = [
  {
    name: "Polloroid – Polling Web Application",
    description:
      "A responsive polling platform with real-time voting and a token-based engagement system. Built with React and Tailwind CSS, focusing on scalable architecture, performance, and smooth user experience.",
    icon: <FaUserCircle />,
    demo: "https://poll-it-phi.vercel.app/",
    code: "https://github.com/techie-Ajha/Poll-It",
  },
  {
    name: "Edwise – Student Hub Platform",
    description:
      "A college discovery and student hub platform with alumni chat, reviews, and a secure token-based system. Integrated Stripe payment gateway and built a modular, scalable frontend using React.",
    icon: <FaShoppingCart />,
    demo: "https://edwise-project-53e2.vercel.app/",
    code: "https://github.com/techie-Ajha/EDWISE_PROJECT",
  },
  {
    name: "Medcare – Healthcare Web Platform",
    description:
      "A responsive healthcare platform built with React that improves user experience through structured component design and scalable frontend architecture, making it easy to extend and maintain.",
    icon: <FaUtensils />,
    demo: "https://medcare-iu8z.vercel.app/",
    code: "https://github.com/techie-Ajha/Medcare",
  },
];

const Projects = () => {
  return (
    <div className="projects-section" id="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-header">
              <span className="project-icon">{project.icon}</span>
              <h3>{project.name}</h3>
            </div>
            <p>{project.description}</p>
            <div className="project-buttons">
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <button>Live Demo</button>
              </a>
              <a href={project.code} target="_blank" rel="noopener noreferrer">
                <button className="code-btn">View Code</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
