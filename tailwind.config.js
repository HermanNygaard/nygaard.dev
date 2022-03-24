const { colors } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",

  plugins: [require("@tailwindcss/typography")],
};
