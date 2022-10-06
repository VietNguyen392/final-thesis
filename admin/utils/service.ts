import { instance } from './_axios';
import { routes } from './routes';
import { ILogin, IHotel } from './interface';
export const Login = async (data: ILogin) => {
  return await instance.post(routes.api.login, data);
};
export const Logout = async () => {
  return await instance.get(routes.api.logout);
};
export const getUserById = async (id: string) => {
  return await instance.get(`${routes.api.getProfile}:${id}`);
};
export const getUserProfile = async () => {
  return await instance.get(routes.api.getUser);
};
export const createHotel = async (data: IHotel) => {
  return await instance.post(routes.api.createHotel, data);
};
