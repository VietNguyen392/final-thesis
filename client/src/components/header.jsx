import React from "react";
import { Link } from "react-router-dom";
import { Menu, Modal, Button } from "antd";
import {
  HomeOutlined,
  ShopOutlined,
  LockOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import AuthPage from "./AuthPage";
import { useSelector } from "react-redux";
export default function NavBar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [select, setSelect] = React.useState("home");
  const { user } = useSelector((state) => state.auth);
  console.log(user);
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
          <ShoppingCartOutlined /> Đặt lịch
        </Link>
      ),
      key: "hotel",
    },
    {
      label: user ? (
        "logout"
      ) : (
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
      <Menu
        theme="dark"
        mode="horizontal"
        items={links}
        onClick={(e) => setSelect(e.key)}
        selectedKeys={[select]}
        style={{ position: "sticky" }}
      />

      <Modal open={isOpen} onCancel={() => setIsOpen(false)} footer={null}>
        <AuthPage  />
      </Modal>
    </>
  );
}
