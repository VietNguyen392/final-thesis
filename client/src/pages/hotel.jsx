import React, { useEffect, useState, useMemo, useRef } from "react";
import { Modal, DatePicker, Typography } from "antd";
import { GET } from "service";
import { disabledDate } from "utils";
import ListComponent from "components/common/ListComponent";

import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import moment from "moment/moment";

const { RangePicker } = DatePicker;
const { Title } = Typography;
const Hotel = () => {
  const [state, setState] = useState({
    haveBooking: {},
    last: [],
    isShow: false,
  });
  const { haveBooking, last, isShow } = state;

  async function getAll() {
    const res = await GET("room");
    return res.data?.data;
  }
  const { data } = useQuery("get-room", getAll);

  const handleChangeDate = async (_, dateString) => {
    await GET(`valid-booking/${dateString[0]}&${dateString[1]}`).then(
      (res) => console.log(res?.data?.booking)
      // setState((p) => ({
      //   ...p,
      //   haveBooking: res.data?.booking,
      // }))
    );
  };

  return (
    <div className="container">
      <div>
        <Title level={3}>Chọn ngày</Title>
        <div className="mb-5 ">
          <RangePicker
            size={"large"}
            disabledDate={(current) =>
              current.isBefore(moment().subtract(1, "day"))
            }
            onChange={handleChangeDate}
          />
        </div>
        {/*{isShow && <ListComponent items={data} />}*/}
      </div>
    </div>
  );
};

export default Hotel;
