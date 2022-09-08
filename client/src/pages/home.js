import React from 'react';
import { Link } from 'react-router-dom';
import { Banner } from 'Components/common';
import { Space, Col, Divider,Row } from 'antd';
const Home = () => {
  return (
    <div>
      <Space>
        <Banner />
        <Divider />
      </Space>
      <Space>
      <Row>
      <Col>1</Col>
      <Col>2</Col>
      <Col>3</Col>
      <Col>4</Col>
      </Row>
      </Space>
    </div>
  );
};

export default Home;
