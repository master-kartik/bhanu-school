/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = ({
  content: ["./src/**/*.{js,jsx,ts,tsx}",
  "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
  "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  './node_modules/flowbite-react/lib/esm/**/*.js'],
  
  theme: {
    extend: {},
    colors: {
      'text': '#111C2C',
      'background': '#FFF8ED',
      'primary': '#4b63c1',
      'secondary': '#a690d9',
      'accent': '#a873cf',
      'dark': '#393E46'
     },
  },
  plugins: [
    require('flowbite/plugin')
  ],
});

