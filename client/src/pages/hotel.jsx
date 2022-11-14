import React from "react";
import { Button, Modal, Calendar, Tag, Image } from "antd";
import { CustomTag } from "styles/components";
import { timeBetween } from "utils";
import BookingBar from "components/bookingBar";
import HomeList from "components/HomeList";
import { useTranslation } from "react-i18next";

const Hotel = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className={"container"}>
        {/*{t("translation.common.vi")}*/}
        <BookingBar />
        <HomeList />
      </div>
    </div>
  );
};

export default Hotel;
