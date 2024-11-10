import Image from "next/image";
import React from "react";

import b4 from "@/public/b4.svg";
import globe from "@/public/globe.png";

export const Bentogrid = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 grid-rows-3">
      <div className="row-span-2 p-6 rounded-lg">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl sm3:text-3xl md:text-4xl font-milkbold bg-gradient-to-r from-onimisea_primary_light via-onimisea_accent to-onimisea_primary_light bg-clip-text text-transparent w-fit mb-4">
            About Me
          </h2>

          <p className="text-md md:text-[18px] leading-[30px] text-white text-justify">
            Hi, I&apos;m Ahmed Tijani (Onimisea), a self-taught full-stack
            engineer specializing in modern web development. With expertise in
            JavaScript & Python, I create scalable and user-friendly
            applications that deliver real value, transforming visions into
            profitable digital assets for small and medium-scale businesses.
          </p>
          <p className="text-md md:text-[18px] leading-[30px] text-white text-justify">
            My passion lies in developing custom solutions, from building
            dynamic websites to integrating AI-driven agents, blockchain, data
            analysis and third-party APIs. Whether you need a new web
            application, a quick fix, or expert advice, I bring a hands-on
            approach to every project. Let&apos;s collaborate and build
            something great together!
          </p>
        </div>
      </div>

      <div className="bg-client_bg bg-cover bg-no-repeat bg-center md:bg-left row-span-2 rounded-2xl overflow-hidden relative group">
        <div className="bg-gradient-to-t from-black to-transparent p-6 h-full w-full absolute"></div>

        <div className="p-6 absolute bottom-0 text-xl sm3:text-2xl md:text-3xl w-[90%] sm3:w-[80%] md:w-[100%] xl:w-[70%]">
          <h3 className="font-bold leading-[35px] md:leading-[45px] group-hover:translate-x-[20px] group-hover:translate-y-[-20px] transition-all duration-500">
            I prioritize client collaboration, fostering open communication
          </h3>
        </div>
      </div>

      <div className="p-6 rounded-2xl relative overflow-hidden border-[1px] border-onimisea_text_light bg-transparent group">
        <div className="text-xl sm3:text-2xl md:text-3xl w-[90%] sm3:w-[80%] md:w-[100%] xl:w-[70%]">
          <h3 className="font-bold leading-[35px] md:leading-[45px] group-hover:translate-x-[20px] group-hover:translate-y-[20px] transition-all duration-500">
            I&apos;m very flexible with time zone communications
          </h3>
        </div>
        <Image
          src={globe}
          alt=""
          className="w-[40%] h-auto absolute right-4 bottom-[-150px]"
        />
      </div>

      <div className="p-6 rounded-2xl relative overflow-hidden border-[1px] border-onimisea_text_light bg-transparent group">
        <div className="text-xl sm3:text-2xl md:text-3xl w-[90%] sm3:w-[80%] md:w-[100%] xl:w-[70%]">
          <h3 className="font-bold leading-[35px] md:leading-[45px] group-hover:translate-x-[20px] group-hover:translate-y-[20px] transition-all duration-500">
            Tech enthusiast with a passion for development
          </h3>
        </div>
        <Image
          src={b4}
          alt=""
          className="w-[40%] h-auto absolute right-4 bottom-[-20px]"
        />
      </div>

      <div className="bg-black p-6 rounded-2xl">Item 5</div>
      <div className="bg-black row-span-2 p-6 rounded-2xl">Item 6</div>
      <div className="bg-black p-6 rounded-2xl">Item 7</div>
    </div>
  );
};
