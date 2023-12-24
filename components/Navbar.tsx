"use client";

import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { motion, AnimatePresence } from "framer-motion";
import { useAppStore } from "@/store";

const Navbar = () => {
  // const [mobileNav, toggleMobileNav] = useCycle(false, true);

  const MotionButton = motion(Button);

  const [mobileNav, toggleMobileNav] = useAppStore((state) => [
    state.mobileNav,
    state.toggleMobileNav,
  ]);

  return (
    <header className="bg-[#fcfcfc] dark:bg-onimisea_bg_dark fixed top-0 z-30 w-full h-20 flex items-center justify-center">
      <section className="w-[80%] sm:w-[85%] md:w-[90%] mx-auto max-w-screen-2xl flex items-center justify-between text-md">
        <Link href="/">
          <h1 className="uppercase text-3xl font-milkbold bg-gradient-to-r from-[#3219c8] via-[#ffb500] to-[#3219c8] text-transparent bg-clip-text tracking-widest">
            onimisea
          </h1>
        </Link>

        <ul className="hidden md2:flex items-center justify-center gap-x-6">
          <li className="duration-500 text-onimisea_primary_light dark:text-onimisea_accent hover:text-onimisea_accent dark:hover:text-onimisea_primary_light">
            <Link href="/">Home</Link>
          </li>
          <li className="duration-500 text-onimisea_primary_light dark:text-onimisea_accent hover:text-onimisea_accent dark:hover:text-onimisea_primary_light">
            <Link href="">About</Link>
          </li>
          <li className="duration-500 text-onimisea_primary_light dark:text-onimisea_accent hover:text-onimisea_accent dark:hover:text-onimisea_primary_light">
            <Link href="">Portfolio</Link>
          </li>
          <li className="duration-500 text-onimisea_primary_light dark:text-onimisea_accent hover:text-onimisea_accent dark:hover:text-onimisea_primary_light">
            <Link href="">Contacts</Link>
          </li>
        </ul>

        <section className="flex items-center justify-center gap-x-3 relative">
          <Button
            variant="default"
            size="sm"
            className="rounded-full bg-gradient-to-tr border-none relative p-[1px] hidden sm:flex from-[#3219c8] via-[#ffb500] to-[#3219c8] hover:bg-transparent hover:from-transparent hover:via-transparent hover:to-transparent"
          >
            <section className="bg-[#fafafa] hover:bg-onimisea_accent hover:from-onimisea_primary_light hover:to-onimisea_secondary_light text-onimisea_primary_light hover:text-white dark:bg-onimisea_bg_dark dark:text-onimisea_accent w-full h-full flex items-center justify-center rounded-full px-3 duration-500 dark:hover:from-transparent dark:hover:via-transparent dark:hover:to-transparent dark:hover:text-onimisea_text_light dark:hover:bg-onimisea_accent hover:font-bold ">
              CV
            </section>
          </Button>

          <Button
            variant="default"
            size="sm"
            className="rounded-full bg-onimisea_accent border-none text-white hover:bg-onimisea_primary_light duration-500 hidden sm2:flex font-bold px-8 dark:bg-onimisea_accent dark:text-onimisea_text_light hover:dark:bg-onimisea_primary_light hover:dark:text-white"
          >
            Hire Me
          </Button>

          <section className="hidden xs:flex">
            <ThemeSwitcher />
          </section>
        </section>

        <AnimatePresence>
          <MotionButton
            variant="default"
            size="sm"
            className={`rounded-full bg-gradient-to-tr border-none relative p-[1px] flex md2:hidden from-[#3219c8] via-[#ffb500] to-[#3219c8] hover:bg-transparent hover:from-transparent hover:via-transparent hover:to-transparent dark:from-[#3219c8] dark:via-[#ffb500] dark:to-[#3219c8] w-[40px] h-[40px] ${mobileNav ? "opacity-0" : "opacity-100"} duration-300`}
            onClick={() => toggleMobileNav(!mobileNav)}
            variants={{
              hide: { x:"-1000%", opacity: 0, transition: { duration: 0.5 } },
              show: { x:"0%", opacity: 1, transition: { duration: 0.5 } },
            }}
            initial="show"
            animate={mobileNav ? "hide" : "show"}
          >
            <motion.section
              className="bg-[#fafafa] hover:bg-onimisea_accent hover:from-onimisea_primary_light hover:to-onimisea_secondary_light text-onimisea_primary_light hover:text-white dark:bg-onimisea_bg_dark dark:text-onimisea_accent w-full h-full flex flex-col items-center justify-center gap-1 rounded-full duration-500 dark:hover:from-transparent dark:hover:via-transparent dark:hover:to-transparent dark:hover:text-onimisea_text_light dark:hover:bg-onimisea_accent hover:font-bold group"
              animate={mobileNav ? "open" : "closed"}
            >
              <motion.span
                className="w-4 h-px bg-onimisea_accent group-hover:bg-onimisea_text_light  block"
                variants={{
                  closed: { rotate: 0, y: 0, transition: { duration: 0.5 } },
                  open: { rotate: 45, y: 5, transition: { duration: 0.5 } },
                }}
              ></motion.span>
              <motion.span
                className="w-4 h-px bg-onimisea_accent group-hover:bg-onimisea_text_light  block"
                variants={{
                  closed: { opacity: 1, transition: { duration: 0.3 } },
                  open: { opacity: 0, transition: { duration: 0.3 } },
                }}
              ></motion.span>
              <motion.span
                className="w-4 h-px bg-onimisea_accent group-hover:bg-onimisea_text_light  block"
                variants={{
                  closed: { rotate: 0, transition: { duration: 0.5 } },
                  open: { rotate: -45, y: -5, transition: { duration: 0.5 } },
                }}
              ></motion.span>
            </motion.section>
          </MotionButton>
        </AnimatePresence>
      </section>
    </header>
  );
};

export default Navbar;
