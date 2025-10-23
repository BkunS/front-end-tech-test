/** @type {import('tailwindcss').Config} */

export default {
	content: ['./src/**/*.{html,js,jsx,ts,tsx}', './public/index.html'],
	theme: {
		screens: {
			md: '640px',
			lg: '840px',
			xl: '1280px',
		},
		extend: {},
	},
	plugins: [],
}
