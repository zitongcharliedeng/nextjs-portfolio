/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // for ancestors of /app
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}", // for nextui
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()],
};
