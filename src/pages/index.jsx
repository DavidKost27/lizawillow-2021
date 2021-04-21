import * as React from "react";
import "../styles/index.scss";
import Layout from "../components/Layout/layout";
import { useState } from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Switch } from "antd";

const IndexPage = ({ data }) => {
  const raster = data.raster.edges;
  const vector = data.vector.edges;
  const [btnState, setBtnState] = useState(false);
  const [typeOfIllustrations, setTypeOfIllustrations] = useState(raster);

  /*   Logic for the switch button that uses both
  states above to switch between types of illustration that are displayed. */
  const typeSwitch = () => {
    setBtnState(!btnState);
    if (!btnState) {
      setTypeOfIllustrations(vector);
    } else {
      setTypeOfIllustrations(raster);
    }
  };
  return (
    <Layout>
      <main className="home-container">
        <Switch
          checkedChildren="Raster"
          unCheckedChildren="Vector"
          defaultChecked
          onChange={typeSwitch}
        />
        {/* <button
          onClick={() => {
            if (btnState) {
              setBtnState(!btnState);
              setTypeOfIllustrations(vector);
            } else {
              setBtnState(!btnState);
              setTypeOfIllustrations(raster);
            }
          }}
        >
          Hello
        </button> */}

        <div className="raster-illustrations">
          {typeOfIllustrations.map(({ node }) => (
            <GatsbyImage image={getImage(node)} alt={node.name} />
          ))}
        </div>

        {/* <div className="vector-illustrations">
          {vector.map(({ node }) => (
            <GatsbyImage image={getImage(node)} alt={node.name} />
          ))}
        </div> */}
      </main>
    </Layout>
  );
};

export default IndexPage;

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
            gatsbyImageData(
              transformOptions: {}
              width: 500
              placeholder: BLURRED
            )
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
            gatsbyImageData(
              transformOptions: {}
              width: 500
              placeholder: BLURRED
            )
          }
        }
      }
    }
  }
`;
