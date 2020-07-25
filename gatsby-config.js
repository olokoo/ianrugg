module.exports = {
  siteMetadata: {
    title: `Ian Rugg`,
    author: `Ian Rugg`,
    description: `A starter blog demonstrating what Gatsby can do.`,
    siteUrl: `https://ianrugg.netlify.com/`,
    social: {
      twitter: `ianrugg`,
    },
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/assets`,
        name: 'assets',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content`,
        name: 'content',
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-netlify-cms`
  ],
}
