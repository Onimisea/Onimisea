import type { Metadata } from "next";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";

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

      {/* <div className="w-[85%] mx-auto relative flex justify-center items-center flex-col ">
        <section className="w-full md3:w-[40%] flex flex-col items-center justify-center gap-3">
          <Link
            href="/"
            className="flex flex-col items-center justify-center gap-2"
          >
            <Image
              src={onimiseaIcon}
              alt="Onimisea Icon"
              width={300}
              height={250}
              className="w-[120px] h-auto"
            />
            <h1 className="uppercase text-5xl bg-gradient-to-r from-[#3219c8] via-[#ffb500] to-[#3219c8] text-transparent bg-clip-text tracking-widest font-milkmed">
              onimisea
            </h1>
          </Link>

          <p className="text-center tracking-widest text-lg">
            Fullstack Web/3 Developer
          </p>
        </section>
      </div> */}
    </div>
  );
}
