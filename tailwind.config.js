/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2B2C72",
        white: "#F5F5FF",
        blue: "#05ABEF",
        gray: "#A4A4AA",
        black: "#04040A",
      },
      gridTemplateColumns: {
        almaz: "repeat(auto-fill,minmax(275px,1fr))",
        "almaz-test": "repeat(auto-fit,minmax(275px,1fr))",
      },
    },
  },
  plugins: [],
};
