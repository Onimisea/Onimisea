import Image from "next/image";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center  min-h-screen">
      <main className="">
        <section className="">
          <h1 className="text-4xl font-milkbold bg-gradient-to-r from-[#3219c8] via-[#007fff] to-[#3219c8] text-transparent bg-clip-text">
            onimisea
          </h1>
          <p className="text-center text-md font-probook mt-2 bg-gradient-primary bg-clip-text">
            coolest dev in africa
          </p>

        </section>
      </main>
    </section>
  );
}
