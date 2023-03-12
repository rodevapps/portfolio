/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    screens: {
      'xs': '250px',
      ...defaultTheme.screens,
    },
    extend: {},
  },
  plugins: [],
  darkMode: 'class',
}
