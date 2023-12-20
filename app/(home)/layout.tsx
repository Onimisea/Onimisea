import type { Metadata } from "next";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

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
    <body className="bg-gradient-to-r from-slate-50 via-[#FFF9d9] to-slate-50">
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Navbar />
        <main className="py-24">{children}</main>
        <Footer />
      </ThemeProvider>
    </body>
  );
}
