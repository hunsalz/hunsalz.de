// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: process.env.SITE_TITLE,
  siteUrl: process.env.SITE_URL,
  pathPrefix: process.env.PATH_PREFIX,
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "blog/**/*.md",
        typeName: "Post",
        remark: {},
      },
    },
    {
      use: "gridsome-plugin-windicss",
      options: {
        purgeConfig: {
          // Prevent purging of prism classes.
          whitelistPatternsChildren: [/token$/],
        },
      },
    },
    {
      use: "@gridsome/plugin-sitemap",
      options: {
        include: ["/", "/blog/**"],
      },
    },
    {
      use: "gridsome-plugin-htaccess",
      options: {
        textCompression: [
          "text/html",
          "application/javascript",
          "text/css",
          "image/png",
        ],
        redirections: [],
        forceHttps: true,
        disableDirectoryIndex: true,
        disableServerSignature: true,
        pingable: false,
        // preventScriptInjection: true,
        contentSecurityPolicy: {
          "default-src": ["self"],
          "connect-src": ["self", "data:"],
          "font-src": ["self", "data:"],
          "frame-src": ["self", "data:"],
          "img-src": ["self", "data:"],
          "script-src": ["self", "data:", "unsafe-inline"], // TODO - Gridsome (and Gatsby) inline the initial state, which is a big <script></script> block
          "style-src": ["self", "data:"],
        },
        customHeaders: {
          "X-Frame-Options": "sameorigin",
          "X-Content-Type-Options": "nosniff",
          "Referrer-Policy": "strict-origin-when-cross-origin",
          "Permissions-Policy": "interest-cohort=()",
        },
        notCachedFiles: [],
      },
    },
  ],
  transformers: {
    remark: {
      plugins: [
        [
          "remark-autolink-headings",
          {
            behavior: "wrap",
            linkProperties: {
              ariaHidden: "true",
              tabIndex: -1,
            },
          },
        ],
      ],
    },
  },
}
