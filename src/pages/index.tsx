import Head from "next/head";
import Image from "next/image";

// import { useDispatch, useSelector } from "react-redux";

import {
  selectAuthState,
  setAuthState,
} from "../redux/features/auth/authSlice";
import { wrapper } from "@/redux/store";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  

  return (
    <>
      <Head>
        <title>Onimisea | Full-stack Web/3 Developer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Your Trusted Digital Specialist" />
      </Head>

      <section className="w-full">
        <HeroSection />
      </section>
    </>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ params }) => {
      // we can set the initial state from here
      // we are setting to false but you can run your custom logic here
      await store.dispatch(setAuthState(false));

      return {
        props: {
          authState: false,
        },
      };
    }
);
