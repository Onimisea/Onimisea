import React from "react";
import { Bentogrid } from "./Bentogrid";

export const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col items-center justify-center w-full"
    >
      <div className="w-[90%] mx-auto relative flex justify-center items-center flex-col py-10 gap-6">
        <Bentogrid />
      </div>
    </div>
  );
};
