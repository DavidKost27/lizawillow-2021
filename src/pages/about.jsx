import React, { useState } from "react";
import "../styles/about.scss";
import Layout from "../components/Layout/layout";
import { StaticImage } from "gatsby-plugin-image";

export default function About() {
  const viewportWidth = window.screen.width;

  const [imageSize, setImageSize] = useState(200);

  return (
    <Layout>
      <div className="about-container">
        <div className="about-container__image">
          <StaticImage
            src="../assets/images/profile/liza proflie.jpg"
            alt="A dinosaur"
            placeholder="blurred"
            layout="fullWidth"
            style={{ borderRadius: "15px" }}
          />
        </div>
        <div className="about-container__description">
          <h1>About Me:</h1>
          <p>
            My name is Liza I'm 19 years old and I'm from Belarus. I'm a digital
            illustrator, I like drawing cute and beautiful creatures, little
            monsters, animals, and anything of this sort. I've mainly focused on
            raster illustrations but lately I've been learning how to draw
            vector illustrations.
          </p>
        </div>
      </div>
    </Layout>
  );
}
