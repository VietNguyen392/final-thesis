import React from "react";
import { Link } from "react-router-dom";
import { Menu, Modal, Button, message } from "antd";
import {
  HomeOutlined,
  LockOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "features/auth/authSlice";
export default function NavBar() {
  const [select, setSelect] = React.useState("home");
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const handleLogout = () => {
    try {
      dispatch(logout(user.access_token));
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
      label: (
        <Link to={"auth"}>
          {" "}
          <LockOutlined />
          Đăng nhập/Đăng ký
        </Link>
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
    </>
  );
}
