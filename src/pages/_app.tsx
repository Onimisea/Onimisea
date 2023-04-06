import localFont from "@next/font/local";
import "@/styles/globals.css";

const p22 = localFont({
  src: [
    {
      path: "../../public/fonts/p22r.ttf",
      weight: "400",
    },
    {
      path: "../../public/fonts/p22h.ttf",
      weight: "700",
    },
  ],
});

const lm = localFont({
  src: [
    {
      path: "../../public/fonts/lml.otf",
      weight: "300",
    },
    {
      path: "../../public/fonts/lmr.otf",
      weight: "400",
    },
    {
      path: "../../public/fonts/lmm.otf",
      weight: "500",
    },
    {
      path: "../../public/fonts/lmb.otf",
      weight: "700",
    },
  ],
});

const variableFont = localFont({
  src: "../../public/fonts/lmb.otf",
});

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  <style jsx global>{`
    :root {
      /* ... */
      --p22-font: ${p22.style.fontFamily};
      --lm-font: ${lm.style.fontFamily};
      --lm2-font: ${variableFont.style.fontFamily};
    }
  `}</style>;

  return <Component {...pageProps} />;
}
