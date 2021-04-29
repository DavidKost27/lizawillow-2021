import * as React from "react";
import "../styles/index.scss";
import Layout from "../components/Layout/layout";
import TypeTabs from "../components/TypeTabs";
import { useState } from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const IndexPage = ({ data }) => {
  const raster = data.raster.edges;
  const vector = data.vector.edges;
  const [btnState, setBtnState] = useState(false);
  const [typeOfIllustrations, setTypeOfIllustrations] = useState(raster);

  /*   Logic for the switch button that uses both
  states above to switch between types of illustration that are displayed. */
  const typeSwitch = () => {
    if (btnState) {
      setTypeOfIllustrations(vector);
    } else if (!btnState) {
      setTypeOfIllustrations(raster);
    }
  };
  return (
    <Layout>
      <main className="home-container">
        <div className="home-header">
          <h1 className="home-header__header">Portfolio</h1>

          <TypeTabs
            setBtnState={setBtnState}
            typeSwitch={typeSwitch}
            btnState={btnState}
          />
        </div>
        <div className="grid-container">
          <div className="grid-container__illustrations">
            {typeOfIllustrations.map(({ node }) => (
              <GatsbyImage image={getImage(node)} alt={node.name} />
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default IndexPage;

/* GraphqQL query with two objects "Raster" and "Vector"
To pull illustrations from two different paths/Folders. */
export const query = graphql`
  query {
    raster: allFile(
      filter: {
        extension: { regex: "/(jpg)|(png)|(jpeg)/" }
        absolutePath: { regex: "/images/raster/" }
      }
    ) {
      edges {
        node {
          name
          childImageSharp {
            gatsbyImageData(transformOptions: {}, placeholder: BLURRED)
          }
        }
      }
    }
    vector: allFile(
      filter: {
        extension: { regex: "/(jpg)|(png)|(jpeg)/" }
        absolutePath: { regex: "/images/vector/" }
      }
    ) {
      edges {
        node {
          name
          childImageSharp {
            gatsbyImageData(transformOptions: {}, placeholder: BLURRED)
          }
        }
      }
    }
  }
`;
