import React from "react";
import { Link } from "react-router-dom";
import { Menu, Modal, Button, message } from "antd";
import {
  HomeOutlined,
  LockOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import AuthPage from "./AuthPage";
import { useSelector, useDispatch } from "react-redux";
import { userLogout } from "features/auth/authSlice";
export default function NavBar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [select, setSelect] = React.useState("home");
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const handleLogout = () => {
    try {
      dispatch(userLogout(user.access_token));
    } catch (error) {
      message.error(error);
    }
  };
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
        <Link to="hotel">
          <ShoppingCartOutlined /> Đặt lịch
        </Link>
      ),
      key: "hotel",
    },
    {
      label: user ? (
        <Button onClick={handleLogout}>Đăng xuất</Button>
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
        <AuthPage />
      </Modal>
    </>
  );
}
