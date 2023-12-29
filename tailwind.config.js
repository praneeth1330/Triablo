/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"on-hover-orange": "#e8846b",
			},
			fontFamily: {
				roboto: "Roboto",
			},
		},
	},
	plugins: [],
};
