import { DM_Sans, IBM_Plex_Sans, IBM_Plex_Mono, Instrument_Serif } from "next/font/google"

export const onimiseaSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "optional",
})

export const onimiseaBody = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-ibm-plex-sans",
  display: "optional",
})

export const onimiseaMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-ibm-plex-mono",
  display: "optional",
  preload: false,
})

export const onimiseaSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument-serif",
  display: "optional",
  style: "italic",
})

export const onimiseaFontClassName = `${onimiseaSans.variable} ${onimiseaBody.variable} ${onimiseaMono.variable} ${onimiseaSerif.variable}`
