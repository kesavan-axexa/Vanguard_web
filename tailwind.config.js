/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        khand: ["Khand", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
        outfit:  ["Outfit", "serif"],
        bungee: ["Bungee Inline", "serif"]
      },
      colors: {
        customGrey: "#5A5A5A",
        customBlack: "#2B323A",
        customGolden: "#C5975B",
        customGrey1: "#F8F8F8",
        customGrey2: "#F5F5F5",
        customGreen : "#56b045",
        customGreen5 : "#007200",
        customGreen4 : "#006400",
        customGreen1 : "#008000",
        customGreen2 : "#65B741",
        customGreen3 : "#90D26D",
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      fontSize:{
        sm: "16px",
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-outline': {
          color: 'transparent',
          '-webkit-text-stroke': '1px #008000', // Adjust stroke width and color
        },
      });
    },
  ],};