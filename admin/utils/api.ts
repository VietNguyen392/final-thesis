import { instance } from "./_axios";
import { routes } from "./routes";
import { ILogin } from "./interface";
export const Login=async(data:ILogin)=>{
    return await instance.post(routes.api.login,data)
}