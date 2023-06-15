/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "vibranio-purple": "#5267DF",
        "vibranio-red": "#FA5959",
        "vibranio-blue": "#242A45",
        "vibranio-gray": "#9194A2",
        "vibranio-white": "#f7f7f7",
      },
    },
    fontFamily: {
      Firasans: ["Fira Sans", "sans-serif"],
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      },
    },
  },
  plugins: [],
};
