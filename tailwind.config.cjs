module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: ['class', '[data-mode="dark"]', '[data-mode="light"]'],
  theme: {
    colors: {
      primary: {
        50: '#f1fce9',
        100: '#e1f8cf',
        200: '#c4f2a4',
        300: '#9fe870',
        400: '#7bd942',
        500: '#5bbf23',
        600: '#449818',
        700: '#357417',
        800: '#2e5c18',
        900: '#294e19',
        950: '#122b08',
      },
      background: 'hsl(var(--background))',
      forground: 'hsl(var(--forground))',
      dark: 'hsl(var(--dark))',
      light: 'hsl(var(--light))',
    },
    extend: {},
  },
  plugins: [],
}
