/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
    "./src/**/*.{js,jsx}",],
  theme: {
    extend: {},
  },
//    corePlugins: {
//     preflight: false,
//   },

  plugins: [
    require('@tailwindcss/typography')
  ],
  darkMode: 'class'
}
