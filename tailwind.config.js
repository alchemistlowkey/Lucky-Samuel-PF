/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
const svelteUx = require('svelte-ux/plugins/tailwind.cjs');


export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  plugins: [daisyui, svelteUx],
}
