import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import './styles/Css/index.css';
import './styles/Sass/style.scss';
import App from './App';
import { initializeIcons } from '@fluentui/react/lib/Icons';
initializeIcons(undefined, { disableWarnings: true });
const app = document.getElementById('root');
const root = createRoot(app);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
