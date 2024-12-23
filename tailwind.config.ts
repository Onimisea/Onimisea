/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        sm2: "568px",
        sm3: "640px",
        md: "768px",
        md2: "840px",
        lg: "960px",
        xl: "1280px",
        "2xl": "1440px",
        "3xl": "1600px",
        "4xl": "1920px",
        "5xl": "2560px",
      },
      fontFamily: {
        probook: ["var(--probook)"],
        promed: ["var(--promed)"],
        milkmed: ["var(--milkmed)"],
        milkbold: ["var(--milkbold)"],
      },
      zIndex: {
        "45": "45",
        "50": "50",
        "55": "55",
        "60": "60",
        "65": "65",
        "70": "70",
        "75": "75",
        "80": "80",
        "85": "85",
        "90": "90",
        "95": "95",
      },
      backgroundImage: {
        hero: "url('/grid.png')",
        scoop_bg: "url('/projects/lockedin.png')",
        client_bg: "url('/client2.jpg')",
        hero_grd:
          "linear-gradient(to right top, rgba(0, 3, 25, 0.1), rgba(5, 21, 80, 0.5), rgba(0, 3, 25, 0.1))",
        black_transparent: "linear-gradient(to top right, #000319, rgba(0, 0, 0, 0.7))",
        onimisea_grd: "linear-gradient(to right, #3219c8, #F2AC00, #3219c8);",
        onimisea_grd_rev:
          "linear-gradient(to right, #F2AC00, #3219c8, #F2AC00);",
        onimisea_text_grd: "linear-gradient(90deg, #3219c8, #F2AC00)",
        onimisea_text_grd_rev: "linear-gradient(90deg, #F2AC00, #3219c8)",
        onimisea_text_grd2: "linear-gradient(90deg, #3219c8, #F2AC00, #3219c8)",
        onimisea_text_grd2_rev:
          "linear-gradient(90deg, #F2AC00, #3219c8, #F2AC00)",
      },
      colors: {
        onimisea_text_light: "#051550",
        onimisea_primary_light: "#3219c8",
        onimisea_secondary_light: "#007fff",
        onimisea_accent: "#F2AC00",
        onimisea_gray_light: "#dedede",
        onimisea_bg_dark: "#00081C",

        black: {
          DEFAULT: "#000",
          100: "#000319",
          200: "rgba(17, 25, 40, 0.75)",
          300: "rgba(255, 255, 255, 0.125)",
        },
        white: {
          DEFAULT: "#FFF",
          100: "#BEC1DD",
          200: "#C1C2D3",
        },
        blue: {
          "100": "#E4ECFF",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
        moveHorizontal: {
          "0%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
          "50%": {
            transform: "translateX(50%) translateY(10%)",
          },
          "100%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
        },
        moveInCircle: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotate(180deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        moveVertical: {
          "0%": {
            transform: "translateY(-50%)",
          },
          "50%": {
            transform: "translateY(50%)",
          },
          "100%": {
            transform: "translateY(-50%)",
          },
        },
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
        spinXY: {
          "0%": { transform: "rotateX(0deg) rotateY(0deg)" },
          "100%": { transform: "rotateX(360deg) rotateY(360deg)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        spotlight: "spotlight 2s ease .75s 1 forwards",
        shimmer: "shimmer 2s linear infinite",
        first: "moveVertical 30s ease infinite",
        second: "moveInCircle 20s reverse infinite",
        third: "moveInCircle 40s linear infinite",
        fourth: "moveHorizontal 40s ease infinite",
        fifth: "moveInCircle 20s ease infinite",
        spinXY: "spinXY 20s linear infinite",
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
