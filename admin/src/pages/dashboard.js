import React from 'react';
import { Pivot, PivotItem} from '@fluentui/react';
import { Crud, Schedule,UserList } from '../components/control';
import Header from '../components/layout/header';
const Dashboard = () => {
  return (
    <div className="container">
      <Header />
      <div className="row mt-3">
        <Pivot>
          <PivotItem
            headerText="Quản lý thông tin bác sĩ"
            itemIcon="FabricUserFolder"
          >
            <Crud />
          </PivotItem>
          <PivotItem headerText="Danh sách user" >
            <UserList />
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
