import React from 'react';
import create from 'zustand';
import { useRouter } from 'next/router';
import useSWR, { mutate } from 'swr';
import { showNotification } from '@mantine/notifications';
import { Login, Logout, getUserProfile, checkToken } from '../utils/service';
import { routes } from 'utils/routes';
import { ILogin, IAdmin } from 'utils/interface';
// interface AuthState{
//   auth:boolean
//   user:any[]
//   authenticate:boolean
//   login:(data:ILogin)=>void
// }
// const useAuth=create<AuthState>((set)=>({
//   auth:false,
//   user:[],
//   authenticate:false,
//   login:async(data)=>{
//     set((state)=>({...state,auth:true}))
//     await Login(data).then((res)=>set((state)=>({...state,user:res?.data}))).catch((err) =>
//         showNotification({
//           title: 'Thông báo',
//           message: `${err?.response?.data?.msg}`,
//           color: 'red',
//         }),
//       )
//   }
// }))
const useAuth =() => {
  const [auth, setAuth] = React.useState<Boolean>(false);
  const [user, setUser] = React.useState<IAdmin>();
  const [token, setToken] = React.useState<String>('');
  const [isAuth, setIsAuth] = React.useState<Boolean>(false);
  const router = useRouter();
  const authenticate = async (data: ILogin) => {
    setAuth(true);
    await Login(data)
      .then((res) => setUser((o) => ({ ...o, user: res?.data })))
      .catch((err) =>
        showNotification({
          title: 'Thông báo',
          message: `${err?.response?.data?.msg}`,
          color: 'red',
        }),
      )
      .finally(() => {
        setAuth(false), setIsAuth(true);
      });
  };
  const deAuthenticate = async (token: string) => {
    const expire = await checkToken(token);
    const active_token = expire ? expire : token;
    Logout(active_token)
      .then(async () => {
        showNotification({
          title: 'Thông báo',
          message: 'Đăng xuất thành công',
          color: 'green',
        });
      })
      .catch(() =>
        showNotification({
          title: 'Thông báo',
          message: 'Đăng xuất không thành công',
          color: 'red',
        }),
      )
      .finally(() => router.push(routes.login));
  };
  return {
    user,
    authenticate,
    isAuth,
    deAuthenticate,
  };
};

export default useAuth;
