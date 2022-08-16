const plugin = require('tailwindcss/plugin')
module.exports = {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'moon-icon-light': "url('./assets/icons/moon-light.svg')",
        'moon-icon-dark': "url('./assets/icons/moon-dark.svg')",
        'search-icon-light': "url('./assets/icons/search-light.svg')",
        'search-icon-dark': "url('./assets/icons/search-dark.svg')",
        'arrow-left-icon-light': "url('./assets/icons/long-arrow-left-light.svg')",
        'arrow-left-icon-dark': "url('./assets/icons/long-arrow-left-dark.svg')",
        'chevron-down-icon-light': "url('./assets/icons/chevron-down-light.svg')",
        'chevron-down-icon-dark': "url('./assets/icons/chevron-down-dark.svg')",
      },
      fontFamily: {
        nunitoSans: ['Nunito Sans', 'sans-serif']
      },
      gridTemplateColumns: {
        'home': 'repeat(auto-fit, minmax(0, 17.5rem))',
      },
      spacing: {
        '4.5': '1.15rem',
        '7.5': '1.85rem',
        '15': '3.75rem',
      },
      padding: {
        '15': '3.75rem',
      },
      margin: {
        '15': '3.75rem',
      },
      aspectRatio: {
        'flag': '16 / 11',
      },
      minWidth: {
        '6.1': '6.1rem',
      },
      maxWidth: {
        '29': '13rem',
        '30': '30rem',
        '8xl': '82rem',
      },
      colors: {
        elements: { light: 'hsl(0, 0%, 100%)', dark: 'hsl(209, 23%, 22%)' },
        background: { light: 'hsl(0, 0%, 98%)', dark: 'hsl(207, 26%, 17%)' },
        content: { light: 'hsl(0, 0%, 100%)', dark: 'hsl(200, 15%, 8%)' },
        input: { light: 'hsl(0, 0%, 52%)', dark: 'hsl(209, 23%, 22%)' },
        accent: 'hsl(207.7,6.5%,61%)',
      },
    },

    backgroundSize: {
      '1.2': '1.2rem',
      '1': '1rem',
      '0.8': '0.8rem',
      '0.65': '0.65rem',
    },
    backgroundPosition: {
      'left-9-top-2': 'left 2.25rem top 0.5rem',
      'left-6-top-2': 'left 1.5rem top 0.5rem',
      'right-xs': 'right 1.25rem center',
      'left-sm': 'left 1.85rem center',
      'left-center': 'left center',
      'center': 'center',
    },
    fontSize: {
      'xs': '.75rem',
      'xls': '.81rem',
      'sm': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '1xl': '1.37rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    variants: {
      accessibility: ['responsive', 'focus-within', 'focus'],
      alignContent: ['responsive'],
      alignItems: ['responsive'],
      alignSelf: ['responsive'],
      animation: ['responsive'],
      appearance: ['responsive'],
      backdropBlur: ['responsive'],
      backdropBrightness: ['responsive'],
      backdropContrast: ['responsive'],
      backdropFilter: ['responsive'],
      backdropGrayscale: ['responsive'],
      backdropHueRotate: ['responsive'],
      backdropInvert: ['responsive'],
      backdropOpacity: ['responsive'],
      backdropSaturate: ['responsive'],
      backdropSepia: ['responsive'],
      backgroundAttachment: ['responsive'],
      backgroundBlendMode: ['responsive'],
      backgroundClip: ['responsive'],
      backgroundColor: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus'],
      backgroundImage: ['responsive'],
      backgroundOpacity: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus'],
      backgroundPosition: ['responsive'],
      backgroundRepeat: ['responsive'],
      backgroundSize: ['responsive'],
      backgroundOrigin: ['responsive'],
      blur: ['responsive'],
      borderCollapse: ['responsive'],
      borderColor: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus'],
      borderOpacity: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus'],
      borderRadius: ['responsive'],
      borderStyle: ['responsive'],
      borderWidth: ['responsive'],
      boxDecorationBreak: ['responsive'],
      boxShadow: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus'],
      boxSizing: ['responsive'],
      brightness: ['responsive'],
      clear: ['responsive'],
      container: ['responsive'],
      contrast: ['responsive'],
      cursor: ['responsive'],
      display: ['responsive'],
      divideColor: ['responsive', 'dark'],
      divideOpacity: ['responsive', 'dark'],
      divideStyle: ['responsive'],
      divideWidth: ['responsive'],
      dropShadow: ['responsive'],
      fill: ['responsive'],
      filter: ['responsive'],
      flex: ['responsive'],
      flexDirection: ['responsive'],
      flexGrow: ['responsive'],
      flexShrink: ['responsive'],
      flexWrap: ['responsive'],
      float: ['responsive'],
      fontFamily: ['responsive'],
      fontSize: ['responsive'],
      fontSmoothing: ['responsive'],
      fontStyle: ['responsive'],
      fontVariantNumeric: ['responsive'],
      fontWeight: ['responsive'],
      gap: ['responsive'],
      gradientColorStops: ['responsive', 'dark', 'hover', 'focus'],
      grayscale: ['responsive'],
      gridAutoColumns: ['responsive'],
      gridAutoFlow: ['responsive'],
      gridAutoRows: ['responsive'],
      gridColumn: ['responsive'],
      gridColumnEnd: ['responsive'],
      gridColumnStart: ['responsive'],
      gridRow: ['responsive'],
      gridRowEnd: ['responsive'],
      gridRowStart: ['responsive'],
      gridTemplateColumns: ['responsive'],
      gridTemplateRows: ['responsive'],
      height: ['responsive'],
      hueRotate: ['responsive'],
      inset: ['responsive'],
      invert: ['responsive'],
      isolation: ['responsive'],
      justifyContent: ['responsive'],
      justifyItems: ['responsive'],
      justifySelf: ['responsive'],
      letterSpacing: ['responsive'],
      lineHeight: ['responsive'],
      listStylePosition: ['responsive'],
      listStyleType: ['responsive'],
      margin: ['responsive'],
      maxHeight: ['responsive'],
      maxWidth: ['responsive'],
      minHeight: ['responsive'],
      minWidth: ['responsive'],
      mixBlendMode: ['responsive'],
      objectFit: ['responsive'],
      objectPosition: ['responsive'],
      opacity: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus'],
      order: ['responsive'],
      outline: ['responsive', 'focus-within', 'focus', 'focus-visible'],
      overflow: ['responsive'],
      overscrollBehavior: ['responsive'],
      padding: ['responsive'],
      placeContent: ['responsive'],
      placeItems: ['responsive'],
      placeSelf: ['responsive'],
      placeholderColor: ['responsive', 'dark', 'focus'],
      placeholderOpacity: ['responsive', 'dark', 'focus'],
      pointerEvents: ['responsive'],
      position: ['responsive'],
      resize: ['responsive'],
      ringColor: ['responsive', 'dark', 'focus-within', 'focus'],
      ringOffsetColor: ['responsive', 'dark', 'focus-within', 'focus'],
      ringOffsetWidth: ['responsive', 'focus-within', 'focus'],
      ringOpacity: ['responsive', 'dark', 'focus-within', 'focus'],
      ringWidth: ['responsive', 'focus-within', 'focus'],
      rotate: ['responsive', 'hover', 'focus'],
      saturate: ['responsive'],
      scale: ['responsive', 'hover', 'focus'],
      sepia: ['responsive'],
      skew: ['responsive', 'hover', 'focus'],
      space: ['responsive'],
      stroke: ['responsive'],
      strokeWidth: ['responsive'],
      tableLayout: ['responsive'],
      textAlign: ['responsive'],
      textColor: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus'],
      textDecoration: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus'],
      textOpacity: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus'],
      textOverflow: ['responsive'],
      textTransform: ['responsive'],
      transform: ['responsive'],
      transformOrigin: ['responsive'],
      transitionDelay: ['responsive'],
      transitionDuration: ['responsive'],
      transitionProperty: ['responsive'],
      transitionTimingFunction: ['responsive'],
      translate: ['responsive', 'hover', 'focus'],
      userSelect: ['responsive'],
      verticalAlign: ['responsive'],
      visibility: ['responsive'],
      whitespace: ['responsive'],
      width: ['responsive'],
      wordBreak: ['responsive'],
      zIndex: ['responsive', 'focus-within', 'focus']
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('supports-focus-within', '@supports selector(:focus-within)');
      addVariant('supports-focus-visible', '@supports selector(:focus-visible)')
    })
  ],
}
