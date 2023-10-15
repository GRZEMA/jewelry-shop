import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				playFair: ['var(--font-playfair-display)'],
				greatVibes: ['var(--font-great-vibes)'],
			},
			colors: {
				darkText: '#201600',
				lightText: '#FFED92',
				lightBackground: '#FFF8D4',
				newsletterGray: '#51504D',
				hover: '#8A6002',
				hoverBackground: '#fcf1be',
			},
			container: {
				center: true,
			},
			screens: {
				xxs: '320px',
				xs: '475px',
			},
		},
	},
	plugins: [],
}
export default config
