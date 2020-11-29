module.exports = {
  pathPrefix: "/attention-economy",
  siteMetadata: {
    title: `The Attention Economy`,
    description: `Or, why social media is the way it is`,
    author: `@jhthenerd`,
  },
  plugins: [
    `gatsby-plugin-preact`,
    `@chakra-ui/gatsby-plugin`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `The Attention Economy`,
        short_name: `Attention Economy`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#2a4365`,
        display: `minimal-ui`,
        icon: `src/images/favicon.svg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-webpack-bundle-analyser-v2`,
  ],
}
