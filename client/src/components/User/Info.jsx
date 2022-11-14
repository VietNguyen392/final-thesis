import React from "react";
import { useSelector } from "react-redux";
import { Button, Avatar, Row, Col, Typography, Select } from "antd";

const { Title, Text } = Typography;
const { Option } = Select;

function Info() {
  const [state, setState] = React.useState({
    isOpen: false,
  });
  const { isOpen } = state;
  const { user } = useSelector((state) => state.auth);
  return (
    <Row
      gutter={{
        xs: 8,
        sm: 16,
        md: 24,
        lg: 32,
      }}
    >
      <Col span={8}></Col>
      <Col span={8}>
        <Avatar
          size={"large"}
          src={user.user.avatar}
          style={{ width: "150px", height: "150px" }}
        />
      </Col>
    </Row>
  );
}

export default Info;
