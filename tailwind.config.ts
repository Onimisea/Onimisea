/** @type {import('tailwindcss').Config} */
module.exports = {
  // darkMode: 'class',
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    screens: {
        "sm": "480px",
        "sm2": "568px",
        "md": "768px",
        "lg": "1024px",
        "xl": "1280px",
        "2xl": "1400px",
      },
    extend: {
      fontFamily: {
        probook: ['var(--probook)', 'sans-serif'],
        promedium: ['var(--promedium)', 'sans-serif'],
        milkmedium: ['var(--milkmedium)', 'sans-serif'],
        milkbold: ['var(--milkbold)', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        foreground: "hsl(var(--foreground))",
        background: "hsl(var(--background))",
        background2: "hsl(var(--background2))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        primary2: {
          DEFAULT: "hsl(var(--primary2))",
        },
        primary3: {
          DEFAULT: "hsl(var(--primary3))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(45deg, #3219c8, #007fff)',
        'gradient-primary-hover': 'linear-gradient(45deg, #007fff, #3219c8)',
        'gradient-primary-outline': 'linear-gradient(45deg, #3219c8, #007fff, #3219c8)',
        'gradient-primary-outline-hover': 'linear-gradient(45deg, #007fff, #3219c8, #007fff)',
        'gradient-tertiary': 'linear-gradient(45deg, #051550, #3219c8, #007fff)',
        'gradient-tertiary-hover': 'linear-gradient(45deg, #007fff,  #051550)',
        // Add more gradients as needed
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"), 
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}