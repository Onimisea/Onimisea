import { Admin, AdminRegData } from "@/shared/types";
// import axiosInstac from "../axios";
import api from "../axios";

export const AdminSignUpApi = (data: AdminRegData) => {
  return api.post("/api/v1/admin/register", data);
};
