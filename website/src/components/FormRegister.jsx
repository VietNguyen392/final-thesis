import React from 'react';
import { Button, Form, Input,message } from 'antd';
import { UserSerivce } from '../service';
const FormRegister = () => {
  const [form]=Form.useForm()
  const onSubmitForm=async(value)=>{
    try {
    const res=await UserSerivce.register(value)
      if(res.status===200){
        message.success('Đăng ký thành công')
      }
    } catch (error) {
      message.error('Not success')
    }
  }
  return (
    <div>
      <Form
        name="register-form"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 16 }}
        initialValues={{
          fullName: '',
          email: '',
          password: '',
        }}
        form={form}
        onFinish={onSubmitForm}
      >
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

        <Form.Item
          wrapperCol={{
            offset: 6,
            span: 6,
          }}
        >
          <Button type="primary" htmlType="submit">
            Đăng ký
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default FormRegister;
