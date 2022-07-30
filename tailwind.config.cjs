module.exports = {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'moon-light-icon': "url('./assets/icons/moon-light.svg')",
        'moon-dark-icon': "url('./assets/icons/moon-dark.svg')",
        'search-light-icon': "url('./assets/icons/search-light.svg')",
        'search-dark-icon': "url('./assets/icons/search-dark.svg')",
        'arrow-left-dark-icon': "url('./assets/icons/long-arrow-left-light.svg')",
        'chevron-down-dark-icon': "url('./assets/icons/chevron-down.svg')",
      },
      fontFamily: {
        nunitoSans: ['Nunito Sans', 'sans-serif']
      }
    },
    colors: {
      elements: { light: 'hsl(0, 0%, 100%)', dark: 'hsl(209, 23%, 22%)' },
      background: { light: 'hsl(0, 0%, 98%)', dark: 'hsl(207, 26%, 17%)' },
      content: { light: 'hsl(200, 15%, 8%)', dark: 'hsl(0, 0%, 100%)' },
      input: { light: 'hsl(0, 0%, 52%)', dark: 'hsl(209, 23%, 22%)' },
      accent: 'hsl(207.7,6.5%,61%)',
    },
    minWidth: {
      '28': '6.5rem',
    },
    backgroundSize: {
      '1.3': '1.3rem',
      '1': '1rem',
    },
    backgroundPosition: {
      'left-sm': 'left 1.85rem center',
      'left-center': 'left center',
    },
    fontSize: {
      'xs': '.75rem',
      'xsm': '.812rem',
      'sm': '.875rem',
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
