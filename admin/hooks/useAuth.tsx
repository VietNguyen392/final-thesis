import React from 'react';
import { useRouter } from 'next/router';
import useSWR, { mutate } from 'swr';
import { showNotification } from '@mantine/notifications';
import { Login, Logout, getUserProfile } from '../utils/service';
import { routes } from 'utils/routes';
import { ILogin } from 'utils/interface';
const useAuth = () => {
  const [state, setState] = React.useState({
    authenticating: false,
  });
  const { authenticating } = state;
  const router = useRouter();
  const user = useSWR('use-user', getUserProfile, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    shouldRetryOnError: true,
  });
  const authenticate = (data: ILogin) => {
    setState((o) => ({ ...o, authenticating: true }));
    Login(data)
      .then(() => mutate('use-user'))
      .catch(() =>
        showNotification({
          title: 'Thông báo',
          message: 'Đăng nhập không thành công',
          color: 'red',
        }),
      )
      .finally(() => setState((o) => ({ ...o, authenticating: false })));
  };
  const deauthenticate = () => {
    Logout()
      .then(async () => {
        mutate('use-user');
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
    user: user.data,
    isAuth: authenticating || user.isValidating,
    isAuthenticated: Boolean(user.data && !user.error),
    authenticate,
    deauthenticate,
  };
};

export default useAuth;
