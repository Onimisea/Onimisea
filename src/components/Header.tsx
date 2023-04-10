import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { HiMoon, HiSun, HiOutlineMenuAlt4 } from "react-icons/hi";
import Call2Action from "./Call2Action";
import Sidebar from "./Sidebar";
import { useRouter } from "next/router";
import { NavLink } from "@/shared/types";

type Props = {};

const Header = (props: Props) => {
  const router = useRouter();

  const { systemTheme, theme, setTheme } = useTheme();
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuToggled, setIsMenuToggled] = useState(false);

  const [pages, setPages] = useState<NavLink[]>([]);

  const flexBetween = "flex items-center justify-between";

  useEffect(() => {}, [router.isReady, router.asPath]);

  useEffect(() => {
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, [systemTheme, theme, setTheme, setDarkMode]);

  useEffect(() => {
    if (typeof window !== undefined || typeof window !== null) {
      if (router.route) {
        setPages([
          {
            id: 1,
            name: "Home",
            href: "/",
            active: router.route === "/" ? true : false,
          },
          {
            id: 2,
            name: "About",
            href: "/about",
            active: router.route === "/about" ? true : false,
          },
          {
            id: 3,
            name: "Portfolio",
            href: "/portfolio",
            active: router.route === "/portfolio" ? true : false,
          },
          {
            id: 4,
            name: "Contacts",
            href: "/contacts",
            active: router.route === "/contacts" ? true : false,
          },
        ]);
      }
    }
  }, [router.isReady, router.route]);

  return (
    <header
      className={`w-[100%] h-[60px] ${flexBetween} sticky top-0 left-0 z-30 bg-white dark:bg-dark`}
    >
      <section className="w-fit">
        <Link href="/">
          <h1 className="font-lmMedium text-3xl">Onimisea</h1>
        </Link>
      </section>

      <nav className={`w-fit hidden lg:flex ${flexBetween} `}>
        {pages.map((p) => (
          <Link
            key={p.id}
            href={p.href}
            className={`px-4 py-1 text-[16.5px duration-500 cursor-pointer ${
              p.active
                ? "text-secondary-500 hover:text-tertiary-500 dark:text-gray-200 dark:hover:text-tertiary-500"
                : "hover:text-secondary-500 dark:text-secondary-500 dark:hover:text-gray-200"
            }`}
          >
            {p.name}
          </Link>
        ))}
      </nav>

      <section className={`w-fit ${flexBetween}`}>
        <Call2Action buttonText="CV" buttonType="secondary" />
        <Call2Action buttonText="Hire Me" buttonType="primary" />

        {darkMode ? (
          <button
            className="text-xl text-white dark:text-secondary-500 dark:hover:text-gray-200 hover:text-secondary-500 cursor-pointer w-fit duration-500 ml-7"
            onClick={() => setTheme("light")}
          >
            <HiSun />
          </button>
        ) : (
          <button
            className="text-xl text-primary-500 hover:text-secondary-500 dark:text-secondary-500 dark:hover:text-gray-200 cursor-pointer w-fit duration-500 ml-7"
            onClick={() => setTheme("dark")}
          >
            <HiMoon />
          </button>
        )}
      </section>

      <button
        className="text-2xl text-primary-500 hover:text-secondary-500 dark:text-secondary-500 dark:hover:text-gray-200 cursor-pointer w-fit duration-500 ml-7 flex lg:hidden"
        onClick={() => setIsMenuToggled(!isMenuToggled)}
      >
        <HiOutlineMenuAlt4 />
      </button>

      {isMenuToggled && (
        <Sidebar
          onClickOutside={() => {
            setIsMenuToggled(false);
          }}
          isMenuToggled={isMenuToggled}
          setIsMenuToggled={setIsMenuToggled}
          pages={pages}
        />
      )}
    </header>
  );
};
export default Header;
