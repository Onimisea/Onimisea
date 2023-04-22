import { AdminSignUpApi } from "@/redux/axios/apis/auth";
import { useAppDispatch } from "@/redux/store";
import { setAdminToken } from "./authSlice";
import { Admin, AdminRegData } from "@/shared/types";

export const RegisterAdmin = async (data: AdminRegData) => {
  try {
    const res = await AdminSignUpApi(data);
    return res;
  } catch (error) {
    console.log(error);
  }
};
