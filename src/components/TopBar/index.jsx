import React, { useState } from "react";
import "./styles.scss";
import Hamburger from "hamburger-react";
import Menu from "../Menu";

export default function TopBar() {
  const [isOpen, setOpen] = useState(false);
  const screenSize = window.screen.width;
  const toggleMenu = () => {
    setOpen(!isOpen);
    // get the body element tag
    let body = document.getElementsByTagName("body")[0];

    // apply the styles based on menu state
    if (!isOpen) body.style.overflow = "hidden";
    else body.style.overflow = "auto";

    console.log("Faggot");
  };

  // toggled={isOpen} toggle={setOpen}

  return (
    <div className="topBar">
      <div className="topbar-container">
        <div className="topbar-container__logo">Liza Willow</div>

        <span className="topbar-container__menu-btn" onClick={toggleMenu}>
          <Hamburger size={29} rounded />
        </span>

        <Menu
          isOpen={isOpen}
          setOpen={setOpen}
          toggleMenu={toggleMenu}
          screenSize={screenSize}
        />
      </div>
    </div>
  );
}
