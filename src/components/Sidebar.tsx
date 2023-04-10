import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { MdClose } from "react-icons/md";
import Call2Action2 from "./Call2Action2";
import { useRouter } from "next/router";
import { NavLink } from "@/shared/types";

type Props = {
  onClickOutside(): void;
  setIsMenuToggled(value: boolean): void;
  isMenuToggled: boolean;
  pages: NavLink[];
};

const Sidebar = ({
  onClickOutside,
  setIsMenuToggled,
  isMenuToggled,
  pages,
}: Props) => {
  const ref = useRef<HTMLElement>(null);
  const router = useRouter();

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
      className="fixed right-0 bottom-0 w-[200px] h-full bg-primary-500 dark:bg-primary-500 z-40 drop-shadow-xl shadow-secondary-500 lg:hidden"
    >
      <section className="text-2xl w-full duration-500 flex justify-end">
        <MdClose
          className="text-secondary-500 hover:text-gray-200 dark:text-secondary-500 dark:hover:text-gray-200 cursor-pointer mt-5 mr-9"
          onClick={() => setIsMenuToggled(!isMenuToggled)}
        />
      </section>

      <nav className={`w-full flex justify-center`}>
        <section className={`w-[70%] flex flex-col text-lg gap-4`}>
          {pages.map((p) => (
            <Link
              key={p.id}
              href={p.href}
              className={`px-4 py-1 text-[16.5px duration-500 cursor-pointer ${
                p.active
                  ? "text-gray-200 hover:text-tertiary-500 dark:text-gray-200 dark:hover:text-tertiary-500"
                  : "text-secondary-500 hover:text-gray-200 dark:text-secondary-500 dark:hover:text-gray-200"
              }`}
            >
              {p.name}
            </Link>
          ))}

          <section className={`w-fit px-4 `}>
            <Call2Action2 buttonText="CV" buttonType="secondary" />
          </section>
          <section className={`w-fit px-4 `}>
            <Call2Action2 buttonText="Hire Me" buttonType="primary" />
          </section>
        </section>
      </nav>
    </aside>
  );
};
export default Sidebar;
