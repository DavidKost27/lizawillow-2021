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
            src="../assets/images/raster/dinoboy.jpeg"
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
          <p>My name is Liza , I'm from Belarus</p>
        </div>
      </div>
    </Layout>
  );
}
