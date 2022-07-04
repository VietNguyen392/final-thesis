import axios from 'axios';
const API_URL =  'http://localhost:4040/api/';
export const PostApi = async (url, data, token) => {
  return await axios.post(API_URL + url, data, {
    headers: {
      Authorization: token,
    },
  });
};
export const getApi = async (url) => {
  return await axios.get(API_URL + url);
};
