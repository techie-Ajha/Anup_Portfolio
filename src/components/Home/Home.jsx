import React from "react";
import "./Home.css";
import pic from "../../assets/pic.png";
import Lottie from "lottie-react";
import developerAnimation from "../../assets/animations/developer animation.json";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-content">
        {/* Left text section */}
        <div className="home-text">
          <h1>
            Hi, I’m Anup Jha —{" "}
            <span> Full Stack Developer | MERN Stack | Java DSA</span>.
          </h1>
          <p>
            B.Tech CSE student (2023–2027) at KCC Institute of Technology and
            Management with strong <b>MERN stack</b>, <b>Java DSA</b>, and{" "}
            <b>frontend architecture</b> skills. I build scalable, user-focused
            web applications with clean code, real-world hackathon experience,
            and a focus on performance and maintainability.
          </p>
          <div className="home-buttons">
            <button
              onClick={() =>
                document
                  .getElementById("projects")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              View Projects
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Contact Me
            </button>
          </div>
        </div>

        {/* Right image section */}
        <div className="home-right">
          <Lottie
            animationData={developerAnimation}
            loop={true}
            className="hero-animation"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
