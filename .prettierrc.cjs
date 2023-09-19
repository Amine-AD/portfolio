module.exports = {
  printWidth: 100,
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: 'es5',
  useTabs: false,
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
        singleQuote: true,
      },
    },
    {
      files: ['*.cjs', '*.mjs'],
      options: {
        semi: false,
        singleQuote: true,
      },
    },
  ],
}
