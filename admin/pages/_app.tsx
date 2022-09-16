import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import 'styles/style.css';
import { Loading, Layout } from 'components';
export default function App(props: AppProps) {
  const { Component, pageProps } = props;
  const router = useRouter();
  const [pageLoading, setPageLoading] = useState<boolean>(false);
  useEffect(() => {
    const handleStart = () => {
      setPageLoading(true);
    };
    const handleComplete = () => {
      setPageLoading(false);
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);
  }, [router]);
  return (
    <>
      <Head>
        <title>Admin</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta name="author" content="Nguyễn Hoàng Việt " />
        <meta charSet="UTF-8" />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: 'light',
        }}
      >
        {pageLoading && <Loading />}

        <Layout>
          <NotificationsProvider position="top-center" autoClose={3000}>
            <Component {...pageProps} />
          </NotificationsProvider>
        </Layout>
      </MantineProvider>
    </>
  );
}
