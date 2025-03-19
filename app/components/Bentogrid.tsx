import Image from "next/image";
import React from "react";

import b4 from "@/public/b4.svg";
import globe from "@/public/globe.png";

export const Bentogrid = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 grid-rows-3">
      {/* Main About Me Section */}
      <div className="row-span-2 rounded-lg order-1">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl sm3:text-3xl md:text-4xl font-milkbold bg-gradient-to-r from-onms-primary-lt via-onms-accent to-onms-primary-lt bg-clip-text text-transparent w-fit mb-4">
            About Me
          </h2>

          <p className="text-md md:text-[18px] leading-[30px] text-white text-justify">
            Hi, I&apos;m Ahmed Tijani (Onimisea), a self-taught full-stack
            engineer specializing in modern web development. With expertise in
            JavaScript & Python, I create scalable and user-friendly
            applications that deliver real value, transforming visions into
            profitable digital assets for small and medium-scale businesses.
          </p>
          <p className="text-md md:text-[18px] leading-[30px] text-white text-justify mt-6">
            My passion lies in developing custom solutions, from building
            dynamic websites to integrating AI-driven agents, blockchain, data
            analysis and third-party APIs. Whether you need a new web
            application, a quick fix, or expert advice, I bring a hands-on
            approach to every project. Let&apos;s collaborate and build
            something great together!
          </p>
        </div>
      </div>

      {/* First Background Section */}
      <div className="bg-client-bg bg-cover bg-no-repeat bg-center md:bg-left row-span-2 rounded-2xl overflow-hidden relative group order-2">
        <div className="bg-gradient-to-t from-black to-transparent p-6 h-full w-full absolute"></div>

        <div className="p-6 absolute bottom-0 text-xl sm3:text-2xl md:text-3xl w-[90%] sm3:w-[80%] md:w-[100%] xl:w-[70%]">
          <h3 className="font-bold leading-[35px] md:leading-[45px] group-hover:translate-x-[20px] group-hover:translate-y-[-20px] transition-all duration-500">
            I prioritize client collaboration, fostering open communication
          </h3>
        </div>
      </div>

      {/* Globe Section */}
      <div className="p-6 rounded-2xl relative overflow-hidden border-[1px] border-onimisea_text_light bg-transparent group sm2:h-[150px] md:min-h-[200px] order-3">
        <div className="text-xl sm3:text-2xl md:text-3xl w-[90%] sm3:w-[80%] md:w-[100%] xl:w-[70%]">
          <h3 className="font-bold leading-[35px] md:leading-[45px] group-hover:translate-x-[20px] group-hover:translate-y-[20px] transition-all duration-500">
            I&apos;m very flexible with time zone communications
          </h3>
        </div>
        <Image
          src={globe}
          alt=""
          className="w-[40%] h-auto absolute right-4 bottom-[-80px] sm:bottom-[-100px] sm2:bottom-[-120px] md:bottom-[-80px] xl:bottom-[-110px] 2xl:bottom-[-160px] 3xl:bottom-[-160px] 4xl:bottom-[-200px] 5xl:bottom-[-350px]"
        />
      </div>

      {/* Background Section - Move to Last on Smaller Screens */}
      <div className="bg-scoop-bg bg-cover bg-no-repeat bg-center md:bg-left row-span-2 rounded-2xl relative overflow-hidden border-[1px] border-onms-text-lt bg-transparent group h-[300px] md:h-auto order-last md:order-4">
        <div className="bg-black-transparent p-6 h-full w-full absolute"></div>

        <div className="p-6 absolute left-0 top-[50%] translate-y-[-50%] text-xl sm3:text-2xl md:text-3xl w-[90%] sm3:w-[80%] md:w-[100%] xl:w-[70%]">
          <h3 className="font-bold leading-[35px] md:leading-[45px] group-hover:translate-x-[20px] group-hover:translate-y-[20px] transition-all duration-500 ">
            Currently building a gamified habit tracking SaaS product
          </h3>
        </div>
      </div>

      {/* Final Text Section */}
      <div className="p-6 rounded-2xl relative overflow-hidden border-[1px] border-onimisea_text_light bg-transparent group sm2:h-[150px] md:min-h-[200px] order-5">
        <div className="text-xl sm3:text-2xl md:text-3xl w-[90%] sm3:w-[80%] md:w-[100%] xl:w-[70%]">
          <h3 className="font-bold leading-[35px] md:leading-[45px] group-hover:translate-x-[20px] group-hover:translate-y-[20px] transition-all duration-500">
            Tech enthusiast with a passion for development
          </h3>
        </div>
        <Image
          src={b4}
          alt=""
          className="w-[40%] h-auto absolute right-4 bottom-[-20px] sm:bottom-[-40px] sm2:bottom-[-50px] md:bottom-[-30px] md2:bottom-[-10px] lg:bottom-[-20px] 2xl:bottom-[-40px] 3xl:bottom-[-40px] 4xl:bottom-[-70px] 5xl:bottom-[-100px]"
        />
      </div>
    </div>
  );
};
