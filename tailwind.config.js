/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'shiba-yellow': '#EECC78',
        'shiba-blue': '#2D44B9',
        'shiba-hot-pink': '#EE097C',
        'shiba-soft-pink': '#CA9BAD',
        'shiba-light-green': '#97B294',
        'shiba-dark-green': '#484E33',
      },
    },
  },
  plugins: [],
}
