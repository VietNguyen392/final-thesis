import { instance } from './_axios';
const controller = new AbortController();
export const postData = async (url: string, data: object) => {
  return await instance.post(url, data);
};

export const getData = async (url: string) => {
  const res = await instance.get(url, {
    signal: controller.signal,
    
  });
  return res.data;
};
export const patchData = async (url: string, data: object) => {
  return await instance.patch(url, data);
};
export const deleteData = async (url: string) => {
  return await instance.delete(url);
};
