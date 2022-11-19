import jwt_decode from "jwt-decode";
import axios from "axios";
export async function checkToken(token) {
  const decode = jwt_decode(token);
  if (decode.exp > Date.now() / 1000) return;
  const res = await axios.get("/api/rf-token");
  return res.data.access_token;
}
export function timeBetween(d1, d2) {
  const utc1 = Date.UTC(d1.getFullYear(), d1.getMonth(), d1.getDate());
  const utc2 = Date.UTC(d2.getFullYear(), d2.getMonth(), d2.getDate());
  const diffTime = Math.abs(utc2 - utc1);
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}
