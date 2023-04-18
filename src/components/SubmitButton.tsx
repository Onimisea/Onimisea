import { useEffect } from "react";

type Props = {
  buttonText: string;
  buttonType: string;
};

const SubmitButton = ({ buttonText, buttonType }: Props) => {
  return (
    <button
      type="submit"
      className={`w-full lg:w-fit px-4 py-[6px] grid place-items-center mx-auto ${
        buttonType === "primary"
          ? `bg-gradient-primsec-f hover:bg-gradient-primsec-b text-white text-sm rounded-full cursor-pointer duration-500 ml-0 lg:ml-4 hover:shadow-md flex`
          : buttonType === "secondary"
          ? `bg-white dark:bg-tertiary-500 text-textColor-light dark:text-gray-200 border dark:border-[0] border-primary-500 hover:bg-gradient-primsec-b hover:border-[0] hover:text-white text-sm rounded-full cursor-pointer duration-500 hover:shadow-md flex`
          : `bg-white dark:bg-tertiary-500 bg-gradient-primsec-f hover:bg-gradient-primsec-b text-white dark:text-gray-200 hover:text-white text-sm rounded-full cursor-pointer duration-500 hover:shadow-md flex`
      }`}
    >
      {buttonText}
    </button>
  );
};
export default SubmitButton;
