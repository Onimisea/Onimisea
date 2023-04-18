import Head from "next/head";
import Link from "next/link";
import LogoBox from "@/components/LogoBox";
import SubmitButton from "@/components/SubmitButton";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {};

type FormValues = {
  email: string;
  password: string;
};





const Login = (props: Props) => {


const {
    register,
    handleSubmit,
    formState: { errors }, setError,
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
      try {
         alert(JSON.stringify(data));
      } catch (err) {
         console.log(err)
      }
  };



  return (
    <>
      <Head>
        <title>Onimisea | Admin Register | Full-stack Web/3 Developer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Your Trusted Digital Specialist" />
      </Head>

      <section className="w-[90%] sm:w-[60%] lg:w-[40%] mx-auto flex flex-col items-center justify-center gap-10">
        <LogoBox />

        <section className="w-full flex flex-col items-center justify-center gap-8">

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex flex-col gap-4"
          >
            

            <label htmlFor="email" className="">
              <input
                type="email"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email Address is required",
                  },
                  pattern: {
                    value:
                      /(?:[a-z0-9+!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i,
                    message: "Please enter a valid email",
                  },
                })}
                aria-invalid={errors.email ? "true" : "false"}
                placeholder="email address"
                className="bg-white dark:bg-transparent border-[1.5px] dark:border-[2px] border-primary-500 rounded-full px-4 py-1 w-full hover:outline-none focus:outline-none hover:border-[2.5px] focus:border-[2.5px]
hover:border-secondary-500 focus:border-secondary-500 placeholder-primary-500 dark:placeholder-gray-300"
              />
              {errors.email && (
                <p
                  className="text-red-600 w-full text-sm mt-2 pl-4"
                  role="alert"
                >
                  {errors.email?.message}
                </p>
              )}
            </label>

            
            <label htmlFor="password" className="">
              <input
                type="password"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is required",
                  },
                  pattern: {
                    value:
                      /(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
                    message:
                      "The password length must be greater than or equal to 8, must contain at least 1 uppercase, 1 lowercase, 1 number and must contain 1 special character",
                  },
                })}
                aria-invalid={errors.password ? "true" : "false"}
                placeholder="password"
                className="bg-white dark:bg-transparent border-[1.5px] dark:border-[2px] border-primary-500 rounded-full px-4 py-1 w-full hover:outline-none focus:outline-none hover:border-[2.5px] focus:border-[2.5px]
hover:border-secondary-500 focus:border-secondary-500 placeholder-primary-500 dark:placeholder-gray-300"
              />
              {errors.password && (
                <p
                  className="text-red-600 w-full text-sm mt-2 pl-4"
                  role="alert"
                >
                  {errors.password?.message}
                </p>
              )}
            </label>

            <SubmitButton buttonText="Login" buttonType="other" />
          </form>

          <p className="text-center text-primary-500 text-sm">
            Not an Admin?{" "}
            <span className="text-secondary-500 hover:text-primary-500">
              <Link href="/admin/register">Register</Link>
            </span>
          </p>
        </section>
      </section>
</>
  );
}
export default Login
