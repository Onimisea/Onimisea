import type { Metadata } from "next";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import Footer from "../components/Footer";
import { SkillServe } from "../components/SkillServe";
import RecentProjects from "../components/RecentProjects";
import { Experience } from "../components/Experience";
import { Testimonials } from "../components/Testimonials";
import { Approach } from "../components/Approach";
// import { Navbar } from "./components/Navbar";
// import { Hero } from "./components/Hero";
// import { About } from "./components/About";
// import { SkillServe } from "./components/SkillServe";
// import RecentProjects from "./components/RecentProjects";
// import { Experience } from "./components/Experience";
// import { Testimonials } from "./components/Testimonials";
// import { Approach } from "./components/Approach";
// import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Onimisea | Full-stack Engineer",
  description:
    "Full-stack engineer with 5 years of crafting stunning, fast, mobile-friendly, high-performance, scalable websites and applications for startups and small businesses. Transforming their visions into profitable digital assets.",
  openGraph: {
    title: "Onimisea | Full-stack Engineer",
    description:
      "Experienced full-stack engineer focused on building scalable digital solutions for startups and small businesses.",
    url: "https://onimisea.com",
    type: "website",
    locale: "en_US",
    siteName: "Onimisea",
    images: [
      {
        url: "https://onimisea.azurewebsites.net/projects/onimisea.png",
        width: 1200,
        height: 630,
        alt: "Onimisea | Full-stack Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Onimisea | Full-stack Engineer",
    description:
      "Experienced full-stack engineer focused on building scalable digital solutions for startups and small businesses.",
    site: "@onimisea",
    creator: "@onimisea",
    images: ["https://onimisea.azurewebsites.net/projects/onimisea.png"],
  },
};

export default function Home() {
  return (
    <div className="w-full relative flex justify-center items-center flex-col overflow-hidden min-h-screen">
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
