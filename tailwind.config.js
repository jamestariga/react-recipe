module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        'blue': '#1fb6ff',
        'purple': '#7e5bef',
        'pink': '#ff49db',
        'orange': '#ff7849',
        'green': '#13ce66',
        'yellow': '#ffc82c',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
      },
      flex: {
        '30': '30%',
        '70': '70%'
      }
    },
    screens: {
      '2xl': { 'max': '1535px' },

      'xl': { 'max': '1279px' },

      'lg': { 'max': '971px' },

      'md': { 'max': '767px' },

      'sm': { 'max': '639px' },
      
      'res': '970px'
    },
    fontSize: {
      'xxs': '0.55rem',
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
  },
  plugins: [],
}
