import axios from 'axios';
import { routes } from '../utils/routes';
const api_url = 'http://localhost:4040';
export const UserSerivce = {
  register: async (data) => {
    return await axios.post(`${api_url}/${routes.api.register}`, data);
  },
};
