require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `Sporte`,
    description: `Sporte web app`,
    author: `@jp-vargas`,
  },
  plugins: [
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
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "GatsbyJS",
        short_name: "GatsbyJS",
        icon: "src/images/icon.png",
        start_url: "/",
        background_color: "#f7f0eb",
        theme_color: "#a2466c",
        display: "standalone",
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          require("tailwindcss"),
          require("./tailwind.config.js"),
        ],
      },
    },
    {
      resolve: "gatsby-plugin-resolve-src",
      options: {
        addSassLoader: true
      }
    },
    "gatsby-plugin-offline",
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `3m0ftrz3tm5b`,
        accessToken: `0Qb6R-HSfkBheXBWWqw7yd9rZ4xYtXJM5HgGqYE0uqA`,
        downloadLocal: true,
      },
    },
    {
      resolve: `gatsby-plugin-google-adsense`,
      options: {
        publisherId: `ca-pub-7707481234354209`
      },
    },
  ],
}
