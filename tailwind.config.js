/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode : 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {},
  plugins: [require("./plugins/openVariant")],
};
