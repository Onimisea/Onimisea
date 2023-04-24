import { useEffect } from "react";

type Props = {
  buttonText: string;
  buttonType: string;
};

const Call2Action2 = ({ buttonText, buttonType }: Props) => {

  return (
    <button
      className={`w-fit px-4 py-1  ${
        buttonType === "primary"
          ? `bg-gradient-primsec-f hover:bg-gradient-primsec-b text-white text-sm rounded-full cursor-pointer duration-500 hover:shadow-md flex `
          : buttonType === "secondary"
          ? `bg-white dark:bg-tertiary-500 text-textColor-light dark:text-gray-200 border dark:border-none border-primary-500 hover:bg-gradient-primsec-b hover:border-none hover:text-white text-sm rounded-full cursor-pointer duration-500 hover:shadow-md flex`
          : `bg-white dark:bg-tertiary-500 hover:bg-gradient-primsec-b text-textColor-light dark:text-gray-200 hover:text-white text-sm rounded-full cursor-pointer duration-500 hover:shadow-md flex`
      }`}
    >
      {buttonText}
    </button>
  );
};
export default Call2Action2;
