/** @type {import('tailwindcss').Config} */
const colors = require('@mui/material/colors')
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {colors: { ...colors }},
  },
  plugins: [],
}
