import jwt_decode from 'jwt-decode';
import axios from 'axios';
import { routes } from './routes';
import { encode, ParsedUrlQuery } from 'querystring';
import { ILogin, IHotel } from './interface';
import { TokenType } from './interface';
const instance = axios.create({
  baseURL: process.env.API_URL,
});
export const Login = async (data: ILogin) => {
  return await instance.post(routes.api.login, data);
};
export async function checkToken(token: string) {
  const decoded: TokenType = jwt_decode(token);
  if (decoded.exp >= Date.now() / 1000) return;
  const res = await instance.get(routes.api.refreshToken);
  return res.data.access_token;
}
export const imageUpload = async (file: File[]) => {
  const formData = new FormData();
  formData.append('file', file[0]);
  formData.append('upload_preset', 'ml_default');
  formData.append('cloud_name', 'dji8eaf4q');

  const res = await fetch('https://api.cloudinary.com/v1_1/dji8eaf4q/upload', {
    method: 'POST',
    body: formData,
  });

  const data = await res.json();
  return { public_id: data.public_id, url: data.secure_url };
};
export const Logout = async (token: string | any) => {
  return await instance.get(routes.api.logout, token);
};
export const refreshToken = async () => {
  return await instance.get(routes.api.refreshToken);
};
export const getUserById = async (id: string) => {
  return await instance.get(`${routes.api.user}${id}`);
};
export const getAllUserProfile = async () => {
  return await instance.get(routes.api.user);
};
export const createHotel = async (data: IHotel) => {
  return await instance.post(routes.api.hotel, data);
};
export const getHotelList = async () => {
  const res = await instance.get(routes.api.hotel);
  return res.data;
};
export async function deleteRoom(id: string) {
  return await instance.delete(routes.api.hotel + '/' + id);
}
export const updateRoom = async (id: ParsedUrlQuery, data: IHotel) => {
  return await instance.patch(routes.api.hotel + '/' + encode(id), data);
};
export const getFeatureList = async () => {
  const res = await instance.get('api/get-company');
  return res.data;
};
