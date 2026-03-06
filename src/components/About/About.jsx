import React from "react";
import "./About.css";
import pic from "../../assets/pic.png";



const About = () => {
  return (
    <div className="about-section" id="about">
      <h2>About Me</h2>
      <div className="about-content">
        {/* Left Image */}
        <div className="about-image">
          <img src={pic} alt="Anup Jha" />
        </div>  

        {/* Right Text */}
        <div className="about-text">
          <p>
            I’m <strong>Anup Jha</strong>, a Full Stack Developer skilled in the{" "}
            <strong>MERN stack</strong> and <strong>Java DSA</strong>, focused
            on building scalable, user-centric web applications. I enjoy
            designing clean frontend architectures, integrating APIs, and
            delivering products that solve real-world problems.
          </p>

          <h3>Education</h3>
          <p>
            <strong>B.Tech in Computer Science and Engineering</strong> (2023–2027)
            <br />
            KCC Institute of Technology and Management, AKTU
            <br />
            SGPA: <strong>8.52</strong>
          </p>

          <h3>Achievements</h3>
          <ul>
            <li>
              Participated in <strong>10+ national-level hackathons</strong> including
              IIT Delhi, Galgotias, SRM, MAIT and MSIT.
            </li>
            <li>
              <strong>Top 10</strong> rank among <strong>2000+ teams</strong> in a
              national hackathon.
            </li>
            <li>
              <strong>Sponsor Lead</strong> – Hack With India Hackathon (managed
              sponsor relations and funding).
            </li>
            <li>
              <strong>PR Team Member</strong> – CodeHunt Hackathon Community.
            </li>
          </ul>

          <h3>Interests</h3>
          <p>
            Exploring modern frontend architectures, building MERN stack side
            projects, practicing DSA in Java, and collaborating in hackathons
            to turn ideas into polished products.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
