import React, { useState } from "react";
import "./styles.scss";
import Hamburger from "hamburger-react";
import Menu from "../Menu";

export default function TopBar() {
  const [isOpen, setIsOpen] = useState(false);
  const screenSize = window.screen.width;
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // get the body element tag
    let body = document.getElementsByTagName("body")[0];

    // apply the styles based on menu state
    if (!isOpen) body.style.overflow = "hidden";
    else body.style.overflow = "auto";

    console.log("Faggot");
  };

  return (
    <>
      <div className="topBar">
        <div className="topbar-container">
          <div className="topbar-container__logo">Liza Willow</div>

          <span className="topbar-container__menu-btn" onClick={toggleMenu}>
            <Hamburger size={29} rounded toggled={isOpen} toggle={setIsOpen} />
          </span>
        </div>
      </div>
      <div
        className="overlay"
        onClick={() => setIsOpen(!isOpen)}
        style={{
          backgroundColor: `rgba(0, 0, 0, ${isOpen ? 0.7 : 0})`,
          pointerEvents: isOpen ? "auto" : "none",
        }}
      ></div>
      <Menu
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        toggleMenu={toggleMenu}
        screenSize={screenSize}
      />
    </>
  );
}
