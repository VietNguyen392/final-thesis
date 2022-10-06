import React from 'react';
import { Tabs } from '@mantine/core';
import { Notpay, HasPay, Confirm } from 'components/List';
function ManageBooking() {
  return (
    <div>
      <Tabs variant="outline" defaultValue={'notpay'}>
        <Tabs.List>
          <Tabs.Tab value="notpay">Chưa thanh toán</Tabs.Tab>
          <Tabs.Tab value="haspay">Đã thanh toán</Tabs.Tab>
          <Tabs.Tab value="confirm">Đă xác nhận</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="notpay">
          <Notpay />
        </Tabs.Panel>
        <Tabs.Panel value="haspay">
          <HasPay />
        </Tabs.Panel>
        <Tabs.Panel value="confirm">
          <Confirm />
        </Tabs.Panel>
      </Tabs>
    </div>
  );
}

export default ManageBooking;
