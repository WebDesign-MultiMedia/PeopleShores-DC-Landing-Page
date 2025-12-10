/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html',  "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        psRed: '#B6202C',       // primary red
        psRedDark: '#8C1722',
        psNavy: '#26293F',      // footer/nav background
        psGray: '#F4F4F6',      // light gray sections
      },
      fontFamily: {
        sans: ['"Open Sans"', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

