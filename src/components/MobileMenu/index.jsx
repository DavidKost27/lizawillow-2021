import React from "react";
import "./styles.scss";
import { motion } from "framer-motion";
import { Link } from "gatsby";

export default function MobileMenu(props) {
  const { toggleMenu, isOpen } = props;

  const hiddenMenu = {
    visible: {
      y: 0,
      transition: {
        staggerChildren: 0.3,
      },
    },
    hidden: {
      y: "-100vh",
      transition: {
        staggerChildren: 0.3,
        when: "afterChildren",
        staggerDirection: -1,
      },
    },
  };

  const item = {
    visible: {
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
    hidden: {
      y: "-100vh",
      transition: {
        duration: 0.5,
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
      className="mobileMenu-container"
      variants={hiddenMenu}
      initial="hidden"
      animate={`${isOpen ? "visible" : "hidden"}`}
    >
      <motion.div
        className="mobileMenu-container__home page-link"
        variants={item}
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
        className="mobileMenu-container__about page-link"
        variants={item}
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
        className="mobileMenu-container__contact page-link"
        variants={item}
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
