module.exports = {
  siteMetadata: {
    title: `Esports Site`,
    titleTemplate: "%s · Team Name",
    author: `@100thieves`,
    logo: ``,
    image: "static/images/sitethumb.jpg",
    url: ``,
    description: ``,
    email: ``,
    social: {
      twitter: ``,
      facebook: ``,
      instagram: ``,
      twitch: ``,
      youtube: ``,
    },
  },
  /* Your site config here */
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Esports Site`,
        short_name: `ESS`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#027aae`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `static/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
  ],
}
