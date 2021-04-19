import React from "react";
import "./styles.scss";
import { motion } from "framer-motion";

export default function Menu(props) {
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };
  return (
    <motion.div
      animate={props.isOpen ? "open" : "closed"}
      variants={variants}
      className="menu-container"
    >
      <div className="menu-container__home center">Home</div>
      <div className="menu-container__about center">About</div>
      <div className="menu-container__contact center">Contact</div>
    </motion.div>
  );
}
