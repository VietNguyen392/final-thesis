import React from "react";
import { Link } from "react-router-dom";
import { Menu, Modal, Button } from "antd";
import {
  HomeOutlined,
  ShopOutlined,
  GlobalOutlined,
  LockOutlined,
} from "@ant-design/icons";
import AuthPage from "./AuthPage";
export default function NavBar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const links = [
    {
      label: (
        <Link to="/">
          <HomeOutlined /> Trang chủ
        </Link>
      ),
      key: "home",
    },
    {
      label: (
        <Link to="room">
          <ShopOutlined />
          Khách Sạn
        </Link>
      ),
      key: "room",
    },
    {
      label: (
        <Link to="hotel">
          <GlobalOutlined /> Địa Điểm
        </Link>
      ),
      key: "hotel",
    },
    {
      label: (
        <Button
          type="text"
          onClick={() => setIsOpen(true)}
          style={{ color: "#fff" }}
        >
          <LockOutlined /> Đăng nhập/Đăng ký
        </Button>
      ),
      key: "auth",
    },
  ];

  return (
    <>
      <Menu theme="dark" mode="horizontal" items={links} />
      <Modal open={isOpen} onCancel={() => setIsOpen(false)} footer={null}>
        <AuthPage />
      </Modal>
    </>
  );
}
