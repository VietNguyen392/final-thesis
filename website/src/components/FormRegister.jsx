import React from 'react';
import { Button, Form, Input, message, Row, Col, Radio, Upload, InputNumber } from 'antd';
import { AntCloudOutlined } from '@ant-design/icons';
import { postAPI } from '../service';
const FormRegister = ({ props }) => {
  const [form] = Form.useForm();
  const onSubmitForm = async (value) => {
    try {
      const res = await postAPI('create-user', value);
      if (res.status === 200) {
        message.success('Đăng ký thành công');
      }
      location.reload();
    } catch (error) {
      message.error('erorr');
    }
  };
  return (
    <div>
      <Form
        name="register-form"
        layout="vertical"
        initialValues={{
          fullName: '',
          email: '',
          password: '',
          gender: '',
          phoneNumber: '',
          avatar: '',
          address: '',
        }}
        form={form}
        onFinish={onSubmitForm}
      >
        <Row
          gutter={{
            xs: 8,
            sm: 16,
            md: 24,
            lg: 32,
          }}
        >
          <Col span={12}>
            <Form.Item
              label="Tên Tài Khoản"
              name="fullName"
              rules={[
                {
                  required: true,
                  message: 'Hãy nhập tên tài khoản',
                },
              ]}
            >
              <Input type="text" />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: 'Hãy nhập Email',
                },
              ]}
            >
              <Input type="email" />
            </Form.Item>
            <Form.Item
              label="Giới tính"
              name="gender"
              rules={[
                {
                  required: true,
                  message: 'Hãy chọn giới tính',
                },
              ]}
            >
              <Radio.Group>
                <Radio value="male">Nam</Radio>
                <Radio value="female">Nữ</Radio>
                <Radio value="other">Khác</Radio>
              </Radio.Group>
            </Form.Item>{' '}
          </Col>
          <Col span={12}>
            <Form.Item
              label="Địa chỉ"
              name="address"
              rules={[
                {
                  required: true,
                  message: 'Hãy nhập địa chỉ',
                },
              ]}
            >
              <Input type="text" />
            </Form.Item>{' '}
            <Form.Item
              label="Số điện thoại"
              name="phoneNumber"
              rules={[
                {
                  required: true,
                  message: 'Hãy nhập số điện thoại',
                },
              ]}
            >
              <Input type="number" min="1" />
            </Form.Item>{' '}
            <Form.Item label="Ảnh đại diện" name="avatar">
              <Input type="file" />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item
          label="Mật khẩu"
          name="password"
          rules={[
            {
              required: true,
              message: 'Hãy nhập mật khẩu',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
            Đăng ký
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default FormRegister;
