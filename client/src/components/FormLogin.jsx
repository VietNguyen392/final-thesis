import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Button, Form, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { login, reset } from "features/auth/authSlice";
const FormLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isSuccess } = useSelector((state) => state.auth);
  const [form] = Form.useForm();
  const handleLogin = (value) => {
    dispatch(login(value)).then(() => form.resetFields());
  };
  React.useEffect(() => {
    if (user || isSuccess) {
      navigate("/");
    }
    dispatch(reset());
  }, [user, navigate, dispatch, isSuccess]);
  return (
<>

    <Form
      name="login-form"
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 16 }}
      initialValues={{
        email: "",
        password: "",
      }}
      form={form}
      onFinish={handleLogin}
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
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          type="email"
          placeholder={"Nhập Email"}
        />
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
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          placeholder={"Nhập mật khẩu"}
        />
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
</>
  );
};

export default FormLogin;
