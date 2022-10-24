import { instance } from './_axios';
export const postData = async (url: string, data: object) => {
  return await instance.post(url, data);
};

export const getData = async (url: string) => {
  const res = await instance.get(url);
  return res.data;
};
