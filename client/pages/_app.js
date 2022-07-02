import '../styles/globals.css';
import '../styles/styles.scss'
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { NextUIProvider } from '@nextui-org/react';
import Head from 'next/head'
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <NextUIProvider>
       <Head>
        <title>Booking web</title>
      </Head>
        <Component {...pageProps} />
      </NextUIProvider>
    </Provider>
  );
}

export default MyApp;
