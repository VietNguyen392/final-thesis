import React from 'react';
import create from 'zustand';
import { GET } from 'utils';
import { showNotification } from '@mantine/notifications';
import { Login, Logout, checkToken } from 'utils/service';
import { routes } from 'utils/routes';
import { ILogin, IAdmin, User } from 'utils/interface';
interface AuthState {
  auth: boolean;
  user: any;
  login: (data: ILogin) => void;
  logout: (token: string) => void;
}
const useAuth = create<AuthState>((set) => ({
  auth: false,
  user: {},
  login: async (data) => {
    set((state) => ({ ...state, auth: true }));
    await Login(data)
      .then((res) => set((state) => ({ ...state, user: res?.data })))
      .catch((err) =>
        showNotification({
          title: 'Thông báo',
          message: `${err?.response?.data?.msg}`,
          color: 'red',
        }),
      );
  },
  logout: async (data) => {
    try {
      const res = await Logout(data);
      if (res.status === 200)
        return set((state) => ({ ...state, user: null, auth: false }));
    } catch (err: any) {
      showNotification({
        title: 'Thông báo',
        message: `${err?.response?.data?.msg}`,
        color: 'red',
      });
    }
  },
}));
export default useAuth;
