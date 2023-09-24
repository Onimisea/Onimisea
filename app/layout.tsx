import "./globals.css";
import localFont from "next/font/local";
import type { Metadata } from "next";
import { ThemeProviderWrapper } from "../contexts/ThemeContext";

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
  src: "../public/fonts/milkbold.otf",
  display: "swap",
  variable: "--milkbold",
});

const milkmedium = localFont({
  src: "../public/fonts/milkmedium.otf",
  display: "swap",
  variable: "--milkmedium",
});

export const metadata: Metadata = {
  title: "Onimisea | Fullstack Web Developer",
  description: "Coolest Dev in Africa",
  manifest: '/manifest.webmanifest'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body
        className={`${probook.variable} ${promedium.variable} ${milkmedium.variable} ${milkbold.variable} font-probook bg-gradient-to-tr from-slate-50 via-slate-100 to-slate-50`}
      >
        <ThemeProviderWrapper>{children}</ThemeProviderWrapper>
      </body>
    </html>
  );
}
