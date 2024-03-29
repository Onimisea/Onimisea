import Image from "next/image";
import Link from "next/link";
import onimiseaIcon from "@/public/imgs/onimisea_icon.png";

const FooterLogo = () => {
  return (
    <section className="w-full md3:w-[30%] flex flex-col items-center justify-center gap-3">
      <Link
        href="/"
        className="flex flex-col items-center justify-center gap-2"
      >
        <Image
          src={onimiseaIcon}
          alt="Onimisea Icon"
          width={200}
          height={150}
          className="w-[70px] h-auto"
        />
        <h1 className="uppercase text-3xl font-milkbold bg-gradient-to-r from-[#3219c8] via-[#ffb500] to-[#3219c8] text-transparent bg-clip-text tracking-widest">
          onimisea
        </h1>
      </Link>

      <p className="tracking-wide text-center">Fullstack Web/3 Developer</p>
    </section>
  );
};

export default FooterLogo;
