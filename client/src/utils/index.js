import jwt_decode from "jwt-decode";
import { getAPI } from "service";
export async function checkToken(token) {
  const decode = jwt_decode(token);
  if (decode.exp > Date.now() / 1000) return;
  const res = await getAPI("rf-token");
  return res.data.access_token;
}
export function timeBetween(d1, d2) {
  const currDate = d1;
  const otherDate = d2;
  const diffTime = Math.abs(otherDate - currDate);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}
