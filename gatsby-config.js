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
  plugins: [],
  siteMetadata: {
    title: "Marioposa Wellness LLC",
    description: "DC home for Pelic Floor Physical Therapy",
  },
}
