/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			spacing: {
				header: '3.5rem',
				sidenav: '12rem'
			}
		}
	},
	plugins: []
};
