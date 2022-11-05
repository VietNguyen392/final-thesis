import { postAPI, getAPI } from "service";
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
};
export default AuthAction;
