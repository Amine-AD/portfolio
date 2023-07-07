/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			primary: 'hsl(96 72% 67%)',
			secondary: 'hsl(0 0% 11%)',
			thirdary: 'hsl(0 0% 55%)',
			muted: 'hsl(0 0% 73%)',
			background: 'hsl(96 100% 3%)',
			forground: 'hsl(0 0% 100%)',

		},
		extend: {},
	},
	plugins: [],
}
