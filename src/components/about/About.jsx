import React from "react";
import "./about.css";
// import aboutImage from "../../assets/about.jpg";
import redriding from "../../assets/redriding.jpg";

import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            {/* eslint-disable-next-line */}
            <img src={redriding} alt="Profile picture" />{" "}
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />

              <h5>Experience</h5>
              <small>2 Years Working Experience</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />

              <h5>Projects</h5>
              <small> 10+ Completed Projects</small>
            </article>
          </div>

          <p>
            Hey there! I'm Mona, but you can call me M. I'm a vibrant Code
            Explorer passionate about blending art and technology. As a
            full-stack software engineer, I specialize in uniting front-end and
            back-end development.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk More!
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
