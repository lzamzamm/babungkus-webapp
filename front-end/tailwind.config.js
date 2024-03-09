/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif']
      },
      boxShadow: {
        'mini-xlx': '0px 2px 2px 0px rgba(0, 0, 0, 0.25)',
        'xlx': '0px 4px 4px 0px rgba(0, 0, 0, 0.25)'
      },
      colors: {
        'abu-abu': '#D9D9D9'
      }
    },
  },
  plugins: [],
}