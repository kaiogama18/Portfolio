const siteMetadata = require('./config/metadata')

require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
    siteMetadata,
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-netlify`,
        {
            resolve: `gatsby-plugin-sitemap`,
            options: {
                exclude: [`/search`],
                query: `
                {
                  site {
                    siteMetadata {
                      siteUrl
                    }
                  }

                  allSitePage {
                    nodes {
                      path
                    }
                  }
              }`,
                resolveSiteUrl: ({ site }) => {
                    return site.siteMetadata.siteUrl
                },
                serialize: ({ site, allSitePage }) =>
                    allSitePage.nodes.map(node => {
                        return {
                            url: `${site.siteMetadata.siteUrl}${node.path}`,
                            changefreq: `daily`,
                            priority: 0.7
                        }
                    })
            }
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: 'G-1DZMSTLCV0',
                head: true,
                anonymize: true
            }
        },
        {
            resolve: 'gatsby-plugin-robots-txt',
            options: {
                host: 'https://www.kaiogama.com',
                sitemap: 'https://www.kaiogama.com/sitemap.xml',
                policy: [{ userAgent: '*', allow: '/' }]
            }
        },
        {
            resolve: `gatsby-plugin-nprogress`,
            options: {
                color: `black`,
                showSpinner: false
            }
        },
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [
                    `Roboto Mono`,
                    `source sans pro\:300,400,400i,700` // you can also specify font weights and styles
                ],
                display: 'swap'
            }
        },

        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Kaio Gama`,
                short_name: `Kaio Gama`,
                description: `My personal website portfolio`,
                lang: `pt-br`,
                start_url: `/`,
                background_color: `#f7f0eb`,
                theme_color: `#525659`,
                display: `standalone`,
                icon: 'src/images/icon.png' //512x512
            },
            icon_options: {
                purpose: `any maskable`
            }
        },
        {
            resolve: `gatsby-plugin-canonical-urls`,
            options: {
                siteUrl: `https://www.kaiogama.com`
            }
        },
        {
            resolve: `gatsby-plugin-styled-components`,
            options: {
                displayName: process.env.NODE_ENV != 'production'
            }
        },
        {
            resolve: `gatsby-plugin-page-creator`,
            options: {
                path: `${__dirname}/src/pages`,
                ignore: [`**/styles.js`]
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/markdown`,
                name: 'markdown'
            }
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: []
            }
        },
        {
            resolve: 'gatsby-plugin-netlify-cache',
            options: {
                cachePublic: true
            }
        },
        `gatsby-plugin-offline`
    ]
}
