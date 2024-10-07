import type { Metadata } from "next";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

export const metadata: Metadata = {
  title: "Onimisea | Full-stack Engineer",
  description:
    "Full-stack engineer with 8 years of crafting stunning, fast, mobile-friendly, high-performance, scalable websites and applications for startups and small businesses. Transforming their visions into profitable digital assets.",
};

export default function Home() {
  return (
    <div className="w-full relative bg-black-100 flex justify-center items-center flex-col overflow-hidden">
      <div className="w-[85%] mx-auto relative flex justify-center items-center flex-col ">
        <FloatingNav navItems={navItems} />
        <Hero />
        {/* <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Footer /> */}
      </div>
    </div>
  );
}
