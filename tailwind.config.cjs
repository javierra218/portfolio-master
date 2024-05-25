/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Utiliza 'class' para habilitar el modo oscuro
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        'fira-code': ['"Fira Code"', 'monospace'],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
}
