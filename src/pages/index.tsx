import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Onimisea | Full-stack Web/3 Developer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Your Trusted Digital Specialist" />
      </Head>
      <section className="app grid place-items-center w-full h-screen bg-[#f5f5f5]">
        <h2 className=" text-4xl font-lm2">Onimisea</h2>
      </section>
    </>
  );
}
