import React from "react";
import "./styles.scss";
import { motion } from "framer-motion";

export default function Menu(props) {
  const menuVariants = {
    open: {
      y: 0,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    },
    closed: {
      y: "-100vh",
      transition: {
        delay: 1,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };
  const menuItemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: {
          stiffness: 1000,
          velocity: -100,
        },
        staggerChildren: 0.07,
        delayChildren: 0.2,
      },
    },
    closed: {
      y: "-100vh",
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
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
        Home
      </motion.div>
      <motion.div
        variants={menuItemVariants}
        className="menu-container__about center"
      >
        About
      </motion.div>
      <motion.div
        variants={menuItemVariants}
        className="menu-container__contact center"
      >
        Contact
      </motion.div>
    </motion.div>
  );
}
