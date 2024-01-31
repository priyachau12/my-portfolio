import React from "react";
import "./Header.css";
import CTA from "./CTA";

import HeaderSocials from "./HeaderSocials";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <header id="header">
      <div className="container">
        <div className="header__container">
          <h5>Hello,I'm</h5>
          <h1>Priya Chaurasiya</h1>

          <h5 className="text-light">FullStack Devloper On the way!</h5>
        </div>

        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src="/trans.png" alt="me" />
          {/* style="height:25rem" */}
        </div>

        <Link to={"Contact"} className="scroll_down">
          Scroll Down
        </Link>
      </div>
    </header>
  );
};

export default Header;
