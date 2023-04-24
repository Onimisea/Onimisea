import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { HiMoon, HiSun, HiOutlineMenuAlt4 } from "react-icons/hi";
import Call2Action from "./Call2Action";
import Sidebar from "./Sidebar";
import { useRouter } from "next/router";
import { NavLink } from "@/shared/types";
import LogoutBtn from "./LogoutBtn";

type Props = {};

const AdminHeader = (props: Props) => {
  const router = useRouter();

  const { systemTheme, theme, setTheme } = useTheme();
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuToggled, setIsMenuToggled] = useState(false);

  const [pages, setPages] = useState<NavLink[]>([]);

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
      
    }
  }, []);

  return (
    <header
      className={`w-[100%] h-[60px] sticky top-0 left-0 z-30 bg-white dark:bg-dark`}
    >
      <section className="w-[90%] h-full mx-auto flex items-center justify-between">
        <section className="w-fit">
          <Link href="/">
            <h1 className="font-lmMedium text-3xl">Onimisea</h1>
          </Link>
        </section>


        <section className={`w-fit flex items-center justify-between`}>
          <LogoutBtn />

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

        {/* <button
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
        )} */}
      </section>
    </header>
  );
};
export default AdminHeader;
