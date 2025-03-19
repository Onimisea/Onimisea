"use client";

import React from "react";

const myApproach = [
  {
    title: "Planning & Strategy",
    text: "We'll collaborate to map out your website's goals, target audience, and key functionalities. We'll discuss things like site structure, navigation, and content requirements.",
  },
  {
    title: "Development & Progress Update",
    text: "Once we agree on the plan, I cue my lofi playlist and dive into coding. From initial sketches to polished code, I keep you updated every step of the way.",
  },
  {
    title: "Development & Launch",
    text: "This is where the magic happens! Based on the approved design, I'll translate everything into functional code, building your website from the ground up.",
  },
];

export const Approach = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full relative z-20">
      <div className="w-[90%] mx-auto flex flex-col justify-center items-center py-20 gap-10 duration-500">
        <div className="w-full flex flex-col gap-5 justify-center items-center">
          <h2 className="text-2xl md:text-4xl font-bold text-center text-transparent bg-gradient-to-r from-onms-primary-lt via-onms-accent to-onms-primary-lt bg-clip-text w-fit font-milkbold">
            My Approach
          </h2>
        </div>
        <div className="w-full relative mt-6 transition-all duration-500 flex flex-wrap gap-12 justify-center lg:justify-between ">
          {myApproach.map((appro, i) => (
            <div
              key={i}
              className="w-[90%] md:w-[40%] lg:w-[28%] group text-center flex flex-col gap-4 text-white"
            >
              <h3 className="font-bold text-xl text-onms-accent">{appro.title}</h3>
              <p className="text-md leading-[30px]">{appro.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
