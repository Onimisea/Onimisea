import type { Metadata } from "next";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import Sidebar from "@/components/MobileMenu";

export const metadata: Metadata = {
  title: "Onimisea | Fullstack Web/3 Developer",
  description: "Coolest Dev in Africa",
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <body className="bg-gradient-to-r from-slate-200 via-[#fafafa] to-slate-200 dark:from-onimisea_bg_dark dark:via-onimisea_text_light dark:to-onimisea_bg_dark flex flex-col relative">
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Navbar />
        <Sidebar />
        <main className="relative mt-20 py-24">{children}</main>
        <Footer />
      </ThemeProvider>
    </body>
  );
}
