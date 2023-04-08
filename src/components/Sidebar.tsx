import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { MdClose } from "react-icons/md";
import Call2Action2 from "./Call2Action2";

type Props = {
  onClickOutside(): void;
  setIsMenuToggled(value: boolean): void;
  isMenuToggled: boolean;
};

const Sidebar = ({
  onClickOutside,
  setIsMenuToggled,
  isMenuToggled,
}: Props) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClickOutside && onClickOutside();
      }
    };

    document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [onClickOutside]);

  if (!isMenuToggled) return null;

  return (
    <aside
      ref={ref}
      className="fixed right-0 bottom-0 w-[200px] h-full bg-primary-500 dark:bg-primary-500 z-40 drop-shadow-xl"
    >
      <section className="text-2xl w-full duration-500 flex justify-end">
        <MdClose
          className="text-secondary-500 hover:text-primary-500 dark:text-secondary-500 dark:hover:text-tertiary-500 cursor-pointer mt-5 mr-9"
          onClick={() => setIsMenuToggled(!isMenuToggled)}
        />
      </section>

      <nav className={`w-full flex justify-center`}>
        <section className={`w-[70%] flex flex-col text-2xl`}>
          <Link
            href="/"
            className={`px-4 py-1 text-[16.5px] text-secondary-500 hover:text-gray-200 dark:text-secondary-500 dark:hover:text-gray-200 duration-500 cursor-pointer`}
          >
            Home
          </Link>
          <Link
            href="/"
            className={`px-4 py-1 text-[16.5px] text-secondary-500 hover:text-gray-200 dark:text-secondary-500 dark:hover:text-gray-200 duration-500 cursor-pointer`}
          >
            About
          </Link>
          <Link
            href="/"
            className={`px-4 py-1 text-[16.5px] text-secondary-500 hover:text-gray-200 dark:text-secondary-500 dark:hover:text-gray-200 duration-500 cursor-pointer`}
          >
            Portfolio
          </Link>
          <Link
            href="/"
            className={`px-4 py-1 text-[16.5px] text-secondary-500 hover:text-gray-200 dark:text-secondary-500 dark:hover:text-gray-200 duration-500 cursor-pointer`}
          >
            Contacts
          </Link>

          <section className={`w-fit px-4 mt-3`}>
            <Call2Action2 buttonText="CV" buttonType="secondary" />
          </section>
          <section className={`w-fit px-4 mt-6`}>
            <Call2Action2 buttonText="Hire Me" buttonType="primary" />
          </section>
        </section>
      </nav>
    </aside>
  );
};
export default Sidebar;
