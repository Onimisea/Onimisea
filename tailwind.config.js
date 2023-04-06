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
  theme: {
    extend: {
      fontFamily: {
        p22: ["var(--p22-font)", ...fontFamily.sans],
        lm: ["var(--lm-font)", ...fontFamily.sans],
        lm2: ["var(--lm2-font)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
