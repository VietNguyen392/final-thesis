import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import { HomeOutlined, UserOutlined,BlockOutlined } from '@ant-design/icons'
const links = [
    {
        label: (
            <Link to='/'>
                <HomeOutlined /> Trang chủ
            </Link>
        ),
        key: 'home'

    },
    {
        label: (
            <Link to='doctor'>
                <UserOutlined />Bác sĩ
            </Link>
        ),
        key: 'doctor'
    },
    {
        label: (
            <Link to='spectality'>
              <BlockOutlined />  Chuyên khoa
            </Link>
        ),
        key: 'spectality'
    },
];
export default function NavBar() {

    return (

        <Menu
            theme="dark"
            mode="horizontal"
            items={links}
        />
    )
}