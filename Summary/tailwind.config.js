/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        myColor: {
          50: "rgba(10,200,30,0.2)",
          100: "rgba(10,200,30,0.5)",
          200: "rgba(10,200,30,0.9)"
        }
      },
      padding: {
        22: '90px'
      },
      fontFamily: {
        yekanBakh: ['Yekan Bakh']
      },
      screens: {
        '3xl': '1400px',
      },

    },
  },
  plugins: [],
}

