import { DM_Sans, JetBrains_Mono } from "next/font/google"

export const onimiseaSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "optional",
})

export const onimiseaMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "optional",
  preload: false,
})

export const onimiseaFontClassName = `${onimiseaSans.variable} ${onimiseaMono.variable}`
