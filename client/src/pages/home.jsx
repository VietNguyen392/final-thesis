import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Banner } from "../components/common";
import { Space, Col, Row, Modal, Button } from "antd";

import BookingBar from "../components/bookingBar";
import ListItem from "../components/List";
const Home = () => {
  return (
    <>
      <Banner />
      <Space style={{ margin: "20px" }}>
        <Row gutter={12}>
          <BookingBar />
        </Row>
      </Space>
      <Space className="container">
        <ListItem />
      </Space>
    </>
  );
};

export default Home;
