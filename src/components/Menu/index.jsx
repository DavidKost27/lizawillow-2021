import React from "react";
import "./styles.scss";
import { motion } from "framer-motion";
import { Link } from "gatsby";

export default function Menu(props) {
  const { toggleMenu } = props;
  const menuVariants = {
    open: {
      y: 0,
    },
    closed: {
      y: "-100vh",
    },
  };
  const menuItemVariants = {
    open: {
      y: 0,
      opacity: 1,
    },
    closed: {
      y: "-100vh",
      opacity: 0,
    },
  };
  return (
    <motion.div
      animate={props.isOpen ? "open" : "closed"}
      variants={menuVariants}
      className="menu-container"
    >
      <motion.div
        variants={menuItemVariants}
        className="menu-container__home center"
      >
        <Link to="/" onClick={toggleMenu}>
          Home
        </Link>
      </motion.div>
      <motion.div
        variants={menuItemVariants}
        className="menu-container__about center"
      >
        <Link to="/about" onClick={toggleMenu}>
          About
        </Link>
      </motion.div>
      <motion.div
        variants={menuItemVariants}
        className="menu-container__contact center"
      >
        <Link to="/contact" onClick={toggleMenu}>
          Contact
        </Link>
      </motion.div>
    </motion.div>
  );
}
