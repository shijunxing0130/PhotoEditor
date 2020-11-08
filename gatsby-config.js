module.exports = {
    pathPrefix: "/PhotoEditor",
    siteMetadata: {
        title: `Document for PhotoEditor`,
        name: `Burhanuddin Rashid`,
        siteUrl: `https://github.com/burhanrashid52/PhotoEditor`,
        description: `A Photo Editor library with simple, easy support for image editing using Paints, Text, Filters, Emoji and Sticker like stories.`,
        social: [
            {
                name: `github`,
                url: `https://github.com/burhanrashid52/PhotoEditor`
            },
            {
                name: `twitter`,
                url: `https://twitter.com/burhanrashid52`
            }
        ],
        sidebarConfig: {
            forcedNavOrder: ["/getting-started", "/features", "/android-x", "/want-more"],
            ignoreIndex: true
        }
    },
    plugins: [{resolve: `gatsby-theme-document`}]
};
