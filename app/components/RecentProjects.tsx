"use client";
// import { projects } from "@/data";

const RecentProjects = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="w-[90%] mx-auto relative flex flex-col md:flex-row justify-center md:justify-between py-20 gap-16 md:gap-10 duration-500">
        <div className="w-full flex items-center justify-center">
          <h2 className="text-2xl sm3:text-3xl md:text-4xl font-milkbold text-center bg-gradient-to-r from-onimisea_primary_light via-onimisea_accent to-onimisea_primary_light bg-clip-text text-transparent w-fit">
            recent projects
          </h2>
        </div>
      </div>
    </div>
  );
};

export default RecentProjects;
