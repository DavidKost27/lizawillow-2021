import React from "react";
import "./layout.scss";

import TopBar from "../TopBar";
import Footer from "../Footer";

export default function Layout({ children }) {
  return (
    <>
      <TopBar />

      <div className="layout">{children}</div>

      <Footer />
    </>
  );
}
