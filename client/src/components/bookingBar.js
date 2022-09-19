import React from 'react';
import { DatePicker, Row, Input, Col, Card, Select, Button } from 'antd';
import {
  GlobalOutlined,
  UserOutlined,
  SearchOutlined,
} from '@ant-design/icons';

const { RangePicker } = DatePicker;
const { Option } = Select;
const BookingBar = () => {
  return (
    <Card>
      <Row gutter={8}>
        <Col>
          <Input
            prefix={<GlobalOutlined />}
            placeholder="Nhập địa điểm bạn muốn tới ?"
            type="text"
          />
        </Col>
        <Col>
          <RangePicker onChange={(e) => console.log(e.target.value)} />
        </Col>
        <Col>
          <Select style={{ width: 250 }} placeholder="Chọn">
            <Option>
              <Input
                type="number"
                prefix={<UserOutlined />}
                placeholder="người lớn"
              />
            </Option>
            <Option>
              <Input
                type="number"
                prefix={<UserOutlined />}
                placeholder="trẻ nhỏ"
              />
            </Option>
          </Select>
        </Col>
        <Col>
          <Button type="primary" icon={<SearchOutlined />}>
            Search
          </Button>
        </Col>
      </Row>
    </Card>
  );
};

export default BookingBar;
