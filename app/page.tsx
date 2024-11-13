import type { Metadata } from "next";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { SkillServe } from "./components/SkillServe";
import RecentProjects from "./components/RecentProjects";
import { Experience } from "./components/Experience";
import { Testimonials } from "./components/Testimonials";
import { Approach } from "./components/Approach";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Onimisea | Full-stack Engineer",
  description:
    "Full-stack engineer with 8 years of crafting stunning, fast, mobile-friendly, high-performance, scalable websites and applications for startups and small businesses. Transforming their visions into profitable digital assets.",
};

export default function Home() {
  return (
    <div className="w-full relative bg-black-100 flex justify-center items-center flex-col overflow-hidden min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <SkillServe />
      <RecentProjects />
      <Experience />
      <Testimonials />
      <Approach />
      <Footer />

      
    </div>
  );
}
