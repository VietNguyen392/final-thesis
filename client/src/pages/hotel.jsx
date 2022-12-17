import React from "react";
import {
  Button,
  Modal,
  Calendar,
  Tag,
  Image,
  DatePicker,
  Typography,
} from "antd";

import HomeList from "components/HomeList";

const { RangePicker } = DatePicker;
const { Title } = Typography;
const Hotel = () => {
  return (
    <div className="mx-4">
      <Title level={3}>Chọn ngày</Title>
      <div className="my-3 ">
        <RangePicker />
      </div>
      <div className="container">
        <HomeList />
      </div>
    </div>
  );
};

export default Hotel;
