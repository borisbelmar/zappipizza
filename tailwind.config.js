/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#F6A000',
          50: '#FFE3AF',
          100: '#FFDC9A',
          200: '#FFCD71',
          300: '#FFBF49',
          400: '#FFB120',
          500: '#F6A000',
          600: '#BE7C00',
          700: '#865700',
          800: '#4E3300',
          900: '#160E00'
        },
        secondary: {
          DEFAULT: '#E93D28',
          50: '#FAD3CF',
          100: '#F8C3BC',
          200: '#F4A197',
          300: '#F18072',
          400: '#ED5E4D',
          500: '#E93D28',
          600: '#C52714',
          700: '#921D0F',
          800: '#5F130A',
          900: '#2C0905'
        },
        dark: {
          DEFAULT: '#6B7280',
          50: '#A1A6B0',
          100: '#969BA7',
          200: '#7F8694',
          300: '#6B7280',
          400: '#515761',
          500: '#383C43',
          600: '#1E2024',
          700: '#050506',
          800: '#000000',
          900: '#000000'
        }
      },
      fontFamily: {
        display: ['Montserrat', 'sans-serif'],
        body: ['"Roboto Slab"', 'serif']
      }
    },
  },
  plugins: [],
}
