import React, { useEffect, useMemo, useState } from 'react';
import useSWR from 'swr';
import { GET, routes, PUT } from 'utils';
import { Table, ScrollArea, Badge, Tooltip, Button } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
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
const Pending = () => {
  const getListBooking = async () => {
    const res = await GET(routes.api.booking_list);
    return res.data;
  };
  const { data } = useSWR('list-booking', getListBooking);
  const changeBookingStatus = async (
    bookingID: string,
    value: string,
    reason: string,
    mail: string,
  ) => {
    const res = await PUT(`/api/change-booking-status/${bookingID}`, {
      status: value,
      content: reason,
      email: mail,
    });
    if (res.status === 200)
      return showNotification({
        title: 'Thành công',
        color: 'blue',
        message: 'Cập nhập trạng thái thành công',
      });
  };

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
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {data
              ?.filter((item: bookingL) => item.status === 'pending')
              ?.map((item: bookingL, index: number) => (
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
                      color={
                        item.status === 'pending'
                          ? 'yellow'
                          : item.status === 'confirm'
                          ? 'blue'
                          : 'red'
                      }
                    >
                      {item.status === 'pending' && 'Chưa xác nhận'}
                    </Badge>
                  </td>

                  <td style={{ textAlign: 'center' }}>
                    <div style={{ display: 'flex' }}>
                      <Button
                        variant="subtle"
                        onClick={() =>
                          changeBookingStatus(
                            item._id,
                            'confirm',
                            'Xác nhận đơn thành công',
                            item.email,
                          )
                        }
                      >
                        Xác nhận
                      </Button>

                      <Button
                        color="red"
                        variant="subtle"
                        onClick={() =>
                          changeBookingStatus(
                            item._id,
                            'reject',
                            'Đơn bị từ chối',
                            item.email,
                          )
                        }
                      >
                        Từ chối
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </ScrollArea>
    </div>
  );
};

export default Pending;
