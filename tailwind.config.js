/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#41A152",
      success: "#71cb75",
      info: "#02A0FC",
      danger: "#FF3A29",
      warning: "#FFB200",
      white: "#FFF",
      black: {
        20: "#00000033",
        40: "#00000066",
        60: "#00000099",
        80: "#000000cc",
        100: "#000000",
      },
      dark: "#303030",
    },
    fontFamily: {
      sora: "Sora, sans-serif",
      dm: "DM Sans, sans-serif",
    },
    fontSize: {
      h1: "3.6rem",
      h2: "2.2rem",
      h3: "2rem",
      h4: "1.6rem",
      text: "1.4rem",
    },
  },
  plugins: [],
};
