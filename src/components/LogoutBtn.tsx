import { AdminSignOutApi } from "@/redux/axios/apis/auth";
import { useRouter } from "next/router";

type Props = {};
const LogoutBtn = (props: Props) => {
  const router = useRouter();

  const logoutHandler = async () => {
    const res = await AdminSignOutApi()
      .then((res) => {
        console.log(res);
        router.reload();
      })
      .catch((error) => console.error(error));
  };

  return (
    <button
      className="bg-gradient-primsec-b hover:bg-gradient-primsec-f text-white text-md rounded-full cursor-pointer duration-500 hover:shadow-md px-4 py-1"
      onClick={logoutHandler}
    >
      Logout
    </button>
  );
};
export default LogoutBtn;
