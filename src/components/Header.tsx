import { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { HiMoon, HiSun, HiOutlineMenuAlt4 } from "react-icons/hi";

import Call2Action from "./Call2Action";

type Props = {};
const Header = (props: Props) => {
  const { systemTheme, theme, setTheme } = useTheme();
  
  const [darkMode, setDarkMode] = useState(false);

  const flexBetween = "flex items-center justify-between";

useEffect(()=>{
const currentTheme = theme === "system" ? systemTheme : theme;

alert(JSON.stringify(currentTheme));
alert(JSON.stringify(systemTheme));
alert(JSON.stringify(theme));
}, [systemTheme, theme, setTheme]);

  

  return (
    <nav
      className={`w-[100%] h-[60px] ${flexBetween} sticky top-0 left-0 z-30 bg-white`}
    >
      <section className="w-fit">
        <Link href="/">
          <h1 className="font-lmMedium text-3xl">Onimisea</h1>
        </Link>
      </section>

      <section className={`w-fit hidden lg:flex ${flexBetween} `}>
        <section className={`w-full ${flexBetween}`}>
          <Link
            href="/"
            className={`px-4 py-1 text-[16.5px] hover:text-secondary-500 duration-500 cursor-pointer`}
          >
            Home
          </Link>
          <Link
            href="/"
            className={`px-4 py-1 text-[16.5px] hover:text-secondary-500 duration-500 cursor-pointer`}
          >
            About
          </Link>
          <Link
            href="/"
            className={`px-4 py-1 text-[16.5px] hover:text-secondary-500 duration-500 cursor-pointer`}
          >
            Portfolio
          </Link>
          <Link
            href="/"
            className={`px-4 py-1 text-[16.5px] hover:text-secondary-500 duration-500 cursor-pointer`}
          >
            Contacts
          </Link>
        </section>

        <section className="w-fit hidden"></section>
      </section>

      <section className={`w-fit ${flexBetween}`}>
        <Call2Action buttonText="CV" buttonType="secondary" />
        <Call2Action buttonText="Hire Me" buttonType="primary" />

        {darkMode ? (
          <section className="text-xl text-white hover:text-secondary-500 cursor-pointer w-fit duration-500 ml-7">
            <HiMoon />
          </section>
        ) : (
          <section className="text-xl text-primary-500 hover:text-secondary-500 cursor-pointer w-fit duration-500 ml-7">
            <HiSun />
          </section>
        )}
      </section>

<section className="text-2xl text-secondary-500 hover:text-primary-500 cursor-pointer w-fit duration-500 ml-7 flex lg:hidden">
            <HiOutlineMenuAlt4 />
          </section>
    </nav>
  );
};
export default Header;
