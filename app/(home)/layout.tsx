import type { Metadata } from "next";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
    
    <body className="bg-gradient-to-r from-slate-100 via-[#FFF5C2] to-slate-100 flex flex-col min-h-screen">
      <Navbar />
      <main className="mt-20 py-24 flex-1">{children}</main>
      <Footer />
    </body>
  );
}
