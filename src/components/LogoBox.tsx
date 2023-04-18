import Image from "next/image";
import Link from "next/link";
import logoIcon from "../../public/onimiseaIconLarge.png";

type Props = {};

const LogoBox = (props: Props) => {
  return (
    <Link href="/">
      <section className="w-[150px] flex flex-col items-center justify-center gap-[2px]">
        <Image
          src={logoIcon}
          alt="Onimisea"
          width={0}
          height={0}
          className="w-[35%] h-auto"
        />

        <h1 className="font-lmMedium text-3xl text-primary-500 dark:text-gray-200">
          Onimisea
        </h1>
      </section>
    </Link>
  );
};
export default LogoBox;
