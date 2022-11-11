/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
       'sans': ['Proxima Nova', ...defaultTheme.fontFamily.sans,]
      },
      fontSize: {
        'sm': ['0.875rem', {
          lineHeight: '1rem',
          letterSpacing: '0.21px',
          fontWeight: '300',
        }],
      },
      colors: {
        'page-bg': '#E6E9F2',
        'card-mobile-bg': '#EFF0F5',
        'card-desktop-bg': '#FFFFFF',
        'primary': '#3A4562',
        'secondary': '#878D9D'
      },
      maxWidth: {
        'card-mobile': '620px',
        'card-desktop': '1440px',
      },
      width: {
        'photo-mobile': '66px',
        'photo-desktop': '85px',
      },
      height: {
        'card-mobile': '206px',
        'card-desktop': '164px',
        'photo-mobile': '66px',
        'photo-desktop': '85px',
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};
