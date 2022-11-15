import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Button, Form, Input, Modal } from "antd";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { login, reset } from "features/auth/authSlice";
import Forgot from "./Forgot";
import { useTranslation } from "react-i18next";
const FormLogin = () => {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isSuccess } = useSelector((state) => state.auth);
  const [form] = Form.useForm();
  const { t } = useTranslation();
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
    <div>
      <Form
        name="login-form"
        className="login-form"
        initialValues={{
          email: "",
          password: "",
        }}
        form={form}
        onFinish={handleLogin}
        layout="vertical"
      >
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: `${t("noti.empty")} Email !`,
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
              message: `${t("noti.empty")} ${t("common.password")} !`,
            },
          ]}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder={t("common.password")}
          />
        </Form.Item>
        <Form.Item>
          <Button onClick={() => setOpen(true)} type="link">
            {t("common.forgot")}
          </Button>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            style={{ width: "100%" }}
          >
            {t("common.login")}
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
