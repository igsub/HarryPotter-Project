/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				background: {
					light: "#475569",
					normal: "#1e293b",
					dark: "#0f172a",
				},
				gryffindor: {
					"dark-red": "#740001",
					"light-red": "#AE0001",
					"dark-yellow": "#D3A625",
					"light-yellow": "#EEBA30",
				},
				slytherin: {
					"dark-green": "#1A472A",
					"light-green": "#2A623D",
					"dark-gray": "#5D5D5D",
					"light-gray": "#AAAAAA",
				},
			},
		},
	},
	plugins: [],
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
}
