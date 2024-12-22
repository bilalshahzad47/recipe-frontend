/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "white-smoke": "#f5f5f5",
      },
      backgroundColor: {
        'gradient-left-right': 'linear-gradient(to right, #EAF6FA, #FAF2F6)',
      },
    },
  },
  plugins: [],
}

