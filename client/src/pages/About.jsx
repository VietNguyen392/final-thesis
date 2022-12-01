import React from "react";
import {Button, DatePicker, Form} from "antd";
const { RangePicker } = DatePicker;
const About = () => {
  const [form] = Form.useForm();
  return (
    <Form
      initialValues={{ date: "" }}
      onFinish={(value) => console.log(value)}
      form={form }
      name={"test"}
    >
      <Form.Item name={"date"}>
        <RangePicker />
      </Form.Item>
      <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default About;
