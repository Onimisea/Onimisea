"use client";

import { debounce } from "@/lib/utils";
import {
  Code,
  Contact,
  Mouse as House,
  MessagesSquare,
  User as UserPen,
} from "lucide-react";
import Link from "next/link";
import {
  cloneElement,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  memo,
  ReactElement,
  SVGProps,
} from "react";

const SCROLL_THRESHOLD = 20;

const fallbackDebounce = <T extends (...args: any[]) => void>(
  fn: T,
  delay: number
) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
};

const useScrollVisibility = () => {
  const [isVisible, setIsVisible] = useState(false);
  const prevScrollY = useRef(0);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;

    if (
      prevScrollY.current <= SCROLL_THRESHOLD ||
      currentScrollY <= SCROLL_THRESHOLD ||
      currentScrollY > prevScrollY.current
    ) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }

    prevScrollY.current = currentScrollY;
  }, []);

  // Use imported debounce or fallback
  const debouncedHandleScroll = useMemo(
    () =>
      debounce
        ? debounce(handleScroll, 100)
        : fallbackDebounce(handleScroll, 100),
    [handleScroll]
  );

  useEffect(() => {
    window.addEventListener("scroll", debouncedHandleScroll, { passive: true });
    return () => window.removeEventListener("scroll", debouncedHandleScroll);
  }, [debouncedHandleScroll]);

  return isVisible;
};

interface NavLinkProps {
  href: string;
  label: string;
  icon: ReactElement<SVGProps<SVGSVGElement>>; // Ensure `icon` is typed correctly
}

const NavLink = memo(({ href, label, icon }: NavLinkProps) => (
  <Link
    href={href}
    className="group relative flex items-center justify-center gap-2 px-2 sm3:px-4 py-3 text-gray-300 transition-colors duration-300 hover:text-white"
    aria-label={label}
    role="button"
    tabIndex={0}
  >
    <div className="absolute -top-10 scale-0 rounded bg-onms-accent px-3 py-1 text-sm text-onms-text-lt transition-transform group-hover:scale-100 block overflow-hidden p-0 m-0">
      <span className="block mt-1 leading-none">{label}</span>
    </div>
    {cloneElement(icon, {
      className:
        "h-4 w-4 transition-transform duration-300 group-hover:scale-110 group-hover:text-onms-accent",
      strokeWidth: 1.5,
    })}
    <span className="hidden text-sm font-medium sm2:block leading-none -mb-1 group-hover:text-onms-accent group-hover:font-semibold">
      {label}
    </span>
  </Link>
));

NavLink.displayName = "NavLink";

const links = [
  { href: "/", label: "Home", icon: <House /> },
  { href: "/#about", label: "About", icon: <UserPen /> },
  { href: "/#projects", label: "Projects", icon: <Code /> },
  { href: "/#testimonials", label: "Testimonials", icon: <MessagesSquare /> },
  { href: "/#contact", label: "Contact", icon: <Contact /> },
];

export function Navbar() {
  const isVisible = useScrollVisibility();
  const navLinks = useMemo(
    () => links.map((link, index) => <NavLink key={index} {...link} />),
    []
  );

  return (
    <nav
      className={`fixed left-1/2 top-12 z-50 -translate-x-1/2 transform rounded-full bg-onms-text-lt px-2 sm3:px-4 py-1 backdrop-blur-sm transition-all duration-300 ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-5 opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex items-center justify-center space-x-1">
        {navLinks}
      </div>
    </nav>
  );
}

export default Navbar;
