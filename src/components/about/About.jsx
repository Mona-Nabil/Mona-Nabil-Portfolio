import React from "react";
import "./about.css";
import ME from "../../assets/me.jpg";
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
            <img src={ME} alt="About Image" />
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
            Hey there! 👋 I'm Mona, and this is Zeppelin, who you'll meet soon!
            I'm a vibrant Code Explorer passionate about blending art and
            technology. As a full-stack software engineer, I specialize in
            uniting front-end and back-end development. With skills in
            JavaScript, React, HTML, CSS, GIT, and API integration, I bring over
            9 years of diverse experience spanning Management, Banking, Customer
            Service, Sales, Fashion, and Retail. This background shapes my
            ability to innovate and strategize effectively in the tech industry.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk!
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
