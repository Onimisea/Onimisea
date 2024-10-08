import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const milkbold = localFont({
  src: "./fonts/milkbold.woff2",
  variable: "--font-milkbold",
  weight: "100 200 300 400 500 600 700 800 900",
});

const milkmedium = localFont({
  src: "./fonts/milkmedium.woff2",
  variable: "--font-milkmedium",
  weight: "100 200 300 400 500 600 700 800 900",
});

const probook = localFont({
  src: "./fonts/probook.ttf",
  variable: "--font-probook",
  weight: "100 200 300 400 500 600 700 800 900",
});

const promedium = localFont({
  src: "./fonts/promedium.ttf",
  variable: "--font-promedium",
  weight: "100 200 300 400 500 600 700 800 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${milkbold.variable} ${milkmedium.variable} ${probook.variable} ${promedium.variable} antialiased font-probook`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
