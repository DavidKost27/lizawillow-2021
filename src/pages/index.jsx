import * as React from "react";
import Layout from "../components/Layout/layout";
import "../styles/index.scss";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

// markup
const IndexPage = ({ data }) => {
  return (
    <Layout>
      <main className="home-container"></main>
      {/* {data.allFile.edges.map(({ node }, i) => (
        <GatsbyImage key={i} alt={node.name} />
      ))} */}

      {/* <GatsbyImage image={image} alt={node.name} /> */}
    </Layout>
  );
};

export default IndexPage;

// export const query = graphql`
//   query {
//     allFile(filter: { extension: { regex: "/(jpg)|(png)|(jpeg)/" } }) {
//       edges {
//         node {
//           childImageSharp {
//             gatsbyImageData(width: 200, placeholder: BLURRED)
//           }
//         }
//       }
//     }
//   }
// `;
