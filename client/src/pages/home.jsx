import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Banner, HomeWelComeText } from "components/common";
import { Space, Col, Row, Modal, Button, Typography } from "antd";
import { WelComeText } from "styles/components";
import ListItem from "components/List";

import HomeList from "components/HomeList";
const Home = () => {
  return (
    <>
      <Banner />
      <div className="container">
        <HomeWelComeText />
        <div style={{ marginTop: "10px" }}>
          <HomeList />
        </div>

        {/* <Space style={{ margin: "20px" }}>
          <ListItem />
        </Space> */}
      </div>
    </>
  );
};

export default Home;
