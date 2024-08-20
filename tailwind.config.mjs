/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'accent': {
          '50': '#edf1ff',
          '100': '#dfe5ff',
          '200': '#c5cfff',
          '300': '#a2aeff',
          '400': '#7d84fc',
          '500': '#6663f6',
          '600': '#5141ea',
          '700': '#4533cf',
          '800': '#392ca7',
          '900': '#322b84',
          '950': '#1f194d',
        },
      },
      fontFamily: {
        'sans': ['Gellix', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
