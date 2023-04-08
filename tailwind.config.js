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
      fontSize: {
        h1_d: `2.125rem;`,
        h1_t: `2rem;`,
        h1_m: `1.5rem;`,

        h2_d: `1.875rem;`,
        h2_t: `1.5rem;`,
        h2_m: `1.125rem;`,

        h3_d: `1.5rem;`,
        h3_t: `1.25rem;`,
        h3_m: `1.125rem;`,

        h4_d: `1.25rem;`,
        h4_t: `1.125rem;`,
        h4_m: `1rem;`,

        h5_d: `1.125rem;`,
        h5_t: `1rem;`,
        h5_m: `0.85rem;`,
      },

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
        p22Regular: ["p22Regular", ...fontFamily.sans],
        p22Bold: ["p22Bold", ...fontFamily.sans],
        lmLight: ["LemonMilkLight", ...fontFamily.sans],
        lmRegular: ["LemonMilkRegular", ...fontFamily.sans],
        lmMedium: ["LemonMilkMedium", ...fontFamily.sans],
        lmBold: ["LemonMilkBold", ...fontFamily.sans],
      },

      screens: {
        sm: "480px",
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
        // "mobile-home": "url('./assets/HomePageGraphic.png')",
      }),
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
