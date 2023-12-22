import "./globals.css";
import localFont from "next/font/local";
import type { Metadata } from "next";
import { cn } from "@/lib/utils";


const probook = localFont({
  src: "../public/fonts/probook.ttf",
  display: "swap",
  variable: "--probook",
});

const promedium = localFont({
  src: "../public/fonts/promedium.ttf",
  display: "swap",
  variable: "--promedium",
});

const milkbold = localFont({
  src: "../public/fonts/milkbold.woff2",
  display: "swap",
  variable: "--milkbold",
});

const milkmedium = localFont({
  src: "../public/fonts/milkmedium.woff2",
  display: "swap",
  variable: "--milkmedium",
});

export const metadata: Metadata = {
  manifest: "/favicons/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        probook.variable,
        promedium.variable,
        milkbold.variable,
        milkmedium.variable,
        "font-probook"
      )}
    >
      
        {children}
      
    </html>
  );
}
