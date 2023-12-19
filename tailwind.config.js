/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "App.tsx"],
  theme: {
    extend: {
      colors: {
        white: "#FFF",
        dark: "#000",
        primary: "#04555c",
        secondary: "#e1e8e9",
        light: "#f9f9f9",
        grey: "#dddedd",
        red: "red",
        orange: "#f5a623",
      },
    },
  },
  plugins: [],
};

