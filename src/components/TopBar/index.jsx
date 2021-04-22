import React, { useState } from "react";
import "./styles.scss";
import Hamburger from "hamburger-react";
import Menu from "../Menu";

export default function TopBar() {
  const [isOpen, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!isOpen);
  };
  return (
    <div className="topBar">
      <div className="topbar-container">
        <div className="topbar-container__logo">Liza Willow</div>
        <span className="topbar-container__menu-btn">
          <Hamburger size={29} rounded toggled={isOpen} toggle={setOpen} />
        </span>
        <Menu isOpen={isOpen} setOpen={setOpen} toggleMenu={toggleMenu} />
      </div>
    </div>
  );
}
