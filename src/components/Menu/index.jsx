import React from "react";
import "./styles.scss";
import { motion } from "framer-motion";
import { Link } from "gatsby";

export default function Menu(props) {
  const { toggleMenu, screenSize, setIsOpen, isOpen } = props;

  const hiddenMenu = {
    visible: {
      transition: {
        duration: 2,
        when: "beforeChildren",
        staggerChildren: 0.09,
      },
    },
    hidden: {
      transition: {
        duration: 0.2,
        when: "afterChildren",
      },
    },
  };

  const item = {
    visible: {
      y: 0,
      transition: {
        duration: 2,
      },
    },
    hidden: {
      y: "-100vh",

      transition: {
        duration: 2,
      },
    },
  };

  const avtiveStyles = {
    color: "var(--menu-active-text-color)",
    backgroundColor: "var(--menu-active-background-color)",
    borderRadius: "10px",
  };

  return (
    <motion.div
      className="menu-container"
      variants={hiddenMenu}
      initial="hidden"
      animate={`${isOpen ? "visible" : "hidden"}`}
    >
      <motion.div
        className="menu-container__home page-link"
        variants={item}
        initial="hidden"
        animate={`${isOpen ? "visible" : "hidden"}`}
      >
        <Link
          className="link-text"
          to="/"
          activeStyle={avtiveStyles}
          onClick={() => {
            screenSize > 1230 ? "" : toggleMenu();
          }}
        >
          Home
        </Link>
      </motion.div>
      <motion.div
        className="menu-container__about center page-link"
        variants={item}
        initial="hidden"
        animate={`${isOpen ? "visible" : "hidden"}`}
      >
        <Link
          className="link-text"
          to="/about"
          activeStyle={avtiveStyles}
          onClick={() => {
            screenSize > 1230 ? "" : toggleMenu();
          }}
        >
          About
        </Link>
      </motion.div>
      <motion.div
        className="menu-container__contact center page-link"
        variants={item}
        initial="hidden"
        animate={`${isOpen ? "visible" : "hidden"}`}
      >
        <Link
          className="link-text"
          to="/contact"
          activeStyle={avtiveStyles}
          onClick={() => {
            screenSize > 1230 ? "" : toggleMenu();
          }}
        >
          Contact
        </Link>
      </motion.div>
    </motion.div>
  );
}
