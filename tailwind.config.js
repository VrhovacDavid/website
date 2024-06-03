/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#f6f9fc",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        lightBlue: "#5cadf7",
        darkBlue: "#0a2540",
        textBlue: "#0fefe3"

      
      },
      fontSize: {
        'sup': '18px',
        'base': '16px',     // Paragraph
        'h1': '47.78px',
        'h2': '39.81px',
        'h3': '33.18px',
        'h4': '27.65px',
        'h5': '23.04px',
        'h6': '19.2px',
        'small': '13.33px', // Small Text
        'smaller': '11.11px' // Text unter Small
      },
     
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),

  ],
};