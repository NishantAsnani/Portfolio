/** @type {import('tailwindcss').Config} */
export default {
  content: [,
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  dark:"class",
  light:'class',

  theme: {
    screens:{
        'xs':{
          'min': '420px',
          'max': '767px'
        },
        'xxs':{
          'min':'190px',
          'max': '420px'
        }


        
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

