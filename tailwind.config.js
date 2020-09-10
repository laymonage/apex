module.exports = {
  purge: [
    './src/**/*.vue',
    './src/**/*.ts',
  ],
  theme: {
    extend: {
      screens: {
        xs: { max: '640px' },
        ph: { max: '425px' },
      },
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
      },
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'dark'],
    textColor: ['responsive', 'hover', 'focus', 'dark'],
    margin: ['responsive', 'first'],
  },
  experimental: {
    darkModeVariant: true,
  },
  dark: 'class',
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
};
