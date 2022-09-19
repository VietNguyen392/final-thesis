import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import { HomeOutlined, ShopOutlined, GlobalOutlined } from '@ant-design/icons';
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
];
export default function NavBar() {
  return <Menu theme="dark" mode="horizontal" items={links} />;
}
