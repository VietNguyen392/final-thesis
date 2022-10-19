import React from 'react';
import { Tabs } from '@mantine/core';
import FormAddHotel from 'components/form/FormAddHotel';
import HotelList from 'components/List/HotelList';

const ManageHotel = () => {
  return (
    <div>
      <Tabs variant="pills" defaultValue="form">
        <Tabs.List>
          <Tabs.Tab value="form">Thêm mới phòng</Tabs.Tab>
          <Tabs.Tab value="list">Danh sách phòng</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="form">
          <FormAddHotel />
        </Tabs.Panel>
        <Tabs.Panel value="list">
          <HotelList />
        </Tabs.Panel>
      </Tabs>
    </div>
  );
};

export default ManageHotel;
