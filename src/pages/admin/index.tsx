import Head from "next/head";
import Image from "next/image";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState, wrapper } from "@/redux/store";
import { AdminVerifyApi } from "@/redux/axios/apis/auth";
import {
  setAdminInfo,
  setAdminToken,
  setIsAuth,
} from "@/redux/features/auth/authSlice";
import Link from "next/link";
import { GetServerSideProps } from "next";
import LogoutBtn from "@/components/LogoutBtn";
import Footer from "@/components/Footer";
import AdminHeader from "@/components/AdminHeader";

type Props = {};

const Index = (props: Props) => {
  const dispatch = useDispatch();

  const [authAdmin, setAuthAdmin] = useState(null);
  const [authMessage, setAuthMessage] = useState<string | null>(null);

  const { isAuth, adminToken, adminInfo } = useSelector(
    (state: AppState) => state.auth
  );

  useEffect(() => {
    try {
      const res = AdminVerifyApi().then((data) => {
        if (data.data && data.data.error) {
          dispatch(setIsAuth(false));
          dispatch(setAdminToken(null));
          dispatch(setAdminInfo(null));

          setAuthMessage(data.data.error);
        } else {
          dispatch(setIsAuth(data.data.isAuth));
          dispatch(setAdminToken(data.data.adminToken));
          dispatch(setAdminInfo(data.data.adminInfo));
        }
      });
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Onimisea | Dashboard | Full-stack Web/3 Developer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Your Trusted Digital Specialist" />
      </Head>

      {isAuth ? (
        <section className="w-full ">
          {/* Header */}
          <AdminHeader />

          <section className="bg-red-200 w-full flex items-start justify-between">
            <section className="w-[35%] sm:w-[30%] md:w-[25%] lg:w-[20%] bg-red-400">
              Sidebar
            </section>

            <section className="w-[60%] sm:w-[65%] md:w-[70%] lg:w-[75%] bg-red-600">
              Dashboard
            </section>

            {/* <LogoutBtn /> */}
          </section>

          {/* Footer */}
          <Footer />
        </section>
      ) : (
        <section className="w-full h-screen flex items-center justify-center">
          {authMessage && authMessage.includes("are not AUTHENTICATED") && (
            <section className="flex flex-col items-center gap-4">
              <h1>{authMessage}</h1>
              <Link
                href="/admin/login"
                className="bg-gradient-primsec-f hover:bg-gradient-primsec-b text-white text-md rounded-full cursor-pointer duration-500 hover:shadow-md px-4 py-1"
              >
                Log In
              </Link>
            </section>
          )}

          {authMessage && authMessage.includes("Invalid TOKEN") && (
            <section className="flex flex-col items-center gap-4">
              <h1>{authMessage}</h1>
              <Link
                href="/admin/login"
                className="bg-gradient-primsec-f hover:bg-gradient-primsec-b text-white text-md rounded-full cursor-pointer duration-500 hover:shadow-md px-4 py-1"
              >
                Log In
              </Link>
            </section>
          )}
        </section>
      )}
    </>
  );
};

export default Index;

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async ({ params }) => {
    // we can set the initial state from here
    // we are setting to false but you can run your custom logic here
    // await store.dispatch(selectIsAuth(false));
    // await store.dispatch(selectAdminToken(null));
    // await store.dispatch(selectAdminInfo(null));

    return {
      props: {},
    };
  });
