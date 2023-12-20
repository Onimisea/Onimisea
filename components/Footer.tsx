import Link from "next/link";
import React from "react";
import { HiPhone } from "react-icons/hi";
import { FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";
import { BsFillEnvelopeAtFill, BsFacebook, BsGithub } from "react-icons/bs";
import { getYear } from "date-fns";
import FooterLogo from "./FooterLogo";

const Footer = () => {
  // Get the current date
  const currentDate = new Date();

  // Get the current year from the date
  const currentYear = getYear(currentDate);

  return (
    <footer className="bg-[#00081C] dark:bg-background2 text-white z-30 w-full">
      <section className="w-[80%] sm:w-[85%] md:w-[90%] mx-auto max-w-screen-2xl flex items-start justify-center gap-12 md:gap-8 flex-wrap py-16 text-md font-[500]">
        <FooterLogo />

        <ul className="w-full sm:w-[35%] md:w-[13%] flex flex-col items-start gap-4">
          <li className="w-full">
            <Link href="" className="w-full block hover:text-primary2 text-center sm:text-right md:text-left">
              Portfolio
            </Link>
          </li>
          <li className="w-full">
            <Link href="" className="w-full block hover:text-primary2 text-center sm:text-right md:text-left">
              CV
            </Link>
          </li>
          <li className="w-full">
            <Link href="" className="w-full block hover:text-primary2 text-center sm:text-right md:text-left">
              Hire Me
            </Link>
          </li>
          <li className="w-full">
            <Link href="" className="w-full block hover:text-primary2 text-center sm:text-right md:text-left">
              AI Services
            </Link>
          </li>
          <li className="w-full">
            <Link href="" className="w-full block hover:text-primary2 text-center sm:text-right md:text-left">
              Domains
            </Link>
          </li>
          <li className="w-full">
            <Link href="" className="w-full block hover:text-primary2 text-center sm:text-right md:text-left">
              APIs
            </Link>
          </li>
          <li className="w-full">
            <Link href="" className="w-full block hover:text-primary2 text-center sm:text-right md:text-left">
              Contacts
            </Link>
          </li>
        </ul>

        <ul className="w-full sm:w-[50%] md:w-[30%] flex flex-col items-start gap-4">
          <li className="w-full">
            <Link
              href="tel:+2348034023726"
              className="w-full hover:text-primary2 flex items-center justify-center sm:justify-start gap-2"
            >
              <HiPhone />
              <p className="-mt-[3px]">08034023726</p>
            </Link>
          </li>
          <li className="w-full">
            <Link
              href="mailto:onimisea@gmail.com"
              className="w-full hover:text-primary2 flex items-center justify-center sm:justify-start gap-2"
            >
              <BsFillEnvelopeAtFill />
              <p className="-mt-[3px]">onimisea@gmail.com</p>
            </Link>
          </li>
          <li className="w-full flex items-center justify-center sm:justify-start gap-4">
            <Link href="https://www.facebook.com/onimisea" className="hover:text-primary2">
              <BsFacebook />
            </Link>
            <Link href="https://www.x.com/onimisea" className="hover:text-primary2">
              <AiFillTwitterCircle />
            </Link>
            <Link href="https://www.instagram.com/onimisea" className="hover:text-primary2">
              <AiFillInstagram />
            </Link>
            <Link href="https://ng.linkedin.com/in/onimisea" className="hover:text-primary2">
              <FaLinkedin />
            </Link>
            <Link href="https://github.com/onimisea" className="hover:text-primary2">
              <BsGithub />
            </Link>
          </li>
          <li className="w-full text-center sm:text-left">
            <p>Onimisea &copy; {currentYear}</p>
          </li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
