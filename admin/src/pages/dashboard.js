import React from 'react';
import { Pivot, PivotItem } from '@fluentui/react';
import { Crud, Schedule, UserList,Income } from '../components/control';

import { useSelector } from 'react-redux';
import Header from '../components/layout/header';
const Dashboard = () => {
  const { user } = useSelector((state) => state.auth);
  const userRole = user?.user.role;
  console.log(userRole);
  return (
    <div className='container'>
      <Header />

      <div className='row mt-3'>
        {userRole === 'admin' ? (
          <>
            <Pivot>
              <PivotItem headerText='Quản lý thông tin user' itemIcon='UserGauge'>
                <Crud />
              </PivotItem>
              <PivotItem headerText='Danh sách user' itemIcon='FabricUserFolder'>
                <UserList />
              </PivotItem>
              <PivotItem headerText='Quản lý lịch khám' itemIcon='Calendar'>
                <Schedule />
              </PivotItem>
            </Pivot>
          </>
        ) : (
          <>
            <Pivot>
              <PivotItem headerText='Quản lý lịch khám' itemIcon='Calendar'>
                <Schedule />
              </PivotItem>
              <PivotItem headerText='Quản lý doanh thu' itemIcon='Money'>
                <Income />
              </PivotItem>
            </Pivot>
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
