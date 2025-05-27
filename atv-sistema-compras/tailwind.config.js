/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // enable dark mode via a class
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        background: '#D5D5D5',
        surface: '#000000',
      },
    },
  },
  plugins: [],
  safelist: ['bg-gray-900', 'bg-gray-800'],

  extend: {
    keyframes: {
      'fade-in-out': {
        '0%': { opacity: '0', transform: 'translateY(10px)' },
        '10%': { opacity: '1', transform: 'translateY(0)' },
        '90%': { opacity: '1', transform: 'translateY(0)' },
        '100%': { opacity: '0', transform: 'translateY(10px)' },
      }
    },
    animation: {
      'fade-in-out': 'fade-in-out 2s ease-in-out forwards'
    }
  }
};