import { postAPI, getAPI } from "service";
import { checkToken } from "utils";
const AuthAction = {
  login: async (data) => {
    try {
      const res = await postAPI("login", data);
      if (res.status === 200) {
        localStorage.setItem("user", JSON.stringify(res.data));
      }
      return res.data;
    } catch (error) {
      console.log(error);
    }
  },
  logout: async (token) => {
    const expire = checkToken(token);
    const access_token = expire ? expire : token;
    try {
      localStorage.removeItem("user");
      await getAPI("logout", access_token);
    } catch (error) {
      console.log(error);
    }
  },
};
export async function refreshToken() {
  const isLogin = localStorage.getItem("user");
  if (!isLogin) return;
  try {
    await getAPI("rf-token");
  } catch (error) {
    console.log(error);
  }
}
export default AuthAction;
