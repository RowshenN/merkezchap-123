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
        almaz: "repeat(auto-fill,minmax(250px,1fr))",
        "almaz-test": "repeat(auto-fit,minmax(275px,1fr))",
      },
      animation: {
        marquee: "marquee 25s linear infinite",
      },
      screens: {
        xs: "320px",
        sm: "480px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      boxShadow: {
        "custom-lg":
          "0 15px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
