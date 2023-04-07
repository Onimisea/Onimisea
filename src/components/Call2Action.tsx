type Props = {
  buttonText: string;
  buttonType: string;
};

const Call2Action = ({ buttonText, buttonType }: Props) => {
  return (
    <button
      className={`w-fit px-4 pt-2 pb-1  ${
        buttonType === "primary"
          ? "bg-gradient-primsec-f hover:bg-gradient-primsec-b text-white text-sm rounded-full cursor-pointer duration-500 ml-4 hover:shadow-md hidden sm:flex "
          : buttonType === "secondary"
          ? "bg-white text-textColor-light border border-primary-500 hover:bg-gradient-primsec-b hover:border-none hover:text-white text-sm rounded-full cursor-pointer duration-500 hover:shadow-md hidden sm:flex"
          : "bg-white hover:bg-gradient-primsec-b text-textColor-light hover:text-white text-sm rounded-full cursor-pointer duration-500 hover:shadow-md hidden sm:flex "
      }`}
    >
      {buttonText}
    </button>
  );
};
export default Call2Action;
