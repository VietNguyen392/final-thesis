import React from 'react';
import { Tabs } from '@mantine/core';
import FormAddHotel from 'components/form/FormAddHotel';
import HotelList from 'components/List/HotelList';
const ManageRoom = () => {
  return (
    <div>
      <Tabs variant="pills" defaultValue="form">
        <Tabs.List>
          <Tabs.Tab value="form">Form</Tabs.Tab>
          <Tabs.Tab value="list">Hotel List</Tabs.Tab>
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

export default ManageRoom;
