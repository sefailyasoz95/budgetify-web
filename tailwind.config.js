/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "selector",
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			keyframes: {
				shimmer: {
					from: {
						backgroundPosition: "0 0",
					},
					to: {
						backgroundPosition: "-200% 0",
					},
				},
				shake: {
					"10%, 90%": {
						transform: "translate3d(-1px, 0, 0)",
					},
					"20%, 80%": {
						transform: "translate3d(2px, 0, 0)",
					},
					"30%, 50%, 70%": {
						transform: "translate3d(-4px, 0, 0)",
					},
					"40%, 60%": {
						transform: "translate3d(4px, 0, 0)",
					},
				},
			},
			animation: {
				shimmer: "shimmer 2s linear infinite",
				shake: "shake 0.82s cubic-bezier(.36,.07,.19,.97) both",
			},
		},
		boxShadow: {
			custom: "0px 0px 10px 0px rgba(95, 95, 95, 0.5);",
		},
	},
	plugins: [],
};
