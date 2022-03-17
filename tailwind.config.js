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
      '2xl': {'max': '1535px'},

      'xl': {'max': '1279px'},

      'lg': {'max': '971px'},

      'md': {'max': '767px'},

      'sm': { 'max': '639px' },
      
      'res': '970px'
    },
    fontSize: {
      'xxs': '0.55rem'
    }
  },
  plugins: [],
}
