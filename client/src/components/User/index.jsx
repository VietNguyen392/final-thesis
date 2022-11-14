import React from "react";
import { Tabs } from "antd";
import Info from "./Info";
import BookingInfo from "./BookingInfo";
const User = () => {
  const items = [
    {
      label: "Thông tin cá nhân",
      children: <Info />,
      key: 1,
    },
    { label: "Thông tin đặt phòng", children: <BookingInfo />, key: 2 },
  ];
  return (
    <div>
      <Tabs tabPosition="left" items={items} />
    </div>
  );
};

export default User;
