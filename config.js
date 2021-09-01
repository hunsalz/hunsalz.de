module.exports = {
  siteTitle: 'hunsalz.de', // <title>
  manifestName: 'hunsalz.de',
  manifestShortName: 'Portfolio', // max 12 characters
  manifestStartUrl: '/',
  manifestBackgroundColor: '#663399',
  manifestThemeColor: '#663399',
  manifestDisplay: 'standalone',
  manifestIcon: 'src/assets/images/website-icon.png',
  pathPrefix: process.env.PATH_PREFIX,

  authorName: 'Markus Hunsalz',
  authorHeading: 'Re-think common design patterns',
  authorSocialLinks: [
    {
      icon: 'fa-github',
      name: 'Github',
      url: 'https://github.com/hunsalz',
    },
    {
      icon: 'fa-linkedin',
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/markus-hunsalz',
    }
  ],
};
