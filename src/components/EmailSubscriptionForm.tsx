import { useForm, SubmitHandler } from "react-hook-form";
import SubmitButton from "./SubmitButton";

type FormValues = {
  email: string;
};

type Props = {};

const EmailSubscriptionForm = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col">
      <section className="w-full flex flex-col items-center justify-start lg:flex-row gap-2 lg:gap-0">
        <input
          type="email"
          {...register("email", { required: "Email Address is required" })}
          aria-invalid={errors.email ? "true" : "false"}
          placeholder="enter email address"
          className="bg-white dark:bg-transparent border-[1.5px] dark:border-[2px] border-tertiary-500 rounded-full px-4 py-1 w-full hover:outline-none focus:outline-none 
hover:border-secondary-500 focus:border-secondary-500 placeholder-primary-500 dark:placeholder-gray-300"
        />
        <SubmitButton buttonText="Subscribe" buttonType="primary" />
      </section>

      {errors.email && (
        <p className="text-red-600 w-full text-sm mt-2 pl-4" role="alert">
          {errors.email?.message}
        </p>
      )}
    </form>
  );
};

export default EmailSubscriptionForm;
