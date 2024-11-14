import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import Link from "next/link";

import onimiseaIcon from "@/public/onimisea_icon.png";

import { BsFacebook, BsTwitterX } from "react-icons/bs";
import { RiInstagramFill, RiLinkedinFill } from "react-icons/ri";
import { ContactsForm } from "./ContactForm";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-[70px] min-h-96">
        <img
          src="footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="w-[90%] mx-auto flex flex-col justify-center items-center md:pt-12 lg:pt-20  duration-500">
        <div className="flex flex-col items-center gap-6">
          <div className="text-2xl sm2:text-3xl md:text-4xl text-center font-bold">
            <h1 className="leading-[]">
              Ready to turn your{" "}
              <span className="text-transparent bg-gradient-to-r from-onimisea_primary_light via-onimisea_accent to-onimisea_primary_light bg-clip-text">
                visions into profitable
              </span>{" "}
              digital assets?
            </h1>
          </div>

          <h2 className="text-white text-center">
            Reach out to me today and let&apos;s discuss how I can help you
            achieve your goals.
          </h2>

          <Dialog>
            <DialogTrigger className="rounded-full px-10 py-4 text-lg duration-500 transition bg-onimisea_secondary_light text-white hover:text-onimisea_text_light hover:bg-onimisea_accent hover:font-bold hover:border-none leading-none z-10 mt-6 md:mt-12">
              <span>Join Wait List</span>
            </DialogTrigger>
            <DialogContent className="md:p-8 w-[90%] bg-black-100 border border-onimisea_text_light">
              <DialogHeader className="flex flex-col gap-6">
                <DialogTitle className="text-white font-bold">
                  Send me a message
                </DialogTitle>
                <DialogDescription className="text-gray-300 md:text-justify">
                  What can I help you with today?
                </DialogDescription>
              </DialogHeader>
              <ContactsForm />
            </DialogContent>
          </Dialog>
        </div>
        <div className="flex mt-24 md:mt-48 md:flex-row flex-col justify-between items-center w-full gap-8">
          <div className="flex justify-center items-center flex-col ">
            <section className="w-full md3:w-[40%] flex flex-col items-center justify-center gap-3">
              <Link
                href="/"
                className="flex flex-col items-center justify-center gap-2"
              >
                <Image
                  src={onimiseaIcon}
                  alt="Onimisea Icon"
                  width={300}
                  height={250}
                  className="w-[120px] h-auto"
                />
                <p className="uppercase text-5xl bg-gradient-to-r from-[#3219c8] via-[#ffb500] to-[#3219c8] text-transparent bg-clip-text tracking-widest font-milkmed">
                  onimisea
                </p>
              </Link>

              <p className="text-center tracking-widest text-lg">
                Fullstack Web Developer
              </p>
            </section>
          </div>

          <div className="flex items-center justify-center flex-col gap-8 z-10">
            <div className="flex items-center gap-8">
              <Link
                href="https://facebook.com/onimisea"
                className="hover:text-onimisea_accent transition-all w-fit duration-500"
              >
                <BsFacebook size={22} />
              </Link>
              <Link
                href="https://twitter.com/onimisea"
                className="hover:text-onimisea_accent transition-all w-fit duration-500"
              >
                <BsTwitterX size={22} />
              </Link>
              <Link
                href="https://instagram.com/onimisea"
                className="hover:text-onimisea_accent transition-all w-fit duration-500"
              >
                <RiInstagramFill size={22} />
              </Link>
              <Link
                href="https://linkedin.com/in/onimisea"
                className="hover:text-onimisea_accent transition-all w-fit duration-500"
              >
                <RiLinkedinFill size={27} />
              </Link>
            </div>
            <p className="md:text-base text-sm md:font-normal font-light">
              Copyright © {new Date().getFullYear()} Onimisea
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
