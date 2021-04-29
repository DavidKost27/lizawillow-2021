const siteMetadata = {
  title: "Liza Willow",
  description:
    "Liza Willow's personal portfolio website that showcases her digital illustrations",
  favicon: "./src/assets/icons/favicon.svg",
  url: "https://www.lizawillow.com",
  image: "/src/assets/images/profile/liza proflie.jpg",
};

module.exports = {
  siteMetadata: siteMetadata,
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Liza Willow Logo",
        short_name: "LWL",
        start_url: "/",
        background_color: "#f7f0eb",
        theme_color: "#a2466c",
        display: "standalone",
        icon: siteMetadata.favicon,
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-offline",
  ],
};
