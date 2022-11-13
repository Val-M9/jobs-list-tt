/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
       'sans': ['Proxima Nova', ...defaultTheme.fontFamily.sans,]
      },
      colors: {
        'page-bg': '#E6E9F2',
        'light-blue': '#EFF0F5',
        'primary': '#3A4562',
        'secondary': 'hsla(225, 25%, 29%, 0.82)',
        'gray-10': 'rgba(0, 0, 0, 0.12)',
        'light-gray': '#878D9D',
        'blue-100': 'rgba(161, 177, 219, 0.3)',
        'blue-200': '#55699E',
        'blue-700': '#384564',
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
      },
      boxShadow: {
        'card-mobile': [
          '0px 1px 1px rgba(0, 0, 0, 0.14)',
          '0px 2px 1px -1px rgba(0, 0, 0, 0.12)',
          '0px 1px 3px rgba(0, 0, 0, 0.2)'
        ],
        'card-desktop': [
          '2px 1px 7px rgba(0, 0, 0, 0.08)',
          '0px 2px 1px -1px rgba(0, 0, 0, 0.04)',
          '0px 1px 3px rgba(0, 0, 0, 0.12)'
        ]
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};
