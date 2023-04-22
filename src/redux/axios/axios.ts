import axios from "axios";
// import { useAppDispatch } from "../store";
// import { setToken } from "../features/auth/authSlice";
// import { dispatch } from "../store";

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Credentials": true,
  "Content-Type": "application/json",
};

axios.defaults.baseURL = `${process.env.NEXT_PUBLIC_BASEURL}:${process.env.NEXT_PUBLIC_PORT}`;

const axiosInstance = axios.create({
  headers,
  timeout: 300000,
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem("token");
    const adminToken = sessionStorage.getItem("adminToken");
    // if (token) {
    //   useDispatch(setToken(token));
    // }
    // if (adminToken) {
    //   useAppDispatch(setAdminToken(adminToken));
    // }
    // const tokenToUse = token || adminToken;
    // if (tokenToUse) {
    //   config.headers = {
    //     ...config.headers,
    //     Authorization: `Bearer ${tokenToUse}`,
    //   };
    // }

    return config;
  },
  (err) => Promise.reject(err)
);

export default axiosInstance;
