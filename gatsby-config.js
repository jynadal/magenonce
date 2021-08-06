/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Mon Agence",
    description: "Agence de voyage pour vos déplacements et vacances",
    author: "@johnyves",
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `7ws762hxf367`,//7ws762hxf367  1sfeg2xcbtuz
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_API_KEY//`1nbHjd66EXSx6nNgEdRPZzTYUbDlk_oQl9OsjlkeiWA`,//gdawe9nwkgsiG3pphCP77Gxyq5QLuQY5H3eHt_PIY5Q
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Montserrat",
              variants: ["400"],
            },
            {
              family: "Inconsolata",
              variants: ["400", "500", "600", "700"],
            },
          ],
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Mon Agence",
        short_name: "MonAgence",
        start_url: "/",
        description: `Ne rêvez plus, voyagez avec votre agence de voyage.`,
        lang: `fr`,
        background_color: "#FF4655",
        theme_color: "#fed693",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/assets/images/icon.png",
        icons: [
            {
              src: `src/assets/images/favicons/android-chrome-192x192.png`,
              sizes: `192x192`,
              type: `image/png`,
            },
            {
              src:"src/assets/images/favicons/apple-touch-icon.png",
              sizes:"180x180",
              type:"image/png"
            },
            {
              src: `src/assets/images/favicons/android-chrome-512x512.png`,
              sizes: `512x512`,
              type: `image/png`,
            },
            {
              src: `src/assets/images/favicons/favicon.ico`,
              sizes: `48x48`,
              type: `image/png`,
            },
            {
              src:"src/assets/images/favicons/favicon-32x32.png",
              sizes:"32x32",
              type:"image/png"
            },
            {
              src: `src/assets/images/favicons/favicon-16x16.png`,
              sizes: `16x16`,
              type: `image/png`,
            },
          ],
                
        // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
      },
    },
    {
  resolve: `gatsby-plugin-offline`,
  options: {
    precachePages: [
      `/index/`,
      `/about/`,
      `/tags/`,
      `/travels/`,
     `/tags/*`,
     `/travels/*`
    ],
  },
},
  ],
}
