module.exports = {
  purge: [
    './src/**/*.vue',
    './src/**/*.ts',
  ],
  theme: {
    extend: {
      screens: {
        xs: { max: '640px' },
        ph: { max: '420px' },
      },
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
      },
    },
  },
  variants: {},
  plugins: [],
};
