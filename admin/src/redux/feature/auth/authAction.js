import { postAPI } from '../../../utils/axios';
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
  logout:()=>{
    localStorage.removeItem('user');
  }
};
export default authAction