import Head from "next/head";
import Link from "next/link";
import LogoBox from "@/components/LogoBox";
import SubmitButton from "@/components/SubmitButton";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "@/redux/store";
import toast from "react-hot-toast";

// import {
//   selectAuthState,
//   setAuthState,
// } from "../../redux/features/auth/authSlice";

import { AdminRegData, AdminRegRes } from "@/shared/types";
import { RegisterAdmin } from "@/redux/features/auth/authServices";
import { useEffect } from "react";

type Props = {};

type FormValues = {
  username: string;
  email: string;
  phone: number;
  password: string;
  confirm_password: string;
};

const Register = (props: Props) => {
  const { adminInfo, error, sucess, loading } = useSelector(
    (state: AppState) => state.auth
  );

  const dispatch = useDispatch();

  // const authState = useSelector(selectAuthState);

  const {
    register,
    handleSubmit,
    formState,
    formState: { errors, isSubmitSuccessful },
    setError,
    reset,
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data: AdminRegData) => {
    if (data.password === data.confirm_password) {
      const res = await RegisterAdmin(data);
      
      if (
        res !== undefined &&
        res.data.message.includes("Admin registered successfully")
      ) {
        toast.success(res.data.message);
      } else if (
        res !== undefined &&
        res.data.message.includes(
          "Registration failed! Maximum number of Admins reached"
        )
      ) {
        toast.error(res.data.message);
      } else if (
        res !== undefined &&
        res.data.message.includes(
          "Registration failed! Admin already registered, please login..."
        )
      ) {
        toast.error(res.data.message);
      } else {
        toast.error("An error occurred! Please try again later");
      }
    } else {
      setError(
        "confirm_password",
        {
          type: "unmatchPassword",
          message: "Passwords do not match! Please, confirm your password!",
        },
        { shouldFocus: true }
      );
    }
  };

  useEffect(() => {
    reset();
  }, [isSubmitSuccessful]);

  return (
    <>
      <Head>
        <title>Onimisea | Admin Register | Full-stack Web/3 Developer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Your Trusted Digital Specialist" />
      </Head>

      <section className="w-[90%] sm:w-[60%] lg:w-[30%] mx-auto flex flex-col items-center justify-center gap-10">
        {/* <div>
          <div>{authState ? "Logged in" : "Not Logged In"}</div>
          <button
            onClick={() =>
              authState
                ? dispatch(setAuthState(false))
                : dispatch(setAuthState(true))
            }
          >
            {authState ? "Logout" : "LogIn"}
          </button>
        </div> */}

        <LogoBox />

        <section className="w-full flex flex-col items-center justify-center gap-8">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex flex-col gap-4"
          >
            <label htmlFor="username" className="">
              <input
                type="text"
                {...register("username", {
                  required: {
                    value: true,
                    message: "Username is required",
                  },
                  pattern: {
                    value: /^[A-Za-z0-9]*$/,
                    message: "Please enter a valid username",
                  },
                })}
                aria-invalid={errors.username ? "true" : "false"}
                placeholder="username"
                className="bg-white dark:bg-transparent border-[1.5px] border-primary-500 rounded-full px-4 py-1 w-full hover:outline-none focus:outline-none
hover:border-secondary-500 focus:border-secondary-500 placeholder-primary-500 dark:placeholder-gray-300 duration-500"
              />
              {errors.username && (
                <p
                  className="text-red-600 w-full text-sm mt-2 pl-4"
                  role="alert"
                >
                  {errors.username?.message}
                </p>
              )}
            </label>

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
                className="bg-white dark:bg-transparent border-[1.5px] border-primary-500 rounded-full px-4 py-1 w-full hover:outline-none focus:outline-none
hover:border-secondary-500 focus:border-secondary-500 placeholder-primary-500 dark:placeholder-gray-300 duration-500"
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

            <label htmlFor="phone" className="">
              <input
                type="number"
                {...register("phone", {
                  required: {
                    value: true,
                    message: "Phone Number is required",
                  },
                  pattern: {
                    value: /^[0-9]*$/,
                    message: "Please enter a valid phone number",
                  },
                  maxLength: {
                    value: 11,
                    message: "Phone number cannot be more than 11 digits",
                  },
                })}
                aria-invalid={errors.phone ? "true" : "false"}
                placeholder="phone number"
                className="bg-white dark:bg-transparent border-[1.5px] border-primary-500 rounded-full px-4 py-1 w-full hover:outline-none focus:outline-none
hover:border-secondary-500 focus:border-secondary-500 placeholder-primary-500 dark:placeholder-gray-300 duration-500"
              />
              {errors.phone && (
                <p
                  className="text-red-600 w-full text-sm mt-2 pl-4"
                  role="alert"
                >
                  {errors.phone?.message}
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
                className="bg-white dark:bg-transparent border-[1.5px] border-primary-500 rounded-full px-4 py-1 w-full hover:outline-none focus:outline-none
hover:border-secondary-500 focus:border-secondary-500 placeholder-primary-500 dark:placeholder-gray-300 duration-500"
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

            <label htmlFor="confirm-password" className="">
              <input
                type="password"
                {...register("confirm_password", {
                  required: {
                    value: true,
                    message: "Please confirm your password",
                  },
                  pattern: {
                    value:
                      /(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
                    message:
                      "The password length must be greater than or equal to 8, must contain at least 1 uppercase, 1 lowercase, 1 number and must contain 1 special character",
                  },
                })}
                aria-invalid={errors.password ? "true" : "false"}
                placeholder="confirm password"
                className="bg-white dark:bg-transparent border-[1.5px] border-primary-500 rounded-full px-4 py-1 w-full hover:outline-none focus:outline-none
hover:border-secondary-500 focus:border-secondary-500 placeholder-primary-500 dark:placeholder-gray-300 duration-500"
              />
              {errors.confirm_password && (
                <p
                  className="text-red-600 w-full text-sm mt-2 pl-4"
                  role="alert"
                >
                  {errors.confirm_password?.message}
                </p>
              )}
            </label>

            <SubmitButton buttonText="Register" buttonType="other" />
          </form>

          <p className="text-center text-primary-500 text-sm">
            Already an Admin?{" "}
            <span className="text-secondary-500 hover:text-primary-500">
              <Link href="/admin/login">Log In</Link>
            </span>
          </p>
        </section>
      </section>
    </>
  );
};
export default Register;
