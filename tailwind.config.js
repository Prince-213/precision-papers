/** @type {import('tailwindcss').Config}*/
const config = {
	content: [
	  "./src/**/*.{html,js,svelte,ts}",
	  "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
	],
  
	plugins: [require("flowbite/plugin")],
  
	darkMode: "class",
  
	theme: {
	  extend: {
		colors: {
		  // flowbite-svelte
		  baseGreen: {
			100: "#3BB77E",
		  },
  
		  grey: {
			100: "#F6F6F6",
			200: "#909090B7"
		  },
  
		  black: {
			100: "#181313",
		  },
  
		  charcol: {
			100: "#2E2E2E",
		  },
  
		  heart: {
			100: "#FF0000"
		  }
		},
		fontFamily: {
		  poppins: ["Poppins"],
		  nova: ["Nova Square"],
		  inter: ["Inter"],
		  
		},
	  },
	},
  };
  
  module.exports = config;
  