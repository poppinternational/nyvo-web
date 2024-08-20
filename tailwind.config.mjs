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
        'secondary': {
          '50': '#f9f8f7',
          '100': '#f2efee',
          '200': '#e7e3e1',
          '300': '#cbc3bf',
          '400': '#bcb2ad',
          '500': '#a39690',
          '600': '#8b7e77',
          '700': '#736862',
          '800': '#615853',
          '900': '#534c49',
          '950': '#2b2624',
        },

      },
      fontFamily: {
        'sans': ['Gellix', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
