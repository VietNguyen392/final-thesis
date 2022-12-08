import React from "react";
import { GET } from "service";
import {Link} from 'react-router-dom'
import { useSelector } from "react-redux";
import { useQuery } from "react-query";
import { message, Table, Tag } from "antd";

import Loading from "../loading";
import moment from "moment";
const BookingInfo = () => {
  const { user } = useSelector((state) => state.auth);

  async function getBookingList() {
    try {
      const res = GET(`get-user-booking/${user.user._id}`);
      return res;
    } catch (e) {
      message.error(e);
    }
  }
  const { data, isFetching } = useQuery("booking-list", getBookingList);
  const list = data?.data?.booking.map((item) => ({
    key: item._id,
    start_date: moment(item.start_date).format("dddd, MMMM Do YYYY"),
    end_date: moment(item.end_date).format("dddd, MMMM Do YYYY"),
    adult_quantity: item.adult_quantity,
    children_quantity: item.children_quantity,
    billing: `${item.billing}$`,
    room: item.room?.[0],
    status: item.status,
  }));
  const columns = [
    {
      title: "Ngày bắt đầu",
      key: "start",
      dataIndex: "start_date",
    },
    {
      title: "Ngày kết thúc",
      key: "end",
      dataIndex: "end_date",
    },
    {
      title: "Số lượng người lớn",
      key: "adult",
      dataIndex: "adult_quantity",
    },
    {
      title: "Số lượng trẻ em",
      key: "child",
      dataIndex: "children_quantity",
    },
    {
      title: "Tổng tiền",
      key: "bill",
      dataIndex: "billing",
    },
    {
      title: "Phòng",
      key: "room",
      dataIndex: "room",
      render:(room)=>(
        <Link to={`/detail/${room._id}`}>
        {room.room_name}
        </Link>
      )
    },
    {
      title: "Trạng thái",
      key: "status",
      dataIndex: "status",
      render: (status) => (
        <Tag
          color={
            status === "pending"
              ? "yellow"
              : status === "confirm"
              ? "blue"
              : "red"
          }
        >
          {status.toUpperCase()}
        </Tag>
      ),
    },
  ];
  if (isFetching) return <Loading />;
  return (
    <>
      <Table columns={columns} dataSource={list} />
    </>
  );
};

export default BookingInfo;
