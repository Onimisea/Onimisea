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
    <footer className="bg-onimisea_bg_dark text-onimisea_accent z-30 w-full">
      <section className="w-[80%] sm:w-[85%] md:w-[90%] mx-auto max-w-screen-2xl flex items-start justify-center gap-12 flex-wrap py-16 text-md">
        <FooterLogo />

        <ul className="w-full sm:w-[35%] md3:w-[15%] flex flex-col items-start gap-4">
          <li className="w-full">
            <Link
              href=""
              className="w-full block hover:text-onimisea_primary_light text-center sm:text-right md3:text-left"
            >
              Web Development
            </Link>
          </li>
          <li className="w-full">
            <Link
              href=""
              className="w-full block hover:text-onimisea_primary_light text-center sm:text-right md3:text-left"
            >
              AI Services
            </Link>
          </li>
          <li className="w-full">
            <Link
              href=""
              className="w-full block hover:text-onimisea_primary_light text-center sm:text-right md3:text-left"
            >
              APIs
            </Link>
          </li>
          <li className="w-full">
            <Link
              href=""
              className="w-full block hover:text-onimisea_primary_light text-center sm:text-right md3:text-left"
            >
              Domains
            </Link>
          </li>
        </ul>

        <ul className="w-full sm:w-[35%] md3:w-[10%] flex flex-col items-start gap-4">
          <li className="w-full">
            <Link
              href=""
              className="w-full block hover:text-onimisea_secondary_light text-center sm:text-left"
            >
              Portfolio
            </Link>
          </li>
          <li className="w-full">
            <Link
              href=""
              className="w-full block hover:text-onimisea_secondary_light text-center sm:text-left"
            >
              CV
            </Link>
          </li>
          <li className="w-full">
            <Link
              href=""
              className="w-full block hover:text-onimisea_secondary_light text-center sm:text-left"
            >
              Hire Me
            </Link>
          </li>

          <li className="w-full">
            <Link
              href=""
              className="w-full block hover:text-onimisea_secondary_light text-center sm:text-left"
            >
              Contacts
            </Link>
          </li>
        </ul>

        <ul className="w-full sm:w-[50%] md3:w-[20%] md:w-[25%] flex flex-col items-start justify-center gap-4">
          <li className="w-full">
            <Link
              href="tel:+2348034023726"
              className="w-full hover:text-onimisea_primary_light flex items-center justify-center md3:justify-start gap-2"
            >
              <HiPhone />
              <p className="-mt-[3px]">08034023726</p>
            </Link>
          </li>
          <li className="w-full">
            <Link
              href="mailto:onimisea@gmail.com"
              className="w-full hover:text-onimisea_primary_light flex items-center justify-center md3:justify-start gap-2"
            >
              <BsFillEnvelopeAtFill />
              <p className="-mt-[3px]">onimisea@gmail.com</p>
            </Link>
          </li>
          <li className="w-full flex items-center justify-center md3:justify-start gap-4">
            <Link
              href="https://www.facebook.com/onimisea"
              className="hover:text-onimisea_primary_light hover:scale-150"
            >
              <BsFacebook />
            </Link>
            <Link
              href="https://www.x.com/onimisea"
              className="hover:text-onimisea_primary_light hover:scale-150"
            >
              <AiFillTwitterCircle />
            </Link>
            <Link
              href="https://www.instagram.com/onimisea"
              className="hover:text-onimisea_secondary_light hover:scale-150"
            >
              <AiFillInstagram />
            </Link>
            <Link
              href="https://ng.linkedin.com/in/onimisea"
              className="hover:text-onimisea_secondary_light hover:scale-150"
            >
              <FaLinkedin />
            </Link>
            <Link
              href="https://github.com/onimisea"
              className="hover:text-onimisea_secondary_light hover:scale-150"
            >
              <BsGithub />
            </Link>
          </li>
          <li className="w-full text-center md3:text-left">
            <p>Onimisea &copy; {currentYear}</p>
          </li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
