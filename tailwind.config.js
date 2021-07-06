const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/*.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', ...defaultTheme.fontFamily.sans],
        mono: ['DM Mono', 'monospace'],
      },
    },
  },
  variants: {},
  plugins: [],
};
