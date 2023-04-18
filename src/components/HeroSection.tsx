import Image from "next/image";
import Link from "next/link";
import EmailSubscriptionForm from "./EmailSubscriptionForm";
import {
  BsFacebook,
  BsLinkedin,
  BsGithub,
  BsTwitter,
  BsInstagram,
} from "react-icons/bs";
import opp from "../../public/OnimiseaProfilePicture.jpg";

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <section className="w-full pt-4 pb-10 md:h-full flex flex-col lg:flex-row items-center justify-center">
      <section className="w-full flex flex-col gap-6 lg:gap-0 lg:flex-row items-center justify-center lg:justify-between">
        <section className="w-full lg:w-[45%]">
          <p className="text-tertiary-500 dark:text-gray-300 text-md">
            Hello, I&apos;m
          </p>

          <h1 className="text-3xl lg:text-4xl font-p22Bold">
            Your Fullstack{" "}
            <span className="text-tertiary-500 dark:text-gray-300">Web/3</span>{" "}
            Developer{" "}
            <span className="text-tertiary-500 text-xl lg:text-2xl dark:text-gray-300">
              &
            </span>{" "}
            <span className="text-2xl lg:text-3xl">Software Engineer</span>
          </h1>

          <p className="my-4 lg:my-6 text-justify font-normal dark:text-gray-300">
            I design and develop bespoke websites and applications for small
            businesses, help them establish strong digital presence to maximize
            their marketing efforts and improve their sales. I drop useful
            nuggets regularly, be sure to subscribe.
          </p>

          <EmailSubscriptionForm />
        </section>

        <section className="bg-gray-100 dark:bg-gray-300 w-full h-full lg:w-[45%] rounded-md flex flex-col items-center justify-center gap-6 group px-6 py-10">
          <section
            className="w-[250px] h-[250px] rounded-full bg-gradient-primsec-ir group-hover:bg-gradient-primsec-i
 grid place-items-center shadow-lg overflow:hidden"
          >
            <section className="w-[240px] h-[240px] rounded-full bg-white dark:bg-gray-300 grid place-items-center">
              <Image
                src={opp}
                alt="Onimisea | Coolest Dev in Africa"
                width={237}
                height={237}
                loading="eager"
                className="w-[237px] h-[237px] rounded-full object-cover"
              />
            </section>
          </section>

          <section className="w-full flex items-center justify-center gap-6">
            <Link
              href="/"
              className="text-xl hover:text-2xl text-tertiary-500 hover:text-secondary-500 group-hover:text-primary duration-500"
            >
              <BsFacebook />
            </Link>
            <Link
              href="/"
              className="text-xl hover:text-2xl text-tertiary-500 hover:text-secondary-500 group-hover:text-primary duration-500"
            >
              <BsTwitter />
            </Link>
            <Link
              href="/"
              className="text-xl hover:text-2xl text-tertiary-500 hover:text-secondary-500 group-hover:text-primary duration-500"
            >
              <BsInstagram />
            </Link>
            <Link
              href="/"
              className="text-xl hover:text-2xl text-tertiary-500 hover:text-secondary-500 group-hover:text-primary duration-500"
            >
              <BsLinkedin />
            </Link>
            <Link
              href="/"
              className="text-xl hover:text-2xl text-tertiary-500 hover:text-secondary-500 group-hover:text-primary duration-500"
            >
              <BsGithub />
            </Link>
          </section>
        </section>
      </section>
    </section>
  );
};
export default HeroSection;
