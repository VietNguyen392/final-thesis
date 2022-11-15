import { postAPI, getAPI } from "service";
import { checkToken } from "utils";
import { message, notification } from "antd";

const AuthAction = {
  login: async (data) => {
    try {
      const res = await postAPI("login", data);
      if (res.status === 200) {
        localStorage.setItem("user", JSON.stringify(res.data));
        message.success(res.data.msg);
      }
      return res.data;
    } catch (error) {
      message.error(error.response.data.msg);
    }
  },
  refreshToken: async () => {
    const isLogin = localStorage.getItem("user");
    if (!isLogin) return;
    try {
      return await getAPI("rf-token");
    } catch (error) {
      console.log(error);
    }
  },
  logout: async (token) => {
    // const expire = await checkToken(token);
    // console.log(expire);
    // const new_token = expire ? expire : token;
    try {
      const res = await getAPI("logout", token);
      if (res.status === 200) {
        message.success("Đăng xuất thành công");
        localStorage.removeItem("user");
      }
    } catch (error) {
      notification.error({
        message: "Lỗi",
        description: error.response.data.msg,
        placement: "topRight",
      });
    }
  },
};

export default AuthAction;
