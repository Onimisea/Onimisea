"use client";

import Link from "next/link";

export const Hero = () => {
  return (
    <div className="w-full relative flex flex-col items-center justify-center min-h-screen bg-hero bg-cover bg-center bg-no-repeat">
      <div className="w-full h-full bg-hero_grd absolute left-0 top-0"></div>
      <div className="w-[90%] mx-auto relative flex justify-center items-center flex-col py-20 gap-6">
        <p className="uppercase tracking-widest text-sm text-center text-blue-100 font-bold max-w-80">
          Passionate Full-stack Developer
        </p>

        <div className="text-3xl sm2:text-4xl md:text-5xl xl:text-6xl w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] 2xl:w-[50%]">
          <h1 className="text-center font-extrabold leading-[50px] sm2:leading-[60px] md:leading-[70px] xl:leading-[80px]">
            Transforming Visions Into Profitable{" "}
            <span className="bg-gradient-to-r from-onimisea_primary_light via-onimisea_accent to-onimisea_primary_light bg-clip-text text-transparent">
              Digital Assets
            </span>
          </h1>
        </div>
        <Link
          href="#about"
          className="p-[2px] bg-onimisea_grd rounded-full flex font-bold hover:bg-onimisea_grd_rev transition-all duration-500 sm3:mt-5"
        >
          <span className="px-12 py-5 bg-black-100 rounded-full text-md duration-500">
            Get Started
          </span>
        </Link>
      </div>
      <div
        // chnage the bg to bg-black-100, so it matches the bg color and will blend in
        className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)]"
      />
    </div>
  );
};

//
