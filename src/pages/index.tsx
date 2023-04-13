import Head from "next/head";
import Image from "next/image";

import { useDispatch, useSelector } from "react-redux";
import { selectAuthState, setAuthState } from "../redux/authSlice";
import { wrapper } from "@/redux/store";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  const authState = useSelector(selectAuthState);
  const dispatch = useDispatch();

  return (
    <>
      <Head>
        <title>Onimisea | Full-stack Web/3 Developer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Your Trusted Digital Specialist" />
      </Head>
      {/* bg-gray-50 sm:bg-gray-200 md:bg-gray-400 lg:bg-gray-600 xl:bg-gray-800 */}
     
      <section className="w-full">
        {/* <div>
          <div>{authState ? "Logged in" : "Not Logged In"}</div>
          <button
            onClick={() =>
              authState
                ? dispatch(setAuthState(false))
                : dispatch(setAuthState(true))
            }
          >
            {authState ? "Logout" : "LogIn"}
          </button>
        </div> */}

        {/* <section className="">
          <h2 className=" text-4xl font-lmBold">Onimisea</h2>
          <h2 className=" text-4xl font-p22Regular">
            Full-stack Web/3 Developer
          </h2>
        </section> */}


        <HeroSection /> 

      </section>
    </>
  );
}

// console.log("State on server", store.getState());


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