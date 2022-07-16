
import { postAPI,getAPI } from '../../../utils/axios';
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
  },
  refreshToken:async()=>{
   try {
    const res = await getAPI('rf-token');
   } catch (e) {
     console.log(e,{cause:e});
   }
    
   }
  };
export default authAction