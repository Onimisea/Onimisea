import "./globals.css";
import localFont from "next/font/local";
import type { Metadata } from "next";

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
  title: "Onimisea",
  description: "Coolest Dev in Africa",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${probook.variable} ${promedium.variable} ${milkmedium.variable} ${milkbold.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
