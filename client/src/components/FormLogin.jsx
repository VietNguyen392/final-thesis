import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Button, Form, Input, Modal } from "antd";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { login, reset } from "features/auth/authSlice";
import Forgot from "./Forgot";
const FormLogin = () => {
  const [open, setOpen] = React.useState(false);
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
    <div style={{ padding: "0 28em" }}>
      <Form
        name="login-form"
        className="login-form"
        initialValues={{
          email: "",
          password: "",
        }}
        form={form}
        onFinish={handleLogin}
      >
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Hãy nhập Email",
            },
          ]}
        >
          <Input
            prefix={<MailOutlined className="site-form-item-icon" />}
            placeholder="Email"
            type={"email"}
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Hãy nhập mật khẩu!",
            },
          ]}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <a className="login-form-forgot" onClick={() => setOpen(true)}>
            Quên mật khẩu
          </a>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            style={{ width: "100%" }}
          >
            Đăng nhập
          </Button>
        </Form.Item>
      </Form>
      <Modal
        open={open}
        onCancel={() => setOpen(false)}
        footer={null}
        title={"Cấp Lại Mật Khẩu"}
      >
        <Forgot success={() => setOpen(false)} />
      </Modal>
    </div>
  );
};

export default FormLogin;
