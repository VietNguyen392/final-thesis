import React from "react";
import { Banner, HomeWelComeText } from "components/common";
import HomeList from "components/HomeList";
import ListItem from "components/List";
const Home = () => {
  return (
    <>
      <Banner />
      <div className="container">
        <HomeWelComeText />
        <div style={{ marginTop: "10px" }}>
          <HomeList />
        </div>
        {/* <ListItem/> */}
      </div>
    </>
  );
};

export default Home;
