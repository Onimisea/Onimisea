"use client";

import React, { useEffect, useState } from "react";
import { IoIosMoon } from "react-icons/io";
import { BsFillSunFill } from "react-icons/bs";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";

function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const { theme, setTheme } = useTheme();

  // Toggle between light and dark theme
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme); // Store theme in localStorage
  };

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     setLoaded(true);
  //   }
  // }, []);

  return (
    <Button
      variant="default"
      size="icon"
      className="rounded-full bg-gradient-to-tr from-onimisea_primary_light via-onimisea_secondary_light to-onimisea_primary_light p-[1px] border-none"
      onClick={toggleTheme}
    >
      <section className="bg-white dark:bg-background2 text-onimisea_primary_light dark:text-primary2 w-full h-full rounded-full flex items-center justify-center hover:bg-gradient-to-bl from-onimisea_primary_light to-onimisea_secondary_light duration-500 hover:text-white hover:dark:text-white">
        {loaded && theme === "light" ? <IoIosMoon /> : <BsFillSunFill />}
      </section>
    </Button>
  );
}

export default ThemeSwitcher;
