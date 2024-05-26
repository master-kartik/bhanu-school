/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = ({
  content: ["./src/**/*.{js,jsx,ts,tsx}",
  "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
  "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  './node_modules/flowbite-react/lib/esm/**/*.js'],
  daisyui: {
    themes: false,
  },
  theme: {
    extend: {
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(20px)',
      
    }
    },
    collapse: {
      defaultProps: {
        animate: {
          unmount: {},
          mount: {},
        },
        className: "",
      },
      styles: {
        base: {

          width: "w-[32px]",
          basis: "basis-full",
          overflow: "overflow-hidden",
        },
      },
    },
    colors: {
      'text': '#111C2C',
      'background': '#FFF8ED',
      'primary': '#4b63c1',
      'secondary': '#a690d9',
      'accent': '#a873cf',
      'dark': '#393E46'
     },
     fontFamily: {
      'EditorialNew' : ['PP_Editorial_New', 'serif'],
      'Archivo': ['Archivo', 'sans-serif']
     }
  },
  plugins: [
    require('flowbite/plugin'),
   
  ],
});

