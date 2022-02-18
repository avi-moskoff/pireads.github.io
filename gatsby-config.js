module.exports = {
  siteMetadata: {
    siteUrl: "https://www.avi.me",
    title: "avi.me",
    // An optional attribute which provides support for CORS check.
    // If you do not provide a crossOrigin option, it will skip CORS for manifest.
    // Any invalid keyword or empty string defaults to `anonymous`
    crossOrigin: `use-credentials`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `avi.me`,
        short_name: `avi.me`,
        start_url: `/`,
        display: `standalone`,
        icon: "src/images/favicon.svg",
      },
    },
  ],
};
