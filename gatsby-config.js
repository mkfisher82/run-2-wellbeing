module.exports = {
  siteMetadata: {
    title: 'Run 2 Wellbeing',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {},
    },
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {

      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {}
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-126884674-1",
        // Puts tracking script in the head instead of the body
        head: false,
      },
    },
  ],
}
