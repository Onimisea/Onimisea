import { PropsWithChildren, useState } from "react";
import { useRouter } from "next/router";
import Footer from "./Footer";
import Header from "./Header";

type Props = {
  activePage: string;
  setActivePage: (value: string) => void;
};

const Layout = ({ children }: PropsWithChildren) => {
  const router = useRouter();

  console.log(router);

  return (
    <section>
      {router.asPath.includes("/admin") ? (
        <section>
          {router.asPath.includes("/admin/login") ||
          router.asPath.includes("/admin/register") ? (
            <section className="h-screen my-20 md:my-30 lg:my-40 dark:bg-dark overflow-x-hidden overflow-y-auto scrollbar-thin scrollbar-track-primary-500 scrollbar-thumb-tertiary-500 scrollbar-track-rounded-md scrollbar-thumb-rounded-md">
              {/* Main */}
              <section className="w-full">{children}</section>
            </section>
          ) : (
            <section className="bg-blue-200 w-[90%] mx-auto relative">
              {/* Header */}
              {/* <Header /> */}

              {/* Main */}
              <section className="">{children}</section>

              {/* Footer */}
              {/* <Footer /> */}
            </section>
          )}
        </section>
      ) : (
        <section className="w-full h-screen dark:bg-dark font-p22Regular text-textColor-light dark:text-secondary-500 overflow-x-hidden overflow-y-auto scrollbar-thin scrollbar-track-primary-500 scrollbar-thumb-tertiary-500 scrollbar-track-rounded-md scrollbar-thumb-rounded-md">
          <section className="bg-white dark:bg-dark w-[90%] mx-auto relative">
            {/* Header */}
            <Header />

            {/* Main */}
            <section className="py-6">{children}</section>

            {/* Footer */}
            <Footer />
          </section>
        </section>
      )}
    </section>
  );
};
export default Layout;
