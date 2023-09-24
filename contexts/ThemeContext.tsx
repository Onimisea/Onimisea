// contexts/ThemeContext.tsx
"use client";

import React, {
  createContext,
  useContext,
  ReactNode,
  useEffect,
  useState,
} from "react";
import { ThemeProvider, useTheme } from "next-themes";

// Define the type for your theme context
type ThemeContextType = {
  theme: string;
  toggleTheme: () => void;
};

// Create a new context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Create a provider component
type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeProviderWrapper: React.FC<ThemeProviderProps> = ({
  children,
}) => {
  const [theme, setTheme] = useState<string>("light"); // Default theme
  const { resolvedTheme, setTheme: setNextTheme } = useTheme();

  // Load theme from localStorage (if available)
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  // Toggle between light and dark theme
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    setNextTheme(newTheme);
    localStorage.setItem("theme", newTheme); // Store theme in localStorage
    location.reload();
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider defaultTheme={theme} attribute="class">
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

// Create a custom hook for using the context
export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error(
      "useThemeContext must be used within a ThemeProviderWrapper"
    );
  }
  return context;
};
