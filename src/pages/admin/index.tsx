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
import Footer from "@/components/Footer";
import AdminHeader from "@/components/AdminHeader";
import AdminSidebar from "@/components/AdminSidebar";
import { NavLink } from "@/shared/types";

type Props = {};

const Index = (props: Props) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [authMessage, setAuthMessage] = useState<string | null>(null);

  const { isAuth, adminToken, adminInfo } = useSelector(
    (state: AppState) => state.auth
  );

  const [isAdminSidebarMenuToggled, setIsAdminSidebarMenuToggled] =
    useState(true);

  const [adminPages, setAdminPages] = useState<NavLink[]>([]);

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

  useEffect(() => {
    if (typeof window !== undefined || typeof window !== null) {
      if (router.route) {
        setAdminPages([
          {
            id: 1,
            name: "Dashboard",
            href: "/admin",
            active: router.route === "/admin" ? true : false,
          },
          {
            id: 2,
            name: "Portfolio",
            href: "/admin/portfolio",
            active: router.route === "/admin/portfolio" ? true : false,
          },
          {
            id: 3,
            name: "Domains",
            href: "/admin/domains",
            active: router.route === "/admin/domains" ? true : false,
          },
          {
            id: 4,
            name: "Blog",
            href: "/admin/blog",
            active: router.route === "/admin/blog" ? true : false,
          },
          {
            id: 5,
            name: "Hire Me",
            href: "/admin/hire-me",
            active: router.route === "/admin/hire-me" ? true : false,
          },
          {
            id: 6,
            name: "CV",
            href: "/admin/cv",
            active: router.route === "/admin/cv" ? true : false,
          },
          {
            id: 7,
            name: "Ads",
            href: "/admin/ads",
            active: router.route === "/admin/ads" ? true : false,
          },
          // {
          //   id: 8,
          //   name: "Digital Products",
          //   href: "/admin/digital-products",
          //   active: router.route === "/admin/digital-products" ? true : false,
          // },
          {
            id: 9,
            name: "Contacts",
            href: "/admin/contacts",
            active: router.route === "/admin/contacts" ? true : false,
          },
        ]);
      }
    }
  }, [router.isReady, router.route]);

  return (
    <>
      <Head>
        <title>Onimisea | Dashboard | Full-stack Web/3 Developer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Your Trusted Digital Specialist" />
      </Head>

      {isAuth ? (
        <section className="w-full relative">
          {/* Header */}
          <AdminHeader
            isAdminSidebarMenuToggled={isAdminSidebarMenuToggled}
            setIsAdminSidebarMenuToggled={setIsAdminSidebarMenuToggled}
          />

          <section className="bg-gray-200 dark:bg-tertiary-500 w-full flex items-start justify-between relative p-3">
            <AdminSidebar
              onClickOutside={() => {
                setIsAdminSidebarMenuToggled(false);
              }}
              isAdminSidebarMenuToggled={isAdminSidebarMenuToggled}
              setIsAdminSidebarMenuToggled={setIsAdminSidebarMenuToggled}
              adminPages={adminPages}
            />

            <section className="w-full dark:bg-dark flex flex-col relative">
              <section className="rounded-full flex items-start justify-start gap-6 flex-wrap">
                <section className="bg-white w-[20%] h-[120px] flex flex-col items-center justify-center rounded-md shadow-lg gap-2">
                  <h3 className="text-md font-p22Medium">Portfolio Items</h3>
                  <h1 className="text-4xl font-lmMedium text-tertiary-500">
                    7
                  </h1>
                </section>
                <section className="bg-white w-[20%] h-[120px] flex flex-col items-center justify-center rounded-md shadow-lg gap-2">
                  <h3 className="text-md font-p22Medium">Domains for Sale</h3>
                  <h1 className="text-4xl font-lmMedium text-tertiary-500">
                    3
                  </h1>
                </section>
                <section className="bg-white w-[20%] h-[120px] flex flex-col items-center justify-center rounded-md shadow-lg gap-2">
                  <h3 className="text-md font-p22Medium">Blog Posts</h3>
                  <h1 className="text-4xl font-lmMedium text-tertiary-500">
                    29
                  </h1>
                </section>
                <section className="bg-white w-[20%] h-[120px] flex flex-col items-center justify-center rounded-md shadow-lg gap-2">
                  <h3 className="text-md font-p22Medium">Hire Me Requests</h3>
                  <h1 className="text-4xl font-lmMedium text-tertiary-500">
                    10
                  </h1>
                </section>
                <section className="bg-white w-[20%] h-[120px] flex flex-col items-center justify-center rounded-md shadow-lg gap-2">
                  <h3 className="text-md font-p22Medium">CV Downloads</h3>
                  <h1 className="text-4xl font-lmMedium text-tertiary-500">
                    15
                  </h1>
                </section>
                <section className="bg-white w-[20%] h-[120px] flex flex-col items-center justify-center rounded-md shadow-lg gap-2">
                  <h3 className="text-md font-p22Medium">Ads OnPage</h3>
                  <h1 className="text-4xl font-lmMedium text-tertiary-500">
                    8
                  </h1>
                </section>
                <section className="bg-white w-[20%] h-[120px] flex flex-col items-center justify-center rounded-md shadow-lg gap-2">
                  <h3 className="text-md font-p22Medium">Digital Products</h3>
                  <h1 className="text-4xl font-lmMedium text-tertiary-500">
                    13
                  </h1>
                </section>
                <section className="bg-white w-[20%] h-[120px] flex flex-col items-center justify-center rounded-md shadow-lg gap-2">
                  <h3 className="text-md font-p22Medium">Contact Messages</h3>
                  <h1 className="text-4xl font-lmMedium text-tertiary-500">
                    5
                  </h1>
                </section>
              </section>

              {/* <section className="">J</section>

              <section className="">K</section> */}
            </section>
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
