const { TITLE, AUTHOR, SITE_URL } = require('./src/constants');

const siteMetadata = {
  title: TITLE,
  author: AUTHOR,
  homepage: SITE_URL,
  siteUrl: SITE_URL,
};

module.exports = {
  siteMetadata,
  pathPrefix: '/',
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/resources`,
        name: 'resources',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 640,
            },
          },
        ],
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: SITE_URL,
        sitemap: `${SITE_URL}/sitemap.xml`,
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: 'gatsby-plugin-favicons',
      options: {
        logo: './src/resources/images/moon.png',
      },
    },
  ],
};
