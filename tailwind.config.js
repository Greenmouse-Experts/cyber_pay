/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        grey:{
          100: '#F1F1F1',
          200: '#F5F5F5',
          300: '#D9D9D9',
          400:'#C9C9C9',
          500: '#E4E7E9',
          700:'#6F6F6F',
          800:'#969696',
        
        },
      }
    },
  },
  plugins: [],
}

