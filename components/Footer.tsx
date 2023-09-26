import Image from "next/image";
import Link from "next/link";
import React from "react";
import onimiseaIcon from "@/public/imgs/onimisea_icon.png";
import { HiPhone } from "react-icons/hi";
import { FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";
import { BsFillEnvelopeAtFill, BsFacebook, BsGithub } from "react-icons/bs";
import { format, getYear } from "date-fns";

const Footer = () => {
  // Get the current date
  const currentDate = new Date();

  // Get the current year from the date
  const currentYear = getYear(currentDate);

  return (
    <footer className="bg-primary dark:bg-background2 text-white z-30 w-full">
      <section className="w-[80%] sm:w-[85%] md:w-[90%] mx-auto max-w-screen-2xl flex items-start justify-center gap-12 md:gap-8 flex-wrap py-16 text-md font-[500]">
        <section className="w-full md:w-[37%] flex flex-col items-center justify-center gap-6 bg-red-500">
          <Link
            href="/"
            className="flex flex-col items-center justify-center gap-2"
          >
            <Image
              src={onimiseaIcon}
              alt="Onimisea Icon"
              width={200}
              height={150}
              className="w-[70px] h-auto"
            />
            <h1 className="text-3xl font-milkmedium text-white tracking-widest">
              onimisea
            </h1>
          </Link>

          <p className="tracking-wide">
            Your Trusted Digital Specialist <br />& Fullstack Web/3 Developer
          </p>
        </section>

        <ul className="w-full sm:w-[45%] md:w-[13%] flex flex-col items-start gap-4 bg-green-500">
          <li className="w-full">
            <Link href="" className="w-full block hover:text-primary2">
              Portfolio
            </Link>
          </li>
          <li className="w-full">
            <Link href="" className="w-full block hover:text-primary2">
              CV
            </Link>
          </li>
          <li className="w-full">
            <Link href="" className="w-full block hover:text-primary2">
              Hire Me
            </Link>
          </li>
          <li className="w-full">
            <Link href="" className="w-full block hover:text-primary2">
              AI Services
            </Link>
          </li>
          <li className="w-full">
            <Link href="" className="w-full block hover:text-primary2">
              Domains
            </Link>
          </li>
          <li className="w-full">
            <Link href="" className="w-full block hover:text-primary2">
              APIs
            </Link>
          </li>
          <li className="w-full">
            <Link href="" className="w-full block hover:text-primary2">
              Contacts
            </Link>
          </li>
        </ul>

        <ul className="w-full sm:w-[45%] md:w-[30%] flex flex-col items-start gap-4 bg-blue-500">
          <li className="w-full">
            <Link
              href="tel:+2348034023726"
              className="w-full hover:text-primary2 flex items-center justify-start gap-2"
            >
              <HiPhone />
              <p className="-mt-[3px]">08034023726</p>
            </Link>
          </li>
          <li className="w-full">
            <Link
              href="mailto:onimisea@gmail.com"
              className="w-full hover:text-primary2 flex items-center justify-start gap-2"
            >
              <BsFillEnvelopeAtFill />
              <p className="-mt-[3px]">onimisea@gmail.com</p>
            </Link>
          </li>
          <li className="w-full flex items-center gap-4">
            <Link href="" className="hover:text-primary2">
              <BsFacebook />
            </Link>
            <Link href="" className="hover:text-primary2">
              <AiFillTwitterCircle />
            </Link>
            <Link href="" className="hover:text-primary2">
              <AiFillInstagram />
            </Link>
            <Link href="" className="hover:text-primary2">
              <FaLinkedin />
            </Link>
            <Link href="https://ng.linkedin.com/in/onimisea" className="hover:text-primary2">
              <BsGithub />
            </Link>
          </li>
          <li className="w-full">
            <p>Onimisea &copy; {currentYear}</p>
          </li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
