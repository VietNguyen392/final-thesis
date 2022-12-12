import React, { useEffect, useMemo } from 'react';
import useSWR from 'swr';
import { GET, routes } from 'utils';
import { Table, ScrollArea, Badge } from '@mantine/core';
type bookingL = {
  _id: string;
  customer_name: string;
  email: string;
  room_name: string;
  start_date: string | Date;
  end_date: string | Date;
  adult_quantity: number;
  children_quantity: number;
  billing: number;
  status: string;
};
const Notpay = () => {
  const getListBooking = async () => {
    const res = await GET(routes.api.booking_list);
    return res.data;
  };
  const { data } = useSWR('list-booking', getListBooking);

  return (
    <div className={'mt'}>
      <ScrollArea>
        <Table sx={{ minWidth: 800 }} withBorder highlightOnHover>
          <thead>
            <tr>
              <th>STT</th>
              <th>Tên khách hàng</th>
              <th>Email khách hàng</th>
              <th>Phòng</th>
              <th>Ngày bắt đầu</th>
              <th>Ngày kết thúc</th>
              <th>Số lượng người lớn</th>
              <th>Số lượng trẻ em</th>
              <th>Tổng bill</th>
              <th>Trạng thái</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item: bookingL, index: number) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>{item.customer_name}</td>
                <td>{item.email}</td>
                <td>{item.room_name}</td>
                <td>{new Date(item.start_date).toLocaleDateString()}</td>
                <td>{new Date(item.end_date).toLocaleDateString()}</td>
                <td>{item.adult_quantity}</td>
                <td>{item.children_quantity}</td>
                <td>{item.billing}$</td>
                <td>
                  <Badge
                    component={'button'}
                    color={item.status === 'pending' ? 'yellow' : 'blue'}
                  >
                    {item.status}
                  </Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </ScrollArea>
    </div>
  );
};

export default Notpay;
