import React from "react";
import { Link } from "react-router-dom";
import { Menu, Avatar } from "antd";
import {
  HomeOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  LogoutOutlined,
  LoginOutlined,
} from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "features/auth/authSlice";
import User from "./User";
export default function NavBar() {
  const [select, setSelect] = React.useState("home");
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const onLogout = async () => {
    if (!user.access_token) return;
    dispatch(logout(user.access_token));
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
    user
      ? {
          label: (
            <>
              <Avatar src={user.user.avatar} icon={<UserOutlined />} />
              <span style={{ textTransform: "capitalize", margin: 10 }}>
                {user.user.fullName}
              </span>
            </>
          ),
          children: [
            {
              label:<Link to='/profile'> <UserOutlined />Thông Tin</Link>,
            },
            {
              label: (
                <Link to="/" onClick={onLogout}>
                  <LogoutOutlined style={{ marginRight: 5 }} />
                  Đăng xuất
                </Link>
              ),
            },
          ],
          key: "auth",
        }
      : {
          label: (
            <Link to={"auth"}>
              {" "}
              <LoginOutlined style={{ marginRight: 5 }} />
              Đăng nhập/Đăng ký
            </Link>
          ),
          key: "auth",
        },
  ];

  return (
    <>
      <Menu
        // theme="dark"
        mode="horizontal"
        items={links}
        onClick={(e) => setSelect(e.key)}
        selectedKeys={[select]}
        style={{ position: "sticky" }}
      />
    </>
  );
}
