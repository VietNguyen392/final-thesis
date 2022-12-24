import React from 'react';
import { Tabs } from '@mantine/core';
import { Pending, HasPay, Confirm } from 'components/List';
function ManageBooking() {
  return (
    <div>
      <Tabs variant="outline" defaultValue={'notpay'}>
        <Tabs.List>
          <Tabs.Tab value="notpay">Chưa xác nhận</Tabs.Tab>
          <Tabs.Tab value="confirm">Đă xác nhận</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="notpay">
          <Pending />
        </Tabs.Panel>
        <Tabs.Panel value="confirm">
          <Confirm />
        </Tabs.Panel>
      </Tabs>
    </div>
  );
}

export default ManageBooking;
