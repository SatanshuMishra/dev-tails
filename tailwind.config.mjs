/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				"darkBackground": "#010409",
				"darkText": "#FFFFFF",
				"lightBackground": "#FFFFFF",
				"lightText": "#000000",
			},
		},
	},
	plugins: [],
	darkMode: "selector",
};
