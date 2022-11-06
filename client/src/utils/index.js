import jwt_decode from "jwt-decode";
import { getAPI } from "service";
export const checkToken = async (token) => {
  const decode = jwt_decode(token);
  console.log(decode);
  if (decode > Date.now() / 1000) return;
  const res = await getAPI("rf-token");
  if (res) return res.data.access_token;
};
