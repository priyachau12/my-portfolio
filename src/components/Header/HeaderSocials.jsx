import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
const HeaderSocials = () => {
  return (
    <div className="header__socials">
      {/* for opening socials in a new tab == for this i have used react icons. terminaal=npm install react-icons*/}
      <a
        href="https://www.linkedin.com/in/priya-chaurasiya-30320a24b/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com" target="_blank">
        <FaGithub />
      </a>
      <a href="https://www.instagram.com/priyachaurasiyaa/" target="_blank">
        <FiInstagram />
      </a>
    </div>
  );
};
export default HeaderSocials;
