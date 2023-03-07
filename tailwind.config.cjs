/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,css}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        brandBlue: "#6b58fd",
        brandBlack: "#323232",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        xs: "6px",
        ss: "8px",
        sm: "10px",
        md: "12px",
        lg: "15px",
        xl: "18px",
      },
      backgroundImage: {
        "background": "url('src/assets/mainherosection.png')"
      }
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1600px",
    },

  },
  plugins: [],
};