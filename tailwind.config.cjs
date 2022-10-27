/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      "bright-red": "hsl(12, 88%, 59%)",
      "dark-blue": "hsl(228, 39%, 23%)",
      "dark-grayish-blue": "hsl(227, 12%, 61%)",
      "very-dark-blue": "hsl(233, 12%, 13%)",
      "very-pale-red": "hsl(13, 100%, 96%)",
      "very-light-gray": "hsl(0, 0%, 98%)",
    },
  },
  plugins: [],
};
