import "./globals.css";
import localFont from "next/font/local";
import type { Metadata } from "next";
import { Providers } from "./providers";

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
  manifest: "/favicons/site.webmanifest",
  // icons:
};

{
  /* <link rel="apple-touch-icon" sizes="180x180" href="/app/favicons/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/app/favicons/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/app/favicons/favicon-16x16.png">
<link rel="manifest" href="/app/favicons/site.webmanifest">
<link rel="mask-icon" href="/app/favicons/safari-pinned-tab.svg" color="#5bbad5">
<link rel="shortcut icon" href="/app/favicons/favicon.ico">
<meta name="msapplication-TileColor" content="#da532c">
<meta name="msapplication-config" content="/app/favicons/browserconfig.xml">
<meta name="theme-color" content="#ffffff"></meta> */
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body
        className={`${probook.variable} ${promedium.variable} ${milkmedium.variable} ${milkbold.variable} font-probook bg-gradient-to-tr from-slate-50 via-slate-100 to-slate-50`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
