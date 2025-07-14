module.exports = {
  plugins: [
    require.resolve('prettier-plugin-astro'),
  ],
  useTabs: false,
  tabWidth: 4,
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};