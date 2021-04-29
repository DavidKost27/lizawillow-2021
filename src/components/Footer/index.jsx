import React from "react";
import "./styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faDribbble,
  faLinkedinIn,
  faPatreon,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="footer">
      {/* Social Media Icons */}
      <div className="social-container">
        <a href="https://www.instagram.com/lizawillow/" target="_blank">
          <div className="social-container__icon-wrapper">
            <FontAwesomeIcon icon={faInstagram} />
          </div>
        </a>

        <a href="https://dribbble.com/LizaWillow" target="_blank">
          <div className="social-container__icon-wrapper">
            <FontAwesomeIcon icon={faDribbble} />
          </div>
        </a>

        <a
          href="https://www.linkedin.com/in/liza-willow-6697ba210/"
          target="_blank"
        >
          <div className="social-container__icon-wrapper">
            <FontAwesomeIcon
              icon={faLinkedinIn}
              style={{ padding: "0 0 0 2px" }}
            />
          </div>
        </a>
      </div>

      {/* CopyRights */}
      <div className="copyrights">
        All rights reserved © Liza Willow , 2020 - 2021.
      </div>

      {/* Built by */}
      <div className="built-by">Website built by David Kostuchenko.</div>
    </div>
  );
}
