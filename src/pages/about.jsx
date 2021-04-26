import React from "react";
import "../styles/about.scss";
import Layout from "../components/Layout/layout";
import { StaticImage } from "gatsby-plugin-image";

export default function About() {
  return (
    <Layout>
      <div className="about-container">
        <div className="about-container__image">
          <StaticImage
            src="../assets/images/profile/liza proflie.jpg"
            alt="A dinosaur"
            placeholder="blurred"
            layout="fixed"
            width={200}
            height={200}
            style={{ borderRadius: "15px" }}
          />
          <h1>About Me:</h1>
        </div>
        <div className="about-container__description">
          <p>
            My name is Liza I'm 19 years old and I'm from Belarus. I'm a digital
            illustrator, I like drawing cute and beautiful creatures, little
            monsters, animals, and anything of this sort. I've mainly focused on
            raster illustrations but lately I've been learning how to draw
            vector illustratinos.
          </p>
        </div>
      </div>
    </Layout>
  );
}
