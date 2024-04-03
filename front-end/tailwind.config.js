/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
    },
    extend: {
      spacing: {
        
      },
      boxShadow: {
        'mini-xlx': '0px 2px 2px 0px rgba(0, 0, 0, 0.25)',
        'xlx': '0px 4px 4px 0px rgba(0, 0, 0, 0.25)'
      },
      colors: {
        'primary' : '#43766C',
        'primary-dark' : '#2f534c',
        'secondary' : '#76463C',
        'tertiary' : '#EFE6DA',
        'onCloseContainer' : '#6A1212',
        'CloseContainer' : '#EDB9B9',
        'onOpenContainer' : '#436A12',
        'OpenContainer' : '#BAEDB9',
        'abu-abu': '#D9D9D9'
      },
      screens: {
        'hp': '375px'
      },
      borderRadius: {
        '2': '2px',
        '5': '5px',
        '10': '10px'
      }
    },
  },
  plugins: [],
}