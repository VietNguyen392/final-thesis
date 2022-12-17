import React, { useEffect, useState, useMemo } from "react";
import { Modal, DatePicker, Typography } from "antd";
import { GET } from "service";
import { disabledDate } from "utils";
import ListComponent from "components/common/ListComponent";

import { useQuery } from "react-query";

const { RangePicker } = DatePicker;
const { Title } = Typography;
const Hotel = () => {
  const [state, setState] = useState({
    haveBooking: {},
  });
  const { haveBooking } = state;
  const handleChangeDate = async (_, dateString) => {
    await GET(`valid-booking/${dateString[0]}&${dateString[1]}`).then(
      (res) =>
       setState((p) => ({ ...p, haveBooking: res.data?.booking?.map((item)=>({
        id:item._id,
        room:item.room
       }))}))
    );
  };
  async function getAll(){
    const res=await GET('room')
    return res.data?.data
  }
  const {data}=useQuery('get-room',getAll)
// const filterData=useMemo(()=>{
//   data.filter((item)=>item._id!==haveBooking?.room)
// },[])
console.log(data.filter((item)=>item._id!==haveBooking?.room));
  return (
    <div className="container">
      <div>
        <Title level={3}>Chọn ngày</Title>
        <div className="mb-5 ">
          <RangePicker
            size={"large"}
            // disabledDate={disabledDate}
            onChange={handleChangeDate}
          />
        </div>
      </div>
    </div>
  );
};

export default Hotel;
