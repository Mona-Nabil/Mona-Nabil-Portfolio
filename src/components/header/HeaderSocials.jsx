import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaGlobeAmericas } from "react-icons/fa";
//  eslint-disable-next-line

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/mona-nabil"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/Mona-Nabil" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
      <a href="https://monanabil.com" target="_blank" rel="noreferrer">
        <FaGlobeAmericas />
      </a>
    </div>
  );
};

export default HeaderSocials;
