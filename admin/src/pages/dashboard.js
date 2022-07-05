import React from 'react';
import { Pivot, PivotItem, Label } from '@fluentui/react';
import { Crud, Schedule } from '../components/control';
import Header from '../components/layout/header';
const Dashboard = () => {
  const navGroup = {};
  return (
    <div className="container">
      <Header />
      <div className="row mt-3">
        <Pivot>
          <PivotItem
            headerText="Quản lý người dùng"
            itemIcon="FabricUserFolder"
          >
            <Crud />
          </PivotItem>
          <PivotItem headerText="Quản lý lịch khám" itemIcon="Calendar">
            <Schedule />
          </PivotItem>
        </Pivot>
      </div>
    </div>
  );
};

export default Dashboard;
