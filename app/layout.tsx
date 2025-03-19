import localFont from "next/font/local";
import "./globals.css";

const milkbold = localFont({
  src: "./lemonbold.otf",
  variable: "--milkbold",
  display: "swap",
});

const milkmedium = localFont({
  src: "./lemonmedium.otf",
  variable: "--milkmed",
  display: "swap",
});

const probook = localFont({
  src: "./probook.ttf",
  variable: "--probook",
  display: "swap",
});

const promedium = localFont({
  src: "./promedium.ttf",
  variable: "--promed",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${milkbold.variable} ${milkmedium.variable} ${probook.variable} ${promedium.variable} antialiased text-white bg-black-100 font-probook`}
      >
        {children}
      </body>
    </html>
  );
}
