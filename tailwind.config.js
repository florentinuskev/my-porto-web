/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'timberwolf': '#d1d1d1',
      'platinum': '#dbdbdb',
      'sky-blue': '#85c7f2',
      'dim-gray': '#636363',
      'davy-gray': '#4c4c4c',
      'new-white': '#ffffff'
    },
    extend: {},
  },
  plugins: []
}

