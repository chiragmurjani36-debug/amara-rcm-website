/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: { extend: {
    colors: {
      brand: "#10233E",
      accent: "#1F6FEB",
      gold: "#FFC53D",
      teal: "#00A8A8",
      pink: "#EA4C89"
    }
  } },
  plugins: [],
};