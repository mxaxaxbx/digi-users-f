/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        alexandria: ['Alexandria', 'sans-serif'],
      },
      fontWeight: {
        normal: '400',
        semibold: '600',
        bold: '700',
        extrablack: '900',
      },
      spacing: {
        25: '6.25rem',
        30: '7.5rem',
        40: '8.5rem',
        50: '9.5rem',
        60: '15.5rem',
      },
    },
  },
  plugins: [],
};
