module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful', 
      options: {
        spaceId: '9xldo6njb2ae',
        accessToken: 'e0ec95381fffae84dd479ebfb62da59d2f484c23fb6d094188832b520c3d7232'
      }
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet'
  ],
}
