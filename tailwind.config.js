/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx,html}"],
  darkMode: "class",
  // prefix: "plasmo-"
  plugins: [require("@tailwindcss/typography")]
}
