import React from 'react';
import { Layout, BackTop, Menu } from 'antd';
import Loading from './loading';
import { Link } from 'react-router-dom';
const { Header, Footer, Content } = Layout;
const links = [
  {
    title: 'Trang chủ',
    url: <Link pathname="/pages/home" />,
    id: 1,
  },
  {
    title: 'Bác sĩ',
    url: <Link pathname="/pages/doctor" />,
    id: 2,
  },
  {
    title: 'Chuyên khoa',
    url: <Link pathname="/pages/spectality" />,
    id: 3,
  },
];
const Main = ({ children }) => {
  return (
    <Layout>
      <Header>
        <Menu
          theme="dark"
          mode="horizontal"
          items={links.map((_, index) => {
            const key = index + 1;
            return {
              key,
              label: `${_.title}`,
            };
          })}
        />
      </Header>
      <Content>{children}</Content>
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
