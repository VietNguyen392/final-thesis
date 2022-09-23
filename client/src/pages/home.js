import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Banner } from 'Components/common';
import { Space, Col, Row } from 'antd';
import { fakeData } from '../../mock';
import BookingBar from 'Components/bookingBar';
import ListItem from 'Components/List';
const Home = () => {
  return (
    <div>
      <Banner />
      <Space style={{ margin: '20px' }}>
        <Row gutter={12}>
          <BookingBar />
        </Row>
      </Space>
      <Space className="container">
        <ListItem />
      </Space>
    </div>
  );
};

export default Home;
