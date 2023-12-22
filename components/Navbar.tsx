import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { ThemeSwitcher } from "./ThemeSwitcher";

const Navbar = () => {
  return (
    <header className="bg-white dark:bg-onimisea_bg_dark fixed top-0 z-40 w-full h-20 flex items-center justify-center">
      <section className="w-[80%] sm:w-[85%] md:w-[90%] mx-auto max-w-screen-2xl flex items-center justify-between text-md font-[600]">
        <Link href="/">
          <h1 className="uppercase text-3xl font-milkbold bg-gradient-to-r from-[#3219c8] via-[#007fff] to-[#3219c8] dark:from-[#3219c8] dark:via-[#ffb500] dark:to-[#3219c8] text-transparent bg-clip-text tracking-widest">
            onimisea
          </h1>
        </Link>

        <ul className="hidden md:flex items-center justify-center gap-x-6">
          <li className="duration-300 text-onimisea_primary_light dark:text-onimisea_accent hover:text-onimisea_secondary_light dark:hover:text-onimisea_primary_light">
            <Link href="/">Home</Link>
          </li>
          <li className="duration-300 text-onimisea_primary_light dark:text-onimisea_accent hover:text-onimisea_secondary_light dark:hover:text-onimisea_primary_light">
            <Link href="">About</Link>
          </li>
          <li className="duration-300 text-onimisea_primary_light dark:text-onimisea_accent hover:text-onimisea_secondary_light dark:hover:text-onimisea_primary_light">
            <Link href="">Portfolio</Link>
          </li>
          <li className="duration-300 text-onimisea_primary_light dark:text-onimisea_accent hover:text-onimisea_secondary_light dark:hover:text-onimisea_primary_light">
            <Link href="">Contacts</Link>
          </li>
        </ul>

        <section className="flex items-center justify-center gap-x-3 relative">
          <Button
            variant="default"
            size="sm"
            className="rounded-full bg-gradient-to-tr from-onimisea_primary_light via-onimisea_secondary_light to-onimisea_primary_light border-none relative p-[1px] hidden sm:flex dark:from-[#3219c8] dark:via-[#ffb500] dark:to-[#3219c8]"
          >
            <section className="bg-white hover:bg-gradient-to-tr hover:from-onimisea_primary_light hover:to-onimisea_secondary_light text-onimisea_primary_light hover:text-white dark:bg-onimisea_bg_dark dark:text-onimisea_accent w-full h-full flex items-center justify-center rounded-full px-3 duration-500 dark:hover:from-transparent dark:hover:via-transparent dark:hover:to-transparent dark:hover:text-onimisea_text_light dark:hover:bg-onimisea_accent dark:hover:font-bold ">
              CV
            </section>
          </Button>

          <Button
            variant="default"
            size="sm"
            className="rounded-full bg-onimisea_primary_light border-none text-white hover:bg-onimisea_secondary_light duration-500 hidden sm:flex font-bold px-8 dark:bg-onimisea_accent dark:text-onimisea_text_light hover:dark:bg-onimisea_primary_light hover:dark:text-white"
          >
            Hire Me
          </Button>

          <section className="hidden sm:flex">
            <ThemeSwitcher />
          </section>
        </section>

        <Button
          variant="default"
          size="icon"
          className="rounded-full bg-gradient-to-tr from-[#3219c8] via-[#007fff] to-[#3219c8] p-[1px] border-none md:hidden"
        >
          <section className="bg-background dark:bg-background2 text-primary3 dark:text-primary2 w-full h-full rounded-full flex items-center justify-center hover:bg-gradient-to-bl from-[#3219c8] to-[#007fff] duration-500 hover:text-white hover:dark:text-white">
            <Menu />
          </section>
        </Button>
      </section>
    </header>
  );
};

export default Navbar;
