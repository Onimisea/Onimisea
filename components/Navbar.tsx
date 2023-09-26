import React from "react";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import Link from "next/link";
import { LuMenu } from "react-icons/lu";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="bg-background text-primary3 dark:bg-background2 dark:text-primary2 fixed top-0 z-40 w-full">
      <section className="w-[80%] sm:w-[85%] md:w-[90%] mx-auto max-w-screen-2xl flex items-center justify-between py-4 text-md font-[600]">
        <Link href="/">
          <h1 className="text-2xl font-milkbold bg-gradient-to-r from-[#3219c8] via-[#007fff] to-[#3219c8] text-transparent bg-clip-text tracking-widest">
            onimisea
          </h1>
        </Link>

        <ul className="hidden md:flex items-center justify-center gap-x-6">
          <li className="bg-gradient-to-r from-[#3219c8] via-[#007fff] to-[#3219c8] text-transparent bg-clip-text cursor-pointer duration-500 hover:text-[#3219c8] dark:text-primary2 dark:hover:text-slate-300">
            <Link href="/">Home</Link>
          </li>
          <li className="bg-gradient-to-r from-[#3219c8] via-[#007fff] to-[#3219c8] text-transparent bg-clip-text cursor-pointer duration-500 hover:text-[#3219c8] dark:text-primary2 dark:hover:text-slate-300">
            <Link href="">About</Link>
          </li>
          <li className="bg-gradient-to-r from-[#3219c8] via-[#007fff] to-[#3219c8] text-transparent bg-clip-text cursor-pointer duration-500 hover:text-[#3219c8] dark:text-primary2 dark:hover:text-slate-300">
            <Link href="">Portfolio</Link>
          </li>
          <li className="bg-gradient-to-r from-[#3219c8] via-[#007fff] to-[#3219c8] text-transparent bg-clip-text cursor-pointer duration-500 hover:text-[#3219c8] dark:text-primary2 dark:hover:text-slate-300">
            <Link href="">Contacts</Link>
          </li>
        </ul>

        <section className="flex items-center justify-center gap-x-3 relative">
          <Button
            variant="default"
            size="sm"
            className="rounded-full bg-gradient-to-tr from-[#3219c8] via-[#007fff] to-[#3219c8] border-none relative p-[1px] hidden sm:flex"
          >
            <section className="bg-background dark:bg-background2 text-primary3 dark:text-primary2 w-full h-full flex items-center justify-center rounded-full px-3 hover:bg-gradient-to-bl from-[#3219c8] to-[#007fff] duration-500 hover:text-white hover:dark:text-white">
              CV
            </section>
          </Button>

          <Button
            variant="default"
            size="sm"
            className="rounded-full bg-gradient-to-tr from-[#3219c8] to-[#007fff] border-none text-white hover:bg-gradient-to-bl duration-500 hidden sm:flex"
          >
            Hire Me
          </Button>

          <ThemeSwitcher />
        </section>

        <Button
          variant="default"
          size="icon"
          className="rounded-full bg-gradient-to-tr from-[#3219c8] via-[#007fff] to-[#3219c8] p-[1px] border-none md:hidden"
        >
          <section className="bg-background dark:bg-background2 text-primary3 dark:text-primary2 w-full h-full rounded-full flex items-center justify-center hover:bg-gradient-to-bl from-[#3219c8] to-[#007fff] duration-500 hover:text-white hover:dark:text-white">
            <LuMenu />
          </section>
        </Button>
      </section>
    </nav>
  );
};

export default Navbar;
