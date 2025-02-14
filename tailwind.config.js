/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'zvv': {
          // Primärfarben von ZVV
          'blue': '#0066CC',
          'blue-dark': '#003399',
          'white': '#FFFFFF',
          // Sekundärfarben
          'gray': {
            100: '#F5F5F5',
            200: '#EEEEEE',
            300: '#E0E0E0',
            400: '#BDBDBD',
            500: '#9E9E9E',
            600: '#757575',
            700: '#616161',
            800: '#424242',
            900: '#212121',
          },
          'red': '#E30613',
          'green': '#00843D',
        }
      },
      fontFamily: {
        'zvv': ['FrutigerNextPro', 'Arial', 'sans-serif'],
        'zvv-condensed': ['FrutigerNextPro-Condensed', 'Arial Narrow', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      },
      spacing: {
        'zvv-container': '1200px', // Maximale Containerbreite
      },
      borderRadius: {
        'zvv': '3px',
      }
    },
  },
  plugins: [],
} 