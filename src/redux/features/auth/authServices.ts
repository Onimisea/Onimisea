import { AdminSignInApi, AdminSignUpApi } from "@/redux/axios/apis/auth";
import { useAppDispatch } from "@/redux/store";
import { setAdminToken } from "./authSlice";
import { Admin, AdminLoginData, AdminRegData } from "@/shared/types";

export const RegisterAdmin = async (data: AdminRegData) => {
  try {
    const res = await AdminSignUpApi(data);
    return res;
  } catch (error) {
    console.log(error);
  }
};


export const LoginAdmin = async (data: AdminLoginData) => {
  try {
    const res = await AdminSignInApi(data);
    return res;
  } catch (error) {
    console.log(error);
  }
};
