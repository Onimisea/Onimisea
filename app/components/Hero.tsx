"use client";

import Link from "next/link";

export const Hero = () => {
  return (
    <div
      id="home"
      className="w-full relative flex flex-col items-center justify-center min-h-screen "
    >
      <div className="w-[90%] mx-auto relative flex justify-center items-center flex-col py-20 gap-6">
        <p className="uppercase tracking-widest text-sm text-center text-blue-100 font-bold max-w-80">
          Passionate Full-stack Developer
        </p>

        <div className="text-3xl sm2:text-4xl md:text-5xl xl:text-6xl w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] 2xl:w-[50%]">
          <h1 className="text-center font-extrabold leading-[50px] sm2:leading-[60px] md:leading-[70px] xl:leading-[80px] text-white">
            Transforming Visions Into Profitable
            <span className="ml-2 bg-gradient-to-r from-onms-primary-lt via-onms-accent to-onms-primary-lt bg-clip-text text-transparent">
              Digital Assets
            </span>
          </h1>
        </div>
        <Link
          href="#about"
          className="p-[3px] bg-onms-grd hover:bg-green-600 rounded-full flex font-bold transition-all duration-500 sm3:mt-5 group"
        >
          <span className="px-10 py-3 bg-black-100 hover:bg-onms-text-lt rounded-full text-md duration-500">
            Get Started
          </span>
        </Link>
      </div>
    </div>
  );
};
