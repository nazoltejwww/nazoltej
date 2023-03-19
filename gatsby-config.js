/**
 * @type {import('gatsby').GatsbyConfig}
 */
require("dotenv").config();
// const path = require(`path`);
module.exports = {
    // pathPrefix: `/nz`,
    siteMetadata: {
        title: `Rejestracja pojazdów na żółte tablice`,
        description: `Rejestracja pojazdów na żółte tablice. Pełna dokumentacja, opinie rzeczoznawcy.`,
        author: `@Seovileo`,
        siteUrl: `https://seovileo.pl/`,
    },
    plugins: [
        `gatsby-plugin-scroll-reveal`,
        `gatsby-plugin-netlify`,
        {
            resolve: `gatsby-source-datocms`,
            options: {
                // You can find your read-only API token under the Settings > API tokens
                // section of your administrative area. Make sure to grant both CDA and CMA permissions.
                apiToken: '921dd055d12ded6b15c8e306948b78',

                // The project environment to read from. Defaults to the primary environment:
                environment: `main`,

                // If you are working on development/staging environment, you might want to
                // preview the latest version of records instead of the published one:
                previewMode: false,

                // Disable automatic reloading of content when some change occurs on DatoCMS:
                disableLiveReload: false,

                // Custom API base URL (you probably don't need this!)
                // apiUrl: 'https://site-api.datocms.com',

                // Limits page size and can be used to avoid build timeouts.
                // Default is 500 (also the maximum)
                pageSize: 500,
            },
        },
        {
            resolve: `gatsby-omni-font-loader`,
            options: {
                enableListener: true,
                preconnect: [
                    `https://fonts.googleapis.com`,
                    `https://fonts.gstatic.com`,
                ],
                web: [
                    {
                        name: `Signika`,
                        file: `https://fonts.googleapis.com/css2?family=Signika:wght@300;400;500&display=swap`,
                    },
                ],
            },
        },
        "gatsby-plugin-postcss",
        `gatsby-plugin-image`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `assets`,
                path: `${__dirname}/src/assets`,
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
                background_color: `#0C0904`,
                // This will impact how browsers show your PWA/website
                // https://css-tricks.com/meta-theme-color-and-trickery/
                theme_color: `#0C0904`,
                display: `minimal-ui`,
                icon: `src/assets/logoBrowser.png`,
            },
        },
    ],
};
