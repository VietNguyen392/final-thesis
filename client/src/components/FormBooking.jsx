import React from "react";
import { Select, Typography, DatePicker, Divider,Row,Col,Input } from "antd";
import { useTranslation } from "react-i18next";
const { Title, Text } = Typography;
const { Option } = Select;
const { RangePicker } = DatePicker;
const FormBooking = (props) => {
  const { booking } = props;
  const {t}=useTranslation()
  const onChange = (value, dateString) => {
    console.log("Selected Time: ", value);
    console.log("Formatted Selected Time: ", dateString);
  };
  const onOk = (value) => {
    console.log("onOk: ", value);
  };
  return (
    <>
    <Title level={3}>{t('common.make-booking')}</Title>
      <Title level={4}>Chọn ngày</Title>
      <RangePicker format="YYYY-MM-DD HH:mm" onChange={onChange} onOk={onOk} />
      <Divider/>
      <Title level={4}>Số lượng</Title>
      <div>
      <Row justify="space-between"align="center">
      <Col span={6}>
      <Title level={5}>Người lớn</Title>
      <Input placeholder="nhập số lượng" type="number"min={1}max={3}/>
      </Col>
      <Col span={6}>
      <Title level={5}>
      Trẻ em
      </Title>
      </Col>
      </Row>
      </div>
    </>
  );
};

export default FormBooking;
