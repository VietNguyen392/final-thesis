import React from 'react';
import { Layout, BackTop } from 'antd';
import Loading from './loading';
import { Link } from 'react-router-dom';

import NavBar from './header';
const { Header, Footer, Content } = Layout;

const Main = ({ children }) => {
  return (
    <Layout>
      <Header>
        <NavBar />
      </Header>
      <Content className="container">{children}</Content>
      <Footer>
        Build with React and Ant design by{' '}
        <a href="mailto:nghoangviet2000@hotmail.com">Nguyễn Hoàng Việt</a> ©
        <BackTop>
          <div
            style={{
              height: 40,
              width: 40,
              lineHeight: '40px',
              borderRadius: 4,
              backgroundColor: '#1088e9',
              textAlign: 'center',
              fontSize: 14,
            }}
          >
            ☝
          </div>
        </BackTop>
      </Footer>
    </Layout>
  );
};

export default Main;
