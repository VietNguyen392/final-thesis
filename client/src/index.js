import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import moment from 'moment';
import 'moment/locale/vi';
import { ConfigProvider } from 'antd';
import 'antd/dist/antd.css';
import './styles/Css/index.css';
import './styles/Sass/style.scss';
import App from './App';
// import './utils/i18n';
const app = document.getElementById('root');
const root = createRoot(app);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
