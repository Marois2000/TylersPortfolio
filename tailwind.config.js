/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkred: '#780000',
        lightred: '#C1121F',
        lightwarm: '#FDF0D5',
        darkblue: '#003049',
        lightblue: '#669BBC',
      },
      fontFamily: {
        'exo': ['Exo2', 'sans-serif'],
        'rubik': ['Rubik', 'sans-serif']
      },
      backgroundImage: {
        'about': "url('/img/background/about-background.svg')"
      },
      animation: {
        'slide-in-left': 'slide-in-left 0.75s ease-out',
        'slide-in-right': `slide-in-right 0.75s ease-out`,
        'slide-out-left': `slide-out-left 0.75s ease-out`,
        'slide-out-right': `slide-out-right 0.75s ease-out`
      },
      keyframes: {
        'slide-in-left': {
          '0%': { transform: 'translateX(-100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        'slide-out-left': {
          '0%': { transform: 'translateX(0)', opacity: 1 },
          '100%': { transform: 'translateX(-100%)', opacity: 0 }
        },
        'slide-out-right': {
          '0%': { transform: 'translateX(0)', opacity: 1 },
          '100%': { transform: 'translateX(100%)', opacity: 0 }
        }
      },
    },
  },
  plugins: [],
}

