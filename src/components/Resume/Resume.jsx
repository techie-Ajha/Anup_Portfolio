// Resume.jsx
import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <div className="resume-section" id="resume">
      <h2>My Resume</h2>

      {/* Education */}
      <div className="resume-card">
        <h3>Education</h3>
        <ul>
          <li>
            <strong>B.Tech in Computer Science and Engineering</strong> –{" "}
            <em>2023 – 2027</em>
            <br />
            KCC Institute of Technology and Management, AKTU
            <br />
            SGPA: <strong>8.52</strong>
          </li>
        </ul>
      </div>

      {/* Skills Summary */}
      <div className="resume-card">
        <h3>Skills</h3>
        <p>
          Java, JavaScript, Python, C, C++, React.js, HTML, CSS, Tailwind CSS,
          Bootstrap, Node.js, Express.js, MongoDB, SQL, Git, GitHub, Vercel,
          Netlify, VS Code, Stripe API, Figma, Canva, Data Structures and
          Algorithms, OOP, DBMS, Operating Systems, Computer Networks, REST
          APIs, Full Stack Development.
        </p>
      </div>

      {/* Projects Summary */}
      <div className="resume-card">
        <h3>Projects</h3>
        <ul>
          <li>
            <strong>Polloroid – Polling Web Application</strong> – Real-time
            voting platform with token-based engagement and responsive UI using
            React and Tailwind CSS.
          </li>
          <li>
            <strong>Edwise – Student Hub Platform</strong> – College discovery
            and alumni interaction platform with reviews and Stripe-powered
            token purchases.
          </li>
          <li>
            <strong>Medcare – Healthcare Web Platform</strong> – Responsive
            healthcare website with structured components and scalable frontend
            architecture in React.
          </li>
        </ul>
      </div>

      {/* Experience & Hackathons */}
      <div className="resume-card">
        <h3>Experience & Hackathons</h3>
        <ul>
          <li>
            Participated in <strong>10+ national hackathons</strong> including
            IIT Delhi, Galgotias, SRM, MAIT and MSIT.
          </li>
          <li>
            Led teams as <strong>frontend developer</strong>,{" "}
            <strong>UI designer</strong> and <strong>project presenter</strong>,
            achieving <strong>Top 10</strong> rank among{" "}
            <strong>2000+ teams</strong> in a national hackathon.
          </li>
          <li>
            <strong>Sponsor Lead</strong> – Hack With India Hackathon (managed
            sponsor communications and secured funding support).
          </li>
          <li>
            <strong>PR Team Member</strong> – CodeHunt Hackathon Community
            (outreach, promotions and event coordination).
          </li>
        </ul>
      </div>

      {/* Certifications */}
      <div className="resume-card">
        <h3>Certifications</h3>
        <ul>
          <li>Java Programming Fundamentals – Infosys Springboard (2024)</li>
          <li>Introduction to Generative AI – Google Cloud (2024)</li>
          <li>Artificial Intelligence Fundamentals – IBM SkillsBuild (2024)</li>
          <li>ChatGPT for Programmers – GUVI (2024)</li>
        </ul>
      </div>

      {/* Download Resume Button */}
      <div className="resume-download">
        <a
          href="/Anup%20Jha%20Resume.pdf"
          download="Anup Jha Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>Download Resume</button>
        </a>
      </div>
    </div>
  );
};

export default Resume;
