/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/components/**/*.{js,ts,jsx,tsx}",
		"./src/controls/**/*.{js,ts,jsx,tsx}",
		"./src/pages/**/*.{js,ts,jsx,tsx}",
		"./public/**/*.svg"
	],
	theme: {
		extend: {
			fontFamily: {
				"body": ["Rubik", "sans-serif"]
			},
			// backgroundImage: {
			// 	"ut-logo": "url('ut-logo.svg')"
			// }
		}
	},
	plugins: []
}
