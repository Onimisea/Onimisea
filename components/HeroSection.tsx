import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";
import { BsFacebook, BsGithub } from "react-icons/bs";
import hero_ill from "@/public/imgs/hero_ill.svg"
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="w-full flex items-center justify-center bg-[#fafafa] dark:bg-onimisea_bg_dark py-24">
      <section className="w-[80%] sm:w-[85%] md:w-[90%] mx-auto max-w-screen-2xl flex items-center justify-between text-md xl:gap-24">
        <section className="w-full flex flex-col items-start justify-center py-10">
          <p className="w-full text-onimisea_text_light text-lg">
            Hello There!
            <span className="text-onimisea_primary_light font-bold font-promedium">
              {" "}
              I&lsquo;m Ahmed Tijani
            </span>
          </p>
          <h1 className="w-full text-[48px] text-[#3f3d56] font-promedium font-bold">
            Fullstack <span className="text-onimisea_accent">Web/3</span>{" "}
            Developer
          </h1>
          <h3 className="w-full text-[#3f3d56] text-4xl font-promedium font-bold">
            & Software <span className="text-onimisea_accent">Engineer</span>
          </h3>

          <section className="flex items-center justify-center gap-x-6 relative mt-10 mb-8 text-onimisea_text_light">
            <Button
              variant="default"
              size="sm"
              className="rounded-full bg-gradient-to-tr border-none relative p-[1px] hidden sm:flex from-[#3219c8] via-[#ffb500] to-[#3219c8] hover:bg-transparent hover:from-transparent hover:via-transparent hover:to-transparent"
            >
              <section className="bg-[#fafafa] hover:bg-onimisea_accent hover:from-[#3f3d56] hover:to-onimisea_secondary_light text-onimisea_primary_light hover:text-white dark:bg-onimisea_bg_dark dark:text-onimisea_accent h-full flex items-center justify-center rounded-full px-3 duration-500 dark:hover:from-transparent dark:hover:via-transparent dark:hover:to-transparent dark:hover:text-onimisea_text_light dark:hover:bg-onimisea_accent hover:font-bold w-[100px]">
                CV
              </section>
            </Button>

            <Button
              variant="default"
              size="sm"
              className="rounded-full bg-onimisea_accent border-none text-white hover:bg-onimisea_primary_light duration-500 hidden sm2:flex font-bold px-8 dark:bg-onimisea_accent dark:text-onimisea_text_light hover:dark:bg-onimisea_primary_light hover:dark:text-white w-[150px]"
            >
              Hire Me
            </Button>
          </section>

          <section className="w-full flex items-center justify-start gap-4 text-onimisea_primary_light">
            <Link
              href="https://www.facebook.com/onimisea"
              className="hover:text-[#1877F2] text-2xl hover:scale-150"
            >
              <BsFacebook />
            </Link>
            <Link
              href="https://www.x.com/onimisea"
              className="hover:text-[#1DA1F2] text-2xl hover:scale-150"
            >
              <AiFillTwitterCircle />
            </Link>
            <Link
              href="https://www.instagram.com/onimisea"
              className="hover:text-[#E4405F] text-2xl hover:scale-150"
            >
              <AiFillInstagram />
            </Link>
            <Link
              href="https://ng.linkedin.com/in/onimisea"
              className="hover:text-[#0A66C2] text-2xl hover:scale-150"
            >
              <FaLinkedin />
            </Link>
            <Link
              href="https://github.com/onimisea"
              className="hover:text-[#181717] text-2xl hover:scale-150"
            >
              <BsGithub />
            </Link>
          </section>
        </section>

        <section className="w-full flex items-center justify-center">
          <Image src={hero_ill} alt="Onimisea" className="w-full h-auto object-fill" />
        </section>
      </section>
    </section>
  );
};

export default HeroSection;
