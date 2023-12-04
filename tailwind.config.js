/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors:{
        black: '#000000',
        Grey: '#3b3939',
        Red: '#f73737',
        lightGrey: '#868484',
        paleWhite: ' #F2EEEE',
      },
    },
  },
  plugins: [],
}