import React from "react";
import "./header.css";
import CTA from "./CTA";
import mesky from "../../assets/mesky.jpg";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h4>Hello I'm</h4>
        <h1>Mona Nabil</h1>
        <h4 className="text-light">Full Stack Developer</h4>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img className="me-img" src={mesky} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
