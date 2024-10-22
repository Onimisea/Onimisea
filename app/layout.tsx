import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const milkbold = localFont({
  src: "./fonts/lemonbold.otf",
  variable: "--milkbold",
  display: "swap",
});

const milkmedium = localFont({
  src: "./fonts/lemonmedium.otf",
  variable: "--milkmed",
  display: "swap",
});

const probook = localFont({
  src: "./fonts/probook.ttf",
  variable: "--probook",
  display: "swap",
});

const promedium = localFont({
  src: "./fonts/promedium.ttf",
  variable: "--promed",
  display: "swap",
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
