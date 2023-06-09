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

  return (
    <section>
      {router.asPath.includes("/admin") ? (
        <section>
          {router.asPath.includes("/admin/login") ||
          router.asPath.includes("/admin/register") ? (
            <section className="my-20 md:my-30 lg:my-40 dark:bg-dark overflow-x-hidden overflow-y-auto scrollbar-thin scrollbar-track-primary-500 scrollbar-thumb-tertiary-500 scrollbar-track-rounded-md scrollbar-thumb-rounded-md">
              {/* Main */}
              <section className="w-full">{children}</section>
            </section>
          ) : (
            <section className="w-full h-screen dark:bg-dark font-p22Book text-md text-textColor-light dark:text-secondary-500 overflow-x-hidden overflow-y-auto scrollbar-thin scrollbar-track-primary-500 scrollbar-thumb-tertiary-500 scrollbar-track-rounded-md scrollbar-thumb-rounded-md">
              <section className="bg-white dark:bg-dark relative">
                {/* Main */}
                <section className="">{children}</section>
              </section>
            </section>
          )}
        </section>
      ) : (
        <section className="w-full h-screen dark:bg-dark font-p22Book text-md text-textColor-light dark:text-secondary-500 overflow-x-hidden overflow-y-auto scrollbar-thin scrollbar-track-primary-500 scrollbar-thumb-tertiary-500 scrollbar-track-rounded-md scrollbar-thumb-rounded-md">
          {/* Header */}
          <Header />

          {/* Main */}
          <section className="bg-white dark:bg-dark w-[90%] mx-auto relative py-6">
            {children}
          </section>

          {/* Footer */}
          <Footer />
        </section>
      )}
    </section>
  );
};
export default Layout;
