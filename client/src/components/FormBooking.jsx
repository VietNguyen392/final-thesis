import React from "react";
import { Select, Typography,DatePicker } from "antd";
const { Title, Text } = Typography;
const { Option } = Select;
const {RangePicker}=DatePicker
const FormBooking = (props) => {
  const {booking}=props
  const onChange = (value, dateString) => {
  console.log('Selected Time: ', value);
  console.log('Formatted Selected Time: ', dateString);
};
const onOk = (value) => {
  console.log('onOk: ', value);
};
  return <>
  <Title level={4}>Chọn ngày/giờ</Title>
<RangePicker

      format="YYYY-MM-DD HH:mm"
      onChange={onChange}
      onOk={onOk}
/>  
  </>;
};

export default FormBooking;
