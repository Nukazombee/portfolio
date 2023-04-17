/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {    
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

      '3xl': '1800px',
    },
    extend: {

      keyframes: {
        'star-bounce': {
          '0%': { transform: 'translateY(0px);'},
          '50%': { transform: 'translateY(-5px);'},
          '100%': { transform: 'translateY(2px);'}       
        },
        
      },

      colors: {      
        'color1': '#FCF8E8',
        'color2': '#CEE5D0',
        'color3': '#94B49F',
        'color4': '#ECB390',
        'color5': '#F4F1BB',
        'color6': '#9BC1BC',
        'color7': '#4c5454',
        'color8': '#E6EBE0',
        'color9': '#F2AF29',
        'color10': '#19647e',
        'color11': '#457B9D',
        'color12': '#3F88C5',
        'color13': '#81B2D9',
        
        
        
        
  
      },

      animation: {
        // Bounces 5 times 1s equals 5 seconds
        
        'star-bounce': 'star-bounce 0.3s ease-out ',
        'star-bounce2': 'star-bounce 0.3s ease-out 0.1s',
        'star-bounce3': 'star-bounce 0.3s ease-out 0.2s',
        'star-bounce4': 'star-bounce 0.3s ease-out 0.3s',
        'star-bounce5': 'star-bounce 0.3s ease-out 0.4s',
        
      }
    },
    fontFamily: {
      teko: ['Teko', 'Arial', 'sans-serif'],   
      oxygen: ['oxygen','Arial', 'sans-serif']
    }
  },
  plugins: [],
}
