import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Banner } from 'Components/common';
import { Space, Col, Divider, Row, Card, Image } from 'antd';
import { fakeData } from '../../mock';
const { Meta } = Card;
const Home = () => {
  console.log(
    fakeData.map((it) => {
      it.name;
    }),
  );
  return (
    <div>
      <Space>
        <Banner />
        <Divider />
      </Space>
      <Space style={{ margin: '20px' }}>
        <Row gutter={32}>
          {/* {fakeData.map((item) => {
            <div key={item.id}>
              <Col span={6}>
                <Card title={item.name}>
                  <Image width={200} src={item.url_img} />
                </Card>
              </Col>
            </div>;
          })} */}
          <Col span={6}>
            <Card
              hoverable
              style={{
                width: 240,
              }}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card
              hoverable
              style={{
                width: 240,
              }}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card
              hoverable
              style={{
                width: 240,
              }}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card
              hoverable
              style={{
                width: 240,
              }}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </Col>
        </Row>
      </Space>
    </div>
  );
};

export default Home;
