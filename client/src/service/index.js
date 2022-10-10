import axios from "axios";
// const api_url = import.meta.env.VITE_API_URL;
const api_url = 'http://localhost:4040'
export const postAPI = async (url, data, token) => {
  const res = await axios.post(`${api_url}/api/${url}`, data, {
    headers: { Authorization: token },
  });
  return res;
};
export const getAPI = async (url, token) => {
  const res = await axios.get(`${api_url}/api/${url}`, {
    headers: { Authorization: token },
  });

  return res;
};
export const patchAPI = async (url, data, token) => {
  const res = await axios.patch(`${api_url}/api/${url}`, data, {
    headers: { Authorization: token },
  });

  return res;
};
export const deleteAPI = async (url, token) => {
  const res = await axios.delete(`${api_url}/api/${url}`, {
    headers: { Authorization: token },
  });

  return res;
};
export const putAPI = async (url, data, token) => {
  const res = await axios.put(`${api_url}/api/${url}`, data, {
    headers: { Authorization: token },
  });

  return res;
};
