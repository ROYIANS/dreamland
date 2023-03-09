const BLOG = require('./src/blog.config')
const { fontFamilies } = require('./lib/font')

module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: BLOG.APPEARANCE === 'class' ? 'media' : 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: fontFamilies.sans,
      serif: fontFamilies.serif
    },
    textShadow: {},
    extend: {
      colors: {
        'background': {
          DEFAULT: '#f3f6f0'
          // DEFAULT: '#b6c2ad'
        },
        'split-line-color': {
          DEFAULT: '#dbdbdb'
        },
        'main-text': {
          DEFAULT: '#444444'
        },
        'menu-hover': {
          DEFAULT: 'rgba(69,69,69,1)'
        },
      },
      minHeight: {
        '0': '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        '4/5': '80%',
        '17/20': '85%',
        '9/10': '90%',
        '19/20': '95%',
        'full': '100%'
      },
      zIndex: {
        '-100': -100,
        '-20': -20,
        '-10': -10,
        '-3': -3,
        '-2': -2,
        '-1': -1,
        '-0': -0,
        '0': 0,
        '1': 1,
        '2': 2,
        '3': 3,
        '10': 10,
        '20': 20,
        '30': 30,
        '40': 40,
        '50': 50,
        '100': 100,
        'auto': 'auto',
      }
    },
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('tailwindcss-typography')({
      // all these options default to the values specified here
      ellipsis: true,         // whether to generate ellipsis utilities
      hyphens: true,          // whether to generate hyphenation utilities
      kerning: true,          // whether to generate kerning utilities
      textUnset: true,        // whether to generate utilities to unset text properties
      componentPrefix: 'c-',  // the prefix to use for text style classes
    }),
  ]
}
