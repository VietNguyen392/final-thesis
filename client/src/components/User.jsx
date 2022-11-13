import React from "react";
import { Tabs } from "antd";


const User = (props) => {
  const {userName}=props
  const items = [
    {
      label: "Thông tin cá nhân",
      children: userName,
      key:1
    },
    { label: "Thông tin đặt phòng", children: "abc" ,key:2},
  ];
  return (
    <div>
      <Tabs tabPosition="left" items={items} />
    </div>
  );
};

export default User;
