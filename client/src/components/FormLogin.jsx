import React from "react";
import { Button, Form, Input } from "antd";
const FormLogin = () => {
  return (
    <Form
      name="login-form"
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 16 }}
      initialValues={{
        email: "",
        password: "",
      }}
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: "Hãy nhập Email",
          },
        ]}
      >
        <Input type="email" />
      </Form.Item>
      <Form.Item
        label="Mật khẩu"
        name="password"
        rules={[
          {
            required: true,
            message: "Hãy nhập mật khẩu",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          offset: 6,
          span: 6,
        }}
      >
        <Button type="primary" htmlType="submit">
          Đăng nhập
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormLogin;
