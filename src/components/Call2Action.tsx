type Props = {
  buttonText: string;
  buttonType: string;
};

const Call2Action = ({ buttonText, buttonType }: Props) => {
  return (
    <button
      className={` ${
        buttonType === "primary"
          ? "bg-gradient-primsec-f hover:bg-gradient-primsec-b text-white text-sm rounded-full cursor-pointer duration-500 ml-4 hover:shadow-md hidden sm:flex flex items-center justify-center w-[70px] h-[30px]"
          : buttonType === "secondary"
          ? "bg-white text-textColor-light border border-primary-500 hover:bg-gradient-primsec-b hover:border-none hover:text-white text-sm rounded-full cursor-pointer duration-500 hover:shadow-md hidden sm:flex flex items-center justify-center w-[50px] h-[30px]"
          : "bg-white hover:bg-gradient-primsec-b text-textColor-light hover:text-white text-sm rounded-full cursor-pointer duration-500 hover:shadow-md hidden sm:flex flex items-center justify-center w-fit h-[30px]"
      }`}
    >
      {buttonText}
    </button>
  );
};
export default Call2Action;
