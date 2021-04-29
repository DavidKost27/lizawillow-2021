import React, { useState, useEffect } from "react";
import "./styles.scss";

export default function TypeTabs(props) {
  const { setBtnState, typeSwitch } = props;

  const [activeButton, setActiveButton] = useState(true);

  useEffect(() => {
    typeSwitch();
  }, [activeButton]);

  return (
    <div className="tabs-container">
      <button
        id="raster-btn"
        className={`tabs-container__raster tab ${
          activeButton ? "active" : "disable"
        }`}
        onClick={() => {
          setBtnState(false);
          typeSwitch();
          setActiveButton(true);
        }}
      >
        Raster
      </button>
      <button
        id="vector-btn"
        className={`tabs-container__vector tab ${
          !activeButton ? "active" : "disable"
        }`}
        onClick={() => {
          setBtnState(true);
          typeSwitch();
          setActiveButton(false);
        }}
      >
        Vector
      </button>
    </div>
  );
}
