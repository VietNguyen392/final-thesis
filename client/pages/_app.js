import '../styles/globals.css';
import '../styles/styles.scss'
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { NextUIProvider } from '@nextui-org/react';
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </Provider>
  );
}

export default MyApp;
