/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
		  animation: {
			blob: "blob 7s infinite",
			// wiggle: 'wiggle 10s ease-in-out infinite',
			// hero: 'hero 1s ease-in-out infinite',
			slowPing: 'pulse 2s cubic-bezier(0, 0, 0.2, 1) infinite',
			slowBounce: 'bounce 1s cubic-bezier(0.42, 0, 0.58, 1) infinite'
		  },
		  keyframes: {
		  //   wiggle: {
		  //       '0%, 100%': { transform: 'rotate(-3deg)' },
		  //       '50%': { transform: 'rotate(3deg)' }
		  //   },
		  //   hero: {
		  //       transform: 'translate3d(0px, 0px, 0px)'
		  // },
			blob: {
			  "0%": {
				transform: "translate(0px, 0px) scale(1)",
			  },
			  "33%": {
				transform: "translate(30px, -50px) scale(1.1)",
			  },
			  "66%": {
				transform: "translate(-20px, 20px) scale(0.9)",
			  },
			  "100%": {
				transform: "tranlate(0px, 0px) scale(1)",
			  },
			}
		  },
		  backgroundImage: {
			'hero-whirl': "url('../svg/wwwhirl_bg.svg')",
		  },
		  fontFamily: {
			Ubuntu: "Ubunutu",
			Catamaran: "Catamaran",
			Raleway: "Raleway",
			Arvo: "Arvo",
			Roboto: "Roboto",
			BungeeShade: "Bungee Shade",
			FasterOne: "Faster One",
			Nabla: "Nabla"
		  }
		},
	  },
	  // safelist: [
	  //   '!duration-0',
	  //   '!delay-0',
	  //   'html.js :where([class*="taos:"]:not(.taos-init))'
	  // ],
	//   plugins: [
	//   //   require('taos/plugin')
	// 	require('flowbite/plugin')
	//   ],
	}

