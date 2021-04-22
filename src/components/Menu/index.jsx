import React from "react";
import "./styles.scss";
import { motion } from "framer-motion";
import { Link } from "gatsby";

export default function Menu(props) {
  const screenSize = window.screen.width;
  const { toggleMenu } = props;
  let menuVariants;
  let menuItemVariants;
  if (screenSize >= 1230) {
    menuVariants = {};
    menuItemVariants = {};
  } else {
    menuVariants = {
      open: {
        y: 0,
      },
      closed: {
        y: "-100vh",
      },
    };
    menuItemVariants = {
      open: {
        y: 0,
        opacity: 1,
      },
      closed: {
        y: "-100vh",
        opacity: 0,
      },
    };
  }

  const avtiveStyles = {
    color: "var(--menu-active-text-color)",
    backgroundColor: "var(--menu-active-background-color)",
    borderRadius: "15px",
  };

  return (
    <motion.div
      animate={props.isOpen ? "open" : "closed"}
      variants={menuVariants}
      className="menu-container"
    >
      <motion.div
        variants={menuItemVariants}
        className="menu-container__home page-link"
      >
        <Link
          className="link-text"
          to="/"
          activeStyle={avtiveStyles}
          onClick={toggleMenu}
        >
          Home
        </Link>
      </motion.div>
      <motion.div
        variants={menuItemVariants}
        className="menu-container__about center page-link"
      >
        <Link
          className="link-text"
          to="/about"
          activeStyle={avtiveStyles}
          onClick={toggleMenu}
        >
          About
        </Link>
      </motion.div>
      <motion.div
        variants={menuItemVariants}
        className="menu-container__contact center page-link"
      >
        <Link
          className="link-text"
          to="/contact"
          activeStyle={avtiveStyles}
          onClick={toggleMenu}
        >
          Contact
        </Link>
      </motion.div>
    </motion.div>
  );
}
