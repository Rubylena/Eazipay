/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'transparent': 'transparent',
      'black': '#000',
      'white': '#fff',
      'blue': 'blue',
      'orange': '#E4572E',
      'dark-blue': 'rgba(12, 25, 47, 0.6)',
      'blue': '#023C98',
      'semi-black': '#2B2B2B',
      'grey': '#898989',
      'dark-grey': '#8B8B8B',
      'scroll-grey': '#E3E3E3',
      'greyish': '#5F5F5F',
      'bold-grey': '#444444',
      'dark-orange': '#B33612',
      'dark-bright-blue': '#0A244F',
      'green': '#19A301',
      'placeholder': '#B9BBC0',
      'history-grey': '#4E4E4E',
      'hr': '#E1E2E5',
      'main-bg': '#FCFCFC',
      'icon-bg': 'rgba(255, 255, 255, 0.2)',
      'pink': '#FFCABB',
      'tint-blue': '#DFE5FF',
      'tint-orange': '#FFEBB8',
      'tint-green': '#A2F5E6',
      'purple': '#5B0169',
      'tab': '#B5BDE1',
      'red': '#DE1C10',
      'yellow': '#E0A409',
      'tint-pink': '#FFF0EC',
      'upload-bg': 'rgba(255, 255, 255, 0.3)',
    },
  },
  plugins: [],
}
