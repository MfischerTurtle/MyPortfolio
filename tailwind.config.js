/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient': 'linear-gradient(135deg, #d5f2ea 0%, #c6e4dd 25%, #ead5f2 50%, #f2ead5 75%, #f2f2d5 100%)',
      },
    },
  },
  plugins: [],
}