/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'custom-yellow': 'rgb(250, 184, 24)', 
					gris: '#a0a0a0'// Agrega tu color aquí
			  },
			backgroundImage: {
				'custom-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0), #213944)',
			  }
		},
	},
	plugins: [],
}
