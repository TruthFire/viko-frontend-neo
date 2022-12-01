/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/*.html'],
  theme: {
    extend: {
      maxWidth: {
        '1/4': '24%',
      },
      minWidth: {
        '200p': '200px',
      },
      spacing: {
        pizzaRadio: '16px 5px 16px 14px',
      },
      boxShadow: {
        borders: '0 0 0 1px #dce1e6',
        darkBorders: '0 0 0 1px #343d4c',
      },
      transition: {
        showForm: 'all 0.6s cubic-bezier(0.9, 0, 0, 0.7)',
      },
    },
  },
  plugins: [],
};
