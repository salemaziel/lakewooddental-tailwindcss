// tailwind.config.js
module.exports = {
	content: [
		"./src/pages/**/*.{js,jsx,ts,tsx}",
		"./src/components/**/*.{js,jsx,ts,tsx}",
	  ],
		theme: {
		container: {
			center: true,
		  },
		extend: {
			fontFamily: {
				sans: ['Poppins', 'sans-serif'],
				poppins: ['Poppins', 'sans-serif'],
				raleway: ['Raleway', 'sans-serif'],
				inter: ['Inter', 'sans-serif'],
			  },
			spacing: {
				'7': '1.75rem',
				'9': '2.25rem',
				'28': '7rem',
				'80': '20rem',
				'96': '24rem',
				'128': '32rem',
				},
			colors: {
				'logo-blue': {
					500: '#1F3B53',
				},
				'dark-blue': {
					500: '#1E1852',
				},
				'light-blue': {
					500: '#4294C2',
				},
			},
	},
},
	plugins: [
		    require('@tailwindcss/typography'),
			require('@tailwindcss/forms'),
			require('tailwind-children'),
			require('@tailwindcss/container-queries'),
	],
};
