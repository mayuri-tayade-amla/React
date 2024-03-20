/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {},
  },
  extend: {
    fontFamily: {
      sans: ['Helvetica', 'Arial', 'sans-serif'],
      serif: ['Georgia', 'Cambria', 'serif'],
    },
    fontVariantNumeric: ['lining-nums', 'oldstyle-nums'],
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};

