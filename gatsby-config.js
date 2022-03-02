/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env`,
})

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-transition-link`, // Needed for dynamic images
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: `${__dirname}/src/assets/`, // See below to configure properly
        },
      },
    },
    // ...
  ],
  siteMetadata: {
    title: "Marioposa Wellness LLC",
    description: "DC, and Maryland home for Pelic Floor Physical Therapy",
    author: "Marisa Alonso",
    keywords: `therapy, physical therapy, pelvic floor, wellness, mariposa, health, pelvic health`,
  },
}
