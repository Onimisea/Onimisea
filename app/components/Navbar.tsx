"use client";

import { Code, Contact, House, MessagesSquare, UserPen } from "lucide-react";
import Link from "next/link";
import { cloneElement, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const links = [
  { href: "/", label: "Home", icon: <House /> },
  { href: "/#about", label: "About", icon: <UserPen /> },
  { href: "/#projects", label: "Projects", icon: <Code /> },
  { href: "/#testimonials", label: "Testimonials", icon: <MessagesSquare /> },
  { href: "/#contact", label: "Contact", icon: <Contact /> },
];

export function Navbar() {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const prevScrollY = useRef(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (
        prevScrollY.current <= 20 ||
        window.scrollY <= 20 ||
        window.scrollY > prevScrollY.current
      ) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      prevScrollY.current = lastScrollY;
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <motion.nav
      className={`bg-[#151930] rounded-lg items-center justify-center overflow-hidden space-x-8 sm2:space-x-4 md:space-x-8 px-8 sm2:px-4 md:px-8 top-10 transition-transform fixed z-10 flex text-[16px] md:text-[18px]`}
      initial={{ display: "none", opacity: 0, y: 20 }}
      animate={
        isVisible
          ? { display: "flex", opacity: 1, y: 0 }
          : { display: "none", opacity: 0, y: 20 }
      }
      transition={{
        duration: 0.8,
        ease: "easeInOut",
      }}
      style={{
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        opacity: isVisible ? 1 : 0,
        transition: "transform 0.8s ease-in-out, opacity 0.8s ease-in-out",
      }}
    >
      {links.map(({ href, label, icon }, index) => (
        <Link
          key={index}
          href={href}
          className="rounded-lg bg-transparent hover:text-onimisea_accent flex items-center justify-center duration-500 py-4 gap-2"
          aria-label={label} // ARIA label for screen readers
          role="button" // Define the role for better semantics
          tabIndex={0} // Ensure keyboard navigation
        >
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                {cloneElement(icon, {
                  className: "text-[16px] md:text-[18px]",
                })}
              </TooltipTrigger>
              <TooltipContent className="bg-black rounded-lg text-onimisea_accent">
                <p>{label}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <span className="leading-none mt-1 hidden sm2:flex">{label}</span>
        </Link>
      ))}
    </motion.nav>
  );
}
