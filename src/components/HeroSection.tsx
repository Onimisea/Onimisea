import Call2Action from "./Call2Action";

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <section className="w-full pt-4 pb-10 md:h-full flex flex-col lg:flex-row items-center justify-center">
      <section className="w-full flex flex-col lg:flex-row items-center justify-center lg:gap-20">
        <section className="bg-white w-full lg:w-[50%]">
          <p className="text-tertiary-500">Hello, I&apos;m</p>

          <section className="">
            <h1 className="">Fullstack Web/3 Developer</h1>
            <p className="">And Your Trusted Digital Specialist</p>
          </section>

          <section className="">
            <p className="">
              I design and develop bespoke websites and applications for small
              businesses, help them establish strong digital presence to
              maximize their marketing efforts and improve their sales.
            </p>
            <p className="">And I drop useful nuggets regularly...</p>
          </section>

          <section className=""></section>
        </section>

        <section className="bg-red-500 w-full lg:w-[50%]">HeroSection</section>
      </section>
    </section>
  );
};
export default HeroSection;
