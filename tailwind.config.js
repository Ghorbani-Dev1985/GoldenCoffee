/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "brown": {
          100: "#ECE0D1",
          300: "#DBC1AC",
          600: "#967259",
          900: "#634832",
        },
      },
      boxShadow: {
        "normal": "0px 1px 10px 0px rgba(0, 0, 0, 0.05)",
      },
      borderRadius: {
        "4xl" : "2rem",
      },
      fontFamily: {
       "Dana" : "Dana",
       "DanaMd" : "Dana Medium",
       "DanaBold" : "Dana DemiBold",
       "Morabba" : "Morabba Light",
       "MorabbaMd" : "Morabba Medium",
       "MorabbaBold" : "Morabba Bold",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
});
