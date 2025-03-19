import React from "react";

const skills = [
  { id: 1, name: "Next.js" },
  { id: 3, name: "Nest.js" },
  { id: 4, name: "TypeScript" },
  { id: 5, name: "TailwindCSS" },
  { id: 7, name: "Django" },
  { id: 8, name: "Python" },
  { id: 9, name: "MongoDB" },
  { id: 10, name: "Laravel" },
  { id: 11, name: "SQL" },
  { id: 12, name: "PostgreSQL" },
  { id: 13, name: "REST APIs" },
  { id: 14, name: "Git" },
  { id: 15, name: "Zustand" },
  { id: 16, name: "Azure CI/CD" },
];

const services = [
  { id: 1, name: "Custom Web Development" },
  { id: 2, name: "Frontend UI/UX Development" },
  { id: 3, name: "Performance Optimization" },
  { id: 4, name: "API Development" },
  { id: 5, name: "API Integration & Third-Party Services" },
  { id: 6, name: "Custom Chatbots and Assistants" },
  { id: 7, name: "Bug Fixes & Feature Enhancements" },
  { id: 8, name: "Technical Consulting" },
];

export const SkillServe = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full z-20">
      <div className="w-[90%] mx-auto relative flex flex-col md:flex-row justify-center md:justify-between py-20 gap-16 md:gap-10 duration-500">
        <div className="w-full md:w-[45%] flex flex-col gap-6 items-center md:items-start">
          <h2 className="text-2xl sm3:text-3xl md:text-4xl font-milkbold bg-gradient-to-r from-onms-primary-lt via-onms-accent to-onms-primary-lt bg-clip-text text-transparent w-fit mb-4">
            SKILLS
          </h2>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            {skills.map((skill) => (
              <span
                className="text-white px-5 py-3 rounded-lg hover:bg-onms-primary-lt duration-300"
                key={skill.id}
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>

        <div className="w-full md:w-[45%] flex flex-col gap-6 items-center md:items-end">
          <h2 className="text-2xl sm3:text-3xl md:text-4xl font-milkbold bg-gradient-to-r from-onms-primary-lt via-onms-accent to-onms-primary-lt bg-clip-text text-transparent w-fit mb-4">
            Services
          </h2>

          <div className="flex flex-wrap gap-4 justify-center md:justify-end">
            {services.map((service) => (
              <span
                className="text-white px-5 py-3 rounded-lg hover:bg-onms-primary-lt duration-300"
                key={service.id}
              >
                {service.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
