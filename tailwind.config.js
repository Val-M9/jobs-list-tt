/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
       'sans': ['Proxima Nova', 'Proxima Nova', 'Proxima Nova']
      },
      colors: {
        'page-bg': '#E6E9F2',
        'card-mobile-bg': '#EFF0F5',
        'card-desktop-bg': '#FFFFFF',
        'text-primary': '#3A4562',
        'text-secondary': '#878D9D'
      },
      maxWidth: {
        'card-mobile': '396px',
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
  plugins: [],
};
