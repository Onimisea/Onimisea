import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { MdClose } from "react-icons/md";
import Call2Action2 from "./Call2Action2";
import { useRouter } from "next/router";
import { NavLink } from "@/shared/types";

type Props = {
  onClickOutside(): void;
  setIsAdminSidebarMenuToggled(value: boolean): void;
  isAdminSidebarMenuToggled: boolean;
  adminPages: NavLink[];
};

const AdminSidebar = ({
  onClickOutside,
  setIsAdminSidebarMenuToggled,
  isAdminSidebarMenuToggled,
  adminPages,
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

  // if (!isAdminSidebarMenuToggled) {
  //   return null
  // } else {

  // }

  return (
    <aside
      ref={ref}
      className={`${
        isAdminSidebarMenuToggled ? "w-[250px]" : "w-fit"
      } h-full bg-white dark:bg-dark z-20 drop-shadow-xl shadow-secondary-500 mr-5 sm3:mr-10`}
    >
      <nav
        className={`w-full mx-auto flex flex-col text-lg ${
          isAdminSidebarMenuToggled ? "p-4" : "px-0 py-4"
        } `}
      >
        {adminPages.map((p) => (
          <Link
            key={p.id}
            href={p.href}
            className={`px-4 py-1 my-1 text-[16.5px] duration-500 cursor-pointer w-full flex items-center group ${
              p.active
                ? "text-secondary-500 hover:text-tertiary-500 dark:text-gray-200 dark:hover:text-tertiary-500"
                : "text-primary-500 hover:text-secondary-500 dark:text-secondary-500 dark:hover:text-gray-200"
            }`}
          >
            <span
              className={`${
                isAdminSidebarMenuToggled ? "mr-3" : "mr-0"
              } bg-tertiary-500 text-white rounded-full flex items-center justify-center w-[30px] h-[30px] shadow-md drop-shadow-md ${
                p.active
                  ? "text-[14px] bg-secondary-500 group-hover:bg-tertiary-500"
                  : "text-[12px] group-hover:bg-secondary-500"
              }`}
            >
              {p.name.charAt(0)}
            </span>

            {isAdminSidebarMenuToggled && <span className="">{p.name}</span>}
          </Link>
        ))}
      </nav>
    </aside>
  );
};
export default AdminSidebar;
