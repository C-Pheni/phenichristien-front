const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/js/*.{js}",
    "./templates/*.{html}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      
    },
    fontFamily : {
      'sans': ['Inter', ...defaultTheme.fontFamily.sans],
    },
    colors: {
      'pheni': {
        400: '#DFE2F2',
        500: '#797FF2',
        600: '#6F4BF2',
        700: '#8C6976',
        800: '#0D0D0D',
      },
    }
  },
  plugins: [],
}

