/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      fontWeight: {
        extrablack: '1000',
      },
      spacing: {
        25: '6.25rem',
        30: '7.5rem',
        40: '8.5rem',
        50: '9.5rem',
        60: '15.5rem',
      },
      fontFamily: {
        alexandria: ['Alexandria', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
