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
    themeVariants: ['dark'],
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'dark', 'dark:hover', 'dark:focus'],
    textColor: ['responsive', 'hover', 'focus', 'dark', 'dark:hover', 'dark:focus'],
    margin: ['responsive', 'first'],
  },
  plugins: [
    require('tailwindcss-multi-theme'),
  ],
};
