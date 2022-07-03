import React from 'react';
import { Tabs } from '@mantine/core';
import Crud from './crud';
import Clinic from './Clinic';
import UserList from './userList';

const AdminPage = () => {
  return (
    <div className='pt-12 pl-4' id='admin_page'>
      <Tabs orientation='vertical' variant='outline' tabPadding='xl'>
        <Tabs.Tab label='Danh sách bác sĩ' icon={<i class='fas fa-list    '></i>}>
          <UserList />
        </Tabs.Tab>
        <Tabs.Tab label='Quản lý bác sĩ' icon={<i className='fas fa-user'></i>}>
          <Crud />
        </Tabs.Tab>
        <Tabs.Tab label='Quản lý phòng khám' icon={<i className='fas fa-hospital    '></i>}>
          <Clinic />
        </Tabs.Tab>
      </Tabs>
    </div>
  );
};

export default AdminPage;
