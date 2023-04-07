type Props = {
  buttonText: string;
  buttonType: string;
};

const Call2Action = ({ buttonText, buttonType }: Props) => {
  return (
    <button
      className={`grid place-items-center ${
        buttonType === "primary"
          ? "bg-gradient-primsec-f hover:bg-gradient-primsec-b text-white text-sm px-6 py-[5px] rounded-full cursor-pointer duration-500 ml-4 hover:shadow-md hidden sm:flex"
          : buttonType === "secondary"
          ? "bg-white text-textColor-light border border-primary-500 hover:bg-gradient-primsec-b hover:border-none hover:text-white text-sm px-6 py-[4px] rounded-full cursor-pointer duration-500 hover:shadow-md hidden sm:flex"
          : "bg-white hover:bg-gradient-primsec-b text-textColor-light hover:text-white text-sm px-6 py-[5px] rounded-full cursor-pointer duration-500 hover:shadow-md hidden sm:flex"
      }`}
    >
      {buttonText}
    </button>
  );
};
export default Call2Action;
