/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        '116': '29rem',
      },
      fontFamily: {
        yekanBakh: ['Yekan Bakh']
      },
    },
  },
  plugins: [],
}

