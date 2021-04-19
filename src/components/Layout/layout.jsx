import React from "react";
import "./layout.scss";

import TopBar from "../TopBar";

export default function Layout({ children }) {
  return (
    <>
      <TopBar />

      <div className="layout">{children}</div>
    </>
  );
}
