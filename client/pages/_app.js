import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { MantineProvider } from '@mantine/core';
import Head from 'next/head';
import GoTop from '../components/common/gotop';
import '../styles/globals.css';
import '../styles/styles.scss';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Booking web</title>
      </Head>
      <Provider store={store}>
        <MantineProvider withGlobalStyles withNormalizeCSS theme={{ colorScheme: 'light' }}>
          <Component {...pageProps} />
          <GoTop/>
        </MantineProvider>
      </Provider>
    </>
  );
}

export default MyApp;
