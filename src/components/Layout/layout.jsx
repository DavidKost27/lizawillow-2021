import React from "react";
import "./layout.scss";
import "antd/dist/antd.css";

import TopBar from "../TopBar";

export default function Layout({ children }) {
  return (
    <>
      <TopBar />

      <div className="layout">{children}</div>
    </>
  );
}
