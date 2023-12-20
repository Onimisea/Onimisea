import FooterLogo from "@/components/FooterLogo";
import React from "react";

const Home = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen">
      <section className="">
        <h1 className="font-milkbold uppercase font-bold text-4xl bg-gradient-to-r from-[#3219c8] via-[#007fff] to-[#3219c8] text-transparent bg-clip-text">
          onimisea
        </h1>
        <p className="text-center text-md mt-2 text-onimisea_text_light">
          coolest dev in africa
        </p>
      </section>

      {/* <FooterLogo /> */}
    </section>
  );
};

export default Home;
