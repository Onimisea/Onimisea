"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import onimisea from "@/public/projects/onimisea.png";
import oyapaste from "@/public/projects/oyapaste.png";
import eweko from "@/public/projects/eweko.png";
import centiiv from "@/public/projects/centiiv.png";
import lockedin from "@/public/projects/lockedin.png";
import q2win from "@/public/projects/q2win.png";
import { useEffect, useState } from "react";
import Link from "next/link";

const recentProjects = [
  {
    id: 1,
    name: "Q2Win",
    description:
      "An online gaming and lottery platform developed in NextJS, React Query, Zustand and FastAPI",
    link: "https://q2win.com.ng",
    img: q2win,
  },

  {
    id: 2,
    name: "LockedIn Habit Tracker",
    description:
      "A gamified habit-tracking application built with Next.js, providing users with personalized reminders and tracking insights to build consistent habits.",
    link: "https://lockedin.com",
    img: lockedin,
  },
  {
    id: 3,
    name: "EwekoAggregate",
    description:
      "EwekoAggregate, a B2B platform that leverages  technology to deliver fresh produce on time, consistently and in the right quality",
    link: "https://ewekoaggregate.com",
    img: eweko,
  },
  {
    id: 4,
    name: "Centiiv Technologies",
    description:
      "Centiiv empowers African businesses to connect with the global market through innovative payment solutions and tools that streamline operations, reduce costs, boost sales, and enhance efficiency",
    link: "https://centiiv.com",
    img: centiiv,
  },
  {
    id: 5,
    name: "Onimisea",
    description:
      "A personal portfolio website to showcase my web development services. Built with Next.js, TailwindCSS, NestJS, MongoDB",
    link: "https://yourportfolio.com",
    img: onimisea,
  },
  {
    id: 6,
    name: "Oyapaste",
    description:
      "A NestJS-based backend application for Nigeria's first fintech platform that uses Pastecode Technology",
    link: "https://oyapaste.com",
    img: oyapaste,
  },
];

const RecentProjects = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [animationDirections, setAnimationDirections] = useState<string[]>([]);

  useEffect(() => {
    const directions = ["left", "right", "top", "bottom"];
    const randomDirections = recentProjects.map(
      () => directions[Math.floor(Math.random() * directions.length)]
    );
    setAnimationDirections(randomDirections);
  }, []);

  const overlayVariants = {
    hidden: (direction: string) => ({
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "top" ? "-100%" : direction === "bottom" ? "100%" : 0,
      opacity: 0,
    }),
    visible: { x: 0, y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <div id="projects" className="flex flex-col items-center justify-center w-full z-20">
      <div className="w-[90%] mx-auto flex flex-col justify-center items-center pt-10 pb-20 gap-10 duration-500">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-transparent bg-gradient-to-r from-onms-primary-lt via-onms-accent to-onms-primary-lt bg-clip-text w-fit font-milkbold">
          Recent Projects
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-10 mt-6 transition-all duration-500">
          {recentProjects.map((item, index) => (
            <div
              key={item.id}
              id={`${item.id}`}
              className="relative w-full md:w-[40%] lg:w-[30%] h-[270px] sm3:h-[320px] md:h-[250px] md2:h-[275px] lg:h-[300px] transition-all duration-500 overflow-hidden rounded-xl group border border-onimisea_text_light"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <Image
                src={item.img}
                alt={item.name}
                className="w-full h-full object-cover"
              />
              <motion.div
                className="absolute inset-0 bg-black/90 flex flex-col justify-center items-center p-4"
                variants={overlayVariants}
                initial="hidden"
                animate={hoveredItem === item.id ? "visible" : "hidden"}
                custom={animationDirections[index]}
              >
                <h3 className="text-lg md:text-xl font-semibold text-white">
                  {item.name}
                </h3>
                <p className="text-md text-gray-300 mt-2 text-center">
                  {item.description}
                </p>
                <Link
                  href={item.link}
                  className="text-onms-text-lt mt-4 bg-onms-accent px-4 py-2 rounded-full hover:bg-onms-secondary-lt hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </Link>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentProjects;
