import { postAPI, getAPI } from '../../../utils/axios';

const authAction = {
  login: async (inputData) => {
    try {
      const res = await postAPI('login', inputData);
      if (res.data) {
        localStorage.setItem('user', JSON.stringify(res.data));
      }
      return res.data;
    } catch (e) {
      console.log(e);
    }
  },
  logout: async () => {
    try {
      localStorage.removeItem('user');
      // await getAPI('logout');
    } catch (error) {
      console.log(error);
    }
  },

  refreshToken: async () => {
    try {
      const res = await getAPI('rf-token');
      return res;
    } catch (e) {
      console.log(e, { cause: e });
    }
  },
};
export default authAction;
