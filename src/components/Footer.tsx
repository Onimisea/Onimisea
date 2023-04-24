import Link from "next/link";
import LogoBox2 from "./LogoBox2";
import { MdPhone } from "react-icons/md";
import { FaEnvelope } from "react-icons/fa";
import {
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="w-full bg-primary-500 text-gray-200 px-6 py-12">
      <section className="w-[90%] mx-auto flex flex-col items-center gap-6 sm3:flex-row sm3:items-start sm3:justify-around ">
        <section className="flex flex-col items-center gap-4">
          <LogoBox2 />

          <Link href="/">
            <p className="text-center text-sm text-gray-200">
              Fullstack Web/3 Developer <br /> & Software Engineer
            </p>
          </Link>
        </section>

        <section className="">
          <ul>
            <li className="mb-2">
              <Link href="/about" className="hover:text-secondary-500">
                About
              </Link>
            </li>
            <li className="mb-2">Portfolio</li>
            <li className="mb-2">Contacts</li>
            <li className="mb-2">Download CV</li>
            <li className="mb-2">Hire Me</li>
            <li className="mb-2">Domains</li>
            <li className="mb-2">Blog</li>
          </ul>
        </section>

        <section className="flex flex-col items-start gap-3">
          <Link
            href="tel:+2348034023726"
            className="hover:text-secondary-500 flex items-center gap-2"
          >
            <MdPhone /> 08034023726
          </Link>
          <Link
            href="mailto:onimisea@gmail.com"
            className="hover:text-secondary-500 flex items-center gap-2"
          >
            <FaEnvelope /> onimisea@gmail.com
          </Link>

          <section className="w-fit flex items-start justify-center gap-4">
            <Link
              href="/"
              className="text-xl text-gray-200 hover:text-secondary-500 group-hover:text-primary duration-500"
            >
              <BsFacebook />
            </Link>
            <Link
              href="/"
              className="text-xl text-gray-200 hover:text-secondary-500 group-hover:text-primary duration-500"
            >
              <BsTwitter />
            </Link>
            <Link
              href="/"
              className="text-xl text-gray-200 hover:text-secondary-500 group-hover:text-primary duration-500"
            >
              <BsInstagram />
            </Link>
            <Link
              href="/"
              className="text-xl text-gray-200 hover:text-secondary-500 group-hover:text-primary duration-500"
            >
              <BsLinkedin />
            </Link>
            <Link
              href="/"
              className="text-xl text-gray-200 hover:text-secondary-500 group-hover:text-primary duration-500"
            >
              <BsGithub />
            </Link>
          </section>

          <p>Onimisea &copy; {`${new Date().getFullYear()}`}</p>
        </section>
      </section>
    </footer>
  );
};
export default Footer;
