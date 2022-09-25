import React, { useState } from 'react';
import { Tabs, Row, Col } from 'antd';
import FormLogin from './FormLogin';
import FormRegister from './FormRegister';

const AuthPage = () => {
  return (
    <div>
      <Tabs
        defaultActiveKey="1"
        items={[
          {
            label: 'Đăng nhập',
            key: '1',
            children: <FormLogin />,
          },
          {
            label: 'Đăng ký',
            key: '2',
            children: <FormRegister />,
          },
        ]}
      />
    </div>
  );
};

export default AuthPage;
