/**
 * @type {import('gatsby').GatsbyConfig}
 */
require("dotenv").config();
module.exports = {
    siteMetadata: {
        title: `Rejestracja pojazdów na żółte tablice`,
        description: `Rejestracja pojazdów na żółte tablice. Pełna dokumentacja, opinie rzeczoznawcy.`,
        author: `@Seovileo`,
        siteUrl: `https://seovileo.pl/`,
    },
    plugins: [
        // `gatsby-plugin-scroll-reveal`,
        "gatsby-plugin-netlify",
        {
            resolve: `gatsby-source-datocms`,
            options: {
                apiToken: "921dd055d12ded6b15c8e306948b78",
                environment: `main`,
                previewMode: false,
                disableLiveReload: false,
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
                theme_color: `#0C0904`,
                display: `minimal-ui`,
                icon: `src/assets/logoBrowser.png`,
            },
        },
    ],
};
