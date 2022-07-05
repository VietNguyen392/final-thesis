import axios from "axios";
const API_URL = "http://localhost:4040/api"
export const getAPI=async (url)=>{
    return await axios.get(API_URL+url)
}
export const postAPI=async (url,data)=>{
    return await axios.post(API_URL+url,data)
}