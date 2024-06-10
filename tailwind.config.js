/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container:{
      center: true,
      padding: '16px'
    },
    extend: {
      colors:{
        primary:'#249624',
        secondary:'#145514',
        netrals:'#E7E7E7',
        light:'#F9F9F9',
        dark:'#1F1F1F',
      },
      fontFamily: {
        'nunito': ['"Nunito"', ...defaultTheme.fontFamily.sans],
      },
      screens: {
        '2xl': '1320px',
        '3xl': '1536px',
      },
    },
  },
  plugins: [],
}

