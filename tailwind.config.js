/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    // @import url('https://fonts.googleapis.com/css2?family=Andika:ital,wght@0,400;0,700;1,400;1,700&family=Bebas+Neue&family=Poppins:wght@100;400;500;600;700;800&display=swap');
    fontFamily: {
      Andika: ['Andika'],
    },
    extend: {
      colors: {
        primary: '#42A3C2',
        primarydark: '#0891b2',
        secondary: '#F2F2F2',
        neutral: '#0C1126',
        nani: '#4E5461',
      },
    },
  },
  plugins: [],
};
