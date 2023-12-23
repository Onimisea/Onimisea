"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ThemeSwitcher() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <section className="rounded-full bg-gradient-to-tr border-none relative p-[1px] hidden sm2:flex from-[#3219c8] via-[#ffb500] to-[#3219c8] hover:bg-transparent hover:from-transparent hover:via-transparent hover:to-transparent">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full bg-white hover:from-onimisea_primary_light hover:to-onimisea_secondary_light text-onimisea_primary_light hover:text-white dark:bg-onimisea_bg_dark dark:text-onimisea_accent dark:hover:from-transparent dark:hover:via-transparent dark:hover:to-transparent dark:hover:text-onimisea_text_light dark:hover:bg-onimisea_accent hover:font-bold hover:bg-onimisea_accent"
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </section>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className=" dark:bg-onimisea_accent dark:text-onimisea_text_light dark:font-bold">
        <DropdownMenuItem onClick={() => setTheme("light")} className="focus:bg-onimisea_accent focus:text-white hover:bg-onimisea_text_light hover:text-white hover-font-bold focus:font-bold dark:hover:focus:bg-onimisea_text_light dark:focus:focus:bg-onimisea_text_light">
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")} className="focus:bg-onimisea_accent focus:text-white hover:bg-onimisea_text_light hover:text-white hover-font-bold focus:font-bold dark:hover:focus:bg-onimisea_text_light dark:focus:focus:bg-onimisea_text_light">
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")} className="focus:bg-onimisea_accent focus:text-white hover:bg-onimisea_text_light hover:text-white hover-font-bold focus:font-bold dark:hover:focus:bg-onimisea_text_light dark:focus:focus:bg-onimisea_text_light">
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
