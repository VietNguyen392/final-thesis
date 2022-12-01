import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Select,
  Typography,
  DatePicker,
  Divider,
  Row,
  Col,
  Input,
  Form,
  message,
} from "antd";
import { useTranslation } from "react-i18next";
import { timeBetween } from "utils";
import { POST } from "service";
const { Title, Text } = Typography;
const { RangePicker } = DatePicker;
const FormBooking = ({ roomID, roomPrice }) => {
  const [bill, setBill] = useState();
  const { user } = useSelector((state) => state.auth);
  const [form] = Form.useForm();
  const { navigate } = useNavigate();
  const { t } = useTranslation();

  const initFormValue = {
    start_date: "",
    end_date: "",
    adult_quantity: "",
    children_quantity: "",
    room: roomID,
    user: user.user._id,
    email: user.user.email,
    billing: bill,
  };

  const onChooseDate = (dateString) => {
    form.setFieldsValue({ start_date: dateString[0], end_date: dateString[1] });
  };
  async function postNewBooking(value) {
    // try {
    //   await POST("new-booking", value)
    //     .then(() => message.success(t("noti.success")))
    //     .finally(() => navigate("/"));
    // } catch (e) {
    //   message.error(e.response.data.msg);
    // }
    console.log(value);
  }
  return (
    <>
      <Title level={3}>{t("common.make-booking")}</Title>
      <Form initialValues={initFormValue} form={form} onFinish={postNewBooking}>
        <Form.Item label={"Chọn ngày"}>
          <RangePicker format="YYYY-MM-DD" onChange={onChooseDate} />
        </Form.Item>
      </Form>
      <Title level={4}>Chọn ngày</Title>
      <Divider />
      <Title level={4}>Số lượng</Title>
      <div style={{ maxWidth: 300 }}></div>
    </>
  );
};

export default FormBooking;
