import React, { useState } from "react";
import "./styles.scss";
import Hamburger from "hamburger-react";
import Menu from "../Menu";

export default function TopBar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="topBar">
      <div className="topBar__logo">Liza Willow</div>
      <span className="topBar__menu-btn">
        <Hamburger size={29} rounded toggled={isOpen} toggle={setOpen} />
      </span>
      <Menu isOpen={isOpen} />
    </div>
  );
}
