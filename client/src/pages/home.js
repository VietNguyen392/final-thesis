import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Banner } from 'Components/common';
import { Space, Col, Divider, Row, Card } from 'antd';
import { fakeData } from '../../mock';
import BookingBar from 'Components/bookingBar';
const { Meta } = Card;
const Home = () => {
  const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
  return (
    <div>
      <Banner />

      <Space style={{ margin: '20px' }}>
        <Row gutter={32}>
          <BookingBar />
        </Row>
      </Space>
    </div>
  );
};

export default Home;
