import axios from "axios";
export const getAPI=async (url)=>{
    return await axios.get(`/api/${url}`)
}
export const postAPI=async (url,data)=>{
    return await axios.post(`/api/${url}`,data)
}
export async function patchAPI(url,data){
    return await axios.patch(`/api/${url}`,data)
}