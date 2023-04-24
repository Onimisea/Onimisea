const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          300: "#505b85",
          500: "#051550",
        },

        secondary: {
          300: "#4da5ff",
          500: "#007FFF",
        },

        tertiary: {
          300: "#705ed9",
          500: "#3219C8",
        },

        textColor: {
          light: "#051550",
          dark: "#E2E8F0",
        },
      },

      backgroundColor: {
        light: "#ffffff",
        dark: "#0F172A",
      },

      fontFamily: {
        p22Book: ["p22Book", ...fontFamily.sans],
        p22Medium: ["p22Medium", ...fontFamily.sans],
        p22Demi: ["p22Demi", ...fontFamily.sans],
        p22Heavy: ["p22Heavy", ...fontFamily.sans],
        lmLight: ["LemonMilkLight", ...fontFamily.sans],
        lmRegular: ["LemonMilkRegular", ...fontFamily.sans],
        lmMedium: ["LemonMilkMedium", ...fontFamily.sans],
        lmBold: ["LemonMilkBold", ...fontFamily.sans],
      },

      screens: {
        sm: "480px",
        sm3: "640px",
        md: "768px",
        lg: "870px",
      },

      content: { onimiseaIconLarge: "url('public/onimiseaIconLarge.png')" },

      backgroundImage: (theme) => ({
        "gradient-primsec-f":
          "linear-gradient(45deg, #051550 0%, #007FFF 100%)",
        "gradient-primsec-b":
          "linear-gradient(45deg, #007FFF 0%, #3219C8 100%)",
        "gradient-primsec-o":
          "linear-gradient(45deg, #007FFF 0%, #4da5ff 100%)",
        "gradient-primsec-i":
          "linear-gradient(145deg, #051550 0%, #3219c8 50%, #007FFF 100%)",
        "gradient-primsec-ir":
          "linear-gradient(145deg, #007FFF 0%, #3219c8 50%, #051550 100%)",
        // "mobile-home": "url('./assets/HomePageGraphic.png')",
      }),
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
