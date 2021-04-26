import React from "react";
import "./styles.scss";
import { Link } from "gatsby";

export default function Menu() {
  const avtiveStyles = {
    color: "var(--menu-active-text-color)",
    backgroundColor: "var(--menu-active-background-color)",
    borderRadius: "10px",
  };
  return (
    <div className="menu-container">
      <Link
        className="menu-container__link-text"
        to="/"
        activeStyle={avtiveStyles}
      >
        Home
      </Link>
      <Link
        className="menu-container__link-text"
        to="/about"
        activeStyle={avtiveStyles}
      >
        About
      </Link>
      <Link
        className="menu-container__link-text"
        to="/contact"
        activeStyle={avtiveStyles}
      >
        Contact
      </Link>
    </div>
  );
}
