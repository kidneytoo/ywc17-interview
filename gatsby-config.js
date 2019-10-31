module.exports = {
  siteMetadata: {
    title: `มาตรการส่งเสริมการท่องเที่ยวในประเทศ “ชิมช้อปใช้”`,
    description: `ผู้สนใจเข้าร่วมมาตรการฯ สามารถลงทะเบียน ตั้งแต่ วันที่ 23 ก.ย. - 15 พ.ย. 62`,
    author: `@titleSupapol`,
  },
  pathPrefix: "/ywc17-interview",
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo/footer.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
