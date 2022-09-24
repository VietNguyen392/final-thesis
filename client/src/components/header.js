import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Modal } from 'antd';
import { HomeOutlined, ShopOutlined, GlobalOutlined, LockOutlined } from '@ant-design/icons';
import AuthPage from './AuthPage';
const links = [
  {
    label: (
      <Link to="/">
        <HomeOutlined /> Trang chủ
      </Link>
    ),
    key: 'home',
  },
  {
    label: (
      <Link to="room">
        <ShopOutlined />
        Khách Sạn
      </Link>
    ),
    key: 'room',
  },
  {
    label: (
      <Link to="hotel">
        <GlobalOutlined /> Địa Điểm
      </Link>
    ),
    key: 'hotel',
  },
  {
    label: (
      <>
        <LockOutlined />
        {/* <AuthPage/> */}
      </>
    ),
    key: 'auth',
  },
];
export default function NavBar() {
  return <Menu theme="dark" mode="horizontal" items={links} />;
}
