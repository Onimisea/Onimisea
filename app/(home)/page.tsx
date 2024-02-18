import BlogSection from "@/components/BlogSection";
import HeroSection from "@/components/HeroSection";
import PortfolioSection from "@/components/PortfolioSection";
import ReviewsSlider from "@/components/ReviewsSlider";
import TechstackSlider from "@/components/TechstackSlider";

const Home = () => {
  return (
    <section className="flex flex-col items-center justify-center">
      <HeroSection />
      <TechstackSlider />
      <PortfolioSection />
      <ReviewsSlider />
      <BlogSection />

      {/* <section className="py-16">
        <h1 className="uppercase text-3xl font-milkbold bg-gradient-to-r from-[#3219c8] via-[#ffb500] to-[#3219c8] text-transparent bg-clip-text tracking-widest">
          onimisea
        </h1>
        <p className="text-center text-md mt-2 text-onimisea_accent">
          coolest dev in africa
        </p>
      </section> */}
    </section>
  );
};

export default Home;
