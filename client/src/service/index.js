import axios from "axios";
export const POST = async (url, data, token) => {
  const res = await axios.post(`/api/${url}`, data, {
    headers: { Authorization: token },
  });
  return res;
};
export const GET = async (url, token) => {
  const controller = new AbortController();
  const res = await axios.get(`/api/${url}`, {
    headers: { Authorization: token },
    signal: controller.signal,
  });

  return res;
};
export const PATCH = async (url, data, token) => {
  const res = await axios.patch(`/api/${url}`, data, {
    headers: { Authorization: token },
  });

  return res;
};
export const DELETE = async (url, token) => {
  const res = await axios.delete(`/api/${url}`, {
    headers: { Authorization: token },
  });

  return res;
};
export const PUT = async (url, data, token) => {
  const res = await axios.put(`/api/${url}`, data, {
    headers: { Authorization: token },
  });
  return res;
};
