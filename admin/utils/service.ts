import jwt_decode from 'jwt-decode';
import { instance } from './_axios';
import { routes } from './routes';
import { ILogin, IHotel } from './interface';
import { TokenType } from './interface';
export const Login = async (data: ILogin) => {
  return await instance.post(routes.api.login, data);
};
export async function checkToken(token: string) {
  const decoded: TokenType = jwt_decode(token);
  if (decoded.exp >= Date.now() / 1000) return;
  const res = await instance.get(routes.api.refreshToken);
  return res.data.access_token;
}
export const Logout = async (token: string | any) => {
  return await instance.get(routes.api.logout, token);
};
export const refreshToken = async () => {
  return await instance.get(routes.api.refreshToken);
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
