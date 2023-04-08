import { PropsWithChildren } from "react";
import { useRouter } from "next/router";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  // console.log(router);

  return (
    <section className="w-full h-screen dark:bg-dark font-p22Regular text-textColor-light dark:text-secondary-500 overflow-x-hidden overflow-y-auto scrollbar-thin scrollbar-track-primary-500 scrollbar-thumb-tertiary-500 scrollbar-track-rounded-md scrollbar-thumb-rounded-md">
      {router.asPath === "/admin" ? (
        <section className="bg-blue-200 w-[90%] mx-auto relative">
          {/* Header */}
          {/* <Header /> */}

          {/* Main */}
          <section className="">{children}</section>

          {/* Footer */}
          {/* <Footer /> */}
        </section>
      ) : (
        <section className="bg-white dark:bg-dark w-[90%] mx-auto relative">
          {/* Header */}
          <Header />

          {/* Main */}
          <section className="py-6 bg-orange-200">{children}</section>

          {/* Footer */}
          <Footer />
        </section>
      )}
    </section>
  );
};
export default Layout;
