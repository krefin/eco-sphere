/** @type {import('tailwindcss').Config} */
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
        primary:'#215534',
        secondary:'#59E58C',
        netrals:'#E7E7E7',
        light:'#F9F9F9',
        dark:'#1F1F1F',
      },
    },
    screens: {
      'lg': '1440px',
    },
  },
  plugins: [],
}

