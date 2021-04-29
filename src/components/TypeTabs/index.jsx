import React, { useState, useEffect } from "react";
import "./styles.scss";

export default function TypeTabs(props) {
  const { setBtnState, typeSwitch, btnState } = props;

  const [activeButton, setActiveButton] = useState(true);

  useEffect(() => {
    typeSwitch();
  }, [activeButton]);

  return (
    <div className="tabs-container">
      <button
        className={`tabs-container__raster ${
          activeButton ? "active" : "disable"
        }`}
        onClick={() => {
          setBtnState(false);
          typeSwitch();
          setActiveButton(true);
          console.log(btnState);
        }}
      >
        Raster
      </button>
      <button
        className={`tabs-container__vector ${
          !activeButton ? "active" : "disable"
        }`}
        onClick={() => {
          setBtnState(true);
          typeSwitch();
          setActiveButton(false);
          console.log(btnState);
        }}
      >
        Vector
      </button>
    </div>
  );
}
