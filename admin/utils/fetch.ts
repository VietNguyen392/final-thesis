import { instance } from './_axios';

export const POST = async (url: string, data: object) => {
  return await instance.post(url, data);
};

export const GET = async (url: string) => {
  const res = await instance.get(url);
  return res.data;
};
export const PATCH = async (url: string, data: object) => {
  return await instance.patch(url, data);
};
export const DELETE = async (url: string) => {
  return await instance.delete(url);
};
