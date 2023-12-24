"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";
import { BsFillEnvelopeAtFill, BsFacebook, BsGithub } from "react-icons/bs";
import { useAppStore } from "@/store";

const MobileMenu = () => {
  // const [mobileNav, toggleMobileNav] = useCycle(false, true);

  const [mobileNav, toggleMobileNav] = useAppStore((state) => [
    state.mobileNav,
    state.toggleMobileNav,
  ]);

  return (
    <section>
      <AnimatePresence>
        {mobileNav && (
          <motion.aside
            key="mobile-nav"
            className="w-full h-full fixed top-0 left-0 z-40"
          >
            <motion.section
              className="w-full h-full bg-onimisea_bg_dark opacity-95 z-45"
              variants={{
                closed: {
                  x: "-100%",
                  transition: { delay: 0.3, duration: 0.5 },
                },
                open: { x: "0%", transition: { duration: 0.4 } },
              }}
              animate="open"
              initial="closed"
              exit="closed"
            ></motion.section>

            <motion.section
              className="w-[300px] h-full bg-onimisea_text_light dark:bg-onimisea_text_light absolute top-0 left-0 z-50"
              variants={{
                closed: {
                  x: "-100%",
                  transition: { when: "afterChildren", duration: 0.5 },
                },
                open: {
                  x: "0%",
                  transition: {
                    delay: 0.3,
                    when: "beforeChildren",
                    duration: 0.5,
                  },
                },
              }}
              animate="open"
              initial="closed"
              exit="closed"
            >
              <section className="w-full flex items-center justify-end pt-5 pr-5">
                <motion.section
                  onClick={() => toggleMobileNav(!mobileNav)}
                  variants={{
                    hide: {
                      x: "10000%",
                      opacity: 0,
                      transition: { duration: 0.5 },
                    },
                    show: {
                      x: "0%",
                      opacity: 1,
                      transition: { duration: 0.5 },
                    },
                  }}
                  initial="hide"
                  animate={mobileNav ? "show" : "hide"}
                >
                  <Button
                    variant="default"
                    size="sm"
                    className={`rounded-full bg-gradient-to-tr border-none relative p-[1px] flex md2:hidden from-[#3219c8] via-[#ffb500] to-[#3219c8] hover:bg-transparent hover:from-transparent hover:via-transparent hover:to-transparent dark:from-[#3219c8] dark:via-[#ffb500] dark:to-[#3219c8] w-[40px] h-[40px] ${
                      mobileNav ? "opacity-100" : "opacity-0"
                    } duration-500`}
                  >
                    <motion.section
                      className="bg-onimisea_bg_dark text-onimisea_accent hover:bg-onimisea_accent hover:from-onimisea_primary_light hover:to-onimisea_secondary_light hover:text-white dark:bg-onimisea_bg_dark dark:text-onimisea_accent w-full h-full flex flex-col items-center justify-center gap-1 rounded-full duration-500 dark:hover:from-transparent dark:hover:via-transparent dark:hover:to-transparent dark:hover:text-onimisea_text_light dark:hover:bg-onimisea_accent hover:font-bold group"
                      animate={mobileNav ? "open" : "closed"}
                    >
                      <motion.span
                        className="w-4 h-px bg-onimisea_accent group-hover:bg-onimisea_text_light  block"
                        variants={{
                          closed: {
                            rotate: 0,
                            y: 0,
                            transition: { duration: 0.5 },
                          },
                          open: {
                            rotate: 45,
                            y: 5,
                            transition: { duration: 0.5 },
                          },
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
                          open: {
                            rotate: -45,
                            y: -5,
                            transition: { duration: 0.5 },
                          },
                        }}
                      ></motion.span>
                    </motion.section>
                  </Button>
                </motion.section>
              </section>

              <motion.section className="w-full flex flex-col p-8">
                <motion.ul
                  className="w-full flex flex-col items-start gap-4 text-onimisea_accent mt-2 mb-5"
                  variants={{
                    open: {
                      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
                    },
                    closed: {
                      transition: {
                        staggerChildren: 0.05,
                        staggerDirection: -1,
                      },
                    },
                  }}
                >
                  <motion.li
                    className=""
                    variants={{
                      open: {
                        y: 0,
                        opacity: 1,
                        transition: {
                          y: { stiffness: 1000, velocity: -100 },
                        },
                      },
                      closed: {
                        y: 50,
                        opacity: 0,
                        transition: {
                          y: { stiffness: 1000 },
                        },
                      },
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link href="" className="hover:text-white">
                      Web Development
                    </Link>
                  </motion.li>
                  <motion.li
                    className=""
                    variants={{
                      open: {
                        y: 0,
                        opacity: 1,
                        transition: {
                          y: { stiffness: 1000, velocity: -100 },
                        },
                      },
                      closed: {
                        y: 50,
                        opacity: 0,
                        transition: {
                          y: { stiffness: 1000 },
                        },
                      },
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link href="" className="hover:text-white">
                      AI Services
                    </Link>
                  </motion.li>
                  <motion.li
                    className=""
                    variants={{
                      open: {
                        y: 0,
                        opacity: 1,
                        transition: {
                          y: { stiffness: 1000, velocity: -100 },
                        },
                      },
                      closed: {
                        y: 50,
                        opacity: 0,
                        transition: {
                          y: { stiffness: 1000 },
                        },
                      },
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link href="" className="hover:text-white">
                      APIs
                    </Link>
                  </motion.li>
                  <motion.li
                    className=""
                    variants={{
                      open: {
                        y: 0,
                        opacity: 1,
                        transition: {
                          y: { stiffness: 1000, velocity: -100 },
                        },
                      },
                      closed: {
                        y: 50,
                        opacity: 0,
                        transition: {
                          y: { stiffness: 1000 },
                        },
                      },
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link href="" className="hover:text-white">
                      Domains
                    </Link>
                  </motion.li>
                  <motion.li
                    className=""
                    variants={{
                      open: {
                        y: 0,
                        opacity: 1,
                        transition: {
                          y: { stiffness: 1000, velocity: -100 },
                        },
                      },
                      closed: {
                        y: 50,
                        opacity: 0,
                        transition: {
                          y: { stiffness: 1000 },
                        },
                      },
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link href="" className="hover:text-white">
                      Portfolio
                    </Link>
                  </motion.li>
                  <motion.li
                    className=""
                    variants={{
                      open: {
                        y: 0,
                        opacity: 1,
                        transition: {
                          y: { stiffness: 1000, velocity: -100 },
                        },
                      },
                      closed: {
                        y: 50,
                        opacity: 0,
                        transition: {
                          y: { stiffness: 1000 },
                        },
                      },
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link href="" className="hover:text-white">
                      CV
                    </Link>
                  </motion.li>
                  <motion.li
                    className=""
                    variants={{
                      open: {
                        y: 0,
                        opacity: 1,
                        transition: {
                          y: { stiffness: 1000, velocity: -100 },
                        },
                      },
                      closed: {
                        y: 50,
                        opacity: 0,
                        transition: {
                          y: { stiffness: 1000 },
                        },
                      },
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link href="" className="hover:text-white">
                      Hire Me
                    </Link>
                  </motion.li>
                  <motion.li
                    className=""
                    variants={{
                      open: {
                        y: 0,
                        opacity: 1,
                        transition: {
                          y: { stiffness: 1000, velocity: -100 },
                        },
                      },
                      closed: {
                        y: 50,
                        opacity: 0,
                        transition: {
                          y: { stiffness: 1000 },
                        },
                      },
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link href="" className="hover:text-white">
                      Contacts
                    </Link>
                  </motion.li>
                </motion.ul>

                <ul className="w-full flex items-center justify-start gap-4 text-onimisea_accent mt-5">
                  <li className="w-fit">
                    <Link
                      href="https://www.facebook.com/onimisea"
                      className="hover:text-onimisea_gray_light"
                    >
                      <BsFacebook
                        size={20}
                        className="hover:scale-150 duration-300"
                      />
                    </Link>
                  </li>
                  <li className="w-fit">
                    <Link
                      href="https://www.x.com/onimisea"
                      className="hover:text-onimisea_gray_light"
                    >
                      <AiFillTwitterCircle
                        size={20}
                        className="hover:scale-150 duration-300"
                      />
                    </Link>
                  </li>
                  <li className="w-fit">
                    <Link
                      href="https://www.instagram.com/onimisea"
                      className="hover:text-onimisea_gray_light"
                    >
                      <AiFillInstagram
                        size={20}
                        className="hover:scale-150 duration-300"
                      />
                    </Link>
                  </li>
                  <li className="w-fit">
                    <Link
                      href="https://ng.linkedin.com/in/onimisea"
                      className="hover:text-onimisea_gray_light"
                    >
                      <FaLinkedin
                        size={20}
                        className="hover:scale-150 duration-300"
                      />
                    </Link>
                  </li>
                  <li className="w-fit">
                    <Link
                      href="https://github.com/onimisea"
                      className="hover:text-onimisea_gray_light"
                    >
                      <BsGithub
                        size={20}
                        className="hover:scale-150 duration-300"
                      />
                    </Link>
                  </li>
                </ul>
              </motion.section>
            </motion.section>
          </motion.aside>
        )}
      </AnimatePresence>
    </section>
  );
};

export default MobileMenu;
