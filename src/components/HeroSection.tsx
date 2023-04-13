
import EmailSubscriptionForm from "./EmailSubscriptionForm";

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <section className="w-full pt-4 pb-10 md:h-full flex flex-col lg:flex-row items-center justify-center">
      <section className="w-full flex flex-col lg:flex-row items-center justify-between">
        <section className="w-full lg:w-[45%]">
          <p className="text-tertiary-500 text-md">Hello, I&apos;m</p>

            <h1 className="text-2xl md:text-3xl lg:text-4xl font-p22Bold">Your Fullstack <span className="text-tertiary-500">Web/3</span> <br />Developer <span className="text-tertiary-500 text-lg md:text-xl lg:text-2xl">&</span> <span className="text-xl md:text-2xl lg:text-3xl">Software <br />Engineer</span></h1>
          
            <p className="my-4 text-justify">
              I design and develop bespoke websites and applications for small
              businesses, help them establish strong digital presence to
              maximize their marketing efforts and improve their sales. I drop useful nuggets regularly, be sure to subscribe.</p>
          

          <EmailSubscriptionForm />
        </section>

        <section className="bg-gray-200 w-full lg:w-[42%] rounded-md flex flex-col items-center justify-center gap-4 group">
<section className="w-[250px] h-[250px] rounded-full bg-gradient-primsec-ir group-hover:bg-gradient-primsec-i p-2
 grid place-items-center">
<section className="w-full h-full rounded-full bg-white font-lmBold text-3xl grid place-items-center">
Onimisea
</section>
</section>

<section className="w-full flex items-center justify-center spacing-x-4"></section>
</section>
      </section>
    </section>
  );
};
export default HeroSection;
