import LogoBox from "@/components/LogoBox";

type Props = {}
const login = (props: Props) => {
  return (
    <section className="bg-red-500 w-[90%] sm:w-[80%] md:w-[50%] lg:w-[40%] mx-auto flex flex-col items-center justify-center">
      <LogoBox />
      {/* <section className="">register</section>
      <section className="">register</section> */}
    </section>
  );
}
export default login