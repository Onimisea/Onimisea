import Link from "next/link";
import React from "react";

export const Experience = () => {
  return (
    <div id="" className="flex flex-col items-center justify-center w-full z-20">
      <div className="w-[90%] mx-auto flex flex-col justify-center items-center py-20 gap-6 duration-500">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-transparent bg-gradient-to-r from-onms-primary-lt via-onms-accent to-onms-primary-lt bg-clip-text w-fit font-milkbold">
          Work Experience
        </h2>
        <div className="flex flex-col justify-center items-center gap-6 mt-6 transition-all duration-500 w-[90%] md:w-[70%] lg:w-[50%]">
          <p className="text-md md:text-[18px] leading-[30px] text-white text-center">
            Throughout my career, I&apos;ve had the opportunity to work on diverse
            projects that have strengthened my expertise in web development,
            backend engineering, and software architecture. My journey reflects
            a dedication to building scalable, innovative solutions that drive
            results and enhance user experiences.
          </p>

          <Link
            className="p-[2px] bg-onms-secondary-lt hover:bg-onms-accent text-white rounded-full flex font-bold transition-all duration-500 px-12 py-5 hover:text-onms-text-lt"
            href="/cv.pdf"
            target="_blank"
            download
          >
            Download CV
          </Link>
        </div>
      </div>
    </div>
  );
};
