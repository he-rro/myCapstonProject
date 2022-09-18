/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./src/**/*.{js,jsx,ts,tsx}"
],
  theme: {
    fontFamily: {
      primary: 'Poppins',
    },
    
    container: {
      padding: {
        DEFAULT: '1rem',
        lg: '2rem',
      },
    },
    fontSize: {
       '3xs':'10px',
      '2xs':'12px',
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1234px',
    },
    extend: {
      colors: {
        primary: '#101828',
        secondary: '#7F56D9',
      },
      boxShadow: {
        1: '0px 4px 30px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
}
