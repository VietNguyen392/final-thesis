import React from "react";
import { Button, Modal, Calendar, Tag, Image } from "antd";
import { CustomTag } from "styles/components";
import { timeBetween } from "utils";
import BookingBar from "components/bookingBar";
import HomeList from "components/HomeList";



const Hotel = () => {

  return (
    <div>
      <div className={"container"}>
        <BookingBar />
        <HomeList />
      </div>
    </div>
  );
};

export default Hotel;
