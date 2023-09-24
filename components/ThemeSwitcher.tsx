// components/ThemeSwitcher.tsx
"use client";

import React, { useEffect } from "react";
import { useThemeContext } from "../contexts/ThemeContext";
import { IoIosMoon } from "react-icons/io";
import { BsFillSunFill } from "react-icons/bs";
import { Button } from "./ui/button";

function ThemeSwitcher() {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <Button
      variant="default"
      size="icon"
      className="rounded-full bg-gradient-to-tr from-[#3219c8] via-[#007fff] to-[#3219c8] p-[1px] border-none"
      onClick={toggleTheme}
    >
      <section className="bg-background dark:bg-background2 text-primary3 dark:text-primary2 w-full h-full rounded-full flex items-center justify-center hover:bg-gradient-to-bl from-[#3219c8] to-[#007fff] duration-500 hover:text-white hover:dark:text-white">
        {theme === "light" ? <IoIosMoon /> : <BsFillSunFill />}
      </section>
    </Button>
  );
}

export default ThemeSwitcher;
